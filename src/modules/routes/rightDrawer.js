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

// import {
//   resetRightDrawer,
//   toggleRightDrawer
// } from "../../state/drawer/action-creators";
// import { SidebarDrawer } from "../notes/components/designer/stage/sidebar-notes-drawer";

const Drawer = createDrawerNavigator();

export default ({ navigation }) => {
  const { rightDrawerState } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rightDrawerState === "toggle") {
      Keyboard.dismiss();
      // navigation.dispatch(DrawerActions.toggleDrawer());
      // dispatch(resetRightDrawer());
    }
  }, [rightDrawerState === "toggle"]);

  return (
    <Drawer.Navigator
      drawerStyle={{ width: "60%", backgroundColor: "#98c8f9" }}
      drawerPosition="right"
      screenOptions={{ swipeEnabled: false, gestureEnabled: false }}
      drawerContent={(props) => <CustomDrawerComp {...props} />}
    >
      <Drawer.Screen name="LeftDrawer" component={LeftDrawer} />
    </Drawer.Navigator>
  );
};

export const CustomDrawerComp = (props) => {
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
  const dispatch = useDispatch();
  const route = useRoute();

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flexGrow: 2
        }}
      >
        {/* <SidebarDrawer navigation={navigation} route={route} /> */}
      </View>
    </DrawerContentScrollView>
  );
};
