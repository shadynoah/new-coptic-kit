import _ from 'lodash'
import React, { Component } from "react";
import { FlatList } from "react-native";
import { BiblePlanRowItem } from '../src/modules/components/biblePlanRowItem';
import { Helpers } from './../src/services/utilities/helpers';

export class DaysToolBar extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps) {
    if( (!_.isEqual(nextProps.listOfCompletedDaysObj , this.props.listOfCompletedDaysObj) ))
    {
      return true;
    }
    if(nextProps.selectedDay !== this.props.selectedDay)
    {
      // console.log("will rerender daysss toooooolbar");
      return true;
    }
    return false
  }
  render() {
    const {  listOfCompletedDaysObj , selectedDay ,selectDay } = this.props;
    let isCompleted = listOfCompletedDaysObj[selectedDay] || false;
    // console.log("is completed from daystoolbar listOfCompletedDaysObj" , listOfCompletedDaysObj);
    // console.log(" isCompleted from toooolbar" , isCompleted )
    // console.log(" selectedDay from toooolbar" , selectedDay )
    const xx = []
    for (let index = 1; index <= 365; index++) {
      xx.push({
        id: index ,
        data: this.props.isArabic ?  `اليوم ${Helpers.parseToArabic(index)}`   :  `day ${index}`
      })
    }
    return (
        <FlatList
        data={xx}
        keyExtractor={item => item.id.toString()}
        initialNumToRender={10}
        horizontal={true} style={{
            margin: 20 
          }}
          renderItem={({ item , index }) => (
           <BiblePlanRowItem
            item = {item}
            index = {index}
            selectDay ={selectDay}
            listOfCompletedDaysObj ={listOfCompletedDaysObj}
            isCompleted ={isCompleted}
            selectedDay={selectedDay}
            

            />
            //  console.log("====render item====", item)
          )}
          >
       </FlatList>
    );
  }

}