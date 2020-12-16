import { CommonActions } from '@react-navigation/native';
import _ from "lodash";
import React from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { loadAbyaPart, State } from "../../state";
import { Application } from './../../application';
import { praysNamesDictionary } from "./../../constants";
import { loadPray, setPrays } from "./../../state/agbya/action-creators";

class AgbyaVersesScreenContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isArabic: false,
      isPraySelected: false,
      scrollPositions: []
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
    const { navigation ,isArabic } = this.props;
    // console.log("navigation", navigation)
    navigation.setOptions({ title:  isArabic ? "الصلوات" : "Sections" , headerTitleStyle: {
      alignSelf: 'center'
    }  });
    // this.props.navigation.dispatch(
    //   CommonActions.setParams({ email: null })
    // );    // this.props.navigation.dispatch(CommonActions.setParams({  title: isArabic ? "الرئيسية" : "Home" }));
    Application.current.scrollPositions  = []
    Application.current.scrollPositionsObj =  {}
  }
  static navigationOptions = ({ navigation , route  }) => {
  const params = route.params || {};
    return {
      title: params.title,
      headerTitleStyle: {
        alignSelf: 'center'}
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
  
  render() {
    const { contentOfSelectedPray, links, loadPray  , fontSizeOfText , titleOfPray ,loadAbyaPart} = this.props;
    return (
          <ImageBackground
            source={require("../../../assets/images/background.jpg")}
            style={{ flex: 1 }}
          >
            <ScrollView 
            ref ={ ref => {Application.current.scrollViewRef = ref}}
            >
                 <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10
              
            }} >
                {/* <Text>{titleOfPray}</Text> */}
              <Text style={{fontSize: fontSizeOfText+10 , marginBottom:20 }}>{praysNamesDictionary[titleOfPray]}</Text>
            </View>
                {
               _.map(contentOfSelectedPray.agbya ,  (link, index) => {
               return  <View
                 key={index} 
                 style={{flexDirection:'row'}}
                 onLayout={event =>{
                  //  Application.current.scrollPositions= [...Application.current.scrollPositions,event.nativeEvent.layout]
                  //  console.log("key is" , index);
                   Application.current.scrollPositionsObj[index] = event.nativeEvent.layout;
                 }}
               >
                <ScrollView  contentContainerStyle={{ margin: 15, paddingBottom: 5,lineHeight: 30+fontSizeOfText*.3  }}>
                <View style={{flexDirection: 'row' , justifyContent: 'center'}}>
                <Text style={{fontSize: fontSizeOfText, alignItems: "center" , marginBottom:5 , fontWeight: 'bold'}}>{link.name} </Text>
                </View>
                  <Text style={{fontSize: fontSizeOfText, textAlign:'right',lineHeight: 30+fontSizeOfText*.3 }}>{link.text}</Text>
                </ScrollView>
              </View>
               }) 
                }
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
