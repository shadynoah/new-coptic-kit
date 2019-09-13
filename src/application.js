import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";

import thunkMiddleware from "redux-thunk";
// import { NotificationManager } from "./services/pushNotification";
import {
    State,
    reducer,

    //Actions
    success
} from "./state";

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
        // await Font.loadAsync({
        //     Roboto: require("native-base/Fonts/Roboto.ttf"),
        //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        //     Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        // });

    }
    async onInstall() { }
    async onUpdate() { }

    //TODO:
    onError() { }
}
