import React, { useEffect } from "react";
import { View, Text, Button, Keyboard } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from "@react-navigation/drawer";
import LeftDrawer from "./LeftDrawer";
import { useDispatch, useSelector } from "react-redux";
import { DrawerActions, useRoute } from "@react-navigation/native";
import { AgbyaVersesScreen } from '../screens/AgbyaVerses';
import AppNavigator from '../../navigation/AppNavigator';
import { BookScreen } from '../screens/BookScreen'
import { RightDrawerContent } from '../components/right-drawer-content';
// import {
//   resetRightDrawer,
//   toggleRightDrawer
// } from "../../state/drawer/action-creators";
// import { SidebarDrawer } from "../notes/components/designer/stage/sidebar-notes-drawer";

const Drawer = createDrawerNavigator();
const DrawerR = createDrawerNavigator();

export default (props) => {
  return (
        <DrawerR.Navigator initialRouteName="AgbyaVersesScreen" drawerPosition="right" drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <DrawerR.Screen name="AppNavigator" component={AppNavigator}/>
          <DrawerR.Screen name="AgbyaVersesScreen" component={AgbyaVersesScreen}  />
        </DrawerR.Navigator>
  );
};

const CustomDrawerContent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flexGrow: 2 }}>
        <RightDrawerComp navigation={navigation} />
      </View>
    </DrawerContentScrollView>
  );
};

const RightDrawerComp = (props) => {
  const { navigation } = props;
  return (
     <RightDrawerContent  navigation={navigation}  />
  );
};
