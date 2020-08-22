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
