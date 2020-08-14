// @Flow
import { Alert } from "react-native";
import {  Notifications, WebBrowser, MailComposer } from "expo";
import * as firebase from 'firebase';
import { AsyncStorage, Platform, } from "react-native"
import * as Permissions from 'expo-permissions';
import * as Localization from 'expo-localization';
import { EXPO_PUSH_TOKEN_KEY } from "../../constants";

export class NotificationManager {
    static async registerForPushNotifications() {
        // await AsyncStorage.removeItem("expoKeya3");
        // console.log("registerForPushNotifications")
        const { status: existingStatus } = await Permissions.getAsync(
            Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;
        // only ask if permissions have not already been determined, because
        // iOS won't necessarily prompt the user a second time.
        if (existingStatus !== "granted") {
            // Android remote notification permissions are granted during the app
            // install, so this will only ask on iOS
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        // Stop here if the user did not grant permissions
        if (finalStatus !== "granted") {
            return;
        }
        let token = await Notifications.getExpoPushTokenAsync();
        console.log("get expo token" ,token )
          var val = await AsyncStorage.getItem(EXPO_PUSH_TOKEN_KEY )
          if(val &&(val === token))
          {
              console.log("don't pust in firebase")
          }
          else 
          {
            console.log("will put")
            firebase.database().ref(`test`).push({
                expoPushToken: token,
                date: new Date().toUTCString(),
                language: Localization.isRTL ? 'arabic' : 'english',
                platform: Platform.OS
              }).then( async()=> {
                console.log("success")
                 await AsyncStorage.setItem(EXPO_PUSH_TOKEN_KEY, token).then(res => {
                    //  console.log("setItem done in ")
                 })
              }).catch(()=>{
                console.log("error")
              })
          }
        return token;
    }
}
