import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Dimensions
} from "react-native";
import NavigatorService from "../../services/navigator.js";
import { State } from "../../state";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import {
  toggleLoading,
  selectBook,
  loadChapterContent
} from "../../state/content/action-creators";
import Constants from "expo-constants";
import { Linking } from "expo";
import * as FileSystem from "expo-file-system";
import { AsyncStorage } from "react-native";
import { LoadingContentModal } from "../components/loading-content-modal";
import { ModalTypesEnum } from "../../enums";
import { BaseModal } from "../components/base-modal";

const style = StyleSheet.create({ hideText: { display: "none" } });
class HomeScreenContainer extends Component {
  constructor() {
    super();
    this.state = {
      isDownloadling: false,
      isFinished: true,
      isWarningModalVisible: true 
    };
  }
  static navigationOptions = {
    title: "home",
    header: <Text style={style.hideText}></Text>
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
      { toggleLoading, selectBook, loadChapterContent },
      dispatch
    );
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.isDownloadling && prevState.isDownloadling) {
      return { isDownloadling: false, isFinished: true };
    } else if (nextProps.isDownloadling) {
      return { isDownloadling: true };
    } else if (!nextProps.isDownloadling) {
      return { isDownloadling: false };
    } else return null;
  }

  componentDidMount() {
    // console.log("-----Location------",Location)
    //   console.log("homee")
    // NotificationManager.registerForPushNotifications()
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
    const warningLostConnectionModal = !this.props.isConnected ? (
      <BaseModal
      baseModalProperties={{
        hadCloseHeader: true,
        hasHeaderTitle: true,
        headerTitle: "Note",
        toggleModal:   () => this.setState({ isWarningModalVisible: false }),
        modalText: "please connect to internet to download data" ,
        hasFirstButton: true,
        firstButtonText: "Okay",
        onPressFirstBtn:  () => this.setState({ isWarningModalVisible: false }),
        modalType: ModalTypesEnum.warningModal
      }}
      isVisible={!this.props.isConnected && this.state.isWarningModalVisible}
    /> ) : null 

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
            alignItems: "flex-end",
            margin: 20,
            flex: 1,
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 0.8, flexDirection: "row" }}>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => Linking.openURL("https://www.facebook.com/")}
            >
              <Image
                style={{ height: heightT, width: heightT }}
                source={require("../../../assets/images/facebook.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => Linking.openURL("https://twitter.com/")}
            >
              <Image
                style={{ height: heightT, width: heightT }}
                source={require("../../../assets/images/twitter.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => Linking.openURL("https://www.youtube.com/")}
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
              style={{ marginLeft: 20 }}
              onPress={async () => {
                if (this.state.isFinished == true)
                  NavigatorService.navigate("BookScreen");
                // if (await AsyncStorage.getItem("English"))
                //   NavigatorService.navigate("BookScreen");
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
