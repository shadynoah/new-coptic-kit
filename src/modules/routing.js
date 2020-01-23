import {
  StackNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import { BookScreen } from "./screens/BookScreen";
import LinksScreen from "./screens/LinksScreen";
import { ChapterScreen } from "./screens/chapterScreen";
import { VerseScreen } from "./screens/verseScreen";
import { BiblePlanScreen } from "./screens/BiblePlanScreen";
import { NoteListScreen } from "./screens/NoteList";
import { BookMarkScreen } from "./screens/BookMarkScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { HomeScreen } from "./screens/HomeScreen";
const Navigator = createStackNavigator(
  {
    BookScreen: {
      screen: BookScreen
    },
    LinksScreen: {
      screen: LinksScreen
    },
    ChapterScreen: {
      screen: ChapterScreen
    },
    VerseScreen: {
      screen: VerseScreen
    },
    BiblePlanScreen: {
      screen: BiblePlanScreen
    },
    NoteListScreen: {
      screen: NoteListScreen
    },
    BookMarkScreen: {
      screen: BookMarkScreen
    },
    AboutScreen: {
      screen: AboutScreen
    },
    HomeScreen: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: "BiblePlanScreen"
  }
);
const Navigators = createAppContainer(Navigator);
export default Navigators;
