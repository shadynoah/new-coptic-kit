import NetInfo from "@react-native-community/netinfo";
import * as FileSystem from "expo-file-system";
import _ from 'lodash';
import { AsyncStorage } from "react-native";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import thunkMiddleware from "redux-thunk";
import { bookNames, enlglishContentUri } from '../src/constants';
// import { NotificationManager } from "./services/pushNotification";
import { inializePlan, loadArabicPlan, reducer, updateConnectionStatus , resetCheckedList , toggleIsDownloading } from "./state";
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
        // let stringcontent = await FileSystem.readAsStringAsync(uri);
        // console.log("arabic done");
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
    // await AsyncStorage.clear();
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.networkConnectionChange
    );
    // Application.current.store.dispatch(resetCheckedList());
    Application.current.store.dispatch(loadArabicPlan());
    NetInfo.isConnected.fetch().done(async isConnected => {
      Application.current.store.dispatch(updateConnectionStatus(isConnected));
      if (isConnected) {
          let isContentDownloaded = await AsyncStorage.getItem("englishUpso");
          if(!isContentDownloaded){
            Application.current.store.dispatch(toggleIsDownloading());
            await this.downloadEnglish();
            Application.current.store.dispatch(toggleIsDownloading());
            // await Application.current.store.dispatch(inializePlan());
             Application.current.store.dispatch(resetCheckedList());

          }
         
        // if ((await this.IsContentDownloaded("ArabicUpdated1")) == false) {
        //   Application.current.store.dispatch(toggleIsDownloading());
        //   await this.downloadArabic();
        //   Application.current.store.dispatch(toggleIsDownloading());
        // }
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
