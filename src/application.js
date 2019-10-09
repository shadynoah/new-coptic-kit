import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import thunkMiddleware from "redux-thunk";
import * as FileSystem from "expo-file-system";
// import { NotificationManager } from "./services/pushNotification";
import {
  State,
  reducer,

  //Actions
  success
} from "./state";
import { AsyncStorage , Alert } from "react-native";
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
  async downloadContentFile(link, language) {
    FileSystem.downloadAsync(link, FileSystem.documentDirectory + language)
      .then(async ({ uri }) => {
        await AsyncStorage.setItem(language, uri);
      })
      .catch(error => {
        console.error(error);
      });
  }
  async onStart() {
    console.log("start");
    FileSystem.downloadAsync(
      "https://www.dropbox.com/s/uh9bou38u672og4/content.json?dl=1",
      FileSystem.documentDirectory + "content"
    )
      .then(async ({ uri }) => {
        // let stringcontent = await FileSystem.readAsStringAsync(uri);
        console.log("----uri----" , uri);
        AsyncStorage.setItem("English" , uri)
      })
      .catch(error => {
        Alert.alert("Apaap", error);
        console.error(error);
      });
    // if ((await this.IsContentDownloaded("English")) == false) {
    //   await this.downloadContentFile(
    //     "https://www.dropbox.com/s/lb7aitt612q76eq/test.json?dl=1",
    //     "English"
    //   );
    // }
    // if ((await this.IsContentDownloaded("Arabic")) == false) {
    //   await this.downloadContentFile(
    //     "https://www.dropbox.com/s/y5rk2o8r2poucgj/content-ar.json?dl=1",
    //     "Arabic"
    //   );
    // }

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
