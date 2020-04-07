import _ from 'lodash';
import { Linking } from "expo";
import Constants from "expo-constants";
import * as FileSystem from "expo-file-system";
import { Switch } from "native-base";
import React, { Component } from "react";
import { AsyncStorage, Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ModalTypesEnum } from "../../enums";
import NavigatorService from "../../services/navigator.js";
import { State } from "../../state";
import { loadChapterContent, selectBook, toggleIsDownloading, toggleLanguage, toggleLoading } from "../../state/content/action-creators";
import { BaseModal } from "../components/base-modal";
import { LoadingContentModal } from "../components/loading-content-modal";
import {enlglishContentUri , bookNames} from '../../constants'

const style = StyleSheet.create({ hideText: { display: "none" } });
class HomeScreenContainer extends Component {
  constructor() {
    super();
    this.state = {
      isDownloadling: false,
      isFinished: true,
      isWarningModalVisible: false,
      isArabic: false
    };
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      title: params.title,
      header: <Text style={style.hideText}></Text>
    };
  };
  static mapStatetToProps(state: State) {
    return {
      loading: state.content.loading,
      selectedBook: state.content.selectedBook,
      isArabic: state.content.isArabic,
      isDownloadling: state.content.isDownloadling,
      isConnected: state.content.isConnected
    };
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      {
        toggleLoading,
        selectBook,
        loadChapterContent,
        toggleIsDownloading,
        toggleLanguage
      },
      dispatch
    );
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isArabic !== prevState.isArabic) {
      nextProps.navigation.setParams({
        title: nextProps.isArabic ? "الرئيسية" : "Home"
      });
      return {
        isArabic: nextProps.isArabic
      };
    }
    if (!nextProps.isDownloadling && prevState.isDownloadling) {
      return { isDownloadling: false, isFinished: true };
    } else if (nextProps.isDownloadling) {
      return { isDownloadling: true };
    } else if (!nextProps.isDownloadling) {
      return { isDownloadling: false };
    } else return null;
  }

  componentDidMount() {
    const { navigation , isArabic } = this.props;
    navigation.setParams({
      title: isArabic ? "الرئيسية" : "Home"
    });
  }
  async downloadEnglish() {
    await Promise.all(
     _.map(bookNames , async bookName => {
let trimmed = bookName.replace(/\s/g, "");
      await FileSystem.downloadAsync(
        enlglishContentUri[bookName],
        FileSystem.documentDirectory + trimmed
      ).then(async ({ uri }) => {
        // let stringcontent = await FileSystem.readAsStringAsync(uri);
        // console.log("uri" , uri)
        // console.log("english done");
        // console.log("before setimeeem" , bookName)
        await AsyncStorage.setItem(bookName, uri);
      })
      .catch(error => {
        alert("error");
        console.error(error);
      });
     })
    ).then(async ()=>{
      await AsyncStorage.setItem("englishUpso", "true");
      console.log("finished");
    }).catch(()=>{
      console.log("error in download content")
    })
     
  }
  async downloadArabic() {
    await FileSystem.downloadAsync(
      "https://www.dropbox.com/s/isewiicvbmsm1hs/content-ar-u%20%281%29.json?dl=1",
      FileSystem.documentDirectory + "contentAR"
    )
      .then(async ({ uri }) => {
        AsyncStorage.setItem("ArabicUpdated1", uri);
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    const { isConnected , isArabic , navigation , toggleLanguage } = this.props;
    const { isDownloadling , isWarningModalVisible } = this.state;
    const loadingModal = isDownloadling ? (
      <LoadingContentModal
        isVisible={isDownloadling}
        message="Loading data , please make sure you are connected to the internet..."
      />
    ) : null;
    const warningLostConnectionModal =
      !isConnected && isWarningModalVisible ? (
        <BaseModal
          baseModalProperties={{
            hadCloseHeader: true,
            hasHeaderTitle: true,
            headerTitle: "Note",
            toggleModal: () => this.setState({ isWarningModalVisible: false }),
            modalText:
              "please connect to internet to download data and try again",
            hasFirstButton: true,
            firstButtonText: "Okay",
            onPressFirstBtn: () =>
              this.setState({ isWarningModalVisible: false }),
            modalType: ModalTypesEnum.warningModal
          }}
          isVisible={
            !isConnected && isWarningModalVisible
          }
          isArabic={isArabic}
        />
      ) : null;

    const deviceType =
      (Constants.platform.ios && Constants.platform.ios.userInterfaceIdiom) ||
      (Constants.platform.android &&
        Constants.platform.android.userInterfaceIdiom);
    let heightT;
    if (deviceType !== "tablet") {
      heightT = (Dimensions.get("window").height * 0.1) / 1.5;
    } else {
      heightT = Dimensions.get("window").height * 0.1;
    }
    return (
      <ImageBackground
        source={require("../../../assets/images/newHome.png")}
        style={{ flex: 1 }}
        resizeMode="stretch"
      >
        {loadingModal}
        {warningLostConnectionModal}
        <View
          style={{
            flex: 0.7,
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white", fontWeight: "900" }}>English</Text>
            <Switch
              style={{ marginLeft: 20, marginRight: 20 }}
              onValueChange={value => {
               navigation.setParams({
                  title: isArabic ? "الرئيسية" : "Home"
                });
                toggleLanguage();
              }}
              value={isArabic}
            />
            <Text style={{ color: "white", fontWeight: "900" }}>عربي</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            marginBottom: (Dimensions.get("window").height * 0.2)-60,
            marginLeft:10,
            flex: 1,
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 0.8, flexDirection: "row" }}>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() =>
                Linking.openURL(
                  isArabic
                    ? "https://m.facebook.com/القمص-جرجس-جبرائيل-241119892976029/"
                    : "https://m.facebook.com/Fr-George-DMin-1693643244259588/"
                )
              }
            >
              <Image
                style={{ height: heightT, width: heightT }}
                source={require("../../../assets/images/facebook.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() =>
                Linking.openURL("https://soundcloud.com/user-987979301")
              }
            >
              <Image
                style={{ height: heightT, width: heightT }}
                source={require("../../../assets/images/soundcloud.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/channel/UCMku6NsCd_W2dhBh9tcPIAQ/featured"
                )
              }
            >
              <Image
                style={{ height: heightT, width: heightT }}
                source={require("../../../assets/images/youtube.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() =>
                Linking.openURL("http://www.christambassadorsmission.com/")
              }
            >
              <Image
                style={{ height: heightT, width: heightT }}
                source={require("../../../assets/images/website.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" , marginBottom:10 }}>
        <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={async () => {
                const { toggleIsDownloading, isConnected } = this.props;
                let resoFhOME = await AsyncStorage.getItem("englishUpso");
                if (resoFhOME !== "true") {
                  if (!isConnected) {
                    this.setState({
                      isWarningModalVisible: true
                    });
                  } else {
                    toggleIsDownloading();
                    await this.downloadEnglish();
                    toggleIsDownloading();
                  }
                }
                else{
                  NavigatorService.navigate("BookScreen");
                }
              }}
            >
              <Image
                style={{
                  height: heightT + 0.3 * heightT,
                  width: heightT + 0.3 * heightT
                }}
                source={require("../../../assets/images/newbible.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={async () => {
                const { toggleIsDownloading, isConnected } = this.props;
                let resoFhOME = await AsyncStorage.getItem("englishUpso");
                if (resoFhOME !== "true") {
                  if (!isConnected) {
                    this.setState({
                      isWarningModalVisible: true
                    });
                  } else {
                    toggleIsDownloading();
                    await this.downloadEnglish();
                    toggleIsDownloading();
                  }
                }
                else{
                  NavigatorService.navigate("BiblePlanScreen");
                }
              }}
            >
              <Image
                style={{
                  height: heightT + 0.3 * heightT,
                  width: heightT + 0.3 * heightT
                }}
                source={require("../../../assets/images/newbiblePlan.png")}
              />
            </TouchableOpacity>
          </View>
      </ImageBackground>
    );
  }
}

export const HomeScreen = connect(
  HomeScreenContainer.mapStatetToProps,
  HomeScreenContainer.mapDispatchToProps
)(HomeScreenContainer);
