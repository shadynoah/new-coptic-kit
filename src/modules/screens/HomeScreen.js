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
import {IS_ENGLISH_CONTENT_DOWNLOADED , IS_ARABIC_CONTENT_DOWNLOADED,
   booksOfFirstArabicPlan , IS_FIRST_ARABIC_PLAN_DOWNLOADED} from '../../constants'
import { Helpers } from './../../services/utilities/helpers';
import { inializeArabicCheckedList , inializeEnglishCheckedList } from "../../state/plan/action-creators";

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
        toggleLanguage,
        inializeArabicCheckedList,
        inializeEnglishCheckedList
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
  async downloadContent() {
    const { isArabic , toggleIsDownloading, isConnected , inializeArabicCheckedList , inializeEnglishCheckedList } = this.props;
    // inializeArabicCheckedList();
    // inializeEnglishCheckedList();
    let keyOfContent = isArabic ? IS_ARABIC_CONTENT_DOWNLOADED : IS_ENGLISH_CONTENT_DOWNLOADED
    let isContentExist = await AsyncStorage.getItem(keyOfContent);
    if (isContentExist !== "true") {
      if (!isConnected) {
        this.setState({
          isWarningModalVisible: true
        });
      } else {
        toggleIsDownloading();
        if(isArabic)
        {
          await Helpers.downloadArabic();
          inializeArabicCheckedList();
        }
        else
        {
          await Helpers.downloadEnglish();
          inializeEnglishCheckedList();
        }
        toggleIsDownloading();
      }
    }
    // else{
    //   NavigatorService.navigate("BookScreen");
    // }
  }
  async downloadPlanContent() {
    const { isArabic , toggleIsDownloading, isConnected , inializeArabicCheckedList , inializeEnglishCheckedList } = this.props;
    // inializeArabicCheckedList();
    // inializeEnglishCheckedList();
    let keyOfContent = IS_FIRST_ARABIC_PLAN_DOWNLOADED || IS_ARABIC_CONTENT_DOWNLOADED
    let isContentExist = await AsyncStorage.getItem(keyOfContent);
    if (isContentExist !== "true") {
      if (!isConnected) {
        this.setState({
          isWarningModalVisible: true
        });
      } else {
        toggleIsDownloading();
        if(isArabic)
        {
          await Helpers.downloadBooksOfPlan(booksOfFirstArabicPlan);
          inializeArabicCheckedList();
        }
        else
        {
          await Helpers.downloadEnglish();
          inializeEnglishCheckedList();
        }
        toggleIsDownloading();
      }
    }
    // else{
    //   NavigatorService.navigate("BookScreen");
    // }
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
            flex: 0.8,
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
         <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white", fontWeight: "900" }}>English</Text>
            <Switch
              style={{ marginLeft: 20, marginRight: 20}}
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
            marginBottom: (Dimensions.get("window").height * 0.2)-90,
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
              await this.downloadContent();
              NavigatorService.navigate("BookScreen");
              }}
            >
              <Image
                style={{
                  height: heightT + 0.95 * heightT,
                  width: heightT + 0.95 * heightT
                }}
                source={require("../../../assets/images/newbible.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={async () => {
                await this.downloadPlanContent();
                NavigatorService.navigate("BiblePlanScreen");
              }}
            >
              <Image
                style={{
                  height: heightT + 0.95 * heightT,
                  width: heightT + 0.95 * heightT
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
