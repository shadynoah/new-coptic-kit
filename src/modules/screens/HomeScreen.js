import { Linking, Notifications } from "expo";
import Constants from "expo-constants";
import { Switch } from "native-base";
import React, { Component } from "react";
import { AsyncStorage, Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { arabicBookNames, bookNames, booksOfFirstArabicPlan ,arabicAgbyaNames} from '../../constants';
import { ModalTypesEnum } from "../../enums";
// import NavigatorService from "../../services/navigator.js";
import { State, loadPray } from "../../state";
import { loadChapterContent, selectBook, toggleIsDownloading, toggleLanguage, toggleLoading } from "../../state/content/action-creators";
import { inializeArabicCheckedList, inializeEnglishCheckedList } from "../../state/plan/action-creators";
import { BaseModal } from "../components/base-modal";
import { LoadingContentModal } from "../components/loading-content-modal";
import { UserAdmineModal } from "../components/user-admin-modal";
import { Helpers } from './../../services/utilities/helpers';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { Application } from './../../application';
import { CommonActions } from '@react-navigation/native';

const style = StyleSheet.create({ hideText: { display: "none" } });
class HomeScreenContainer extends Component {
  constructor() {
    super();
    this.toggleAdminModal = this.toggleAdminModal.bind(this);
    this.validateAdmin = this.validateAdmin.bind(this);
    this.state = {
      isDownloadling: false,
      isFinished: true,
      isWarningModalVisible: false,
      isArabic: false,
      isAdminModal: false
    };
  }
  // static navigationOptions = ({ navigation ,route }) => {
  //   const params = route.params || {};
  //   return {
  //     title: params.title,
  //     gesturesEnabled: true, // this line
  //     headerShown:false
  //   };
  // };
  static mapStatetToProps(state) {
    return {
      loading: state.content.loading,
      selectedBook: state.content.selectedBook,
      isArabic: state.content.isArabic,
      isDownloadling: state.content.isDownloadling,
    };
  }
  static mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        toggleLoading,
        selectBook,
        loadChapterContent,
        toggleIsDownloading,
        toggleLanguage,
        inializeArabicCheckedList,
        inializeEnglishCheckedList,
        loadPray
      },
      dispatch
    );
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isArabic !== prevState.isArabic) {
      nextProps.navigation.setOptions({ title:  nextProps.isArabic ? "الرئيسية" : "Home"  });
      // nextProps.navigation.dispatch(CommonActions.setParams({  title: nextProps.isArabic ? "الرئيسية" : "Home" }));
      // nextProps.navigation.setParams({
      //   title: nextProps.isArabic ? "الرئيسية" : "Home"
      // });
      return {
        isArabic: nextProps.isArabic
      };
    }
    if (!nextProps.isDownloadling && prevState.isDownloadling) {
      return { isDownloadling: false, isFinished: true };
    } else if (nextProps.isDownloadling) {
      return { isDownloadling: true };
    } else if (!nextProps.isDownloadling) {
      return { isDownloadling: false };
    } else return null;
  }

  async componentDidMount() {
   const { navigation , isArabic } = this.props;
    navigation.setOptions({ title: isArabic ? "الرئيسية" : "Home" ,headerShown:false });
  }
  async downloadContent() {
    let {  isConnected } = Application.current;
    const { isArabic , toggleIsDownloading , inializeArabicCheckedList , inializeEnglishCheckedList } = this.props;
    let isContentExist = await this.checkIsContetExist(isArabic);
    if (isContentExist !== true) {
      if (!isConnected) {
        this.setState({
          isWarningModalVisible: true
        });
      } else {
        toggleIsDownloading();
        if(isArabic)
        {
          await Helpers.downloadArabic();
          inializeArabicCheckedList();
        }
        else
        {
          await Helpers.downloadEnglish();
          inializeEnglishCheckedList();
        }
        toggleIsDownloading();
      }
    }
    // else{
    //   this.props.navigation("BookScreen");
    // }
  }
  async downloadPlanContent() {
    let {  isConnected } = Application.current;
    const { isArabic , toggleIsDownloading , inializeArabicCheckedList , inializeEnglishCheckedList } = this.props;
    // inializeArabicCheckedList();
    // inializeEnglishCheckedList();
    let isContentExist = await this.checkIfPlanContentExist(isArabic);
    if (isContentExist !== true) {
      if (!isConnected) {
        this.setState({
          isWarningModalVisible: true
        });
      } else {
        toggleIsDownloading();
        if(isArabic)
        {
          await Helpers.downloadBooksOfPlan(booksOfFirstArabicPlan);
          inializeArabicCheckedList();
        }
        else
        {
          await Helpers.downloadEnglish();
          inializeEnglishCheckedList();
        }
        toggleIsDownloading();
      }
    }
    // else{
    //   NavigatorService.navigate("BookScreen");
    // }
  }
  async downloadAgbyaContent() {
    let { isConnected } = Application.current;
    const { isArabic , toggleIsDownloading  } = this.props;
    let isContentExist = await this.checkIfAgbyaContentExist(isArabic);
    if (isContentExist !== true) {
      if (!isConnected) {
        this.setState({
          isWarningModalVisible: true
        });
      } else {
        if(isArabic)
        {
          toggleIsDownloading();
          await Helpers.downloadAgbya();
          toggleIsDownloading();
        }
        else
        {
          alert("this is incoming feature")
          // await Helpers.downloadAgbya();
        }
      }
    }
    // else{
    //   NavigatorService.navigate("BookScreen");
    // }
  }
 async checkIsContetExist(isArabic){
   let books = isArabic ? arabicBookNames : bookNames
    let isExist = true;
    for(const book of books){
      isExist = await AsyncStorage.getItem(book)
      if(!isExist)
      break;
    }
    if(isExist)
    return true;
    else
    return false;
  }
  async checkIfPlanContentExist(isArabic){
    let books = isArabic ? booksOfFirstArabicPlan : bookNames
    let isExist = true;
    for(const book of books){
      isExist = await AsyncStorage.getItem(book)
      if(!isExist)
      break;
    }
    if(isExist)
    return true;
    else
    return false;
  }
  async checkIfAgbyaContentExist(isArabic){
    let books = isArabic ? arabicAgbyaNames : arabicAgbyaNames
    let isExist = true;
    for(const book of books){
      isExist = await AsyncStorage.getItem(book)
      if(!isExist)
      break;
    }
    if(isExist)
    return true;
    else
    return false;
  }
  sendPushNotification = async () => {
    const message = {
      to: 'ExponentPushToken[QzMu-2Ll3xAereX9d5bGCy]',
      sound: 'default',
      title: 'Original Titldasde',
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
  sendDaily = async () => {
 Notifications.scheduleLocalNotificationAsync({
   title:'ssss'
 }, {
   repeat: 'minute'
 })
  }
  toggleAdminModal(){
    this.setState({
      isAdminModal: !this.state.isAdminModal
    })
  }
  validateAdmin(user){
    if(user.name === "shady" && user.password === "123")
    {
      this.toggleAdminModal();
      this.props.navigation.navigate("AdminScreen");
    }
    else
    alert("invalid credintials")
  }
  render() {
    let { isConnected } = Application.current;
    const {  isArabic , navigation , toggleLanguage ,loadPray } = this.props;
    const { isDownloadling , isWarningModalVisible } = this.state;
    const loadingModal = isDownloadling ? (
      <LoadingContentModal
        isVisible={isDownloadling}
        message= {
          isArabic ? "جاري تحميل البيانات , تأكد من اتصالك بالانترنت" :
          "Loading data , please make sure you are connected to the internet..."
        }
      />
    ) : null;
    const warningLostConnectionModal =
      !isConnected && isWarningModalVisible ? (
        <BaseModal
          baseModalProperties={{
            hadCloseHeader: true,
            hasHeaderTitle: true,
            headerTitle: "Note",
            toggleModal: () => this.setState({ isWarningModalVisible: false }),
            modalText:
              "please connect to internet to download data and try again",
            hasFirstButton: true,
            firstButtonText: "Okay",
            onPressFirstBtn: () =>
              this.setState({ isWarningModalVisible: false }),
            modalType: ModalTypesEnum.warningModal
          }}
          isVisible={
            !isConnected && isWarningModalVisible
          }
          isArabic={isArabic}
        />
      ) : null;

    const deviceType =
      (Constants.platform.ios && Constants.platform.ios.userInterfaceIdiom) ||
      (Constants.platform.android &&
        Constants.platform.android.userInterfaceIdiom);
    let heightT;
    if (deviceType !== "tablet") {
      heightT = (Dimensions.get("window").height * 0.1) / 1.5;
    } else {
      heightT = Dimensions.get("window").height * 0.1;
    }
    return (
      <ImageBackground
        source={require("../../../assets/images/newHome.png")}
        style={{ flex: 1 }}
        resizeMode="stretch"
      >
           <UserAdmineModal
              toggleAdminModal={this.toggleAdminModal}
              isVisible={this.state.isAdminModal}
              validateAdmin={this.validateAdmin}
            />
        {loadingModal}
        {warningLostConnectionModal}
        <View
          style={{
            flex: 0.8,
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
         <View style={{ flexDirection: "row" }}>
            <Text onPress={
              ()=>  {
                // this.sendPushNotification()
              }
            } style={{ color: "white", fontWeight: "900" }}>English</Text>
            <Switch
              style={{ marginLeft: 20, marginRight: 20 }}
              onValueChange={value => {
                this.props.navigation.dispatch(CommonActions.setParams({  title: isArabic ? "الرئيسية" : "Home" }));

                toggleLanguage();
                // i18n.locale = isArabic ? 'ar' : 'en';
              }}
              value={isArabic}
            />
            <Text onPress={
              ()=> toggleLanguage()
            } style={{ color: "white", fontWeight: "900" }}>عربي</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            marginBottom: (Dimensions.get("window").height * 0.2)-90,
            marginLeft:10,
            flex: 1,
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 0.8, flexDirection: "row" }}>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() =>
                Linking.openURL(
                  isArabic
                    ? "https://m.facebook.com/القمص-جرجس-جبرائيل-241119892976029/"
                    : "https://m.facebook.com/Fr-George-DMin-1693643244259588/"
                )
              }
            >
              <Image
                style={{ height: heightT, width: heightT }}
                source={require("../../../assets/images/facebook.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() =>
                Linking.openURL("https://soundcloud.com/user-987979301")
              }
            >
              <Image
                style={{ height: heightT, width: heightT }}
                source={require("../../../assets/images/soundcloud.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/channel/UCMku6NsCd_W2dhBh9tcPIAQ/featured"
                )
              }
            >
              <Image
                style={{ height: heightT, width: heightT }}
                source={require("../../../assets/images/youtube.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() =>
                Linking.openURL("http://www.christambassadorsmission.com/")
              }
            >
              <Image
                style={{ height: heightT, width: heightT }}
                source={require("../../../assets/images/website.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" , marginBottom:10 }}>
        <TouchableOpacity
              style={{ marginLeft: 10 }}
              onLongPress = {
                ()=>this.toggleAdminModal()
              }
              onPress={async () => {
              await this.downloadContent();
              // NavigatorService.navigate("BookScreen");
              let isExist = await this.checkIsContetExist(this.props.isArabic)
              if(!isExist)
              {
                let message = isArabic ? "حاول مره اخري" : "try again"
                setTimeout(() => {
                  alert(message)
                }, 1000);
              }
              else
              {
                this.props.navigation.navigate("BookScreen");
              }
            }}
            >
              <Image
                style={{
                  height: heightT + 0.95 * heightT,
                  width: heightT + 0.95 * heightT
                }}
                source={require("../../../assets/images/newbible.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onLongPress={
                async ()=> {
                 await AsyncStorage.clear().then(()=>alert("data cleared")).catch(()=>alert("faield to clear data"))
                }
              }
              style={{ marginLeft: 10 }}
              onPress={async () => {
                await this.downloadPlanContent();
                // NavigatorService.navigate("BookScreen");
                let isExist = await this.checkIfPlanContentExist(isArabic)
                if(!isExist)
                {
                  let message = isArabic ? "حاول مره اخري" : "try again"
                  setTimeout(() => {
                    alert(message)
                  }, 1000);
                }
                else
                {
                 this.props.navigation.navigate("BiblePlanScreen");
                }
               }}
            >
              <Image
                style={{
                  height: heightT + 0.95 * heightT,
                  width: heightT + 0.95 * heightT
                }}
                source={require("../../../assets/images/newbiblePlan.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              // onLongPress = {
              //    ()=> this.props.navigation.navigate("PraysScreen")
              // }
              // onLongPress={
              //   async ()=> {
              //    await Helpers.deleteAgbya();
              //   }
              // }
              onPress={async () => {
                const {toggleIsDownloading ,isArabic } = this.props;
                if(!isArabic)
                {
                  alert("this is incoming faeture")
                }
                else 
                {
                  await  this.downloadAgbyaContent();
                  let isExist = await this.checkIfAgbyaContentExist(isArabic)
                  console.log("is exist agbya" , isExist)
                  if(!isExist)
                  {
                    let message = isArabic ? "حاول مره اخري" : "try again"
                    setTimeout(() => {
                      alert(message)
                    }, 1000);
                  }
                  else
                  {
                   this.props.navigation.navigate("PraysScreen");
                  }
                }
                // NavigatorService.navigate("PraysScreen");
                // loadPray();
              //  console.log("sss",await AsyncStorage.getItem("lordPrayerAr"));
            }}
            >
              <Image
                style={{
                  height: heightT + 0.95 * heightT,
                  width: heightT + 0.95 * heightT
                }}
                source={require("../../../assets/images/agbya2.png")}
              />
            </TouchableOpacity>
          </View>
      </ImageBackground>
    );
  }
}

export const HomeScreen = connect(
  HomeScreenContainer.mapStatetToProps,
  HomeScreenContainer.mapDispatchToProps
)(HomeScreenContainer);
