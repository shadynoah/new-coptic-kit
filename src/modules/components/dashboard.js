import { Item } from "native-base";
import React, { PureComponent } from "react";
import { FlatList, View , Text } from 'react-native';
import { Button } from "native-base";

export  class Dashboard  extends PureComponent  {
    render() {
      return (
          <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
              <Button onPress={()=>this.props.openDrawer()}>
              <Text>Hello</Text>
              </Button>
          </View>
      );
    }
  }