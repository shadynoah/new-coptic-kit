import NetInfo from "@react-native-community/netinfo";
import * as FileSystem from "expo-file-system";
import _ from 'lodash';
import { AsyncStorage } from "react-native";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import thunkMiddleware from "redux-thunk";
import { arabicBookNames, arabicContentUri } from '../src/constants';
import { reducer, updateConnectionStatus } from "./state";

export class Application {
  static current;
  static token;
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
  async downloadArabic() {
    await Promise.all(
      _.map(arabicBookNames , async bookName => {
 let trimmed = bookName.replace(/\s/g, "");
       await FileSystem.downloadAsync(
         arabicContentUri[bookName],
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
       await AsyncStorage.setItem("arabic", "true");
       console.log("finished");
     }).catch(()=>{
       console.log("error in download content")
     })
  }
  networkConnectionChange = isConnected => {
    Application.current.store.dispatch(updateConnectionStatus(isConnected));
  };
  async onStart() {
//     trial1507
// Gobrail1@gmail.com
// Fr.george.d.min@gmail.com
// Trial@2013
    // await AsyncStorage.clear();
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.networkConnectionChange
    );
  }
  async onInstall() {}
  async onUpdate() {}

  //TODO:
  onError() {}
}
