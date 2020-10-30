import { Button } from "native-base";
import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { State, loadAbyaPart } from "../../state";
import {
  setPrays,
  loadPray
} from "./../../state/agbya/action-creators";
import { Drawer } from "native-base";
import { agbyaKeys, praysNamesDictionary } from "./../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import i18n from "i18n-js";
import _ from "lodash";
import NavigatorService from "../../services/navigator.js";

class AgbyaVersesScreenContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isArabic: false,
      isPraySelected: false
    };
    // this.openDrawer = this.openDrawer.bind(this);
  }
  static mapStatetToProps(state: State) {
    return {
      links: state.agbya.links,
      contentOfSelectedPray: state.agbya.contentOfSelectedPray,
      fontSizeOfText: state.content,
      titleOfPray: state.agbya
    };
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      {
        setPrays,
        loadPray,
        loadAbyaPart
      },
      dispatch
    );
  }
  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      openDrawer: this.openDrawer,
      openDrawer2: this.openDrawer2
    });
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: params.title,
      title: params.title,
      // headerRight: (
      //   <View style={{ flexDirection: "row" }}>
      //     {/* <Button
      //       style={{ marginRight: 20 }}
      //       title={params.title == "Setting" ? "Home" : "الرئيسية"}
      //       onPress={() => params.openDrawer()}
      //       transparent
      //     >
      //       <Text>one</Text>
      //     </Button> */}
      //     <Button
      //       style={{ marginRight: 20}}
      //       title={params.title == "Setting" ? "Home" : "الرئيسية"}
      //       onPress={() => params.openDrawer2()}
      //       transparent
      //     >
      //       <Text>الاجزاء</Text>
      //     </Button>
      //   </View>
      // ),
      // headerLeft: (
      //   <Button
      //     title={params.title == "Setting" ? "Home" : "الرئيسية"}
      //     onPress={() => params.openDrawer()}
      //     transparent
      //     style={{ marginLeft: 20 }}
      //   >
      //     <Text>الصلوات</Text>
      //   </Button>
      // )
    };
  };
  static mapStatetToProps(state: State) {
    return {
      isArabic: state.content.isArabic,
      contentOfSelectedPray: state.agbya.contentOfSelectedPray,
      links: state.agbya.links,
      titleOfPray: state.agbya.titleOfPray,
      fontSizeOfText: state.content.fontSizeOfText
    };
  }
  closeDrawer = () => {
    this.drawer._root.close();
  };
  closeDrawer2 = () => {
    this.drawer2._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  openDrawer2 = () => {
    this.drawer2._root.open();
  };
  renderItem(item) {
    const { setPrays } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          setPrays(item.links);
          this.closeDrawer();
          this.openDrawer2();
          // NavigatorService.navigate("AgbyaPrayScreen");
        }}
        style={{
          borderColor: "black",
          padding: 5,
          borderWidth: 2
        }}
      >
        <Text>{i18n.t(`praysNames.${item.name}`)}</Text>
      </TouchableOpacity>
    );
  }
  renderItem2(item) {
    const { loadPray } = this.props;
    return (
      <TouchableOpacity
        onPress={async () => {
          const { loadAbyaPart } = this.props;
          if(item.hasOwnProperty("bookName")){
            loadAbyaPart(item.bookName,
              item.chapterNumber
              )
          }
          else 
          {
            let bookName = _.invert(praysNamesDictionary)[item.name];
            await loadPray(bookName);
          }
       
          this.closeDrawer2();
        }}
        style={{
          borderColor: "black",
          padding: 5,
          borderWidth: 2
        }}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }
  render() {
    const { contentOfSelectedPray, links, loadPray  , fontSizeOfText , titleOfPray ,loadAbyaPart} = this.props;
  console.log("fontSizeOfText" , fontSizeOfText)
    return (
          <ImageBackground
            source={require("../../../assets/images/background.jpg")}
            style={{ flex: 1 }}
          >
            <ScrollView ref={ref => {this.scrollView = ref}}>
                {
               _.map(contentOfSelectedPray.agbya ,  (link, index) => {
              //  loadAbyaPart(link.bookName,
              //     link.chapterNumber
              //   )
               return  <View
                 key={index} 
                 style={{flexDirection:'row'}}
                 onLayout={event =>{
                   if(index === 3)
                  this.layout = event.nativeEvent.layout
                 }}
               >
                <ScrollView  contentContainerStyle={{ margin: 15, paddingBottom: 5,lineHeight: 30+fontSizeOfText*.3  }}>
                <View style={{flexDirection: 'row' , justifyContent: 'center'}}>
                <Text style={{fontSize: 16, alignItems: "center" , marginBottom:5}}>{link.name} </Text>
                </View>
                  <Text style={{fontSize: fontSizeOfText, textAlign:'right',lineHeight: 30+fontSizeOfText*.3 }}>{link.text}</Text>
                </ScrollView>
              </View>
               }) 
               
                }
                <Button onPress={
                  ()=> this.scrollView.scrollTo({
                    x:this.layout.x , y: this.layout.y
                     
                  })
                }><Text>sss</Text></Button>
            </ScrollView>
          </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
export const AgbyaVersesScreen = connect(
  AgbyaVersesScreenContainer.mapStatetToProps,
  AgbyaVersesScreenContainer.mapDispatchToProps
)(AgbyaVersesScreenContainer);
