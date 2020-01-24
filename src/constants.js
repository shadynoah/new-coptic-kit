import _ from "lodash";
export const content = [
  {
    key: 1,
    dayChapters: ["Psalm 1", "Genesis 1", "Matthew 1"]
  },
  {
    key: 2,
    dayChapters: ["Psalm 2", "Matthew 2", "Genesis 2", "Genesis 3", "Genesis 4"]
  },
  {
    key: 3,
    dayChapters: ["Psalm 3", "Matthew 3", "Genesis 4", "Genesis 5", "Genesis 6"]
  },
  {
    key: 4,
    dayChapters: [
      "Proverbs 1",
      "Matthew 4",
      "Genesis 7",
      "Genesis 8",
      "Genesis 9"
    ]
  },
  {
    key: 5,
    dayChapters: ["Psalm 4", "Matthew 5", "Genesis 10", "Genesis 11"]
  },
  {
    key: 6,
    dayChapters: ["Psalm 5", "Genesis 12", "Genesis 13"]
  },
  {
    key: 7,
    dayChapters: [
      "Psalm 6",
      "Matthew 6",
      "Genesis 14",
      "Genesis 15",
      "Genesis 16"
    ]
  },
  {
    key: 8,
    dayChapters: ["Matthew 7", "Genesis 17", "Genesis 18"]
  },
  {
    key: 9,
    dayChapters: ["Psalm 7", "Matthew 8", "Genesis 19", "Genesis 20"]
  },
  {
    key: 10,
    dayChapters: ["Matthew 9", "Genesis 21", "Genesis 22", "Genesis 23"]
  },
  {
    key: 11,
    dayChapters: ["Psalm 8", "Genesis 24"]
  },
  {
    key: 12,
    dayChapters: ["Matthew 10", "Genesis 25", "Genesis 26"]
  },
  {
    key: 13,
    dayChapters: ["Matthew 11","Genesis 27", "Genesis 28"]
  },{
    key: 14,
    dayChapters: ["Psalm 9","Genesis 29", "Genesis 30"]
  },
  {
    key: 15,
    dayChapters: ["Matthew 12","Genesis 31"]   
  },
  {
    key: 16,
    dayChapters: ["Proverbs 2","Genesis 32" , "Genesis 33"]
  },
  {
    key: 17,
    dayChapters: ["Psalm 10","Matthew 13" , "Genesis 34" , "Genesis 35"]
  }
];
export const checkedList = _.times(365, _.constant([false]));
