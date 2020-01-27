import { Button } from "native-base";
import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { Helpers } from './../src/services/utilities/helpers';


export class DaysToolBar extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps) {
    if(this.props.isArabic !== nextProps.isArabic)
    return true;
    return false
  }
  render() {
    console.log("render toolbar")
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
            <Button key={index} transparent onPress= {
              ()=> {
                // this.selectDay(index);
               this.props.selectDay(index)
              }
            } style={{ backgroundColor:'#b8aeae' , borderColor: 'black' , borderWidth:4 ,justifyContent:'center' , paddingLeft:5 , paddingRight:5 , marginLeft:5 , marginRight:5}}>
            <Text >{item.data}</Text>
            </Button>
            //  console.log("====render item====", item)
          )}
          >
       </FlatList>
    );
  }

}