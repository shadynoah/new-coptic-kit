import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useIsDrawerOpen
} from "@react-navigation/drawer";
import { useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
// import { SidebarTemplateDrawer } from "../notes/components/designer/stage/sidebar-templates-drawer";
import MainStack from "./MainStack";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default () => {
  return (
    <Drawer.Navigator
      screenOptions={{ swipeEnabled: false }}
      drawerContent={props => <CustomDrawerComp {...props} />}
    >
      <Stack.Screen name="MainStack" component={MainStack} />
    </Drawer.Navigator>
  );
};

export const CustomDrawerComp = props => {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flexGrow: 2 }}>
        <LeftDrawerComp />
      </View>
    </DrawerContentScrollView>
  );
};

const LeftDrawerComp = props => {
  const { navigation } = props;
  const route = useRoute();
  const wasDrawerOpen = useIsDrawerOpen();

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flexGrow: 2
        }}
      >
        {/* <SidebarTemplateDrawer
          navigation={navigation}
          route={route}
          wasDrawerOpen={wasDrawerOpen}
        /> */}
      </View>
    </DrawerContentScrollView>
  );
};
