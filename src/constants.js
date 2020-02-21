import _ from "lodash";
export const content = [
  {
    key: 1,
    dayChapters: ["Psalm 1",  "Genesis 1", "Genesis 2", "Matthew 1", "Judges 1"]
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
    dayChapters: ["Psalm 45", "Exodus 19", "Exodus 20", "Exodus 21", "Luke 1"]
  },
  {
    key: 46,
    dayChapters: ["Psalm 46", "Exodus 22", "Exodus 23", "Exodus 24", "Luke 2"]
  },
  {
    key: 47,
    dayChapters: ["Psalm 47", "Exodus 25", "Exodus 26", "Exodus 27", "Luke 3"]
  },
  {
    key: 48,
    dayChapters: ["Psalm 48", "Exodus 28", "Exodus 29", "Exodus 30", "Luke 4"]
  },
  {
    key: 49,
    dayChapters: ["Psalm 49", "Exodus 31", "Exodus 32", "Exodus 33", "Luke 5"]
  },
  {
    key: 50,
    dayChapters: ["Psalm 50", "Exodus 34", "Exodus 35", "Exodus 36", "Luke 6"]
  },
  {
    key: 51,
    dayChapters: ["Psalm 51", "Exodus 37", "Exodus 38", "Exodus 39", "Luke 7"]
  },
  {
    key: 52,
    dayChapters: [
      "Psalm 52",
      "Leviticus 1",
      "Leviticus 2",
      "Exodus 40",
      "Luke 8"
    ]
  },
  {
    key: 53,
    dayChapters: [
      "Psalm 53",
      "Leviticus 3",
      "Leviticus 4",
      "Proverbs 1",
      "Luke 9"
    ]
  },
  {
    key: 54,
    dayChapters: [
      "Psalm 54",
      "Leviticus 5",
      "Leviticus 6",
      "Proverbs 2",
      "Luke 10"
    ]
  },
  {
    key: 55,
    dayChapters: [
      "Psalm 55",
      "Leviticus 7",
      "Leviticus 8",
      "Proverbs 3",
      "Luke 11"
    ]
  },
  {
    key: 56,
    dayChapters: [
      "Psalm 56",
      "Leviticus 9",
      "Leviticus 10",
      "Proverbs 4",
      "Luke 12"
    ]
  },
  {
    key: 57,
    dayChapters: [
      "Psalm 57",
      "Leviticus 11",
      "Leviticus 12",
      "Proverbs 5",
      "Luke 13"
    ]
  },
  {
    key: 58,
    dayChapters: [
      "Psalm 58",
      "Leviticus 13",
      "Leviticus 14",
      "Proverbs 6",
      "Luke 14"
    ]
  },
  {
    key: 59,
    dayChapters: [
      "Psalm 59",
      "Leviticus 15",
      "Leviticus 16",
      "Proverbs 7",
      "Luke 15"
    ]
  },
  {
    key: 60,
    dayChapters: [
      "Psalm 60",
      "Leviticus 17",
      "Leviticus 18",
      "Proverbs 8",
      "Luke 16"
    ]
  },
  {
    key: 61,
    dayChapters: [
      "Psalm 61",
      "Leviticus 19",
      "Leviticus 20",
      "Proverbs 9",
      "Luke 17"
    ]
  },
  {
    key: 62,
    dayChapters: [
      "Psalm 62",
      "Leviticus 21",
      "Leviticus 22",
      "Proverbs 10",
      "Luke 18"
    ]
  },
  {
    key: 63,
    dayChapters: [
      "Psalm 63",
      "Leviticus 23",
      "Leviticus 24",
      "Proverbs 11",
      "Luke 19"
    ]
  },
  {
    key: 64,
    dayChapters: [
      "Psalm 64",
      "Leviticus 25",
      "Leviticus 26",
      "Proverbs 12",
      "Luke 20"
    ]
  },
  {
    key: 65,
    dayChapters: ["Psalm 65", "Leviticus 27", "Proverbs 13", "Luke 21"]
  },
  {
    key: 66,
    dayChapters: [
      "Psalm 66",
      "Numbers 1",
      "Numbers 2",
      "Proverbs 14",
      "Luke 22"
    ]
  },
  {
    key: 67,
    dayChapters: [
      "Psalm 67",
      "Numbers 3",
      "Numbers 4",
      "Proverbs 15",
      "Luke 23"
    ]
  },
  {
    key: 68,
    dayChapters: [
      "Psalm 68",
      "Numbers 5",
      "Numbers 6",
      "Proverbs 16",
      "Luke 24"
    ]
  },
  {
    key: 69,
    dayChapters: ["Psalm 69", "Numbers 7", "Numbers 8", "Proverbs 17", "John 1"]
  },
  {
    key: 70,
    dayChapters: [
      "Psalm 70",
      "Numbers 9",
      "Numbers 10",
      "Proverbs 18",
      "John 2"
    ]
  },
  {
    key: 71,
    dayChapters: [
      "Psalm 71",
      "Numbers 11",
      "Numbers 12",
      "Proverbs 19",
      "John 3"
    ]
  },
  {
    key: 72,
    dayChapters: [
      "Psalm 72",
      "Numbers 13",
      "Numbers 14",
      "Proverbs 20",
      "John 4"
    ]
  },
  {
    key: 73,
    dayChapters: [
      "Psalm 73",
      "Numbers 15",
      "Numbers 16",
      "Proverbs 21",
      "John 5"
    ]
  },
  {
    key: 74,
    dayChapters: [
      "Psalm 74",
      "Numbers 17",
      "Numbers 18",
      "Proverbs 22",
      "John 6"
    ]
  },
  {
    key: 75,
    dayChapters: [
      "Psalm 75",
      "Numbers 19",
      "Numbers 20",
      "Proverbs 23",
      "John 7"
    ]
  },
  {
    key: 76,
    dayChapters: [
      "Psalm 76",
      "Numbers 21",
      "Numbers 22",
      "Proverbs 24",
      "John 8"
    ]
  },
  {
    key: 77,
    dayChapters: [
      "Psalm 77",
      "Numbers 23",
      "Numbers 24",
      "Proverbs 25",
      "John 9"
    ]
  },
  {
    key: 78,
    dayChapters: [
      "Psalm 78",
      "Numbers 25",
      "Numbers 26",
      "Proverbs 26",
      "John 10"
    ]
  },
  {
    key: 79,
    dayChapters: [
      "Psalm 79",
      "Numbers 27",
      "Numbers 28",
      "Proverbs 27",
      "John 11"
    ]
  },
  {
    key: 80,
    dayChapters: [
      "Psalm 80",
      "Numbers 29",
      "Numbers 30",
      "Proverbs 28",
      "John 12"
    ]
  },
  {
    key: 81,
    dayChapters: [
      "Psalm 81",
      "Numbers 31",
      "Numbers 32",
      "Proverbs 29",
      "John 13"
    ]
  },
  {
    key: 82,
    dayChapters: [
      "Psalm 82",
      "Numbers 33",
      "Numbers 34",
      "Proverbs 30",
      "John 14"
    ]
  },
  {
    key: 83,
    dayChapters: [
      "Psalm 83",
      "Numbers 35",
      "Numbers 36",
      "Proverbs 31",
      "John 15"
    ]
  },
  {
    key: 84,
    dayChapters: ["Psalm 84", "Deuteronomy 1", "Deuteronomy 2", "John 16"]
  },
  {
    key: 85,
    dayChapters: ["Psalm 85", "Deuteronomy 3", "Deuteronomy 4", "John 17"]
  },
  {
    key: 86,
    dayChapters: ["Psalm 86", "Deuteronomy 5", "Deuteronomy 6", "John 18"]
  },
  {
    key: 87,
    dayChapters: ["Psalm 87", "Deuteronomy 7", "Deuteronomy 8", "John 19"]
  },
  {
    key: 88,
    dayChapters: ["Psalm 88", "Deuteronomy 9", "Deuteronomy 10", "John 20"]
  },
  {
    key: 89,
    dayChapters: ["Psalm 89", "Deuteronomy 11", "Deuteronomy 12", "John 21"]
  },
  {
    key: 90,
    dayChapters: ["Psalm 90", "Deuteronomy 13", "Deuteronomy 14", "Acts 1"]
  },
  {
    key: 91,
    dayChapters: ["Psalm 91", "Deuteronomy 15", "Deuteronomy 16", "Acts 2"]
  },
  {
    key: 92,
    dayChapters: ["Psalm 92", "Deuteronomy 17", "Deuteronomy 18", "Acts 3"]
  },
  {
    key: 93,
    dayChapters: ["Psalm 93", "Deuteronomy 19", "Deuteronomy 20", "Acts 4"]
  },
  {
    key: 94,
    dayChapters: ["Psalm 94", "Deuteronomy 21", "Deuteronomy 22", "Acts 5"]
  },
  {
    key: 95,
    dayChapters: ["Psalm 95", "Deuteronomy 23", "Deuteronomy 24", "Acts 6"]
  },
  {
    key: 96,
    dayChapters: ["Psalm 96", "Deuteronomy 25", "Deuteronomy 26", "Acts 7"]
  },
  {
    key: 97,
    dayChapters: ["Psalm 97", "Deuteronomy 27", "Deuteronomy 28", "Acts 8"]
  },
  {
    key: 98,
    dayChapters: ["Psalm 98", "Deuteronomy 29", "Deuteronomy 30", "Acts 9"]
  },
  {
    key: 99,
    dayChapters: ["Psalm 99", "Deuteronomy 31", "Deuteronomy 32", "Acts 10"]
  },
  {
    key: 100,
    dayChapters: ["Psalm 100", "Deuteronomy 33", "Deuteronomy 34", "Acts 11"]
  },
  {
    key: 101,
    dayChapters: ["Psalm 101", "Acts 12"]
  },
  {
    key: 102,
    dayChapters: ["Psalm 102", "Acts 13"]
  },
  {
    key: 103,
    dayChapters: ["Psalm 103", "Acts 14"]
  },
  {
    key: 104,
    dayChapters: ["Psalm 104", "Acts 15"]
  },
  {
    key: 105,
    dayChapters: ["Psalm 105", "Acts 16"]
  },
  {
    key: 106,
    dayChapters: ["Psalm 106", "Acts 17"]
  },
  {
    key: 107,
    dayChapters: ["Psalm 107", "Acts 18"]
  },
  {
    key: 108,
    dayChapters: ["Psalm 108", "Acts 19"]
  },
  {
    key: 109,
    dayChapters: ["Psalm 109", "Acts 20"]
  },
  {
    key: 110,
    dayChapters: ["Psalm 110", "Acts 21"]
  },
  {
    key: 111,
    dayChapters: ["Psalm 111", "Acts 22"]
  },
  {
    key: 112,
    dayChapters: ["Psalm 112", "Acts 23"]
  },
  {
    key: 113,
    dayChapters: ["Psalm 113", "Acts 23"]
  },
  {
    key: 114,
    dayChapters: ["Psalm 114", "Acts 24"]
  },
  {
    key: 115,
    dayChapters: ["Psalm 115", "Acts 25"]
  },
  {
    key: 116,
    dayChapters: ["Psalm 116", "Acts 26"]
  },
  {
    key: 117,
    dayChapters: ["Psalm 117", "Acts 27"]
  },
  {
    key: 118,
    dayChapters: ["Psalm 118", "Acts 28"]
  },
  {
    key: 119,
    dayChapters: ["Psalm 119:1-16"]
  },
  {
    key: 120,
    dayChapters: ["Psalm 119"]
    // dayChapters: ["Psalm 119:17-32"]
  },
  {
    key: 121,
    dayChapters: ["Psalm 119:33-56"]
  },
  {
    key: 122,
    dayChapters: ["Psalm 119:57-72"]
  },
  {
    key: 123,
    dayChapters: ["Psalm 119:73-88"]
  },
  {
    key: 124,
    dayChapters: ["Psalm 119:89-104"]
  },
  {
    key: 125,
    dayChapters: ["Psalm 119:105-120"]
  },
  {
    key: 126,
    dayChapters: ["Psalm 119:121-136"]
  },
  {
    key: 127,
    dayChapters: ["Psalm 119:137-152"]
  },
  {
    key: 128,
    dayChapters: ["Psalm 119:153-176"]
  },
  {
    key: 129,
    dayChapters: ["Psalm 120"]
  },
  {
    key: 130,
    dayChapters: ["Psalm 121"]
  },
  {
    key: 131,
    dayChapters: ["Psalm 122"]
  },
  {
    key: 132,
    dayChapters: ["Psalm 123"]
  },
  {
    key: 133,
    dayChapters: ["Psalm 124"]
  },
  {
    key: 134,
    dayChapters: ["Psalm 125"]
  },
  {
    key: 135,
    dayChapters: ["Psalm 126"]
  },
  {
    key: 136,
    dayChapters: ["Psalm 127"]
  },
  {
    key: 137,
    dayChapters: ["Psalm 128"]
  },
  {
    key: 138,
    dayChapters: ["Psalm 129"]
  },
  {
    key: 139,
    dayChapters: ["Psalm 130"]
  },
  {
    key: 140,
    dayChapters: ["Psalm 131"]
  },
  {
    key: 141,
    dayChapters: ["Psalm 132"]
  },
  {
    key: 142,
    dayChapters: ["Psalm 133"]
  },
  {
    key: 143,
    dayChapters: ["Psalm 134"]
  },
  {
    key: 144,
    dayChapters: ["Psalm 135"]
  },
  {
    key: 145,
    dayChapters: ["Psalm 136"]
  },
  {
    key: 146,
    dayChapters: ["Psalm 137"]
  },
  {
    key: 147,
    dayChapters: ["Psalm 138"]
  },
  {
    key: 148,
    dayChapters: ["Psalm 139"]
  },
  {
    key: 149,
    dayChapters: ["Psalm 140"]
  },
  {
    key: 150,
    dayChapters: ["Psalm 141"]
  },
  {
    key: 151,
    dayChapters: ["Psalm 142"]
  },
  {
    key: 152,
    dayChapters: ["Psalm 143"]
  },
  {
    key: 153,
    dayChapters: ["Psalm 144"]
  },
  {
    key: 154,
    dayChapters: ["Psalm 145"]
  },
  {
    key: 155,
    dayChapters: ["Psalm 146"]
  },
  {
    key: 156,
    dayChapters: ["Psalm 147"]
  },
  {
    key: 157,
    dayChapters: ["Psalm 148"]
  },
  {
    key: 158,
    dayChapters: ["Psalm 149"]
  },
  {
    key: 159,
    dayChapters: ["Psalm 150"]
  },
  {
    key: 160,
    dayChapters: ["Proverbs 1:1-19"]
  },
  {
    key: 161,
    dayChapters: ["Proverbs 1:20-33"]
  },
  {
    key: 162,
    dayChapters: ["Proverbs 2"]
  },
  {
    key: 163,
    dayChapters: ["Proverbs 3:1-17"]
  },
  {
    key: 164,
    dayChapters: ["Proverbs 3:18-35"]
  },
  {
    key: 165,
    dayChapters: ["Proverbs 4"]
  },
  {
    key: 166,
    dayChapters: ["Proverbs 5"]
  },
  {
    key: 167,
    dayChapters: ["Proverbs 6:1-17"]
  },
  {
    key: 168,
    dayChapters: ["Proverbs 6:18-35"]
  },
  {
    key: 169,
    dayChapters: ["Proverbs 7:1-13"]
  },
  {
    key: 170,
    dayChapters: ["Proverbs 7:13-27"]
  },
  {
    key: 171,
    dayChapters: ["Proverbs 7:1-17"]
  },
  {
    key: 172,
    dayChapters: ["Proverbs 7:18-27"]
  },
  {
    key: 173,
    dayChapters: ["Proverbs 8:1-17"]
  },
  {
    key: 174,
    dayChapters: ["Proverbs 8:18-36"]
  },
  {
    key: 175,
    dayChapters: ["Proverbs 9"]
  },
  {
    key: 176,
    dayChapters: ["Proverbs 10:1-16"]
  },
  {
    key: 177,
    dayChapters: ["Proverbs 10:17-31"]
  },
  {
    key: 178,
    dayChapters: ["Proverbs 11:1-15"]
  },
  {
    key: 179,
    dayChapters: ["Proverbs 11:16-31"]
  },
  {
    key: 180,
    dayChapters: ["Proverbs 12:1-14"]
  },
  {
    key: 181,
    dayChapters: ["Proverbs 12:15-28"]
  },
  {
    key: 182,
    dayChapters: ["Proverbs 13"]
  },
  {
    key: 183,
    dayChapters: ["Proverbs 14:1-17"]
  },
  {
    key: 184,
    dayChapters: ["Proverbs 14:18-35"]
  },
  {
    key: 185,
    dayChapters: ["Proverbs 15:1-16"]
  },
  {
    key: 186,
    dayChapters: ["Proverbs 15:17-33"]
  },
  {
    key: 187,
    dayChapters: ["Proverbs 16:1-16"]
  },
  {
    key: 188,
    dayChapters: ["Proverbs 16:17-33"]
  },
  {
    key: 189,
    dayChapters: ["Proverbs 17"]
  },
  {
    key: 190,
    dayChapters: ["Proverbs 18"]
  },
  {
    key: 191,
    dayChapters: ["Proverbs 19"]
  },
  {
    key: 192,
    dayChapters: ["Proverbs 20:1-15"]
  },
  {
    key: 193,
    dayChapters: ["Proverbs 20:16-30"]
  },
  {
    key: 194,
    dayChapters: ["Proverbs 21:1-15"]
  },
  {
    key: 195,
    dayChapters: ["Proverbs 21:16-31"]
  },
  {
    key: 196,
    dayChapters: ["Proverbs 22"]
  },
  {
    key: 197,
    dayChapters: ["Proverbs 23:1-17"]
  },
  {
    key: 198,
    dayChapters: ["Proverbs 23:18-35"]
  },
  {
    key: 199,
    dayChapters: ["Proverbs 24"]
  },
  {
    key: 200,
    dayChapters: ["Proverbs 25"]
  },
  {
    key: 201,
    dayChapters: ["Proverbs 26"]
  },
  {
    key: 202,
    dayChapters: ["Proverbs 27"]
  },
  {
    key: 203,
    dayChapters: ["Proverbs 28"]
  },
  {
    key: 204,
    dayChapters: ["Proverbs 29"]
  },
  {
    key: 205,
    dayChapters: ["Proverbs 30"]
  },
  {
    key: 206,
    dayChapters: ["Proverbs 31"]
  },
  {
    key: 207,
    dayChapters: ["Psalm 1"]
  },
  {
    key: 208,
    dayChapters: ["Psalm 2"]
  },
  {
    key: 209,
    dayChapters: ["Psalm 3"]
  },
  {
    key: 210,
    dayChapters: ["Psalm 4"]
  },
  {
    key: 211,
    dayChapters: ["Psalm 5"]
  },
  {
    key: 212,
    dayChapters: ["Psalm 6"]
  },
  {
    key: 213,
    dayChapters: ["Psalm 7"]
  },
  {
    key: 214,
    dayChapters: ["Psalm 8"]
  },
  {
    key: 215,
    dayChapters: ["Psalm 9"]
  },
  {
    key: 216,
    dayChapters: ["Psalm 10"]
  },
  {
    key: 217,
    dayChapters: ["Psalm 11"]
  },
  {
    key: 218,
    dayChapters: ["Psalm 12"]
  },
  {
    key: 219,
    dayChapters: ["Psalm 13"]
  },
  {
    key: 220,
    dayChapters: ["Psalm 14"]
  },
  {
    key: 221,
    dayChapters: ["Psalm 15"]
  },
  {
    key: 222,
    dayChapters: ["Psalm 16"]
  },
  {
    key: 223,
    dayChapters: ["Psalm 17"]
  },
  {
    key: 224,
    dayChapters: ["Psalm 18"]
  },
  {
    key: 225,
    dayChapters: ["Psalm 19"]
  },
  {
    key: 226,
    dayChapters: ["Psalm 20"]
  },
  {
    key: 227,
    dayChapters: ["Psalm 21"]
  },
  {
    key: 228,
    dayChapters: ["Psalm 22"]
  },
  {
    key: 229,
    dayChapters: ["Psalm 23"]
  },
  {
    key: 230,
    dayChapters: ["Psalm 24"]
  },
  {
    key: 231,
    dayChapters: ["Psalm 25"]
  },
  {
    key: 232,
    dayChapters: ["Psalm 26"]
  },
  {
    key: 233,
    dayChapters: ["Psalm 27"]
  },
  {
    key: 234,
    dayChapters: ["Psalm 28"]
  },
  {
    key: 235,
    dayChapters: ["Psalm 29"]
  },
  {
    key: 236,
    dayChapters: ["Psalm 30"]
  },
  {
    key: 237,
    dayChapters: ["Psalm 31"]
  },
  {
    key: 238,
    dayChapters: ["Psalm 32"]
  },
  {
    key: 239,
    dayChapters: ["Psalm 33"]
  },
  {
    key: 240,
    dayChapters: ["Psalm 34"]
  },
  {
    key: 241,
    dayChapters: ["Psalm 35"]
  },
  {
    key: 242,
    dayChapters: ["Psalm 36"]
  },
  {
    key: 243,
    dayChapters: ["Psalm 37"]
  },
  {
    key: 244,
    dayChapters: ["Psalm 38"]
  },
  {
    key: 245,
    dayChapters: ["Psalm 39"]
  },
  {
    key: 246,
    dayChapters: ["Psalm 40"]
  },
  {
    key: 247,
    dayChapters: ["Psalm 41"]
  },
  {
    key: 248,
    dayChapters: ["Psalm 42"]
  },
  {
    key: 249,
    dayChapters: ["Psalm 43"]
  },
  {
    key: 250,
    dayChapters: ["Psalm 44"]
  },
  {
    key: 251,
    dayChapters: ["Psalm 45"]
  },
  {
    key: 252,
    dayChapters: ["Psalm 46"]
  },
  {
    key: 253,
    dayChapters: ["Psalm 47"]
  },
  {
    key: 254,
    dayChapters: ["Psalm 48"]
  },
  {
    key: 255,
    dayChapters: ["Psalm 49"]
  },
  {
    key: 256,
    dayChapters: ["Psalm 50"]
  },
  {
    key: 257,
    dayChapters: ["Psalm 51"]
  },
  {
    key: 258,
    dayChapters: ["Psalm 52"]
  },
  {
    key: 259,
    dayChapters: ["Psalm 53"]
  },
  {
    key: 260,
    dayChapters: ["Psalm 54"]
  },
  {
    key: 261,
    dayChapters: ["Psalm 55"]
  },
  {
    key: 262,
    dayChapters: ["Psalm 56"]
  },
  {
    key: 263,
    dayChapters: ["Psalm 57"]
  },
  {
    key: 264,
    dayChapters: ["Psalm 58"]
  },
  {
    key: 265,
    dayChapters: ["Psalm 59"]
  },
  {
    key: 266,
    dayChapters: ["Psalm 60"]
  },
  {
    key: 267,
    dayChapters: ["Psalm 61"]
  },
  {
    key: 268,
    dayChapters: ["Psalm 62"]
  },
  {
    key: 269,
    dayChapters: ["Psalm 63"]
  },
  {
    key: 270,
    dayChapters: ["Psalm 64"]
  },
  {
    key: 271,
    dayChapters: ["Psalm 65"]
  },
  {
    key: 272,
    dayChapters: ["Psalm 66"]
  },
  {
    key: 273,
    dayChapters: ["Psalm 67"]
  },
  {
    key: 274,
    dayChapters: ["Psalm 68"]
  },
  {
    key: 275,
    dayChapters: [
      "Psalm 69",
      "Leviticus 17",
      "Leviticus 18",
      "Proverbs 8",
      "Luke 16"
    ]
  },
  {
    key: 276,
    dayChapters: [
      "Psalm 70",
      "Leviticus 19",
      "Leviticus 20",
      "Proverbs 9",
      "Luke 17"
    ]
  },
  {
    key: 277,
    dayChapters: [
      "Psalm 71",
      "Leviticus 21",
      "Leviticus 22",
      "Proverbs 10",
      "Luke 18"
    ]
  },
  {
    key: 278,
    dayChapters: [
      "Psalm 72",
      "Leviticus 23",
      "Leviticus 24",
      "Proverbs 11",
      "Luke 19"
    ]
  },
  {
    key: 279,
    dayChapters: [
      "Psalm 73",
      "Leviticus 25",
      "Leviticus 26",
      "Proverbs 12",
      "Luke 20"
    ]
  },
  {
    key: 280,
    dayChapters: ["Psalm 74", "Leviticus 27", "Proverbs 13", "Luke 21"]
  },
  {
    key: 281,
    dayChapters: [
      "Psalm 75",
      "Numbers 1",
      "Numbers 2",
      "Proverbs 14",
      "Luke 22"
    ]
  },
  {
    key: 282,
    dayChapters: [
      "Psalm 76",
      "Numbers 3",
      "Numbers 4",
      "Proverbs 15",
      "Luke 23"
    ]
  },
  {
    key: 283,
    dayChapters: [
      "Psalm 77",
      "Numbers 5",
      "Numbers 6",
      "Proverbs 16",
      "Luke 24"
    ]
  },
  {
    key: 284,
    dayChapters: ["Psalm 78", "Numbers 7", "Numbers 8", "Proverbs 17", "John 1"]
  },
  {
    key: 285,
    dayChapters: [
      "Psalm 79",
      "Numbers 9",
      "Numbers 10",
      "Proverbs 18",
      "John 2"
    ]
  },
  {
    key: 286,
    dayChapters: [
      "Psalm 80",
      "Numbers 11",
      "Numbers 12",
      "Proverbs 19",
      "John 3"
    ]
  },
  {
    key: 287,
    dayChapters: [
      "Psalm 81",
      "Numbers 13",
      "Numbers 14",
      "Proverbs 20",
      "John 4"
    ]
  },
  {
    key: 288,
    dayChapters: [
      "Psalm 82",
      "Numbers 15",
      "Numbers 16",
      "Proverbs 21",
      "John 5"
    ]
  },
  {
    key: 289,
    dayChapters: [
      "Psalm 83",
      "Numbers 17",
      "Numbers 18",
      "Proverbs 22",
      "John 6"
    ]
  },
  {
    key: 290,
    dayChapters: [
      "Psalm 84",
      "Numbers 19",
      "Numbers 20",
      "Proverbs 23",
      "John 7"
    ]
  },
  {
    key: 291,
    dayChapters: [
      "Psalm 85",
      "Numbers 21",
      "Numbers 22",
      "Proverbs 24",
      "John 8"
    ]
  },
  {
    key: 292,
    dayChapters: [
      "Psalm 86",
      "Numbers 23",
      "Numbers 24",
      "Proverbs 25",
      "John 9"
    ]
  },
  {
    key: 293,
    dayChapters: [
      "Psalm 87",
      "Numbers 25",
      "Numbers 26",
      "Proverbs 26",
      "John 10"
    ]
  },
  {
    key: 294,
    dayChapters: [
      "Psalm 88",
      "Numbers 27",
      "Numbers 28",
      "Proverbs 27",
      "John 11"
    ]
  },
  {
    key: 295,
    dayChapters: [
      "Psalm 89",
      "Numbers 29",
      "Numbers 30",
      "Proverbs 28",
      "John 12"
    ]
  },
  {
    key: 296,
    dayChapters: [
      "Psalm 90",
      "Numbers 31",
      "Numbers 32",
      "Proverbs 29",
      "John 13"
    ]
  },
  {
    key: 297,
    dayChapters: [
      "Psalm 91",
      "Numbers 33",
      "Numbers 34",
      "Proverbs 30",
      "John 14"
    ]
  },
  {
    key: 298,
    dayChapters: [
      "Psalm 92",
      "Numbers 35",
      "Numbers 36",
      "Proverbs 31",
      "John 15"
    ]
  },
  {
    key: 299,
    dayChapters: ["Psalm 93", "Deuteronomy 1", "Deuteronomy 2", "John 16"]
  },
  {
    key: 300,
    dayChapters: ["Psalm 94", "Deuteronomy 3", "Deuteronomy 4", "John 17"]
  },
  {
    key: 301,
    dayChapters: ["Psalm 95", "Deuteronomy 5", "Deuteronomy 6", "John 18"]
  },
  {
    key: 302,
    dayChapters: ["Psalm 96", "Deuteronomy 7", "Deuteronomy 8", "John 19"]
  },
  {
    key: 303,
    dayChapters: ["Psalm 97", "Deuteronomy 9", "Deuteronomy 10", "John 20"]
  },
  {
    key: 304,
    dayChapters: ["Psalm 98", "Deuteronomy 11", "Deuteronomy 12", "John 21"]
  },
  {
    key: 305,
    dayChapters: ["Psalm 99", "Deuteronomy 13", "Deuteronomy 14", "Acts 1"]
  },
  {
    key: 306,
    dayChapters: ["Psalm 100", "Deuteronomy 15", "Deuteronomy 16", "Acts 2"]
  },
  {
    key: 307,
    dayChapters: ["Psalm 101", "Deuteronomy 17", "Deuteronomy 18", "Acts 3"]
  },
  {
    key: 308,
    dayChapters: ["Psalm 102", "Deuteronomy 19", "Deuteronomy 20", "Acts 4"]
  },
  {
    key: 309,
    dayChapters: ["Psalm 103", "Deuteronomy 21", "Deuteronomy 22", "Acts 5"]
  },
  {
    key: 310,
    dayChapters: ["Psalm 104", "Deuteronomy 23", "Deuteronomy 24", "Acts 6"]
  },
  {
    key: 311,
    dayChapters: ["Psalm 105", "Deuteronomy 25", "Deuteronomy 26", "Acts 7"]
  },
  {
    key: 312,
    dayChapters: ["Psalm 106", "Deuteronomy 27", "Deuteronomy 28", "Acts 8"]
  },
  {
    key: 313,
    dayChapters: ["Psalm 107", "Deuteronomy 29", "Deuteronomy 30", "Acts 9"]
  },
  {
    key: 314,
    dayChapters: ["Psalm 108", "Deuteronomy 31", "Deuteronomy 32", "Acts 10"]
  },
  {
    key: 315,
    dayChapters: ["Psalm 109", "Deuteronomy 33", "Deuteronomy 34", "Acts 11"]
  },
  {
    key: 316,
    dayChapters: ["Psalm 110", "Acts 12"]
  },
  {
    key: 317,
    dayChapters: ["Psalm 111", "Acts 13"]
  },
  {
    key: 318,
    dayChapters: ["Psalm 112", "Acts 14"]
  },
  {
    key: 319,
    dayChapters: ["Psalm 113", "Acts 15"]
  },
  {
    key: 320,
    dayChapters: ["Psalm 114", "Acts 16"]
  },
  {
    key: 321,
    dayChapters: ["Psalm 115", "Acts 17"]
  },
  {
    key: 322,
    dayChapters: ["Psalm 116", "Acts 18"]
  },
  {
    key: 323,
    dayChapters: ["Psalm 117", "Acts 19"]
  },
  {
    key: 324,
    dayChapters: ["Psalm 118", "Acts 20"]
  },
  {
    key: 325,
    dayChapters: ["Psalm 119:1-16"]
  },
  {
    key: 326,
    dayChapters: ["Psalm 119:17-32"]
  },
  {
    key: 327,
    dayChapters: ["Psalm 119:33-56"]
  },
  {
    key: 328,
    dayChapters: ["Psalm 119:57-72"]
  },
  {
    key: 329,
    dayChapters: ["Psalm 119:73-88"]
  },
  {
    key: 330,
    dayChapters: ["Psalm 119:89-104"]
  },
  {
    key: 331,
    dayChapters: ["Psalm 119:105-120"]
  },
  {
    key: 332,
    dayChapters: ["Psalm 119:121-136"]
  },
  {
    key: 333,
    dayChapters: ["Psalm 119:137-152"]
  },
  {
    key: 334,
    dayChapters: ["Psalm 119:153-176"]
  },
  {
    key: 335,
    dayChapters: ["Psalm 120"]
  },
  {
    key: 336,
    dayChapters: ["Psalm 121"]
  },
  {
    key: 337,
    dayChapters: ["Psalm 122"]
  },
  {
    key: 338,
    dayChapters: ["Psalm 123"]
  },
  {
    key: 339,
    dayChapters: ["Psalm 124"]
  },
  {
    key: 340,
    dayChapters: ["Psalm 125"]
  },
  {
    key: 341,
    dayChapters: ["Psalm 126"]
  },
  {
    key: 342,
    dayChapters: ["Psalm 127"]
  },
  {
    key: 343,
    dayChapters: ["Psalm 128"]
  },
  {
    key: 344,
    dayChapters: ["Psalm 129"]
  },
  {
    key: 345,
    dayChapters: ["Psalm 130"]
  },
  {
    key: 346,
    dayChapters: ["Psalm 131"]
  },
  {
    key: 347,
    dayChapters: ["Psalm 132"]
  },
  {
    key: 348,
    dayChapters: ["Psalm 133"]
  },
  {
    key: 349,
    dayChapters: ["Psalm 134"]
  },
  {
    key: 350,
    dayChapters: ["Psalm 135"]
  },
  {
    key: 351,
    dayChapters: ["Psalm 136"]
  },
  {
    key: 352,
    dayChapters: ["Psalm 137"]
  },
  {
    key: 353,
    dayChapters: ["Psalm 138"]
  },
  {
    key: 354,
    dayChapters: ["Psalm 139"]
  },
  {
    key: 355,
    dayChapters: ["Psalm 140"]
  },
  {
    key: 356,
    dayChapters: ["Psalm 141"]
  },
  {
    key: 357,
    dayChapters: ["Psalm 142"]
  },
  {
    key: 358,
    dayChapters: ["Psalm 143"]
  },
  {
    key: 359,
    dayChapters: ["Psalm 144"]
  },
  {
    key: 360,
    dayChapters: ["Psalm 145"]
  },
  {
    key: 361,
    dayChapters: ["Psalm 146"]
  },
  {
    key: 362,
    dayChapters: ["Psalm 147"]
  },
  {
    key: 363,
    dayChapters: ["Psalm 148"]
  },
  {
    key: 364,
    dayChapters: ["Psalm 149"]
  },
  {
    key: 365,
    dayChapters: ["Psalm 150"]
  }
];
export const checkedList = _.times(365, _.constant([false]));
export const arabicCheckedList = _.times(365, _.constant([false]));

export const ArabicContent = [
  {
    key: 1,
    dayChapters: ["1 مزامير", "تكوين 1", "تكوين 2", "متي 1"]
  },
  {
    key: 2,
    dayChapters: ["مزامير 2", "تكوين 3", "تكوين 4", "متي 2"]
  },
  {
    key: 3,
    dayChapters: ["مزامير 3", "تكوين 5", "تكوين 6", "متي 3"]
  },
  {
    key: 4,
    dayChapters: ["مزامير 4", "تكوين 7", "تكوين 8", "متي 4"]
  },
  {
    key: 5,
    dayChapters: ["مزامير 5", "تكوين 9", "تكوين 10", "تكوين 11", "متي 5"]
  },
  {
    key: 6,
    dayChapters: ["مزامير 6", "تكوين 12", "تكوين 13", "متي 6"]
  },
  {
    key: 7,
    dayChapters: ["مزامير 7", "تكوين 14", "تكوين 15", "تكوين 16", "متي 7"]
  },
  {
    key: 8,
    dayChapters: ["مزامير 8", "تكوين 17", "تكوين 18", "متي 8"]
  },
  {
    key: 9,
    dayChapters: ["مزامير 9", "تكوين 19", "تكوين 20", "متي 9"]
  },
  {
    key: 10,
    dayChapters: ["مزامير 10", "تكوين 21", "تكوين 22", "تكوين 23", "متي 10"]
  },
  {
    key: 11,
    dayChapters: ["مزامير 11", "تكوين 24", "تكوين 25", "متي 11"]
  },
  {
    key: 12,
    dayChapters: ["مزامير 12", "تكوين 26", "تكوين 27", "متي 12"]
  },
  {
    key: 13,
    dayChapters: ["مزامير 13", "تكوين 28", "تكوين 29", "متي 13"]
  },
  {
    key: 14,
    dayChapters: ["مزامير 14", "تكوين 30", "تكوين 31", "متي 14"]
  },
  {
    key: 15,
    dayChapters: ["مزامير 15", "تكوين 32", "تكوين 33", "متي 15"]
  },
  {
    key: 16,
    dayChapters: ["مزامير 16", "تكوين 34", "تكوين 35", "متي 16"]
  },
  {
    key: 17,
    dayChapters: ["مزامير 17", "تكوين 36", "تكوين 37", "متي 17"]
  },
  {
    key: 18,
    dayChapters: ["مزامير 18", "تكوين 38", "تكوين 39", "متي 18"]
  },
  {
    key: 19,
    dayChapters: ["مزامير 19", "تكوين 40", "تكوين 41", "متي 19"]
  },
  {
    key: 20,
    dayChapters: ["مزامير 20", "تكوين 42", "تكوين 43", "متي 20"]
  },
  {
    key: 21,
    dayChapters: ["مزامير 21", "تكوين 44", "تكوين 45", "متي 21"]
  },
  {
    key: 22,
    dayChapters: ["مزامير 22", "تكوين 46", "تكوين 47", "متي 22"]
  },
  {
    key: 23,
    dayChapters: ["مزامير 23", "تكوين 48", "تكوين 49", "متي 23"]
  },
  {
    key: 24,
    dayChapters: ["مزامير 24", "ايوب 1", "تكوين 50", "متي 24"]
  },
  {
    key: 25,
    dayChapters: ["مزامير 25", "ايوب 2", "ايوب 3", "ايوب 4", "متي 25"]
  },
  {
    key: 26,
    dayChapters: ["مزامير 26", "ايوب 5", "ايوب 6", "ايوب 7", "متي 26"]
  },
  {
    key: 27,
    dayChapters: ["مزامير 27", "ايوب 8", "ايوب 9", "ايوب 10", "متي 27"]
  },
  {
    key: 28,
    dayChapters: ["مزامير 28", "ايوب 11", "ايوب 12", "ايوب 13", "متي 28"]
  },
  {
    key: 29,
    dayChapters: ["مزامير 29", "ايوب 14", "ايوب 15", "ايوب 16", "مرقس 1"]
  },
  {
    key: 30,
    dayChapters: ["مزامير 30", "ايوب 17", "ايوب 18", "ايوب 19", "مرقس 2"]
  },
  {
    key: 31,
    dayChapters: ["مزامير 31", "ايوب 20", "ايوب 21", "ايوب 22", "مرقس 3"]
  },
  {
    key: 32,
    dayChapters: ["مزامير 32", "ايوب 23", "ايوب 24", "ايوب 25", "مرقس 4"]
  },
  {
    key: 33,
    dayChapters: ["مزامير 33", "ايوب 26", "ايوب 27", "ايوب 28", "مرقس 5"]
  },
  {
    key: 34,
    dayChapters: ["مزامير 34", "ايوب 29", "ايوب 30", "ايوب 31", "مرقس 6"]
  },
  {
    key: 35,
    dayChapters: ["مزامير 35", "ايوب 32", "ايوب 33", "ايوب 34", "مرقس 7"]
  },
  {
    key: 36,
    dayChapters: ["مزامير 36", "ايوب 35", "ايوب 36", "ايوب 37", "مرقس 8"]
  },
  {
    key: 37,
    dayChapters: ["مزامير 37", "ايوب 38", "ايوب 39", "ايوب 40", "مرقس 9"]
  },
  {
    key: 38,
    dayChapters: ["مزامير 38", "ايوب 41", "ايوب 42", "مرقس 10"]
  },
  {
    key: 39,
    dayChapters: ["مزامير 39", "خروج 1", "خروج 2", "خروج 3", "مرقس 11"]
  },
  {
    key: 40,
    dayChapters: ["مزامير 40", "خروج 4", "خروج 5", "خروج 6", "مرقس 12"]
  },
  {
    key: 41,
    dayChapters: ["مزامير 41", "خروج 7", "خروج 8", "خروج 9", "مرقس 13"]
  },
  {
    key: 42,
    dayChapters: ["مزامير 42", "خروج 10", "خروج 11", "خروج 12", "مرقس 14"]
  },
  {
    key: 43,
    dayChapters: ["مزامير 43", "خروج 13", "خروج 14", "خروج 15", "مرقس 15"]
  },
  {
    key: 44,
    dayChapters: ["مزامير 44", "خروج 16", "خروج 17", "خروج 18", "مرقس 16"]
  },
  {
    key: 45,
    dayChapters: ["مزامير 45", "خروج 19", "خروج 20", "خروج 21", "Luke 1"]
  },
  {
    key: 46,
    dayChapters: ["مزامير 46", "خروج 22", "خروج 23", "خروج 24", "Luke 2"]
  },
  {
    key: 47,
    dayChapters: ["مزامير 47", "خروج 25", "خروج 26", "خروج 27", "Luke 3"]
  },
  {
    key: 48,
    dayChapters: ["مزامير 48", "خروج 28", "خروج 29", "خروج 30", "Luke 4"]
  },
  {
    key: 49,
    dayChapters: ["مزامير 49", "خروج 31", "خروج 32", "خروج 33", "Luke 5"]
  },
  {
    key: 50,
    dayChapters: ["مزامير 50", "خروج 34", "خروج 35", "خروج 36", "Luke 6"]
  },
  {
    key: 51,
    dayChapters: ["مزامير 51", "خروج 37", "خروج 38", "خروج 39", "Luke 7"]
  },
  {
    key: 52,
    dayChapters: [
      "مزامير 52",
      "Leviticus 1",
      "Leviticus 2",
      "خروج 40",
      "Luke 8"
    ]
  },
  {
    key: 53,
    dayChapters: [
      "مزامير 53",
      "Leviticus 3",
      "Leviticus 4",
      "Proverbs 1",
      "Luke 9"
    ]
  },
  {
    key: 54,
    dayChapters: [
      "مزامير 54",
      "Leviticus 5",
      "Leviticus 6",
      "Proverbs 2",
      "Luke 10"
    ]
  },
  {
    key: 55,
    dayChapters: [
      "مزامير 55",
      "Leviticus 7",
      "Leviticus 8",
      "Proverbs 3",
      "Luke 11"
    ]
  },
  {
    key: 56,
    dayChapters: [
      "مزامير 56",
      "Leviticus 9",
      "Leviticus 10",
      "Proverbs 4",
      "Luke 12"
    ]
  },
  {
    key: 57,
    dayChapters: [
      "مزامير 57",
      "Leviticus 11",
      "Leviticus 12",
      "Proverbs 5",
      "Luke 13"
    ]
  },
  {
    key: 58,
    dayChapters: [
      "مزامير 58",
      "Leviticus 13",
      "Leviticus 14",
      "Proverbs 6",
      "Luke 14"
    ]
  },
  {
    key: 59,
    dayChapters: [
      "مزامير 59",
      "Leviticus 15",
      "Leviticus 16",
      "Proverbs 7",
      "Luke 15"
    ]
  },
  {
    key: 60,
    dayChapters: [
      "مزامير 60",
      "Leviticus 17",
      "Leviticus 18",
      "Proverbs 8",
      "Luke 16"
    ]
  },
  {
    key: 61,
    dayChapters: [
      "مزامير 61",
      "Leviticus 19",
      "Leviticus 20",
      "Proverbs 9",
      "Luke 17"
    ]
  },
  {
    key: 62,
    dayChapters: [
      "مزامير 62",
      "Leviticus 21",
      "Leviticus 22",
      "Proverbs 10",
      "Luke 18"
    ]
  },
  {
    key: 63,
    dayChapters: [
      "مزامير 63",
      "Leviticus 23",
      "Leviticus 24",
      "Proverbs 11",
      "Luke 19"
    ]
  },
  {
    key: 64,
    dayChapters: [
      "مزامير 64",
      "Leviticus 25",
      "Leviticus 26",
      "Proverbs 12",
      "Luke 20"
    ]
  },
  {
    key: 65,
    dayChapters: ["مزامير 65", "Leviticus 27", "Proverbs 13", "Luke 21"]
  },
  {
    key: 66,
    dayChapters: [
      "مزامير 66",
      "Numbers 1",
      "Numbers 2",
      "Proverbs 14",
      "Luke 22"
    ]
  },
  {
    key: 67,
    dayChapters: [
      "مزامير 67",
      "Numbers 3",
      "Numbers 4",
      "Proverbs 15",
      "Luke 23"
    ]
  },
  {
    key: 68,
    dayChapters: [
      "مزامير 68",
      "Numbers 5",
      "Numbers 6",
      "Proverbs 16",
      "Luke 24"
    ]
  },
  {
    key: 69,
    dayChapters: [
      "مزامير 69",
      "Numbers 7",
      "Numbers 8",
      "Proverbs 17",
      "John 1"
    ]
  },
  {
    key: 70,
    dayChapters: [
      "مزامير 70",
      "Numbers 9",
      "Numbers 10",
      "Proverbs 18",
      "John 2"
    ]
  },
  {
    key: 71,
    dayChapters: [
      "مزامير 71",
      "Numbers 11",
      "Numbers 12",
      "Proverbs 19",
      "John 3"
    ]
  },
  {
    key: 72,
    dayChapters: [
      "مزامير 72",
      "Numbers 13",
      "Numbers 14",
      "Proverbs 20",
      "John 4"
    ]
  },
  {
    key: 73,
    dayChapters: [
      "مزامير 73",
      "Numbers 15",
      "Numbers 16",
      "Proverbs 21",
      "John 5"
    ]
  },
  {
    key: 74,
    dayChapters: [
      "مزامير 74",
      "Numbers 17",
      "Numbers 18",
      "Proverbs 22",
      "John 6"
    ]
  },
  {
    key: 75,
    dayChapters: [
      "مزامير 75",
      "Numbers 19",
      "Numbers 20",
      "Proverbs 23",
      "John 7"
    ]
  },
  {
    key: 76,
    dayChapters: [
      "مزامير 76",
      "Numbers 21",
      "Numbers 22",
      "Proverbs 24",
      "John 8"
    ]
  },
  {
    key: 77,
    dayChapters: [
      "مزامير 77",
      "Numbers 23",
      "Numbers 24",
      "Proverbs 25",
      "John 9"
    ]
  },
  {
    key: 78,
    dayChapters: [
      "مزامير 78",
      "Numbers 25",
      "Numbers 26",
      "Proverbs 26",
      "John 10"
    ]
  },
  {
    key: 79,
    dayChapters: [
      "مزامير 79",
      "Numbers 27",
      "Numbers 28",
      "Proverbs 27",
      "John 11"
    ]
  },
  {
    key: 80,
    dayChapters: [
      "مزامير 80",
      "Numbers 29",
      "Numbers 30",
      "Proverbs 28",
      "John 12"
    ]
  },
  {
    key: 81,
    dayChapters: [
      "مزامير 81",
      "Numbers 31",
      "Numbers 32",
      "Proverbs 29",
      "John 13"
    ]
  },
  {
    key: 81,
    dayChapters: [
      "مزامير 81",
      "Numbers 33",
      "Numbers 34",
      "Proverbs 30",
      "John 14"
    ]
  },
  {
    key: 82,
    dayChapters: [
      "مزامير 82",
      "Numbers 35",
      "Numbers 36",
      "Proverbs 31",
      "John 15"
    ]
  },
  {
    key: 83,
    dayChapters: ["مزامير 83", "Deuteronomy 1", "Deuteronomy 2", "John 16"]
  },
  {
    key: 84,
    dayChapters: ["مزامير 84", "Deuteronomy 3", "Deuteronomy 4", "John 17"]
  },
  {
    key: 85,
    dayChapters: ["مزامير 85", "Deuteronomy 5", "Deuteronomy 6", "John 18"]
  },
  {
    key: 86,
    dayChapters: ["مزامير 86", "Deuteronomy 7", "Deuteronomy 8", "John 19"]
  },
  {
    key: 87,
    dayChapters: ["مزامير 87", "Deuteronomy 9", "Deuteronomy 10", "John 20"]
  },
  {
    key: 88,
    dayChapters: ["مزامير 88", "Deuteronomy 11", "Deuteronomy 12", "John 21"]
  },
  {
    key: 89,
    dayChapters: ["مزامير 89", "Deuteronomy 13", "Deuteronomy 14", "Acts 1"]
  },
  {
    key: 90,
    dayChapters: ["مزامير 90", "Deuteronomy 15", "Deuteronomy 16", "Acts 2"]
  },
  {
    key: 91,
    dayChapters: ["مزامير 91", "Deuteronomy 17", "Deuteronomy 18", "Acts 3"]
  },
  {
    key: 92,
    dayChapters: ["مزامير 92", "Deuteronomy 19", "Deuteronomy 20", "Acts 4"]
  },
  {
    key: 93,
    dayChapters: ["مزامير 93", "Deuteronomy 21", "Deuteronomy 22", "Acts 5"]
  },
  {
    key: 94,
    dayChapters: ["مزامير 94", "Deuteronomy 23", "Deuteronomy 24", "Acts 6"]
  },
  {
    key: 95,
    dayChapters: ["مزامير 95", "Deuteronomy 25", "Deuteronomy 26", "Acts 7"]
  },
  {
    key: 96,
    dayChapters: ["مزامير 96", "Deuteronomy 27", "Deuteronomy 28", "Acts 8"]
  },
  {
    key: 97,
    dayChapters: ["مزامير 97", "Deuteronomy 29", "Deuteronomy 30", "Acts 9"]
  },
  {
    key: 98,
    dayChapters: ["مزامير 98", "Deuteronomy 31", "Deuteronomy 32", "Acts 10"]
  },
  {
    key: 99,
    dayChapters: ["مزامير 99", "Deuteronomy 33", "Deuteronomy 34", "Acts 11"]
  },
  {
    key: 100,
    dayChapters: ["مزامير 100", "Acts 12"]
  },
  {
    key: 101,
    dayChapters: ["مزامير 101", "Acts 13"]
  },
  {
    key: 102,
    dayChapters: ["مزامير 102", "Acts 14"]
  },
  {
    key: 103,
    dayChapters: ["مزامير 103", "Acts 15"]
  },
  {
    key: 104,
    dayChapters: ["مزامير 104", "Acts 16"]
  },
  {
    key: 105,
    dayChapters: ["مزامير 105", "Acts 17"]
  },
  {
    key: 106,
    dayChapters: ["مزامير 106", "Acts 18"]
  },
  {
    key: 107,
    dayChapters: ["مزامير 107", "Acts 19"]
  },
  {
    key: 108,
    dayChapters: ["مزامير 108", "Acts 20"]
  },
  {
    key: 109,
    dayChapters: ["مزامير 109", "Acts 21"]
  },
  {
    key: 110,
    dayChapters: ["مزامير 110", "Acts 22"]
  },
  {
    key: 112,
    dayChapters: ["مزامير 112", "Acts 23"]
  },
  {
    key: 113,
    dayChapters: ["مزامير 113", "Acts 24"]
  },
  {
    key: 114,
    dayChapters: ["مزامير 114", "Acts 25"]
  },
  {
    key: 114,
    dayChapters: ["مزامير 100", "Acts 26"]
  },
  {
    key: 115,
    dayChapters: ["مزامير 115", "Acts 27"]
  },
  {
    key: 116,
    dayChapters: ["مزامير 116", "Acts 28"]
  },
  {
    key: 117,
    dayChapters: ["مزامير 117"]
  },
  {
    key: 118,
    dayChapters: ["مزامير 118"]
  },
  {
    key: 119,
    dayChapters: ["مزامير 119"]
  },
  {
    key: 120,
    dayChapters: ["مزامير 120"]
  },
  {
    key: 121,
    dayChapters: ["مزامير 121"]
  },
  {
    key: 122,
    dayChapters: ["مزامير 122"]
  },
  {
    key: 123,
    dayChapters: ["مزامير 123"]
  },
  {
    key: 124,
    dayChapters: ["مزامير 124"]
  },
  {
    key: 125,
    dayChapters: ["مزامير 125"]
  },
  {
    key: 126,
    dayChapters: ["مزامير 118"]
  },
  {
    key: 127,
    dayChapters: ["مزامير 127"]
  },
  {
    key: 118,
    dayChapters: ["مزامير 118"]
  },
  {
    key: 118,
    dayChapters: ["مزامير 118"]
  },
  {
    key: 118,
    dayChapters: ["مزامير 118"]
  }
];
export const enlglishContentUri = {
  Genesis: "https://www.dropbox.com/s/atlpv4y58rnmnjo/Genesis.json?dl=1",
  Exodus: "https://www.dropbox.com/s/sy1j6k11eiij6da/Exodus.json?dl=1",
  Leviticus: "https://www.dropbox.com/s/d0zkyw7akassm77/Leviticus.json?dl=1",
  Numbers: "https://www.dropbox.com/s/eudd0f30gf1duf6/Numbers.json?dl=1",
  Deuteronomy:
    "https://www.dropbox.com/s/oa2nrenn1wttgrm/Deuteronomy.json?dl=1",
  Joshua: "https://www.dropbox.com/s/k9swoqwreidptis/Joshua.json?dl=1",
  Judges: "https://www.dropbox.com/s/24dg0ntvmlix3a9/Judges.json?dl=1",
  Ruth: "https://www.dropbox.com/s/o07z3wkxo9run14/Ruth.json?dl=1",
  "1 Samuel" : "https://www.dropbox.com/s/0ww6vcf3poeup72/1%20Samuel.json?dl=1",
  "2 Samuel" : "https://www.dropbox.com/s/yzvvr8u2zqi2t6m/2%20Samuel.json?dl=1",
  "1 Kings" : "https://www.dropbox.com/s/m4ob2d57h3y6fw6/1%20Kings.json?dl=1",
  "2 Kings" : "https://www.dropbox.com/s/io9vcpn40tua3m0/2%20Kings.json?dl=1",
  "1 Chronicles" : "https://www.dropbox.com/s/u7x59kypcam862m/1%20Chronicles.json?dl=1",
  "2 Chronicles" : "https://www.dropbox.com/s/7xm0v4uqteqrckk/2%20Chronicles.json?dl=1",
  "Ezra" : "https://www.dropbox.com/s/hpt79b5ssdyjc5o/Ezra.json?dl=1",
 "Nehemiah":"https://www.dropbox.com/s/iq25b5upa5oazb6/Nehemiah.json?dl=1",
 "Esther" : "https://www.dropbox.com/s/wrofxssjl8glz26/Esther.json?dl=1" ,
 "Job": "https://www.dropbox.com/s/qc6z20q7ur5ycrl/Job.json?dl=1",
 "Psalm" : "https://www.dropbox.com/s/zd8wfmghjr6unua/Psalm.json?dl=1",
 "Proverbs" : "https://www.dropbox.com/s/w9jucfmpgtapi0k/Proverbs.json?dl=1",
 "Ecclesiastes" : "https://www.dropbox.com/s/c69doqk89t7kcbb/Ecclesiastes.json?dl=1",
 "Song of Solomon":"https://www.dropbox.com/s/5bz3itq9w02qyb2/Song%20of%20Solomon.json?dl=1",
 "Isaiah" :"https://www.dropbox.com/s/vnggfdy8p7vsww3/Isaiah.json?dl=1",
 "Jeremiah":"https://www.dropbox.com/s/gxmagc01sxa8346/Jeremiah.json?dl=1",
  "Lamentations" : "https://www.dropbox.com/s/huooq8iz1b0ek6u/Lamentations.json?dl=1",
  "Ezekiel" : "https://www.dropbox.com/s/dr68bhrqqmvdhye/Ezekiel.json?dl=1",
  "Daniel":"https://www.dropbox.com/s/0q5m644pnnnwmdm/Daniel.json?dl=1",
  "Hosea" : "https://www.dropbox.com/s/f0ndgocjt3504wk/Hosea.json?dl=1",
  "Joel" : "https://www.dropbox.com/s/xui1fqrfr7hordx/Joel.json?dl=1",
  "Amos" :"https://www.dropbox.com/s/wqr306jqr28o7hs/Amos.json?dl=1",
  "Obadiah":"https://www.dropbox.com/s/9x1iajblvrhaij6/Obadiah.json?dl=1",
  "Micah" :"https://www.dropbox.com/s/iozyugbutxmzmjb/Micah.json?dl=1",
  "Nahum" :"https://www.dropbox.com/s/uu766lqlvtk0zw6/Nahum.json?dl=1",
  "Habakkuk" :"https://www.dropbox.com/s/zflpcnbhzy47m3o/Habakkuk.json?dl=1",
  "Zephaniah" :"https://www.dropbox.com/s/9c244gvky3yrfo9/Zephaniah.json?dl=1",
  "Haggai" : "https://www.dropbox.com/s/6lj6g5c3t0zsnlt/Haggai.json?dl=1",
  "Malachi" :"https://www.dropbox.com/s/ro6ckcncatpw8y9/Malachi.json?dl=1",
  "Matthew" :"https://www.dropbox.com/s/5ty8fk61vlsuz8n/Matthew.json?dl=1",
  "Mark" : "https://www.dropbox.com/s/qpmmmgk1qqm7bs6/Mark.json?dl=1",
  "Luke" : "https://www.dropbox.com/s/0x51go1ho2tdqn3/Luke.json?dl=1",
  "John" :"https://www.dropbox.com/s/em1z9gteq64lfin/John.json?dl=1",
  "Acts" : "https://www.dropbox.com/s/08l64hglzngyiei/Acts.json?dl=1",
  "Romans" : "https://www.dropbox.com/s/r65xvclohq509co/Romans.json?dl=1",
  "1 Corinthians":"https://www.dropbox.com/s/ydm0eyt9o6uk3b6/1%20Corinthians.json?dl=1",
  "2 Corinthians" :"https://www.dropbox.com/s/j9eudpd151q4bpo/2%20Corinthians.json?dl=1",
  "Galatians" :"https://www.dropbox.com/s/19j2xr5rk9fry8l/Galatians.json?dl=1",
  "Ephesians":"https://www.dropbox.com/s/pqxak36tc4xbts3/Ephesians.json?dl=1",
  "Philippians":"https://www.dropbox.com/s/vaauw9ynaphxtlt/Philippians.json?dl=1",
  "Colossians" :"https://www.dropbox.com/s/xwzfdfg9hl6jmjr/Colossians.json?dl=1",
  "1 Thessalonians" :"https://www.dropbox.com/s/6tg0j20jqj9dh3l/1%20Thessalonians.json?dl=1",
  "2 Thessalonians" : "https://www.dropbox.com/s/lsi85kvpx6gxa4m/2%20Thessalonians.json?dl=1",
  "1 Timothy" : "https://www.dropbox.com/s/s317rqcdenx65sy/1%20Timothy.json?dl=1",
  "2 Timothy" :"https://www.dropbox.com/s/dk0f9avl2zge5qq/2%20Timothy.json?dl=1",
  "Titus" :  "https://www.dropbox.com/s/yet36pthclnqak5/Titus.json?dl=1",
  "Philemon" : "https://www.dropbox.com/s/slj4zp7rc0owyjv/Philemon.json?dl=1",
  "Hebrews" : "https://www.dropbox.com/s/lpi3gklxxyc2m5e/Hebrews.json?dl=1",
  "James" :"https://www.dropbox.com/s/jpf3m4qe0ycgudx/James.json?dl=1",
  "1 Peter" : "https://www.dropbox.com/s/g6knfle5b58wh0n/1%20Peter.json?dl=1",
  "2 Peter" : "https://www.dropbox.com/s/m6cpqidf6zhrwsa/2%20Peter.json?dl=1",
  "1 John" : "https://www.dropbox.com/s/f6vufoai9iv1d6m/1%20John.json?dl=1",
  "2 John" :"https://www.dropbox.com/s/re1celioexu8t3z/2%20John.json?dl=1",
  "3 John" :"https://www.dropbox.com/s/4w1smgr9bvlq1hn/3%20John.json?dl=1",
  "Jude" : "https://www.dropbox.com/s/nbjn4d6kiprcng5/Jude.json?dl=1",
  "Revelation" :"https://www.dropbox.com/s/jlauyydhkrq6vfw/Revelation.json?dl=1"
};
export const bookNames = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "1 Samuel",
  "2 Samuel",
  "1 Kings",
  "2 Kings",
  "1 Chronicles",
  "2 Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther",
  "Job",
  "Psalm",
  "Proverbs",
  "Ecclesiastes",
  "Song of Solomon",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Ezekiel",
  "Daniel",
  "Hosea",
  "Joel" ,
  "Amos",
  "Obadiah",
  "Micah",
  "Nahum",
  "Habakkuk",
   "Zephaniah",
   "Haggai",
   "Malachi",
   "Matthew",
   "Mark",
   "Luke",
   "John",
   "Acts",
   "Romans",
   "1 Corinthians",
   "2 Corinthians",
   "Galatians",
   "Ephesians",
   "Philippians",
   "Colossians",
   "1 Thessalonians",
   "2 Thessalonians",
   "1 Timothy",
   "2 Timothy",
   "Titus",
   "Philemon",
   "Hebrews",
   "James",
   "1 Peter",
   "2 Peter" ,
    "1 John" , 
    "2 John",
    "3 John",
    "Jude",
    "Revelation"
];
