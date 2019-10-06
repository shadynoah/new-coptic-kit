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

  async onStart() {
    console.log("start");
    const contentDirectoryInfo = await FileSystem.getInfoAsync(contentFilePath);
    debugger;
    FileSystem.downloadAsync(
      "https://support.oneskyapp.com/hc/en-us/article_attachments/202761627/example_1.json",
      FileSystem.documentDirectory + "small.mp4"
    )
      .then(async ({ uri }) => {
        console.log("Finished downloading to ", uri);
        let x = await FileSystem.readAsStringAsync(uri);
        console.log(typeof x);
        let y = JSON.parse(x);
        console.log(y);
        console.log(typeof y);
      })
      .catch(error => {
        console.error(error);
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
