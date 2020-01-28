import NetInfo from "@react-native-community/netinfo";
import * as FileSystem from "expo-file-system";
import { AsyncStorage } from "react-native";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import thunkMiddleware from "redux-thunk";
// import { NotificationManager } from "./services/pushNotification";
import { loadArabicPlan, loadPlan, reducer, toggleIsDownloading, updateConnectionStatus } from "./state";

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
        console.log("english done");
        await AsyncStorage.setItem("English", uri);
      })
      .catch(error => {
        alert("error");
        console.error(error);
      });
  }
  async downloadArabic() {
    await FileSystem.downloadAsync(
      "https://www.dropbox.com/s/isewiicvbmsm1hs/content-ar-u%20%281%29.json?dl=1",
      FileSystem.documentDirectory + "contentAR"
    )
      .then(async ({ uri }) => {
        // let stringcontent = await FileSystem.readAsStringAsync(uri);
        console.log("arabic done");
        AsyncStorage.setItem("ArabicUpdated1", uri);
      })
      .catch(error => {
        alert("Error");
        console.error(error);
      });
  }
  networkConnectionChange = isConnected => {
    // alert(isConnected)
    // console.log("isconnected--" , isConnected )
    Application.current.store.dispatch(updateConnectionStatus(isConnected));
  };
  async onStart() {
    //await AsyncStorage.clear();
    // Listen for network status changes
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.networkConnectionChange
    );
    Application.current.store.dispatch(loadPlan());
    Application.current.store.dispatch(loadArabicPlan());
    NetInfo.isConnected.fetch().done(async isConnected => {
      Application.current.store.dispatch(updateConnectionStatus(isConnected));
      if (isConnected) {
        if ((await this.IsContentDownloaded("English")) == false) {
          Application.current.store.dispatch(toggleIsDownloading());
          await this.downloadEnglish();
          Application.current.store.dispatch(toggleIsDownloading());
        }
        if ((await this.IsContentDownloaded("ArabicUpdated1")) == false) {
          Application.current.store.dispatch(toggleIsDownloading());
          await this.downloadArabic();
          Application.current.store.dispatch(toggleIsDownloading());
        }
      }
    });

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
