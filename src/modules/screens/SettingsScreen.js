import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ImageBackground,
} from "react-native";
import { Notifications } from "expo";
import NavigatorService from "../../services/navigator.js";
import { State } from "../../state";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { toggleLanguage } from "../../state/content/action-creators";
import { selectDayOfPlan } from '../../state/plan/action-creators';
import { 
  Right,
  Left,
  Item,
  Switch,
  Label,
  Icon,
  Content,
  Separator,
  ListItem,
  Body,
  Input,
  Button
} from "native-base";
import _ from "lodash";
import { DaysToolBar } from '../../../components/DaysToolBar';
const plan = require("../../data/plan.json")
const renderItem = ({ item , index }) => (<Text key={index} >{item}</Text>);

const SECTIONS = [
  {
    id:1,
    title: "Day 1",
    content: [
      {key: 'Devin' , data:"gensis 1"},
      {key: 'Dan' , data: "gensis 2 "},
    ]
  },
  {
    id: 2,
    title:"Day 2" , 
    content: [
      {key: "3" , data:"genesis 3" } , 
      {key: "4" , data: "gensis 4" }
    ]
  }
];
class SettingScreenContainer extends Component {
  constructor() {
    super();
    this.selectDay = this.selectDay.bind(this);
    this.state = {
      selectedDay:1
    };
  }
  static navigationOptions = ({ navigation }) => {
    let params = navigation.state.params || {};
    return {
      title: params.title,
      headerRight: (
        <Button
          title={params.title == "Setting" ? "Home" : "الرئيسية"}
          onPress={() => NavigatorService.navigate("BookScreen")}
          transparent
        >
          <Icon name="arrow-forward" />
        </Button>
      )
    };
  };
  static mapStatetToProps(state: State) {
    return {
      isArabic: state.content.isArabic,
      planContent: state.plan.planContent,
      selectedDay: state.plan.selectedDay,
      selectedDayContent: state.plan.selectedDayContent
    };
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ toggleLanguage , selectDayOfPlan }, dispatch);
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.isArabic ? "الإعدادات" : "Setting"
    });
  }
 
  selectDay = (dayNumber) => {
   this.props.selectDayOfPlan(dayNumber)
  }
 

  
  render() {
    // console.log("plan content from screen" , this.props.planContent);
    // console.log(this.state.selectedDay);
    // console.log("selected day contentwww" , this.props.selectedDay);
    // console.log("selected day contentwww" , this.props.selectedDayContent);
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 22,
        justifyContent: "center"
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 60,
      }
    });
  
    return (
      <ImageBackground
      source={require("../../../assets/images/background.jpg")}
      style={{ flex: 1 }}
    >
     <View>
     <DaysToolBar 
     selectDay= {this.selectDay.bind(this)}  
     />
   <View>
   <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.props.selectedDayContent}
          renderItem={renderItem}
          initialNumToRender={5}
          maxToRenderPerBatch={10}
          windowSize={10}
        />
   </View>
    
      </View>
   </ImageBackground>
    );
  }
}

export const SettingScreen = connect(
  SettingScreenContainer.mapStatetToProps,
  SettingScreenContainer.mapDispatchToProps
)(SettingScreenContainer);

