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
}
