import * as firebase from 'firebase';
import { Button, Input, Text } from "native-base";
import React from "react";
import { Platform, StyleSheet, TextInput, View , KeyboardAvoidingView } from "react-native";
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
    height: "50%",
    alignContent:'center'
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
      text: "notificaiton"
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
    firebase.database().ref('test').on('value', function(snapshot) {
      // console.log("snapshot=====" ,snapshot)
     snapshot.forEach(a =>{
        console.log("item is====" , a.val().expoPushToken)
        tokens.push(a.val().expoPushToken);
      }) 
      console.log("tokens is " , tokens)
    });
    const message = {
      to:tokens,
      sound: 'default',
      title:  this.state.title,
      body: this.state.text,
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
      priority:'max'
    });
    const data = response._bodyInit;
    console.log(`Status & Response ID-> ${data}`);
     }
  render() {
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={{
        alignItems:'center',
        padding:10
      }}>
    
      <Input
      placeholder="write your title"
       onChangeText={
        (text) => this.setState({
          title: text
        })
      }   
      style={{
        padding: 15,
        textAlign: "center",
        width: "70%",
        borderWidth: 2,
        borderColor: "#9E9E9E",
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        height: "30%",
        alignContent:'center',
        marginBottom:10
      }}
      numberOfLines={2}

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
                onPress={() => {
                  this.sendDaily()
                }}
              >
                <Text>send</Text>
              </Button>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

export const AdminScreen = connect(
    AdminScreenContainer.mapStatetToProps,
    AdminScreenContainer.mapDispatchToProps
)(AdminScreenContainer);
