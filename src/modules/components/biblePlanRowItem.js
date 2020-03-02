import React, { Component } from "react";
import { Button } from "native-base";
import { FlatList, Text } from "react-native";

export class BiblePlanRowItem extends Component {
  shouldComponentUpdate(nextProps) {
    //  console.log("shouldComponentUpdat")
    //  console.log("nextProps.isCompleted from item" , nextProps.isCompleted );
    //  console.log("nextProps.index from item" , nextProps.index )
    if(nextProps.listOfCompletedDaysObj[nextProps.index])
    {
      console.log("doneeeee");
      return true;
    }
    // console.log("will not rerender")
    // return false;
    console.log("should update return false")
   return false;
  }
  render() {

    const { index , selectDay , item , isCompleted , listOfCompletedDaysObj } = this.props;
    // console.log("Index-----" , index)
    // console.log("isCompleted-----" , isCompleted)
    //  console.log("from render -----" , listOfCompletedDaysObj[index])

    return (
      <Button key={index} transparent onPress= {
        ()=> {
          // this.selectDay(index);
         selectDay(index)
        }
      } style={{ backgroundColor: listOfCompletedDaysObj[index] ? '#00ff00' : '#ccffcc'  , borderColor: 'green' , borderWidth:4 ,justifyContent:'center' , paddingLeft:5 , paddingRight:5 , marginLeft:5 , marginRight:5}}>
      <Text >{item.data}</Text>
      </Button>
    );
  }
}
