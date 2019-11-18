import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Dimensions,
  Button
} from "react-native";
import NavigatorService from "../../services/navigator.js";
import { State } from "../../state";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import {
  toggleLoading,
  selectBook,
  loadChapterContent,
  toggleIsDownloading,
  toggleLanguage
} from "../../state/content/action-creators";
import Constants from "expo-constants";
import { Linking } from "expo";
import * as FileSystem from "expo-file-system";
import { AsyncStorage } from "react-native";
import { LoadingContentModal } from "../components/loading-content-modal";
import { ModalTypesEnum } from "../../enums";
import { BaseModal } from "../components/base-modal";
import { Switch } from "native-base";

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
    this.props.navigation.setParams({
      title: this.props.isArabic ? "الرئيسية" : "Home"
    });
    // console.log("-----Location------",Location)
    //   console.log("homee")
    // NotificationManager.registerForPushNotifications()
  }
  async downloadEnglish() {
    await FileSystem.downloadAsync(
      "https://www.dropbox.com/s/uh9bou38u672og4/content.json?dl=1",
      FileSystem.documentDirectory + "content"
    )
      .then(async ({ uri }) => {
        console.log("uri from downloadEnglish home  ");
        // let stringcontent = await FileSystem.readAsStringAsync(uri);
        await AsyncStorage.setItem("English", uri);
      })
      .catch(error => {
        Alert.alert("Apaap", error);
        console.error(error);
      });
  }
  async downloadArabic() {
    await FileSystem.downloadAsync(
      "https://www.dropbox.com/s/isewiicvbmsm1hs/content-ar-u%20%281%29.json?dl=1",
      FileSystem.documentDirectory + "contentAR"
    )
      .then(async ({ uri }) => {
        console.log("uri from downloadArabic home  ");

        // let stringcontent = await FileSystem.readAsStringAsync(uri);
        AsyncStorage.setItem("ArabicUpdated1", uri);
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    // console.log("is connected from homescreen--" , this.props.isConnected)
    // if(this.props.isConnected == false)
    // alert("false home")
    const loadingModal = this.state.isDownloadling ? (
      <LoadingContentModal
        isVisible={this.state.isDownloadling}
        message="Loading data , please make sure you are connected to the internet..."
      />
    ) : null;
    const warningLostConnectionModal =
      !this.props.isConnected && this.state.isWarningModalVisible ? (
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
            !this.props.isConnected && this.state.isWarningModalVisible
          }
          isArabic={this.props.isArabic}
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
                this.props.navigation.setParams({
                  title: this.props.isArabic ? "الرئيسية" : "Home"
                });
                this.props.toggleLanguage();
              }}
              value={this.props.isArabic}
            />
            <Text style={{ color: "white", fontWeight: "900" }}>عربي</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            margin: 20,
            flex: 1,
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 0.8, flexDirection: "row" }}>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() =>
                Linking.openURL(
                  this.props.isArabic
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

          <View style={{ flex: 0.2 }}>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={async () => {
                const { toggleIsDownloading, isConnected } = this.props;
                if ((await AsyncStorage.getItem("English")) == null) {
                  if (!isConnected) {
                    this.setState({
                      isWarningModalVisible: true
                    });
                  } else {
                    this.props.toggleIsDownloading();
                    await this.downloadEnglish();
                    this.props.toggleIsDownloading();
                  }
                }
                if ((await AsyncStorage.getItem("ArabicUpdated1")) == null) {
                  if (!isConnected) {
                    this.setState({
                      isWarningModalVisible: true
                    });
                  } else {
                    this.props.toggleIsDownloading();
                    await this.downloadArabic();
                    this.props.toggleIsDownloading();
                  }
                } else NavigatorService.navigate("BookScreen");
              }}
            >
              <Image
                style={{
                  height: heightT + 0.3 * heightT,
                  width: heightT + 0.3 * heightT
                }}
                source={require("../../../assets/images/bible.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export const HomeScreen = connect(
  HomeScreenContainer.mapStatetToProps,
  HomeScreenContainer.mapDispatchToProps
)(HomeScreenContainer);
