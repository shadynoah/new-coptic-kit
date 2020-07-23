// @Flow
import { Alert } from "react-native";
import {  Notifications, WebBrowser, MailComposer } from "expo";
import * as firebase from 'firebase';
import { AsyncStorage, Dimensions, } from "react-native"
import * as Permissions from 'expo-permissions';


const NotificationTypeEnum = {
    ORIGINAL: 'ORIGINAL',
    EMAIL: 'EMAIL',
    WEB_BROWSER: 'WEB_BROWSER'
}
type PushData = {
    code: string,
    nav?: string,
    id?: number,
    title?: string,
    body?: string,
    url?: string,
    to: string,
    subject: string,
    mailBody?: string,
    isHtml: boolean,
    notificationType?: string
};

type PushMessage = {
    to: string,
    data?: PushData,
    title?: string,
    body?: string,
    origin: string,
    instant: boolean,
    confirmLabel: string,
    dismissLabel: string,
};

export class NotificationManager {
    static async registerForPushNotifications() {
        // alert("register")
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
        // AsyncStorage.clear().then(() => {
        //     console.log("clear AsyncStorage done")
        // }).catch(()=> {
        //     console.log("clear AsyncStorage failed")
        // })
   
        // Get the token that uniquely identifies this device
        // alert("will get token")
        let token = await Notifications.getExpoPushTokenAsync();
        // alert("token"+ token)
        console.log("----token----" , token)
        firebase.database().ref('test').on('value', function(snapshot) {
            // console.log("snapshot=====" ,snapshot)
            if(snapshot.forEach(a =>{
                // console.log("===a===" ,a)
            }) )
            alert(snapshot.hasChild("age").valueOf())
           
          });
          var val = await AsyncStorage.getItem("expoKeya" )
          if(val &&(val === token))
          {
              console.log("don't pust in firebase")
          }
          else 
          {
            firebase.database().ref(`test`).push({
                expoPushToken: token,
                age:12,
                date: Date.now()
              }).then( async()=> {
                console.log("success")
                 await AsyncStorage.setItem("expoKeya" , token).then(res => {
                    //  console.log("setItem done in ")
                 })
             var x =    await AsyncStorage.getItem("expoKeya" )
        //   console.log("-----get item push token from async storage---" ,x )
              }).catch(()=>{
                console.log("error")
              })
          }
        return token;
    }

    static handleNotification(notification: PushMessage) {
        switch (notification.data.notificationType) {
            case NotificationTypeEnum.EMAIL:
                this.handleEmailNotification(notification);
                break;

            default:
                this.handleDefaultNotification(notification);
                break;
        }

    }

    static handleDefaultNotification(notification: PushMessage) {
        if (notification.data.instant == true) {
            if (notification.data.code) {
                WebBrowser.openBrowserAsync(notification.data.url);
            }
        } else if (notification.data.silent) {
        }
        else {
            Alert.alert(notification.data.title, notification.data.body, [
                {
                    text: `${notification.data.dismissLabel}`,
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: `${notification.data.confirmLabel}`, onPress: () => {
                        if (notification.data.code) {
                            WebBrowser.openBrowserAsync(notification.data.url);
                        }
                    }
                }
            ]);
        }
    }

    static handleEmailNotification(notification: PushMessage) {
        const mailTo = [notification.data.mailTo];
        Alert.alert(notification.data.title, notification.data.body, [
            {
                text: `${notification.data.dismissLabel}`,
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            {
                text: `${notification.data.confirmLabel}`, onPress: () => {
                    MailComposer.composeAsync({
                        recipients: mailTo,
                        subject: notification.data.subject,
                        body: notification.data.mailBody,
                        isHtml: notification.data.isHtml
                    });
                }
            }
        ]);
    } 
    sendNotificationImmediately = async () => {
        let notificationId = await Notifications.presentLocalNotificationAsync({
          title: 'This is crazy',
          body: 'Your mind will blow after reading this',
        });
        console.log(notificationId); // can be saved in AsyncStorage or send to server
      };
    sendPushNotification = async () => {
    const message = {
      to: 'ExponentPushToken[OKmMSEAgjlC_ZcljJSXpJT]',
      sound: 'default',
      title: 'Daily notification',
      body: 'And here is the body!',
      data: { data: 'goes here' },
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    const data = response._bodyInit;
    console.log(`Status & Response ID-> ${data}`);
  };
}
