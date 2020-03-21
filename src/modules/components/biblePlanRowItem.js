import React, { Component } from "react";
import { Button } from "native-base";
import { FlatList, Text } from "react-native";

export class BiblePlanRowItem extends Component {
  shouldComponentUpdate(nextProps) {
    //  console.log("shouldComponentUpdat")
    //  console.log("nextProps.index from item" , nextProps.index )
    if(nextProps.listOfCompletedDaysObj[nextProps.index])
    {
      // console.log("doneeeee");
      return true;
    }
    if(nextProps.selectedDay !== this.props.selectedDay)
    {
      return true;
    }
    // console.log("will not rerender")
    // return false;
    // console.log("should update return false")
   return false;
  }
  render() {

    const { index , selectDay , item , selectedDay , listOfCompletedDaysObj } = this.props;
    return (
      <Button key={index} transparent onPress= {
        ()=> {
          // this.selectDay(index);
         selectDay(index)
        }
      } style={{ backgroundColor: listOfCompletedDaysObj[index] ? '#00ff00' : '#ccffcc'  , borderColor: 'green' ,
       justifyContent:'center' , paddingLeft:5 ,
        paddingRight:5 , marginLeft:5 , marginRight:5,
        borderWidth: selectedDay === index ? 5 : 3
        }}>
      <Text >{item.data}</Text>
      </Button>
    );
  }
}
