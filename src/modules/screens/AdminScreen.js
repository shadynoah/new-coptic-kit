import * as firebase from 'firebase';
import { Button, Input, Text , Switch } from "native-base";
import React from "react";
import { Platform, StyleSheet, TextInput, View , KeyboardAvoidingView , ScrollView } from "react-native";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    justifyContent: "center",
    margin: 20
  },

  TextInputStyleClass: {
    padding: 15,
    textAlign: "center",
    width: "70%",
    borderWidth: 2,
    borderColor: "#9E9E9E",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignContent:'center',
    height:100
  },
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
  
});
class AdminScreenContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'title',
      text: "notificaiton",
      isArabicNotification: false
    };
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: params.title,
      title: params.title
    };
  };
  static mapStatetToProps(state: State) {
    return {
      isArabic: state.content.isArabic
    };
  }
  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.isArabic ? "من نحن" : "Admin"
    });
    // console.log("-----Location------",Location)
    //   console.log("homee")
    // NotificationManager.registerForPushNotifications()
  }
  sendDaily = async () => {
    let tokens = [];
    const { isArabicNotification } = this.state;
    firebase.database().ref('test').on('value', function(snapshot) {
      // snapshot.val();
     snapshot.forEach(a =>{
      // tokens.push(a.val().expoPushToken);
      //  console.log("expoPushToken of item====" , a.val().expoPushToken)
      if(isArabicNotification === true)
      {
        if(a.val().language === 'arabic')
        tokens.push(a.val().expoPushToken);
      }
      if(isArabicNotification === false)
      {
        if(a.val().language === 'english')
        tokens.push(a.val().expoPushToken);
      }
      }) 
      console.log("tokens length " , tokens.length)
    });
    const message = {
      to:tokens,
      sound: 'default',
      title:  this.state.title,
      body: this.state.text,
      data: { data: this.state.text},
      tag:'hi'
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
      priority:'max'
    });
    const data = response._bodyInit;
    console.log(`Status & Response ID-> ${data}`);
     }
  render() {
    const { isArabicNotification } = this.state;
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <ScrollView>

      <View style={{
        alignItems:'center',
        padding:10
      }}>
    
      <TextInput
      placeholder="write your title"
       onChangeText={
        (text) => this.setState({
          title: text
        })
      }   
      style={{
    textAlign: "center",
    width: "70%",
    borderWidth: 2,
    borderColor: "#9E9E9E",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignContent:'center',
    height:50,marginBottom:5
      }}
      numberOfLines={4}
      multiline={true}

 />
 <TextInput
      style={styles.TextInputStyleClass}
      underlineColorAndroid="transparent"
      placeholder="write your note"
      placeholderTextColor={"#9E9E9E"}
      numberOfLines={3}
      multiline={true}
      defaultValue=""
      onChangeText={text => {
        this.setState({
          text: text
        })
      }}
    />
      <Button
                style={{ margin: 10, paddingLeft: 30, paddingRight: 30 }}
                full
                rounded
                onPress={async () => {
                 await this.sendDaily()
                }}
              >
                <Text>send</Text>
              </Button>
      </View>
      <View style={{ flexDirection: "row" , justifyContent:'center'}}>
            <Text onPress={
              ()=>  {
                this.sendPushNotification()
              } 
            } style={{ color: "black", fontWeight: "900" }}>English</Text>
            <Switch
              style={{ marginLeft: 20, marginRight: 20 }}
              onValueChange={value => {
                this.setState({
                  isArabicNotification: !isArabicNotification
                })
              }}
              value={isArabicNotification}
            />
            <Text onPress={
              ()=> toggleLanguage()
            } style={{ color: "black", fontWeight: "900" }}>عربي</Text>
          </View>
          </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export const AdminScreen = connect(
    AdminScreenContainer.mapStatetToProps,
    AdminScreenContainer.mapDispatchToProps
)(AdminScreenContainer);
