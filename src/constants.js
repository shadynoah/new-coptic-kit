import _ from "lodash";
export const content = [
  {
    key: 1,
    dayChapters: ["1 Samuel 1", "Genesis 1", "Genesis 2", "Matthew 1"]
  },
  {
    key: 2,
    dayChapters: ["Psalm 2", "Genesis 3", "Genesis 4", "Matthew 2"]
  },
  {
    key: 3,
    dayChapters: ["Psalm 3", "Genesis 5", "Genesis 6", "Matthew 3"]
  },
  {
    key: 4,
    dayChapters: ["Psalm 4", "Genesis 7", "Genesis 8", "Matthew 4"]
  },
  {
    key: 5,
    dayChapters: [
      "Psalm 5",
      "Genesis 9",
      "Genesis 10",
      "Genesis 11",
      "Matthew 5"
    ]
  },
  {
    key: 6,
    dayChapters: ["Psalm 6", "Genesis 12", "Genesis 13", "Matthew 6"]
  },
  {
    key: 7,
    dayChapters: [
      "Psalm 7",
      "Genesis 14",
      "Genesis 15",
      "Genesis 16",
      "Matthew 7"
    ]
  },
  {
    key: 8,
    dayChapters: ["Psalm 8", "Genesis 17", "Genesis 18", "Matthew 8"]
  },
  {
    key: 9,
    dayChapters: ["Psalm 9", "Genesis 19", "Genesis 20", "Matthew 9"]
  },
  {
    key: 10,
    dayChapters: [
      "Psalm 10",
      "Genesis 21",
      "Genesis 22",
      "Genesis 23",
      "Matthew 10"
    ]
  },
  {
    key: 11,
    dayChapters: ["Psalm 11", "Genesis 24", "Genesis 25", "Matthew 11"]
  },
  {
    key: 12,
    dayChapters: ["Psalm 12", "Genesis 26", "Genesis 27", "Matthew 12"]
  },
  {
    key: 13,
    dayChapters: ["Psalm 13", "Genesis 28", "Genesis 29", "Matthew 13"]
  },
  {
    key: 14,
    dayChapters: ["Psalm 14", "Genesis 30", "Genesis 31", "Matthew 14"]
  },
  {
    key: 15,
    dayChapters: ["Psalm 15", "Genesis 32", "Genesis 33", "Matthew 15"]
  },
  {
    key: 16,
    dayChapters: ["Psalm 16", "Genesis 34", "Genesis 35", "Matthew 16"]
  },
  {
    key: 17,
    dayChapters: ["Psalm 17", "Genesis 36", "Genesis 37", "Matthew 17"]
  },
  {
    key: 18,
    dayChapters: ["Psalm 18", "Genesis 38", "Genesis 39", "Matthew 18"]
  },
  {
    key: 19,
    dayChapters: ["Psalm 19", "Genesis 40", "Genesis 41", "Matthew 19"]
  },
  {
    key: 20,
    dayChapters: ["Psalm 20", "Genesis 42", "Genesis 43", "Matthew 20"]
  },
  {
    key: 21,
    dayChapters: ["Psalm 21", "Genesis 44", "Genesis 45", "Matthew 21"]
  },
  {
    key: 22,
    dayChapters: ["Psalm 22", "Genesis 46", "Genesis 47", "Matthew 22"]
  },
  {
    key: 23,
    dayChapters: ["Psalm 23", "Genesis 48", "Genesis 49", "Matthew 23"]
  },
  {
    key: 24,
    dayChapters: ["Psalm 24", "Job 1", "Genesis 50", "Matthew 24"]
  },
  {
    key: 25,
    dayChapters: ["Psalm 25", "Job 2", "Job 3", "Job 4", "Matthew 25"]
  },
  {
    key: 26,
    dayChapters: ["Psalm 26", "Job 5", "Job 6", "Job 7", "Matthew 26"]
  },
  {
    key: 27,
    dayChapters: ["Psalm 27", "Job 8", "Job 9", "Job 10", "Matthew 27"]
  },
  {
    key: 28,
    dayChapters: ["Psalm 28", "Job 11", "Job 12", "Job 13", "Matthew 28"]
  },
  {
    key: 29,
    dayChapters: ["Psalm 29", "Job 14", "Job 15", "Job 16", "Mark 1"]
  },
  {
    key: 30,
    dayChapters: ["Psalm 30", "Job 17", "Job 18", "Job 19", "Mark 2"]
  },
  {
    key: 31,
    dayChapters: ["Psalm 31", "Job 20", "Job 21", "Job 22", "Mark 3"]
  },
  {
    key: 32,
    dayChapters: ["Psalm 32", "Job 23", "Job 24", "Job 25", "Mark 4"]
  },
  {
    key: 33,
    dayChapters: ["Psalm 33", "Job 26", "Job 27", "Job 28", "Mark 5"]
  },
  {
    key: 34,
    dayChapters: ["Psalm 34", "Job 29", "Job 30", "Job 31", "Mark 6"]
  },
  {
    key: 35,
    dayChapters: ["Psalm 35", "Job 32", "Job 33", "Job 34", "Mark 7"]
  },
  {
    key: 36,
    dayChapters: ["Psalm 36", "Job 35", "Job 36", "Job 37", "Mark 8"]
  },
  {
    key: 37,
    dayChapters: ["Psalm 37", "Job 38", "Job 39", "Job 40", "Mark 9"]
  },
  {
    key: 38,
    dayChapters: ["Psalm 38", "Job 41", "Job 42", "Mark 10"]
  },
  {
    key: 39,
    dayChapters: ["Psalm 39", "Exodus 1", "Exodus 2", "Exodus 3", "Mark 11"]
  },
  {
    key: 40,
    dayChapters: ["Psalm 40", "Exodus 4", "Exodus 5", "Exodus 6", "Mark 12"]
  },
  {
    key: 41,
    dayChapters: ["Psalm 41", "Exodus 7", "Exodus 8", "Exodus 9", "Mark 13"]
  },
  {
    key: 42,
    dayChapters: ["Psalm 42", "Exodus 10", "Exodus 11", "Exodus 12", "Mark 14"]
  },
  {
    key: 43,
    dayChapters: ["Psalm 43", "Exodus 13", "Exodus 14", "Exodus 15", "Mark 15"]
  },
  {
    key: 44,
    dayChapters: ["Psalm 44", "Exodus 16", "Exodus 17", "Exodus 18", "Mark 16"]
  },
  {
    key: 45,
    dayChapters: ["Psalm 45", "Exodus 19", "Exodus 20", "Exodus 21" ,"Luke 1" ]
  },
  {
    key: 46,
    dayChapters: ["Psalm 46", "Exodus 22", "Exodus 23", "Exodus 24" ,"Luke 2"]
  },
  {
    key: 47,
    dayChapters: ["Psalm 47", "Exodus 25", "Exodus 26", "Exodus 27" , "Luke 3"]
  },
  {
    key: 48,
    dayChapters: ["Psalm 48", "Exodus 28", "Exodus 29", "Exodus 30" , "Luke 4"]
  }, {
    key: 49,
    dayChapters: ["Psalm 49", "Exodus 31", "Exodus 32", "Exodus 33" ,"Luke 5"]
  }, {
    key: 50,
    dayChapters: ["Psalm 50", "Exodus 34", "Exodus 35", "Exodus 36", "Luke 6"]
  }, {
    key: 51,
    dayChapters: ["Psalm 51", "Exodus 37", "Exodus 38", "Exodus 39" , "Luke 7"]
  },
  {
    key: 52,
    dayChapters: ["Psalm 52", "Leviticus 1" , "Leviticus 2" , "Exodus 40" , "Luke 8"]
  },
  {
    key: 53,
    dayChapters: ["Psalm 53", "Leviticus 3" , "Leviticus 4" ,  "Proverbs 1" , "Luke 9"]
  }, {
    key: 54,
    dayChapters: ["Psalm 54", "Leviticus 5" , "Leviticus 6" ,  "Proverbs 2" , "Luke 10"]
  }, {
    key: 55,
    dayChapters: ["Psalm 55", "Leviticus 7" , "Leviticus 8" , "Proverbs 3" , "Luke 11"]
  }, {
    key: 56,
    dayChapters: ["Psalm 56", "Leviticus 9" , "Leviticus 10" , "Proverbs 4" ,  "Luke 12"]
  }, {
    key: 57,
    dayChapters: ["Psalm 57", "Leviticus 11" , "Leviticus 12" , "Proverbs 5" , "Luke 13"]
  }, {
    key: 58,
    dayChapters: ["Psalm 58", "Leviticus 13" , "Leviticus 14" , "Proverbs 6" , "Luke 14"]
  }, {
    key: 59,
    dayChapters: ["Psalm 59", "Leviticus 15" , "Leviticus 16" , "Proverbs 7" , "Luke 15"]
  }, {
    key: 60,
    dayChapters: ["Psalm 60", "Leviticus 17" , "Leviticus 18" , "Proverbs 8" , "Luke 16"]
  }, {
    key: 61,
    dayChapters: ["Psalm 61", "Leviticus 19" , "Leviticus 20" , "Proverbs 9" , "Luke 17"]
  }, {
    key: 62,
    dayChapters: ["Psalm 62",  "Leviticus 21" , "Leviticus 22" , "Proverbs 10" , "Luke 18"]
  }, {
    key: 63,
    dayChapters: ["Psalm 63", "Leviticus 23" , "Leviticus 24", "Proverbs 11" , "Luke 19"]
  }, {
    key: 64,
    dayChapters: ["Psalm 64", "Leviticus 25" , "Leviticus 26", "Proverbs 12" , "Luke 20"]
  }, {
    key: 65,
    dayChapters: ["Psalm 65", "Leviticus 27" , "Proverbs 13" , "Luke 21"]
  },
  {
    key: 66,
    dayChapters: ["Psalm 66", "Numbers 1" , "Numbers 2" , "Proverbs 14" , "Luke 22"]
  }, {
    key: 67,
    dayChapters: ["Psalm 67", "Numbers 3" , "Numbers 4" ,  "Proverbs 15"  ,  "Luke 23"]
  },
  {
    key: 68,
    dayChapters: ["Psalm 68", "Numbers 5" , "Numbers 6" , "Proverbs 16" , "Luke 24"]
  },{
    key: 69,
    dayChapters: ["Psalm 69" , "Numbers 7" , "Numbers 8" ,  "Proverbs 17" , "John 1"]
  },{
    key: 70,
    dayChapters: [ "Psalm 70" ,  "Numbers 9" , "Numbers 10" , "Proverbs 18" , "John 2"]
  },
  {
    key: 71,
    dayChapters: ["Psalm 71" ,  "Numbers 11" , "Numbers 12" ,  "Proverbs 19" , "John 3"]
  },{
    key: 72,
    dayChapters: ["Psalm 72" ,  "Numbers 13" , "Numbers 14" , "Proverbs 20" , "John 4"]
  },{
    key: 73,
    dayChapters: ["Psalm 73" , "Numbers 15" , "Numbers 16",  "Proverbs 21" , "John 5"]
  },{
    key: 74,
    dayChapters: ["Psalm 74" , "Numbers 17" , "Numbers 18" ,  "Proverbs 22" , "John 6"]
  },{
    key: 75,
    dayChapters: ["Psalm 75" , "Numbers 19" , "Numbers 20" ,  "Proverbs 23" , "John 7"]
  },{
    key: 76,
    dayChapters: ["Psalm 76" , "Numbers 21" , "Numbers 22",  "Proverbs 24" , "John 8"]
  },{
    key: 77,
    dayChapters: ["Psalm 77", "Numbers 23" , "Numbers 24",  "Proverbs 25" , "John 9"]
  },{
    key: 78,
    dayChapters: ["Psalm 78" ,  "Numbers 25" , "Numbers 26",  "Proverbs 26" , "John 10"]
  },
  {
    key: 79,
    dayChapters: ["Psalm 79" , "Numbers 27" , "Numbers 28" ,  "Proverbs 27" ,"John 11"]
  },
  {
    key: 80,
    dayChapters: ["Psalm 80" , "Numbers 29" , "Numbers 30" , "Proverbs 28" , "John 12"]
  },{
    key: 81,
    dayChapters: ["Psalm 81" , "Numbers 31" , "Numbers 32" ,  "Proverbs 29" , "John 13"]
  },
  {
    key: 81,
    dayChapters: ["Psalm 81"  , "Numbers 33" , "Numbers 34" , "Proverbs 30" , "John 14"]
  },{
    key: 82,
    dayChapters: ["Psalm 82" , "Numbers 35" , "Numbers 36" ,  "Proverbs 31" , "John 15"]
  },{
    key: 83,
    dayChapters: ["Psalm 83" , "Deuteronomy 1" , "Deuteronomy 2" , "John 16"]
  },{
    key: 84,
    dayChapters: ["Psalm 84" , "Deuteronomy 3" , "Deuteronomy 4" , "John 17"]
  },{
    key: 85,
    dayChapters: ["Psalm 85" , "Deuteronomy 5" , "Deuteronomy 6" , "John 18"]
  },{
    key: 86,
    dayChapters: ["Psalm 86" , "Deuteronomy 7" , "Deuteronomy 8" , "John 19"]
  },{
    key: 87,
    dayChapters: ["Psalm 87" , "Deuteronomy 9" , "Deuteronomy 10" ,  "John 20"]
  },{
    key: 88,
    dayChapters: ["Psalm 88" , "Deuteronomy 11" , "Deuteronomy 12" ,  "John 21"]
  },{
    key: 89,
    dayChapters: ["Psalm 89" , "Deuteronomy 13" , "Deuteronomy 14" , "Acts 1"]
  },{
    key: 90,
    dayChapters: ["Psalm 90" , "Deuteronomy 15" , "Deuteronomy 16" , "Acts 2"]
  },{
    key: 91,
    dayChapters: ["Psalm 91" , "Deuteronomy 17" , "Deuteronomy 18" , "Acts 3"]
  },{
    key: 92,
    dayChapters: ["Psalm 92" , "Deuteronomy 19" , "Deuteronomy 20" , "Acts 4"]
  },{
    key: 93,
    dayChapters: ["Psalm 93" , "Deuteronomy 21" , "Deuteronomy 22", "Acts 5"]
  },{
    key: 94,
    dayChapters: ["Psalm 94", "Deuteronomy 23" , "Deuteronomy 24" , "Acts 6"]
  },{
    key: 95,
    dayChapters: ["Psalm 95", "Deuteronomy 25" , "Deuteronomy 26" , "Acts 7"]
  },{
    key: 96,
    dayChapters: ["Psalm 96" , "Deuteronomy 27" , "Deuteronomy 28" , "Acts 8"]
  },{
    key: 97,
    dayChapters: ["Psalm 97" , "Deuteronomy 29" , "Deuteronomy 30" , "Acts 9"]
  },{
    key: 98,
    dayChapters: ["Psalm 98" , "Deuteronomy 31" , "Deuteronomy 32" , "Acts 10"]
  },{
    key: 99,
    dayChapters: ["Psalm 99" , "Deuteronomy 33" , "Deuteronomy 34" , "Acts 11"]
  },
  {
    key: 100,
    dayChapters: ["Psalm 100" , "Acts 12"]
  },
  {
    key: 101,
    dayChapters: ["Psalm 101" , "Acts 13"]
  },
  {
    key: 102,
    dayChapters: ["Psalm 102" , "Acts 14"]
  },
  {
    key: 103,
    dayChapters: ["Psalm 103" , "Acts 15"]
  },
  {
    key: 104,
    dayChapters: ["Psalm 104" , "Acts 16"]
  },
  {
    key: 105,
    dayChapters: ["Psalm 105" , "Acts 17"]
  },
  {
    key: 106,
    dayChapters: ["Psalm 106" , "Acts 18"]
  },
  {
    key: 107,
    dayChapters: ["Psalm 107" , "Acts 19"]
  },
  {
    key: 108,
    dayChapters: ["Psalm 108" , "Acts 20"]
  },
  {
    key: 109,
    dayChapters: ["Psalm 109" , "Acts 21"]
  },
  {
    key: 110,
    dayChapters: ["Psalm 110" , "Acts 22"]
  },
  {
    key: 112,
    dayChapters: ["Psalm 112" , "Acts 23"]
  },
  {
    key: 113,
    dayChapters: ["Psalm 113" , "Acts 24"]
  },
  {
    key: 114,
    dayChapters: ["Psalm 114" , "Acts 25"]
  },
  {
    key: 114,
    dayChapters: ["Psalm 100" , "Acts 26"]
  },
  {
    key: 115,
    dayChapters: ["Psalm 115" , "Acts 27"]
  },
  {
    key: 116,
    dayChapters: ["Psalm 116" , "Acts 28"]
  },
  {
    key: 117,
    dayChapters: ["Psalm 117" ]
  },
  {
    key: 118,
    dayChapters: ["Psalm 118" ]
  },
  {
    key: 119,
    dayChapters: ["Psalm 119" ]
  },
  {
    key: 120,
    dayChapters: ["Psalm 120" ]
  },
  {
    key: 121,
    dayChapters: ["Psalm 121" ]
  },
  {
    key: 122,
    dayChapters: ["Psalm 122" ]
  },
  {
    key: 123,
    dayChapters: ["Psalm 123" ]
  },
  {
    key: 124,
    dayChapters: ["Psalm 124" ]
  },
  {
    key: 125,
    dayChapters: ["Psalm 125" ]
  },
  {
    key: 126,
    dayChapters: ["Psalm 118" ]
  },
  {
    key: 127,
    dayChapters: ["Psalm 127" ]
  },
  {
    key: 118,
    dayChapters: ["Psalm 118" ]
  },
  {
    key: 118,
    dayChapters: ["Psalm 118" ]
  },
  {
    key: 118,
    dayChapters: ["Psalm 118"]
  },

];
export const checkedList = _.times(365, _.constant([false]));
export const ArabicContent = [
  {
    key: 1,
    dayChapters: ["مزامير 1", "تكوين 1", "متى 1"]
  }
];
