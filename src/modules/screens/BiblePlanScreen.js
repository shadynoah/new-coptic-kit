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
import { inializeArabicPlan, inializePlan, loadListOfCompletedDaysOfPlan,
   loadPlan, loadPlanCheckedList, makeChapterChecked, inializeEnglishCheckedList, 
   saveCheckedListIntoLocalStorage, selectChapterOfDayPlan, selectDayOfPlan, 
   setCompletedDayPlan , setArabicCompletedDayPlan, loadArabicPlan , inializeArabicCheckedList} from "../../state/plan/action-creators";
import { Helpers } from './../../services/utilities/helpers';
import { bookNamesDictionary } from '../../constants'
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
      listOfCompletedDaysObj: state.plan.listOfCompletedDaysObj,
      arabicListOfCompletedDaysObj: state.plan.arabicListOfCompletedDaysObj
      
    };
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      { toggleLanguage, selectDayOfPlan, makeChapterChecked , 
        inializePlan , saveCheckedListIntoLocalStorage ,
        loadChapterContent, 
        selectBook , selectChapterOfDayPlan ,
        inializeArabicPlan ,inializeEnglishCheckedList,
        setCompletedDayPlan,
        loadListOfCompletedDaysOfPlan,
        loadPlanCheckedList,
        loadPlan,
        loadArabicPlan,
        inializeArabicCheckedList,
        setArabicCompletedDayPlan
      },
      dispatch
    );
  }

   async componentDidMount() {
  //  await this.props.inializePlan();
  if(this.props.isArabic){
    // await this.props.inializeArabicCheckedList();
    await this.props.inializeArabicPlan();
    await this.props.loadArabicPlan();
  }
  else 
  {
    await this.props.inializePlan();
    await this.props.loadPlan();
  }
  //  if(await AsyncStorage.getItem("ArabicPlan")=== null)
  //  {
  //  await this.props.inializeArabicPlan()
  //  }
  //  else 
  //  await this.props.inializePlan();
   this.props.loadListOfCompletedDaysOfPlan(this.props.isArabic);
   this.props.loadPlanCheckedList();
  //  await AsyncStorage.removeItem("plan");

  // //  this.props.inializeArabicPlan();
  // //  this.props.inializeEnglishCheckedList();
   
  // await AsyncStorage.removeItem("list")
    // this.props.inializeEnglishCheckedList();
   
    this.setState({
       checkedList: await this.getCheckedList(this.props.isArabic)
    })
    this.selectDay(0);
    this.props.navigation.setParams({
      title: this.props.isArabic ? " خطه القراءه" : "bible plan"
    });
  }

  componentDidUpdate(prevPros){
  
    let { selectedChapterIndex: preSelectedChapterIndex } = prevPros;
    let { selectedChapterIndex } = this.props;
    // console.log("did update");
    // console.log("did preSelectedChapterIndex" , preSelectedChapterIndex);
    // console.log("did currrent" , selectedChapterIndex);
    if(selectedChapterIndex > preSelectedChapterIndex)
    {
     this.setCheckedList(preSelectedChapterIndex , true)
    }

  }
  selectDay = dayNumber => {
    this.props.selectDayOfPlan(dayNumber , this.props.isArabic);
    // this.setState({
    //   checkedList:[[true, true] , [false, true]]
    // })
  };
  async getCheckedList(isArabic) {
    if(isArabic)
    {
      return JSON.parse(await AsyncStorage.getItem("arabicList"))
    }
    else 
    {
      let res =  JSON.parse(await AsyncStorage.getItem("list"));
      // console.log("-----------res----" , res)
      return res;
    }
  }
  setCheckedList(index , naviagtePlan = false){
    const { selectedDay , saveCheckedListIntoLocalStorage , isArabic ,selectedDayContent ,
      setCompletedDayPlan , setArabicCompletedDayPlan } = this.props;
    let copy = this.state.checkedList[selectedDay];
    if(copy[index] && !naviagtePlan)
     copy[index] = false;
     else 
     {
      copy[index] = true;
     let filtered = _.filter(copy , c => c === true);
    //  console.log("filtered" , filtered)
    //  console.log("selectedDayContent" , selectedDayContent.length)
      if(filtered.length === selectedDayContent.length && index === filtered.length-1)
      {
        alert("you completed this day reading");
        if(isArabic)
        setArabicCompletedDayPlan(selectedDay)
        else
        setCompletedDayPlan(selectedDay)
      }
     }
   
     let list = []
     this.setState(state => {
       list = state.checkedList.map((item, index) => {
        if(index === selectedDay)
        return copy;
        else return item
      });
      return {
        list,
         refresh: !this.state.refresh
      };
    },
   () =>{
    // console.log("list before save" , list)
    saveCheckedListIntoLocalStorage(list , isArabic)
   } 
    );
  
    // this.setState({
    //   refresh: !this.state.refresh
    // })
  }

  render() {
    // console.log("from render" ,this.props.ArabicPlanContent)
    let { checkedList } = this.state;
    
    const { selectedDayContent , selectChapterOfDayPlan , isArabic , selectedDay , listOfCompletedDaysObj ,
      arabicListOfCompletedDaysObj }  = this.props;
    // console.log("from render checkedList" ,checkedList);
    // console.log("from render selectedDay" ,selectedDay)
    //  console.log(selectedDayContent)
    // console.log("listOfCompletedDaysObj" ,listOfCompletedDaysObj);
    // console.log("selectedChapterIndex" , selectedChapterIndex)
    return (
      <ImageBackground
        source={require("../../../assets/images/background.jpg")}
        style={{ flex: 1 }}
      >
        <View>
          <View  style={{ flexDirection:'row', justifyContent:'center' ,marginTop:5 }}>
            <Text style={{ fontWeight:'bold' }}>
              {isArabic ? ` الايام المتبقيه ${Helpers.parseToArabic(365-Object.keys(arabicListOfCompletedDaysObj).length)}` :
              `Days Left ${365-Object.keys(listOfCompletedDaysObj).length}`}
            </Text>
          </View>
          <DaysToolBar
            selectedDay ={selectedDay}
            isArabic ={this.props.isArabic} 
            selectDay={this.selectDay.bind(this)} 
            listOfCompletedDaysObj ={listOfCompletedDaysObj}
            arabicListOfCompletedDaysObj={arabicListOfCompletedDaysObj}
            />
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
                      this.setCheckedList(index);
                    }}
                    checked={checkedList[this.props.selectedDay][index]}
                  />
                  <Text key={index}
                  onPress = {
                   async () =>{
                      // const splitted = selectedDayContent[index].split(" ");
                      // let isBookStartWithString =  isNaN(parseInt(splitted[0]));
                      // alert("before invert action creator" + item.bookName)
                      let bookName = item.bookName;
                      if(!await AsyncStorage.getItem(bookName))
                      {
                        bookName =  _.invert(bookNamesDictionary)[item.bookName]
                      }
                      // alert("from action creator" + bookName)
                       const chapterNumber = item.chapterNumber;
                      selectChapterOfDayPlan(index)
                      this.props.selectBook({
                        "bookName": bookName,
                      })
                      this.props.loadChapterContent(
                        bookName,
                        chapterNumber,
                        true
                       );
                      console.log("item from plan is" +  item)
                     NavigatorService.navigate("VerseScreen" , {
                       startVerseNumder: item.startVerseNumber,
                       endVerseNumber:item.endVerseNumber
                     });
                    }
                  }
                  >{item.text}</Text>
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
