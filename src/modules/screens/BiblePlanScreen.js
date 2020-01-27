import _ from "lodash";
import { Button, CheckBox, Icon } from "native-base";
import React, { Component } from "react";
import { AsyncStorage, FlatList, ImageBackground, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { DaysToolBar } from "../../../components/DaysToolBar";
import NavigatorService from "../../services/navigator.js";
import { State } from "../../state";
import { loadChapterContent, selectBook, toggleLanguage } from "../../state/content/action-creators";
import { inializeArabicPlan, inializePlan, makeChapterChecked, saveCheckedListIntoLocalStorage, selectChapterOfDayPlan, selectDayOfPlan } from "../../state/plan/action-creators";

class BiblePlanScreenContainer extends Component {
  constructor() {
    super();
    this.selectDay = this.selectDay.bind(this);
    this.state = {
      selectedDay: 1,
      checkedList:_.times(365, _.constant([false])) ,
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
        loadChapterContent, 
        selectBook , selectChapterOfDayPlan ,
        inializeArabicPlan
      },
      dispatch
    );
  }

   async componentDidMount() {
  //  await AsyncStorage.removeItem("plan")
  //  await AsyncStorage.removeItem("list")
  //  this.props.initializeCheckedList()
      if(await AsyncStorage.getItem("ArabicPlan")=== null)
      {
        this.props.inializeArabicPlan()
      }
      else 
      this.props.inializePlan();
    //  await AsyncStorage.remo("list" , JSON.stringify(this.state.checkedList))
    // await AsyncStorage.setItem("list" , JSON.stringify(this.state.checkedList))
  //  console.log("plan" , JSON.parse(await AsyncStorage.getItem("plan")) ) 
    this.setState({
       checkedList: JSON.parse(await AsyncStorage.getItem("list"))
    })
    this.selectDay(0);
    this.props.navigation.setParams({
      title: this.props.isArabic ? " خطه القراءه" : "bible plan"
    });
  }
  // componentDidUpdate(prevProps) {
  //   if(this.props.isArabic)
  //    this.setState({
  //      checkedList: _.times(365, _.constant([false]))
  //    })
  // }

  selectDay = dayNumber => {
    this.props.selectDayOfPlan(dayNumber , this.props.isArabic);
    // this.setState({
    //   checkedList:[[true, true] , [false, true]]
    // })
  };
  render() {
    const { selectedDayContent , selectChapterOfDayPlan }  = this.props;
    return (
      <ImageBackground
        source={require("../../../assets/images/background.jpg")}
        style={{ flex: 1 }}
      >
        <View>
          <DaysToolBar  selectedDay ={this.props.selectedDay}  isArabic ={this.props.isArabic} selectDay={this.selectDay.bind(this)} />
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
                      if(copy[index])
                       copy[index] = false;
                       else 
                       copy[index] = true;
                       let list = []
                       this.setState(state => {
                         list = state.checkedList.map((item, index) => {
                          if(index === this.props.selectedDay)
                          return copy;
                          else return item
                        });
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
