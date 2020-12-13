import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import LeftDrawer from '../modules/routes/LeftDrawer';
import { AboutScreen } from "../modules/screens/AboutScreen";
import { AgbyaPrayScreen } from '../modules/screens/AgbyaPrayScreen';
import { AboutScreena } from '../modules/screens/AgbyaSectionScreen';
import { BiblePlanScreen } from "../modules/screens/BiblePlanScreen";
import { BookMarkScreen } from "../modules/screens/BookMarkScreen";
// import MainTabs from '../modules/MainTabs';
import { BookScreen } from "../modules/screens/BookScreen";
import { ChapterScreen } from "../modules/screens/chapterScreen";
import { HomeScreen } from "../modules/screens/HomeScreen";
import { NoteListScreen } from "../modules/screens/NoteList";
import { VerseScreen } from "../modules/screens/verseScreen";
import { AgbyaVersesScreen } from "../modules/screens/AgbyaVerses";

const Stack = createStackNavigator();

const AppNavigator = () => {
 return (
   <Stack.Navigator initialRouteName="HomeScreen">
     <Stack.Screen name='HomeScreen' component={HomeScreen} 
     />
     <Stack.Screen name='BookScreen' component={BookScreen} />
     <Stack.Screen name='VerseScreen' component={VerseScreen} />
     <Stack.Screen name='ChapterScreen' component={ChapterScreen} />
     <Stack.Screen name='AboutScreen' component={AboutScreen} />
     <Stack.Screen name='BookMarkScreen' component={BookMarkScreen} />
     <Stack.Screen name='NoteListScreen' component={NoteListScreen} />
     <Stack.Screen name='AboutScreena' component={AboutScreena} options={AboutScreena.navigationOptions} />
     <Stack.Screen name='AgbyaVersesScreen' component={LeftDrawer} options ={AgbyaVersesScreen.navigationOptions} />
     <Stack.Screen name='AgbyaPrayScreen' component={AgbyaPrayScreen} />
     <Stack.Screen name='BiblePlanScreen' component={BiblePlanScreen} />
   </Stack.Navigator>
 );
}

export default AppNavigator;