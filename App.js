import { AppLoading, Notifications } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as firebase from 'firebase';
import React from "react";
import { StyleSheet } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import { Provider } from "react-redux";
import { Application } from "./src/application";
import "./src/fixtimerbug"; // <<<<<<<<<<<<<<<<<<
import Navigators from "./src/modules/routing";
import NavigatorService from "./src/services/navigator.js";
import { NotificationManager } from "./src/services/utilities/pushNotification";




export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    isReady: false,
    notification: {}
  };
  async UNSAFE_componentWillMount() {
   
    var firebaseConfig = {
      apiKey: "AIzaSyB7TYD3p-bgkkDrz2qXm82sCPQ_UWSThiQ",
      authDomain: "pushnotification-d6a2c.firebaseapp.com",
      databaseURL: "https://pushnotification-d6a2c.firebaseio.com",
      projectId: "pushnotification-d6a2c",
      storageBucket: "",
      messagingSenderId: "508579199556",
      appId: "1:508579199556:web:065baa5f4ffb91ca"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }
   
    
    NotificationManager.registerForPushNotifications();

  }
  _handleNotification = notification => {
    this.setState({ notification: notification });
    //  console.log("=======notification recieved===" , notification)
    if (notification.origin == "received")
      alert(
        "----new handleing"
      );
      else 
      {
        alert("x")
      }
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    await Application.run();
    this.setState({ isReady: true });
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }
  render() {
    if (!this.state.isReady || !Application.current) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    } else {
      return (
        <Provider store={Application.current.store}>
          <MenuProvider>
            <Navigators
              ref={navigatorRef => {
                NavigatorService.setContainer(navigatorRef);
              }}
            />
          </MenuProvider>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/background.jpg"),
        require("./assets/images/newbible.png"),
        require("./assets/images/facebook.png"),
        require("./assets/images/homecrop.png"),
        require("./assets/images/logo.png"),
        require("./assets/images/newHome.png"),
        require("./assets/images/newSplash.png"),
        require("./assets/images/twitter.png"),
        require("./assets/images/website.png"),
        require("./assets/images/youtube.png"),
        require("./assets/images/soundcloud.png"),
        require("./assets/images/newbiblePlan.png")
      ])
      // Font.loadAsync({
      //   // This is the font that we are using for our tab bar
      //   ...Icon.Ionicons.font,
      //   // We include SpaceMono because we use it in HomeScreen.js. Feel free
      //   // to remove this if you are not using it in your app
      //   "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
      // })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
