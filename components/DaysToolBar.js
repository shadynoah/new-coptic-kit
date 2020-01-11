import React, { Component, PureComponent } from "react";
import { FlatList, ScrollView, TouchableOpacity  , Text } from "react-native";
import _ from "lodash";
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
const xx = []
for (let index = 1; index <= 365; index++) {
  xx.push({
    id: index ,
    data: `day ${index}`
  })
}

export class DaysToolBar extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps) {
    return false
  }
  render() {
      // console.log("render DaysToolBar");
    return (
        <ScrollView  horizontal={true} style={{
            margin: 20 
          }}>
          {
             xx.map((item, index) => (
                  <Button key={item.id} transparent onPress= {
                    ()=> {
                      // this.selectDay(index);
                     this.props.selectDay(index)
                    }
                  } style={{ backgroundColor:'#b8aeae' , borderColor:'black' , borderWidth:4 ,justifyContent:'center' , paddingLeft:5 , paddingRight:5 , marginLeft:5 , marginRight:5}}>
                  <Text >{item.data}</Text>
                  </Button>
             ))
            
          }
       </ScrollView>
    );
  }

}