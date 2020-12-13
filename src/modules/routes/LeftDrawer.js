import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, useIsDrawerOpen } from "@react-navigation/drawer";
import { useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import i18n from 'i18n-js';
import _ from 'lodash';
import React from "react";
import { View } from "react-native";
import { agbyaKeys } from './../../constants';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const DrawerL = createDrawerNavigator();
const DrawerR = createDrawerNavigator();
import RightDrawer from '../routes/rightDrawer';
import {LeftDrawerContent} from  '../components/left-drawer-content';
export default (props) => {
  const CustomDrawerContent = (props) => {
    const { navigation } = props;
    return (
      <DrawerContentScrollView {...props}>
        <View style={{ flexGrow: 2 }}>
          <LeftDrawerComp navigation={navigation} />
        </View>
      </DrawerContentScrollView>
    );
  };
  
  const LeftDrawerComp = (props) => {
  const { navigation } = props;
    // const dispatch = useDispatch();
    // const route = useRoute();
  
    return (
      <LeftDrawerContent navigation={navigation} />
    );
  };
  return(
<DrawerL.Navigator initialRouteName="RightDrawer" drawerPosition="left" drawerContent={(props) => <CustomDrawerContent {...props} />}>
  <DrawerL.Screen name="RightDrawer" component={RightDrawer} />
</DrawerL.Navigator>
  )
 

  // return (
  //      <DrawerContentScrollView {...props}>
  //        {
  //          _.map(agbyaKeys,item => {
  //           return   <DrawerItem key={item.id}
  //            label={i18n.t(`praysNames.${item.name}`)} 
  //            onPress={()=>{
  //             alert("left")
  //            }}
  //            />
  //          })
  //        }
  //    <DrawerItem
  //       label="Help"
  //       onPress={() => alert("x")}
  //     />
  //       <DrawerItem
  //       label="Help2"
  //       onPress={() => alert("x")}
  //     />
  //   </DrawerContentScrollView>
  // );
};




