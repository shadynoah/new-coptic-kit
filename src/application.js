import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import thunkMiddleware from "redux-thunk";
import * as FileSystem from "expo-file-system";
// import { NotificationManager } from "./services/pushNotification";
import {
  State,
  reducer,
  toggleIsDownloading,
  updateConnectionStatus,
  //Actions
  success
} from "./state";
import { AsyncStorage, Alert  } from "react-native";
import NetInfo from '@react-native-community/netinfo';

const contentFilePath = `${FileSystem.documentDirectory}content/english/`;
export class Application {
  static current: Application;
  static token: string;
  store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(promiseMiddleware, thunkMiddleware))
  );
  static async run() {
    Application.current = new Application();
    try {
      await Application.current.onInstall();
      await Application.current.onStart();
    } catch (err) {
      console.error(err);
    }
  }
  //---------------------------------------
  async IsContentDownloaded(languageKey) {
    let res = await AsyncStorage.getItem(languageKey);
    if (res) {
      return true;
    } else {
      return false;
    }
  }
  async downloadEnglish() {
    await FileSystem.downloadAsync(
      "https://www.dropbox.com/s/uh9bou38u672og4/content.json?dl=1",
      FileSystem.documentDirectory + "content"
    )
      .then(async ({ uri }) => {
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
      "https://www.dropbox.com/s/y5rk2o8r2poucgj/content-ar.json?dl=1",
      FileSystem.documentDirectory + "contentAR"
    )
      .then(async ({ uri }) => {
        // let stringcontent = await FileSystem.readAsStringAsync(uri);
        AsyncStorage.setItem("Arabic", uri);
      })
      .catch(error => {
        console.error(error);
      });
  }
  networkConnectionChange = isConnected => {
    // alert(isConnected)
    // console.log("isconnected--" , isConnected )
    Application.current.store.dispatch(updateConnectionStatus(isConnected));
  };
  async onStart() {

       // Listen for network status changes
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.networkConnectionChange
    );
    NetInfo.isConnected.fetch().done(isConnected => {
      Application.current.store.dispatch(updateConnectionStatus(isConnected));
  });
    // NetInfo.fetch().then(state => {
    //   console.log('Connection type', state.type);
    //   console.log('Is connected?', state.isConnected);
    // });
    // NetInfo.addEventListener(state => {
    //   console.log('Connection type', state.type);
    //   console.log('Is connected from listener', state.isConnected);
    //   alert(state.isConnected)
    //   Application.current.store.dispatch(updateConnectionStatus(state.isConnected));

    // });
    
    if ((await this.IsContentDownloaded("English")) == false) {
      Application.current.store.dispatch(toggleIsDownloading());
      await this.downloadEnglish();
      Application.current.store.dispatch(toggleIsDownloading());
    }
    if ((await this.IsContentDownloaded("Arabic")) == false) {
      Application.current.store.dispatch(toggleIsDownloading());
      await this.downloadArabic();
      Application.current.store.dispatch(toggleIsDownloading());
    }

    // await Font.loadAsync({
    //     Roboto: require("native-base/Fonts/Roboto.ttf"),
    //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    //     Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    // });
  }
  async onInstall() {}
  async onUpdate() {}

  //TODO:
  onError() {}
}
