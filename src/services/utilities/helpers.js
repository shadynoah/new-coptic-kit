import _ from "lodash";
import * as FileSystem from "expo-file-system";
import { AsyncStorage   } from "react-native";
import { bookNames, enlglishContentUri,IS_ENGLISH_CONTENT_DOWNLOADED ,
arabicBookNames , arabicContentUri ,
 IS_ARABIC_CONTENT_DOWNLOADED , bookNamesDictionary ,
 IS_FIRST_ARABIC_PLAN_DOWNLOADED ,arabicAgbyaUri ,arabicAgbyaNames

} from '../../constants'
import { Platform } from "react-native";

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
let isBookExists = await AsyncStorage.getItem(bookName);
if(!isBookExists)
{ 
  let contentLength;
       await FileSystem.downloadAsync(
        enlglishContentUri[bookName],
        FileSystem.documentDirectory + trimmed
      ).then(async ({ uri , status ,headers }) => {
        if( status === 200)
        {
          if(Platform.OS ==='android')
          {
           contentLength = 'content-length';
          }
          else 
          {
            contentLength = 'Content-Length'
          }
          if(headers && headers[contentLength])
          await AsyncStorage.setItem(bookName, uri);
        }
      })
      .catch(error => {
        console.log("name of failed book", bookName)
      //  throw "error in one book"
      });
    }
    else 
    {
      // alert("alreay exists")
    }
     })
    ).then(async ()=>{
      await AsyncStorage.setItem(IS_ENGLISH_CONTENT_DOWNLOADED, "true");
      console.log("finished donwload english content successfully");
    }).catch((error)=>{
      console.log("error in download content" , error);
    })
  }
  static async downloadArabic() {
    // alert("will start downlaod arabic")
    await Promise.all(
      _.map(arabicBookNames , async bookName => {
 let trimmed = bookName.replace(/\s/g, "");
 let isBookExists = await AsyncStorage.getItem(bookName);
   if(!isBookExists)
   {
     let contentLength;
    await FileSystem.downloadAsync(
      arabicContentUri[bookName],
      FileSystem.documentDirectory + trimmed
    ).then(async ({ uri,status , headers }) => {
      if(status === 200)
        {
         if(Platform.OS ==='android')
         {
          contentLength = 'content-length';
         }
         else 
         {
           contentLength = 'Content-Length'
         }
          if(headers && headers[contentLength])
          {
            await AsyncStorage.setItem(bookName, uri);
          }
        }
    })
    .catch(error => {
      console.log("name of failed book", bookName)
    });
   }
   else 
   {
    //  alert("already exist"+bookName);
    //  console.log("already exist" , bookName)
   }
    
      })
     ).then(async ()=>{
       await AsyncStorage.setItem(IS_ARABIC_CONTENT_DOWNLOADED, "true");
       console.log("finished donwload arabic content successfully");
      }).catch(()=>{
       console.log("error in download arabic content")
     })
  }
  static async downloadBooksOfPlan (booksOfFirstArabicPlan){
    await Promise.all(
      _.map(booksOfFirstArabicPlan , async bookName => {
 let trimmed = bookName.replace(/\s/g, "");
       await FileSystem.downloadAsync(
         arabicContentUri[bookName],
         FileSystem.documentDirectory + trimmed
       ).then(async ({ uri ,status , headers }) => {
        if(status === 200)
        {
         if(Platform.OS ==='android')
         {
          contentLength = 'content-length';
         }
         else 
         {
           contentLength = 'Content-Length'
         }
          if(headers && headers[contentLength])
          {
            await AsyncStorage.setItem(bookName, uri);
          }
        }
       })
       .catch(error => {
        //  alert("error");
         console.error(error);
       });
      })
     ).then(async ()=>{
       await AsyncStorage.setItem(IS_FIRST_ARABIC_PLAN_DOWNLOADED, "true");
     }).catch(()=>{
       console.log("error in download content")
     })
  }
  static getEquivalentArabicBookName(bookName){
    if(!bookNamesDictionary[bookName])
    return bookName;
    return bookNamesDictionary[bookName];
  }
  static async downloadAgbya(){
    await Promise.all(
      _.map(arabicAgbyaNames , async bookName => {
 let trimmed = bookName.replace(/\s/g, "");
       await FileSystem.downloadAsync(
         arabicAgbyaUri[bookName],
         FileSystem.documentDirectory + trimmed
       ).then(async ({ uri ,status , headers }) => {
        if(status === 200)
        {
         if(Platform.OS ==='android')
         {
          contentLength = 'content-length';
         }
         else 
         {
           contentLength = 'Content-Length'
         }
          if(headers && headers[contentLength])
          {
            await AsyncStorage.setItem(bookName, uri);
          }
        }
       })
       .catch(error => {
        //  alert("error");
         console.error(error);
       });
      })
     ).then(async ()=>{
     }).catch(()=>{
       console.log("error in download content")
     })
    }
    // static async deleteAgbya() {
    //   alert("delete agbya")
    //   await Promise.all(
    //     _.map(arabicAgbyaNames , async bookName => {
    //       let prayUri = await  AsyncStorage.getItem(bookName);
    //       console.log("pray uri",prayUri)
    //        await  FileSystem.deleteAsync(prayUri);
    //        await  AsyncStorage.removeItem(bookName);
    //     })
    //    ).then(async ()=>{
    //      alert("finish delete agbya")
    //    }).catch((error)=>{
    //      console.log("error in delete agbya" , error);
    //    })
    // }
  }
