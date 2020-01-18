import { Button, CheckBox, Icon, ListItem } from "native-base";
import React, { Component } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { DaysToolBar } from "../../../components/DaysToolBar";
import NavigatorService from "../../services/navigator.js";
import { State } from "../../state";
import { toggleLanguage ,loadChapterContent } from "../../state/content/action-creators";
import {
  makeChapterChecked,
  selectDayOfPlan,
  insertPlanIntoLocalStorage,
  saveCheckedListIntoLocalStorage
} from "../../state/plan/action-creators";
import _ from "lodash";
import { AsyncStorage } from "react-native";


const plan = require("../../data/plan.json");

const SECTIONS = [
  {
    id: 1,
    title: "Day 1",
    content: [
      { key: "Devin", data: "gensis 1" },
      { key: "Dan", data: "gensis 2 " }
    ]
  },
  {
    id: 2,
    title: "Day 2",
    content: [
      { key: "3", data: "genesis 3" },
      { key: "4", data: "gensis 4" }
    ]
  }
];
class SettingScreenContainer extends Component {
  constructor() {
    super();
    this.selectDay = this.selectDay.bind(this);
    this.state = {
      selectedDay: 1,
      checkedList: [[true , false] ,[false , true] , [true , true]] ,
      refresh:false
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
      selectedDayContent: state.plan.selectedDayContent,
      checkedChaptersIndexes: state.plan.checkedChaptersIndexes
    };
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      { toggleLanguage, selectDayOfPlan, makeChapterChecked , 
        insertPlanIntoLocalStorage , saveCheckedListIntoLocalStorage ,
        loadChapterContent
      },
      dispatch
    );
  }

   async componentDidMount() {
     await this.props.insertPlanIntoLocalStorage();
    //  await AsyncStorage.remo("list" , JSON.stringify(this.state.checkedList))
    // await AsyncStorage.setItem("list" , JSON.stringify(this.state.checkedList))
   console.log("plan" , JSON.parse(await AsyncStorage.getItem("plan")) ) 
  //  let x= JSON.parse(await AsyncStorage.getItem("list"))
    this.setState({
       checkedList: JSON.parse(await AsyncStorage.getItem("list"))
    })
    this.selectDay(0);
    this.props.navigation.setParams({
      title: this.props.isArabic ? " خطه القراءه" : "BIble plan"
    });
  }

  selectDay = dayNumber => {
    this.props.selectDayOfPlan(dayNumber);
    // this.setState({
    //   checkedList:[[true, true] , [false, true]]
    // })
  };
  executeSql(sql, params = []) {
    return new Promise((resolve, reject) =>
      db.transaction(tx => {
        tx.executeSql(
          sql,
          params,
          (_, { rows, insertId }) => resolve(rows._array, insertId),
          reject
        );
      })
    );
  }
  render() {
     console.log("this.props.selectedday" , this.props.selectedDayContent);
    // console.log("this.state.checkedlist" , this.state.checkedList)
    // const keyvalue = _.keyBy(this.state.checkedList ,on);
    // console.log("keyvalue",keyvalue)
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 22,
        justifyContent: "center"
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 60
      }
    });

    return (
      <ImageBackground
        source={require("../../../assets/images/background.jpg")}
        style={{ flex: 1 }}
      >
        <View>
          <DaysToolBar selectDay={this.selectDay.bind(this)} />
          <View>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              extraData ={this.state.refresh}
              data={this.props.selectedDayContent}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 5,
                    marginTop: 5
                  }}
                >
                  <CheckBox
                    style={{
                      marginRight: 15,
                      backgroundColor: "gray",
                      borderColor: "black"
                    }}
                    onPress={() => {
                      // this.props.loadChapterContent(
                      //   "Genisis",
                      //   1
                      // );
                      // NavigatorService.navigate("VerseScreen");

                      let copy = this.state.checkedList[this.props.selectedDay];
                      console.log("copy====" , copy)
                      if(copy[index])
                       copy[index] = false;
                       else 
                       copy[index] = true;
                       console.log("-----------copy is equal----", copy);
                       let list = []
                       this.setState(state => {
                         list = state.checkedList.map((item, index) => {
                          if(index === this.props.selectedDay)
                          return copy;
                          else return item
                        });
                        console.log("new list is" , list)
                        return {
                          list,
                           refresh: !this.state.refresh
                        };
                      },
                     () => this.props.saveCheckedListIntoLocalStorage(list)
                      );
                    
                      // this.setState({
                      //   refresh: !this.state.refresh
                      // })
                      this.props.makeChapterChecked(index);
                    }}
                    checked={this.state.checkedList[this.props.selectedDay][index]}
                  />
                  <Text key={index}>{item}</Text>
                </View>

                // return a component using that data
              )}
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
