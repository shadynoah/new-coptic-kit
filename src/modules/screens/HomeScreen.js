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

const style = StyleSheet.create({ hideText: { display: "none" } });
class HomeScreenContainer extends Component {
  static navigationOptions = {
    title: "home",
    header: <Text style={style.hideText}></Text>
  };
  // static navigationOptions = ({ theme }) => {
  //   return {
  //     title: "Home",
  //     headerLeft: (
  //       <Button
  //         color={theme === "dark" ? "white" : "red"}
  //         title="Press me"
  //         onPress={() => alert("success!")}
  //       />
  //     )
  //   };
  // };
  static mapStatetToProps(state: State) {
    return {
      loading: state.content.loading,
      selectedBook: state.content.selectedBook,
      isArabic: state.content.isArabic
    };
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      { toggleLoading, selectBook, loadChapterContent },
      dispatch
    );
  }
  componentDidMount() {
    // console.log("-----Location------",Location)
    //   console.log("homee")
    // NotificationManager.registerForPushNotifications()
  }
  render() {
    const deviceType =
      (Constants.platform.ios && Constants.platform.ios.userInterfaceIdiom) ||
      (Constants.platform.android &&
        Constants.platform.android.userInterfaceIdiom);
    let widthT;
    let heightT;
    if (deviceType !== "tablet") {
      widthT = (Dimensions.get("window").width * 0.1) / 1.5;
      heightT = (Dimensions.get("window").height * 0.1) / 1.5;
    } else {
      widthT = Dimensions.get("window").width * 0.1;
      heightT = Dimensions.get("window").height * 0.1;
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 22
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44
      }
    });
    return (
      <ImageBackground
        source={require("../../../assets/images/newHome.png")}
        style={{ flex: 1 }}
        resizeMode="stretch"
      >
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
              onPress={() => NavigatorService.navigate("BookScreen")}
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
