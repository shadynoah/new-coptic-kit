import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import MainTabs from '../modules/MainTabs';
import { BookScreen } from "../modules/screens/BookScreen";
import LinksScreen from "../modules/screens/LinksScreen";
import { ChapterScreen } from "../modules/screens/chapterScreen";
import { VerseScreen } from "../modules/screens/verseScreen";
import { BiblePlanScreen } from "../modules/screens/BiblePlanScreen";
import { NoteListScreen } from "../modules/screens/NoteList";
import { BookMarkScreen } from "../modules/screens/BookMarkScreen";
import { AboutScreen } from "../modules/screens/AboutScreen";
import { HomeScreen } from "../modules/screens/HomeScreen";
import { AdminScreen } from "../modules/screens/AdminScreen";
import { AboutScreena } from '../modules/screens/AgbyaSectionScreen'
import { AgbyaPrayScreen } from '../modules/screens/AgbyaPrayScreen';
import { AgbyaVersesScreen } from '../modules/screens/AgbyaVerses';

const Stack = createStackNavigator();
// const Navigator = createStackNavigator(
//     {
//       BookScreen: {
//         screen: BookScreen
//       },
//       LinksScreen: {
//         screen: LinksScreen
//       },
//       ChapterScreen: {
//         screen: ChapterScreen
//       },
//       VerseScreen: {
//         screen: VerseScreen
//       },
//       BiblePlanScreen: {
//         screen: BiblePlanScreen
//       },
//       NoteListScreen: {
//         screen: NoteListScreen
//       },
//       BookMarkScreen: {
//         screen: BookMarkScreen
//       },
//       AboutScreen: {
//         screen: AboutScreen
//       },
//       HomeScreen: {
//         screen: HomeScreen
//       },
//       AdminScreen: {
//         screen: AdminScreen
//       },
//       AboutScreena: {
//         screen: AboutScreena
//       },
//       AgbyaPrayScreen: {
//         screen:AgbyaPrayScreen
//       },
//       AgbyaVersesScreen:{
//         screen: AgbyaVersesScreen
//       }
//     },
//     {
//       initialRouteName: "HomeScreen"
//     }
//   );

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
     <Stack.Screen name='AgbyaVersesScreen' component={AgbyaVersesScreen} />
     <Stack.Screen name='AgbyaPrayScreen' component={AgbyaPrayScreen} />
     <Stack.Screen name='BiblePlanScreen' component={BiblePlanScreen} />
   </Stack.Navigator>
 );
}

export default AppNavigator;