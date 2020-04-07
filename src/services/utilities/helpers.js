import _ from "lodash";
import * as FileSystem from "expo-file-system";
import { AsyncStorage } from "react-native";
import { bookNames, enlglishContentUri,IS_ENGLISH_CONTENT_DOWNLOADED } from '../../constants'
export class Helpers {
  //choose action creators based on style of selectedNote

  static parseToArabic(number, isArabic = true) {
    if (!isArabic) {
      return number;
    } else {
      let str = number + "";
      var id = ["۰", "۱", "۲", "۳", "٤", "٥", "٦", "۷", "۸", "۹"];

      return str.replace(/[0-9]/g, function(w) {
        return id[+w];
      });
    }
  }
  static validateVerse(highlightedVerses ,selectedVerses , verseNum) {
    var res = {};
    res.textDecorationLine = "none";
    if (_.includes(highlightedVerses, verseNum)) {
      res.backgroundColor = "#ffff00";
    }
    if (_.includes(selectedVerses, verseNum)) {
      res.textDecorationLine = "underline";
    }
    return res;
  }
  static async downloadEnglish() {
    await Promise.all(
     _.map(bookNames , async bookName => {
let trimmed = bookName.replace(/\s/g, "");
      await FileSystem.downloadAsync(
        enlglishContentUri[bookName],
        FileSystem.documentDirectory + trimmed
      ).then(async ({ uri }) => {
        await AsyncStorage.setItem(bookName, uri);
      })
      .catch(error => {
        alert("error");
        console.error(error);
      });
     })
    ).then(async ()=>{
      await AsyncStorage.setItem(IS_ENGLISH_CONTENT_DOWNLOADED, "true");
      console.log("finished");
    }).catch(()=>{
      console.log("error in download content")
    })
     
  }
}
