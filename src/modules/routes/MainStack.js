import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import MainTabs from '../modules/MainTabs';
import { BookScreen } from "../screens/BookScreen";
import LinksScreen from "../screens/BookScreen";
import { ChapterScreen } from "../screens/BookScreen";
import { VerseScreen } from "../screens/BookScreen";
import { BiblePlanScreen } from "../screens/BookScreen";
import { NoteListScreen } from "../screens/BookScreen";
import { BookMarkScreen } from "../screens/BookScreen";
import { AboutScreen } from "../screens/BookScreen";
import { HomeScreen } from "../screens/BookScreen";
import { AdminScreen } from "../screens/BookScreen";
import { PraysScreen } from '../screens/BookScreen'
import { AgbyaVersesScreen } from '../screens/BookScreen';
// import  RightDrawer from '../modules/routes/rightDrawer';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
// import { RootNavigation } from "../modules/RootNavigation";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerRoutes(){
<Drawer.Navigator >
    <Drawer.Screen name='HomeScreen' component={HomeScreen} />
  </Drawer.Navigator>
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => alert("x")}
      />
    </DrawerContentScrollView>
  );
}
export default ({ navigation }) => {
  return (
    <Stack.Navigator>
     <Stack.Screen name='HomeScreen' component={DrawerRoutes} />
     <Stack.Screen name='BookScreen' component={BookScreen} />
     <Stack.Screen name='VerseScreen' component={VerseScreen} />
     <Stack.Screen name='ChapterScreen' component={ChapterScreen} />
     <Stack.Screen name='AboutScreen' component={AboutScreen} />
     <Stack.Screen name='BookMarkScreen' component={BookMarkScreen} />
     <Stack.Screen name='NoteListScreen' component={NoteListScreen} />
     <Stack.Screen name='PraysScreen' component={PraysScreen} options={PraysScreen.navigationOptions} />
     <Stack.Screen name='AgbyaVersesScreen' component={AgbyaVersesScreen}  />
     <Stack.Screen name='BiblePlanScreen' component={BiblePlanScreen} />
   </Stack.Navigator>
  );
};
