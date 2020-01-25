import { Button, CheckBox, Icon } from "native-base";
import React, { Component } from "react";
import { AsyncStorage, FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { DaysToolBar } from "../../../components/DaysToolBar";
import NavigatorService from "../../services/navigator.js";
import { State } from "../../state";
import { loadChapterContent, selectBook, toggleLanguage } from "../../state/content/action-creators";
import { inializePlan, initializeCheckedList, makeChapterChecked,
   saveCheckedListIntoLocalStorage, selectChapterOfDayPlan, selectDayOfPlan ,
   inializeArabicPlan } from "../../state/plan/action-creators";

class BiblePlanScreenContainer extends Component {
  constructor() {
    super();
    this.selectDay = this.selectDay.bind(this);
    this.state = {
      selectedDay: 1,
      checkedList: [] ,
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
      selectedChapterIndex: state.plan.selectedChapterIndex,
      ArabicPlanContent: state.plan.ArabicPlanContent,
      
    };
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      { toggleLanguage, selectDayOfPlan, makeChapterChecked , 
        inializePlan , saveCheckedListIntoLocalStorage ,
        loadChapterContent, initializeCheckedList ,
        selectBook , selectChapterOfDayPlan ,
        inializeArabicPlan
      },
      dispatch
    );
  }

   async componentDidMount() {
   await AsyncStorage.removeItem("plan")
   await AsyncStorage.removeItem("list")

      if(await AsyncStorage.getItem("list")=== null)
      {
        this.props.initializeCheckedList()
      }
      if(await AsyncStorage.getItem("ArabicPlan")=== null)
      {
        this.props.inializeArabicPlan()
      }
     await this.props.inializePlan();
    //  await AsyncStorage.remo("list" , JSON.stringify(this.state.checkedList))
    // await AsyncStorage.setItem("list" , JSON.stringify(this.state.checkedList))
  //  console.log("plan" , JSON.parse(await AsyncStorage.getItem("plan")) ) 
  //  let x= JSON.parse(await AsyncStorage.getItem("list"))
    this.setState({
       checkedList: JSON.parse(await AsyncStorage.getItem("list"))
    })
    this.selectDay(0);
    this.props.navigation.setParams({
      title: this.props.isArabic ? " خطه القراءه" : "bible plan"
    });
  }

  selectDay = dayNumber => {
    this.props.selectDayOfPlan(dayNumber , false);
    // this.setState({
    //   checkedList:[[true, true] , [false, true]]
    // })
  };
  render() {
    // console.log("selectedChapterIndex day content" , this.props.selectedChapterIndex)
    const { selectedDayContent , selectChapterOfDayPlan }  = this.props;
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
              data={selectedDayContent}
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
                  

                      let copy = this.state.checkedList[this.props.selectedDay];
                      // console.log("copy====" , copy)
                      if(copy[index])
                       copy[index] = false;
                       else 
                       copy[index] = true;
                      //  console.log("-----------copy is equal----", copy);
                       let list = []
                       this.setState(state => {
                         list = state.checkedList.map((item, index) => {
                          if(index === this.props.selectedDay)
                          return copy;
                          else return item
                        });
                        // console.log("new list is" , list)
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
                  <Text key={index}
                  onPress = {
                    () =>{
                      const bookName = selectedDayContent[index].split(" ")[0];
                       const chapterNumber = selectedDayContent[index].split(" ")[1]
                      console.log("chapterNumber []" , chapterNumber );
                      selectChapterOfDayPlan(index)
                      this.props.selectBook({
                        "bookName": bookName,
                      })
                      this.props.loadChapterContent(
                        bookName,
                        chapterNumber,
                        true
                       );
                     NavigatorService.navigate("VerseScreen");
                    }
                  }
                  >{item}</Text>
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

export const BiblePlanScreen = connect(
  BiblePlanScreenContainer.mapStatetToProps,
  BiblePlanScreenContainer.mapDispatchToProps
)(BiblePlanScreenContainer);
