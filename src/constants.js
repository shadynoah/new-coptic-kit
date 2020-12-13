import _ from "lodash";
import { Helpers } from './../src/services/utilities/helpers';

export const content = [
  {
    key: 1,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:6,
        text: "Psalm 1"
      },
      {
        bookName: "Matthew",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: "Matthew 1"
      }
    ]
  },
  {
    key: 2,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 2,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 2"
      },
      {
        bookName: "Matthew",
        chapterNumber: 2,
        startVerseNumber: 0,
        endVerseNumber:23,
        text: "Matthew 2"
      }
    ]
  },
  {
    key: 3,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 3"
      },
      {
        bookName: "Matthew",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:17,
        text: "Matthew 3"
      }
    ]
  },
  {
    key: 4,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 4"
      },
      {
        bookName: "Matthew",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: "Matthew 4"
  }
    ]
  },
  {
    key: 5,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 5,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 5"
      },
      {
        bookName: "Matthew",
        chapterNumber: 5,
        startVerseNumber: 0,
        endVerseNumber:26,
        text: "Matthew 5:1-26"
      }
    ]
  },
  {
    key: 6,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 6,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 6"
      },
      {
            
        bookName: "Matthew",
        chapterNumber: 5,
        startVerseNumber: 27,
        endVerseNumber:48,
        text: "Matthew 5:27-48"
  }
    ]
  },
  {
    key: 7,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 7,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 7"
      },
      {
        bookName: "Matthew",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:34,
        text: "Matthew 6"
  }
    ]
  },
  {
    key: 8,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 8,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 8"
      },
      {
        bookName: "Matthew",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:29,
        text: "Matthew 7"
  }
    ]
  },
  {
    key: 9,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 9,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 9"
      },
      {
        bookName: "Matthew",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:34,
        text: "Matthew 8"
      }
    ]
  },
  {
    key: 10,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 10,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 10"
      },
      {
        bookName: "Matthew",
        chapterNumber: 9,
        startVerseNumber: 1,
        endVerseNumber:38,
        text: "Matthew 9"
      }
    ]
  },
  {
    key: 11,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 11,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 11"
      },
      {
        bookName: "Matthew",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:23,
        text: "Matthew 10:1-23"
      }
    ]
  },
  {
    key: 12,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 12,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 12"
      },
      {
        bookName: "Matthew",
        chapterNumber: 10,
        startVerseNumber: 24,
        endVerseNumber:42,
        text: "Matthew 10:24-42"
  }
    ]
  },
  {
    key: 13,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 13,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 13"
      },
      {
        bookName: "Matthew",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: "Matthew 11"
  }
    ]
  },
  {
    key: 14,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 14,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 14"
      },
      {
        bookName: "Matthew",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "Matthew 12:1-21"
      }
    ]
  },
  {
    key: 15,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 15,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 15"
      },
      {
        bookName: "Matthew",
        chapterNumber: 12,
        startVerseNumber: 22,
        endVerseNumber:50,
        text: "Matthew 12:22-50"
      }
    ]
  },
  {
    key: 16,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 16,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 16"
      },
      {
        bookName: "Matthew",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: "Matthew 13:1-30"
      }
    ]
  },
  {
    key: 17,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 17,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 17"
      },
      {
        bookName: "Matthew",
        chapterNumber: 13,
        startVerseNumber: 31,
        endVerseNumber:58,
        text: "Matthew 13:31-58"
      }
    ]
  },
  {
    key: 18,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 18,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 18"
      },
      {
        bookName: "Matthew",
    chapterNumber: 14,
    startVerseNumber: 1,
    endVerseNumber:21,
    text: "Matthew 14:1-21"
  }
    ]
  },
  {
    key: 19,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 19,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 19"
      },
      {
        bookName: "Matthew",
       chapterNumber: 14,
       startVerseNumber: 22,
       endVerseNumber:36,
       text: "Matthew 14:22-36"
     }
    ]
  },
  {
    key: 20,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 20,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 20"
      },
      {
        bookName: "Matthew",
        chapterNumber: 15,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: "Matthew 15:1-20"
  }
    ]
  },
  {
    key: 21,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 21,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 21"
      },
      {
        bookName: "Matthew",
        chapterNumber: 15,
        startVerseNumber: 21,
        endVerseNumber:39,
        text: "Matthew 15:21-39"
  }
    ]
  },
  {
    key: 22,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 22,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 22"
      },
      {
        bookName: "Matthew",
        chapterNumber: 16,
        startVerseNumber: 1,
        endVerseNumber:28,
        text: "Matthew 16"
  }
    ]
  },
  {
    key: 23,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 23,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 23"
      },
      {
        bookName: "Matthew",
        chapterNumber: 17,
        startVerseNumber: 1,
        endVerseNumber:27,
        text: "Matthew 17"
  }
    ]
  },
  {
    key: 24,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 24,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 24"
      },
      {
        bookName: "Matthew",
        chapterNumber: 18,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: "Matthew 18:1-20"
      }
    ]
  },
  {
    key: 25,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 25,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 25"
      },
      {
        bookName: "Matthew",
        chapterNumber: 18,
        startVerseNumber: 21,
        endVerseNumber:35,
        text: "Matthew 18:21-35"
  }
    ]
  },
  {
    key: 26,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 26,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 26"
      },
      {
        bookName: "Matthew",
        chapterNumber: 19,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: "Matthew 19"
      }
    ]
  },
  {
    key: 27,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 27,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 27"
      },
      {
            
        bookName: "Matthew",
        chapterNumber: 20,
        startVerseNumber: 1,
        endVerseNumber:19,
        text: "Matthew 20:1-19"
  }
    ]
  },
  {
    key: 28,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 28,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 28"
      },
      {
        bookName: "Matthew",
        chapterNumber: 20,
        startVerseNumber: 20,
        endVerseNumber:34,
        text: "Matthew 20:20-34"
  }
    ]
  },
  {
    key: 29,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 29,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 29"
      },
      {
        bookName: "Matthew",
        chapterNumber: 21,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: "Matthew 21:1-22"
  }
    ]
  },
  {
    key: 30,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 30,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 30"
      },
      {
        bookName: "Matthew",
        chapterNumber: 21,
        startVerseNumber: 23,
        endVerseNumber:46,
        text: "Matthew 21:23-46"
      }
    ]
  },
  {
    key: 31,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 31,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 31"
      },
      {
        bookName: "Matthew",
        chapterNumber: 22,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: "Matthew 22:1-22"
  }
    ]
  },
  {
    key: 32,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 32,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 32"
      },
      {
        bookName: "Matthew",
        chapterNumber: 22,
        startVerseNumber: 23,
        endVerseNumber:46,
        text: "Matthew 22:23-46"
      }
    ]
  },
  {
    key: 33,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 33,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 33"
      },
      {
        bookName: "Matthew",
        chapterNumber: 23,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: "Matthew 23:1-22"
  }
    ]
  },
  {
    key: 34,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 34,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 34"
      },
      {
        bookName: "Matthew",
        chapterNumber: 23,
        startVerseNumber: 23,
        endVerseNumber:39,
        text: "Matthew 23:23-39"
      }
    ]
  },
  {
    key: 35,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 35,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 35"
      },
      {
        bookName: "Matthew",
        chapterNumber: 24,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: "Matthew 24:1-30"
      }
    ]
  },
  {
    key: 36,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 36,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 36"
      },
      {
        bookName: "Matthew",
        chapterNumber: 24,
        startVerseNumber: 31,
        endVerseNumber:51,
        text: "Matthew 24:31-51"
  }
    ]
  },
  {
    key: 37,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 37,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 37"
      },
      {
        bookName: "Matthew",
        chapterNumber: 25,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: "Matthew 25:1-30"
  }
    ]
  },
  {
    key: 38,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 38,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 38"
      },
      {
            
        bookName: "Matthew",
        chapterNumber: 25,
        startVerseNumber: 31,
        endVerseNumber:46,
        text: "Matthew 25:31-46"
  }
    ]
  },
  {
    key: 39,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 39,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 39"
      },
      {
        bookName: "Matthew",
        chapterNumber: 26,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: "Matthew 26:1-30"
      }
    ]
  },
  {
    key: 40,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 40,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 40"
      },
      {
        bookName: "Matthew",
        chapterNumber: 26,
        startVerseNumber: 31,
        endVerseNumber:56,
        text: "Matthew 26:31-56"
      }
    ]
  },
  {
    key: 41,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 41,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 41"
      },
      {
            
        bookName: "Matthew",
        chapterNumber: 26,
        startVerseNumber: 57,
        endVerseNumber:75,
        text: "Matthew 26:57-75"
  }
    ]
  },
  {
    key: 42,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 42,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 42"
      },
      {
        bookName: "Matthew",
        chapterNumber: 27,
        startVerseNumber: 1,
        endVerseNumber:31,
        text: "Matthew 27:1-31"
  }
    ]
  },
  {
    key: 43,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 43,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 43"
      },
      {
        bookName: "Matthew",
        chapterNumber: 27,
        startVerseNumber: 32,
        endVerseNumber:66,
        text: "Matthew 27:32-66"
    }
    ]
  },
  {
    key: 44,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 44,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 44"
      },
      {
        bookName: "Matthew",
        chapterNumber: 28,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: "Matthew 28"
    }
    ]
  },
  {
    key: 45,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 45,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 45"
      },
      {
        bookName: "Mark",
        chapterNumber: 1,
        startVerseNumber: 0,
        startVerseNumber:28,
        text: "Mark 1:1-28"
      }
    ]
  },
  {
    key: 46,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 46,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 46"
      },
      {
        bookName: "Mark",
        chapterNumber: 1,
        startVerseNumber: 29,
        endVerseNumber:45,
        text: "Mark 1:29-45"
      }
    ]
  },
  {
    key: 47,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 47,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 47"
      },
      {
        bookName: "Mark",
        chapterNumber: 2,
        startVerseNumber: 0,
        endVerseNumber:28,
        text: "Mark 2"
      }
    ]
  },
  {
    key: 48,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 48,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 48"
      },
      {
        bookName: "Mark",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:35,
        text: "Mark 3"
  }
    ]
  },
  {
    key: 49,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 49,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 49"
      },
      {
        bookName: "Mark",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: "Matthew 4:1-25"
      }
    ]
  },
  {
    key: 50,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 50,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 50"
      },
      {
        bookName: "Mark",
        chapterNumber: 5,
        startVerseNumber: 26,
        endVerseNumber:41,
        text: "Mark 4:26-41"
  }
    ]
  },
  {
    key: 51,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 51,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 51"
      },
      {
        bookName: "Mark",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: "Mark 5:1-20"
      }
    ]
  },
  {
    key: 52,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 52,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 52"
      },
      {
        bookName: "Mark",
        chapterNumber: 5,
        startVerseNumber: 21,
        endVerseNumber:43,
        text: "Mark 5:21-43"
  }
    ]
  },
  {
    key: 53,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 53,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 53"
      },
      {
        bookName: "Mark",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:29,
        text: "Mark 6:1-29"
  }
    ]
  },
  {
    key: 54,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 54,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 54"
      },
      {
        bookName: "Mark",
        chapterNumber: 6,
        startVerseNumber: 30,
        endVerseNumber:56,
        text: "Mark 6:30-56"
      }
    ]
  },
  {
    key: 55,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 55,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 55"
      },
      {
        bookName: "Mark",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:23,
        text: "Mark 7:1-23"
      }
    ]
  },
  {
    key: 56,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 56,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 56"
      },
      {
        bookName: "Mark",
        chapterNumber: 7,
        startVerseNumber: 24,
        endVerseNumber:37,
        text: "Mark 7:24-37"
      }
    ]
  },
  {
    key: 57,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 57,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 57"
      },
      {
        bookName: "Mark",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "Mark 8:1-21"
  }
    ]
  },
  {
    key: 58,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 58,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 58"
      },
      {
        bookName: "Mark",
        chapterNumber: 8,
        startVerseNumber: 22,
        endVerseNumber:38,
        text: "Mark 8:22-38"
  }
    ]
  },
  {
    key: 59,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 59,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 59"
      },
      {
        bookName: "Mark",
        chapterNumber: 9,
        startVerseNumber: 1,
        endVerseNumber:29,
        text: "Mark 9:1-29"
  }
    ]
  },
  {
    key: 60,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 60,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 60"
      },
      {
        bookName: "Mark",
        chapterNumber: 9,
        startVerseNumber: 30,
        endVerseNumber:50,
        text: "Mark 9:30-50"
      }
    ]
  },
  {
    key: 61,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 61,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 61"
      },
      {
        bookName: "Mark",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:31,
        text: "Mark 10:1-31"
      }
    ]
  },
  {
    key: 62,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 62,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 62"
      },
      {
        bookName: "Mark",
        chapterNumber: 10,
        startVerseNumber: 32,
        endVerseNumber:52,
        text: "Mark 10:32-52"
      }
    ]
  },
  {
    key: 63,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 63,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 63"
      },
      {
        bookName: "Mark",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:33,
        text: "Mark 11"
      }
    ]
  },
  {
    key: 64,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 64,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 64"
      },
      {
        bookName: "Mark",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:27,
        text: "Mark 12:1-27"
      }
    ]
  },
  {
    key: 65,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 65,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 65"
      },
      {
        bookName: "Mark",
       chapterNumber: 12,
       startVerseNumber: 28,
       endVerseNumber:44,
       text: "Mark 12:28-44"
     }
    ]
  },
  {
    key: 66,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 66,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 66"
      },
      {
        bookName: "Mark",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:37,
        text: "Mark 13"
  }
    ]
  },
  {
    key: 67,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 67,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 67"
      },
      {
        bookName: "Mark",
        chapterNumber: 14,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "Mark 14:1-21"
  }
    ]
  },
  {
    key: 68,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 68,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 68"
      },
      {
        bookName: "Mark",
        chapterNumber: 14,
        startVerseNumber: 22,
        endVerseNumber:52,
        text: "Mark 14:22-52"
  }
    ]
  },
  {
    key: 69,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 69,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 69"
      },
      {
        bookName: "Mark",
        chapterNumber: 14,
        startVerseNumber: 53,
        endVerseNumber:72,
        text: "Mark 14:53-72"
      }
    ]
  },
  {
    key: 70,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 70,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 70"
      },
      {
        bookName: "Mark",
        chapterNumber: 15,
        startVerseNumber: 1,
        endVerseNumber:32,
        text: "Mark 15:1-32"
      }
    ]
  },
  {
    key: 71,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 71,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 71"
      },
      {
        bookName: "Mark",
        chapterNumber: 15,
        startVerseNumber: 33,
        endVerseNumber:47,
        text: "Mark 15:33-47"
  }
    ]
  },
  {
    key: 72,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 72,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 72"
      },
      {
        bookName: "Mark",
        chapterNumber: 16,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: "Mark 16"
      }
    ]
  },
  {
    key: 73,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 73,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 73"
      },
      {
        bookName: "Luke",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: "Luke 1:1-25"
      }
    ]
  },
  {
    key: 74,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 74,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 74"
      },
      {
        bookName: "Luke",
        chapterNumber: 1,
        startVerseNumber: 26,
        endVerseNumber:66,
        text: "Luke 1:26-66"
      }
    ]
  },
  {
    key: 75,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 75,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 75"
      },
      {
        bookName: "Luke",
        chapterNumber: 1,
        startVerseNumber: 67,
        endVerseNumber:80,
        text: "Luke 1:67-80"
      }
    ]
  },
  {
    key: 76,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 76,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 76"
      },
      {
        bookName: "Luke",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: "Luke 2:1-20"
    }
    ]
  },
  {
    key: 77,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 77,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 77"
      },
      {
        bookName: "Luke",
        chapterNumber: 2,
        startVerseNumber: 21,
        endVerseNumber:50,
        text: "Luke 2:21-50"
    }
    ]
  },
  {
    key: 78,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 78,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 78"
      },
      {
        bookName: "Luke",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: "Luke 3:1-20"
    }
    ]
  },
  {
    key: 79,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 79,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 79"
      },
      {
        bookName: "Luke",
        chapterNumber: 3,
        startVerseNumber: 21,
        endVerseNumber:38,
        text: "Luke 3:21-38"
    }
    ]
  },
  {
    key: 80,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 80,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 80"
      },
      {
        bookName: "Luke",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: "Luke 4:1-30"
    }
    ]
  },
  {
    key: 81,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 81,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 81"
      },
      {
        bookName: "Luke",
        chapterNumber: 4,
        startVerseNumber: 31,
        endVerseNumber:44,
        text: "Luke 4:31-44"
    }
    ]
  },
  {
    key: 82,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 82,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 82"
      },
      {
        bookName: "Luke",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:16,
        text: "Luke 5:1-16"
    }
    ]
  },
  {
    key: 83,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 83,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 83"
      },
      {
        bookName: "Luke",
        chapterNumber: 5,
        startVerseNumber: 17,
        endVerseNumber:39,
        text: "Luke 5:17-39"
    }
    ]
  },
  {
    key: 84,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 84,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 84"
      },
      {
        bookName: "Luke",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:26,
        text: "Luke 6:1-26"
    }
    ]
  },
  {
    key: 85,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 85,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 85"
      },
      {
        bookName: "Luke",
        chapterNumber: 6,
        startVerseNumber: 27,
        endVerseNumber:49,
        text: "Luke 6:27-49"
    }
    ]
  },
  {
    key: 86,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 86,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 86"
      },
      {
        bookName: "Luke",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:35,
        text: "Luke 7:1-35"
    }
    ]
  },
  {
    key: 87,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 87,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 87"
      },
      {
        bookName: "Luke",
        chapterNumber: 7,
        startVerseNumber: 36,
        endVerseNumber:50,
        text: "Luke 7:36-50"
    }
    ]
  },
  {
    key: 88,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 88,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 88"
      },
      {
        bookName: "Luke",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: "Luke 8:1-25"
    }
    ]
  },
  {
    key: 89,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 89,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 89"
      },
      {
        bookName: "Luke",
        chapterNumber: 8,
        startVerseNumber: 26,
        endVerseNumber:56,
        text: "Luke 8:26-56"
    }
    ]
  },
  {
    key: 90,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 90,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 90"
      },
      {
        bookName: "Luke",
        chapterNumber: 9,
        startVerseNumber: 1,
        endVerseNumber:27,
        text: "Luke 9:1-27"
    }
    ]
  },
  {
    key: 91,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 91,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 91"
      },
      {
        bookName: "Luke",
        chapterNumber: 9,
        startVerseNumber: 28,
        endVerseNumber:50,
        text: "Luke 9:28-50"
    }
    ]
  },
  {
    key: 92,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 92,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 92"
      },
      {
        bookName: "Luke",
        chapterNumber: 9,
        startVerseNumber: 51,
        endVerseNumber:62,
        text: "Luke 9:51-62"
    }
    ]
  },
  {
    key: 93,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 93,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 93"
      },
      {
        bookName: "Luke",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: "Luke 10:1-24"
    }
    ]
  },
  {
    key: 94,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 94,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 94"
      },
      {
        bookName: "Luke",
        chapterNumber: 10,
        startVerseNumber: 25,
        endVerseNumber:42,
        text: "Luke 10:25-42"
    }
    ]
  },
  {
    key: 95,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 95,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 95"
      },
      {
        bookName: "Luke",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:28,
        text: "Luke 11:1-28"
    }
    ]
  },
  {
    key: 96,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 96,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 96"
      },
      {
        bookName: "Luke",
        chapterNumber: 11,
        startVerseNumber: 29,
        endVerseNumber:54,
        text: "Luke 11:29-54"
    }
    ]
  },
  {
    key: 97,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 97,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 97"
      },
      {
        bookName: "Luke",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:34,
        text: "Luke 12:1-34"
    }
    ]
  },
  {
    key: 98,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 98,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 98"
      },
      {
        bookName: "Luke",
        chapterNumber: 12,
        startVerseNumber: 35,
        endVerseNumber:59,
        text: "Luke 12:35-59"
    }
    ]
  },
  {
    key: 99,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 99,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 99"
      },
      {
        bookName: "Luke",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "Luke 13:1-21"
    }
    ]
  },
  {
    key: 100,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 100,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 100"
      },
      {
        bookName: "Luke",
        chapterNumber: 13,
        startVerseNumber: 22,
        endVerseNumber:35,
        text: "Luke 13:22-35"
    }
    ]
  },
  {
    key: 101,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 101,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 101"
      },
      {
        bookName: "Luke",
        chapterNumber: 14,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: "Luke 14:1-24"
    }
    ]
  },
  {
    key: 102,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 102,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 102"
      },
      {
        bookName: "Luke",
        chapterNumber: 14,
        startVerseNumber: 25,
        endVerseNumber:35,
        text: "Luke 14:25-35"
    }
    ]
  },
  {
    key: 103,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 103,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 103"
      },
      {
        bookName: "Luke",
        chapterNumber: 15,
        startVerseNumber: 1,
        endVerseNumber:32,
        text: "Luke 15"
    }
    ]
  },
  {
    key: 104,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 104,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 104"
      },
      {
        bookName: "Luke",
        chapterNumber: 16,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: "Luke 16:1-18"
    }
    ]
  },
  {
    key: 105,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 105,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 105"
      },
      {
        bookName: "Luke",
        chapterNumber: 16,
        startVerseNumber: 19,
        endVerseNumber:31,
        text: "Luke 16:19-31"
    }
    ]
  },
  {
    key: 106,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 106,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 106"
      },
      {
        bookName: "Luke",
        chapterNumber: 17,
        startVerseNumber: 1,
        endVerseNumber:19,
        text: "Luke 17:1-19"
    }
    ]
  },
  {
    key: 107,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 107,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 107"
      },
      {
        bookName: "Luke",
        chapterNumber: 17,
        startVerseNumber: 20,
        endVerseNumber:37,
        text: "Luke 17:20-37"
    }
    ]
  },
  {
    key: 108,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 108,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 108"
      },
      {
        bookName: "Luke",
        chapterNumber: 18,
        startVerseNumber: 1,
        endVerseNumber:17,
        text: "Luke 18:1-17"
    }
    ]
  },
  {
    key: 109,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 109,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 109"
      },
      {
        bookName: "Luke",
        chapterNumber: 18,
        startVerseNumber: 18,
        endVerseNumber:43,
        text: "Luke 18:18-43"
    }
    ]
  },
  {
    key: 110,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 110,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 110"
      },
      {
        bookName: "Luke",
        chapterNumber: 19,
        startVerseNumber: 1,
        endVerseNumber:27,
        text: "Luke 19:1-27"
    }
    ]
  },
  {
    key: 111,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 111,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 111"
      },
      {
        bookName: "Luke",
        chapterNumber: 19,
        startVerseNumber: 28,
        endVerseNumber:48,
        text: "Luke 19:28-48"
    }
    ]
  },
  {
    key: 112,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 112,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 112"
      },
      {
        bookName: "Luke",
        chapterNumber: 20,
        startVerseNumber: 1,
        endVerseNumber:26,
        text: "Luke 20:1-26"
    }
    ]
  },
  {
    key: 113,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 113,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 113"
      },
      {
        bookName: "Luke",
        chapterNumber: 20,
        startVerseNumber: 27,
        endVerseNumber:47,
        text: "Luke 20:27-47"
    }
    ]
  },
  {
    key: 114,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 114,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 114"
      },
      {
        bookName: "Luke",
        chapterNumber: 21,
        startVerseNumber: 1,
        endVerseNumber:38,
        text: "Luke 21"
    }
    ]
  },
  {
    key: 115,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 115,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 115"
      },
      {
        bookName: "Luke",
        chapterNumber: 22,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: "Luke 22:1-30"
    }
    ]
  },
  {
    key: 116,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 116,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 116"
      },
      {
        bookName: "Luke",
        chapterNumber: 22,
        startVerseNumber: 31,
        endVerseNumber:53,
        text: "Luke 22:31-53"
    }
    ]
  },
  {
    key: 117,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 117,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 117"
      },
      {
            
        bookName: "Luke",
        chapterNumber: 22,
        startVerseNumber: 54,
        endVerseNumber:71,
        text: "Luke 22:54-71"
    }
    ]
  },
  {
    key: 118,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 118,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 118"
      },
      {
        bookName: "Luke",
        chapterNumber: 23,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: "Luke 23:1-25"
    }
    ]
  },
  {
    key: 119,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 0,
        endVerseNumber: 16,
        text: "Psalm 119:1-16"
      },
      {
        bookName: "Luke",
        chapterNumber: 23,
        startVerseNumber: 26,
        endVerseNumber:56,
        text: "Luke 23:26-56"
    }
    ]
  },
  {
    key: 120,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 17,
        endVerseNumber: 32,
        text: "Psalm 119:17-32"
      },
      {
        bookName: "Luke",
        chapterNumber: 24,
        startVerseNumber: 1,
        endVerseNumber:35,
        text: "Luke 24:1-35"
    }
    ]
  },
  {
    key: 121,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 33,
        endVerseNumber: 56,
        text: "Psalm 119:33-56"
      },
      {
        bookName: "Luke",
        chapterNumber: 24,
        startVerseNumber: 36,
        endVerseNumber:53,
        text: "Luke 24:36-53"
    }
    ]
  },
  {
    key: 122,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 57,
        endVerseNumber: 72,
        text: "119:57-72"
      },
      {
        bookName: "John",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:28,
        text: "John 1:1-28"
      }
    ]
  },
  {
    key: 123,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 73,
        endVerseNumber: 88,
        text: "Psalm 119:73-88"
      },
      {
        bookName: "John",
        chapterNumber: 1,
        startVerseNumber: 29,
        endVerseNumber:51,
        text: "John 1:29-51"
      }
    ]
  },
  {
    key: 124,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 89,
        endVerseNumber: 104,
        text: "Psalm 119:89-104"
      },
      {
        bookName: "John",
        chapterNumber: 2,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: "John 2"
      }
    ]
  },
  {
    key: 125,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 105,
        endVerseNumber: 120,
        text: "Psalm 119:105-120"
      },
      {
        bookName: "John",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:24,
        text: "John 3:1-24"
  }
    ]
  },
  {
    key: 126,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 121,
        endVerseNumber: 136,
        text: "Psalm 119:121-136"
      },
      {
        bookName: "John",
        chapterNumber: 3,
        startVerseNumber: 25,
        endVerseNumber:36,
        text: "John 3:25-36"
  }
    ]
  },
  {
    key: 127,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 137,
        endVerseNumber: 152,
        text: "Psalm 119:137-152"
      },
      {
        bookName: "John",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:30,
        text: "John 4:1-30"
      }
    ]
  },
  {
    key: 128,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 153,
        endVerseNumber: 176,
        text: "Psalm 119:153-176"
      },
      {
        bookName: "John",
        chapterNumber: 4,
        startVerseNumber: 31,
        endVerseNumber:54,
        text: "John 4:31-54"
  }
    ]
  },
  {
    key: 129,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 120,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 120"
      },
      {
        bookName: "John",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: "John 5:1-30"
  }
    ]
  },
  {
    key: 130,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 121,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 121"
      },
      {
        bookName: "John",
        chapterNumber: 5,
        startVerseNumber: 31,
        endVerseNumber:47,
        text: "John 5:31-47"
  }
    ]
  },
  {
    key: 131,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 122,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 122"
      },
      {
        bookName: "John",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: "John 6:1-24"
  }
    ]
  },
  {
    key: 132,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 123,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 123"
      },
      {
        bookName: "John",
        chapterNumber: 6,
        startVerseNumber: 25,
        endVerseNumber:59,
        text: "John 6:25-59"
      }
    ]
  },
  {
    key: 133,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 124,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 124"
      },
      {
        bookName: "John",
        chapterNumber: 6,
        startVerseNumber: 60,
        endVerseNumber:71,
        text: "John 6:60-71"
      }
    ]
  },
  {
    key: 134,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 125,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 125"
      },
      {
        bookName: "John",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: "John 7:1-24"
      }
    ]
  },
  {
    key: 135,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 126,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 126"
      },
      {
        bookName: "John",
        chapterNumber: 7,
        startVerseNumber: 25,
        endVerseNumber:53,
        text: "John 7:25-53"
  }
    ]
  },
  {
    key: 136,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 127,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 127"
      },
      {
        bookName: "John",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:29,
        text: "John 8:1-29"
  }
    ]
  },
  {
    key: 137,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 128,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 128"
      },
      {
        bookName: "John",
        chapterNumber: 8,
        startVerseNumber: 30,
        endVerseNumber:59,
        text: "John 8:30-59"
  }
    ]
  },
  {
    key: 138,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 129,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 129"
      },
      {
        bookName: "John",
        chapterNumber: 9,
        startVerseNumber: 1,
        endVerseNumber:41,
        text: "John 9"
      }
    ]
  },
  {
    key: 139,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 130,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 130"
      },
      {
        bookName: "John",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "John 10:1-21"
      }
    ]
  },
  {
    key: 140,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 131,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 131"
      },
      {
        bookName: "John",
        chapterNumber: 10,
        startVerseNumber: 22,
        endVerseNumber:42,
        text: "John 10:22-42"
      }
    ]
  },
  {
    key: 141,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 132,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 132"
      },
      {
        bookName: "John",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:44,
        text: "John 11:1-44"
      }
    ]
  },
  {
    key: 142,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 133,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 133"
      },
      {
        bookName: "John",
        chapterNumber: 11,
        startVerseNumber: 45,
        endVerseNumber:57,
        text: "John 11:45-57"
      }
    ]
  },
  {
    key: 143,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 134,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 134"
      },
      {
        bookName: "John",
       chapterNumber: 12,
       startVerseNumber: 1,
       endVerseNumber:33,
       text: "John 12:1-33"
     }
    ]
  },
  {
    key: 144,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 135,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 135"
      },
      {
        bookName: "John",
        chapterNumber: 12,
        startVerseNumber: 34,
        endVerseNumber:50,
        text: "John 12:34-50"
  }
    ]
  },
  {
    key: 145,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 136,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 136"
      },
      {
        bookName: "John",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:19,
        text: "John 13:1-19"
  }
    ]
  },
  {
    key: 146,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 137,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 137"
      },
      {
        bookName: "John",
        chapterNumber: 13,
        startVerseNumber: 20,
        endVerseNumber:38,
        text: "John 13:20-38"
  }
    ]
  },
  {
    key: 147,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 138,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 138"
      },
      {
        bookName: "John",
        chapterNumber: 14,
        startVerseNumber: 1,
        endVerseNumber:14,
        text: "John 14:1-14"
  }
    ]
  },
  {
    key: 148,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 139,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 139"
      },
      {
        bookName: "John",
        chapterNumber: 14,
        startVerseNumber: 15,
        endVerseNumber:31,
        text: "John 14:15-31"
  }
    ]
  },
  {
    key: 149,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 140,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 140"
      },
      {
        bookName: "John",
        chapterNumber: 15,
        startVerseNumber: 1,
        endVerseNumber:27,
        text: "John 15"
      }
    ]
  },
  {
    key: 150,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 141,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 141"
      },
      {
        bookName: "John",
        chapterNumber: 16,
        startVerseNumber: 1,
        endVerseNumber:16,
        text: "John 16:1-16"
  }
    ]
  },
  {
    key: 151,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 142,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 142"
      },
      {
        bookName: "John",
        chapterNumber: 16,
        startVerseNumber: 17,
        endVerseNumber:33,
        text: "John 16:17-33"
  }
    ]
  },
  {
    key: 152,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 143,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 143"
      },
      {
        bookName: "John",
        chapterNumber: 17,
        startVerseNumber: 1,
        endVerseNumber:26,
        text: "John 17"
      }
    ]
  },
  {
    key: 153,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 144,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 144"
      },
      {
        bookName: "John",
        chapterNumber: 18,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: "John 18:1-24"
      }
    ]
  },
  {
    key: 154,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 145,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 145"
      },
      {
        bookName: "John",
        chapterNumber: 18,
        startVerseNumber: 25,
        endVerseNumber:40,
        text: "John 18:25-40"
      }
    ]
  },
  {
    key: 155,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 146,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 146"
      },
      {
        bookName: "John",
        chapterNumber: 19,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: "John 19:1-24"
      }
    ]
  },
  {
    key: 156,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 147,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 147"
      },
      {
        bookName: "John",
        chapterNumber: 19,
        startVerseNumber: 25,
        endVerseNumber:42,
        text: "John 19:25-42"
      }
    ]
  },
  {
    key: 157,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 148,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 148"
      },
      {
        bookName: "John",
        chapterNumber: 20,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: "John 20:1-18"
      }
    ]
  },
  {
    key: 158,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 149,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 149"
      },
      {
        bookName: "John",
        chapterNumber: 20,
        startVerseNumber: 19,
        endVerseNumber:31,
        text: "John 20:19-31"
      }
    ]
  },
  {
    key: 159,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 150,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 150"
      },
      {
        bookName: "John",
        chapterNumber: 21,
        startVerseNumber: 1,
        endVerseNumber:14,
        text: "John 21:1-14"
      }
    ]
  },
  {
    key: 160,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber: 19,
        text: "Proverbs 1:1-19"
      },
      {
        bookName: "John",
        chapterNumber: 21,
        startVerseNumber: 15,
        endVerseNumber:25,
        text: "John 21:15-25"
      }
    ]
  },
  {
    key: 161,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 1,
        startVerseNumber: 20,
        endVerseNumber: 33,
        text: "Proverbs 1:20-33"
      },
      {
        bookName: "Acts",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:26,
        text: "Acts 1"
      }
    ]
  },
  {
    key: 162,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 2,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Proverbs 2"
      },
      {
        bookName: "Acts",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "Acts 2:1-21"
        }
    ]
  },
  {
    key: 163,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber: 17,
        text: "Proverbs 3:1-17"
      },
      {
        bookName: "Acts",
        chapterNumber: 2,
        startVerseNumber: 22,
        endVerseNumber:47,
        text: "Acts 2:22-47"
        }
    ]
  },
  {
    key: 164,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 3,
        startVerseNumber: 18,
        endVerseNumber: 35,
        text: "Proverbs 3:18-35"
      },
      {
        bookName: "Acts",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:26,
        text: "Acts 3"
    }
    ]
  },
  {
    key: 165,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Proverbs 4"
      },
      {
        bookName: "Acts",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:37,
        text: "Acts 4"
        }
    ]
  },
  {
    key: 166,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 5,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Proverbs 5"
      },
      {
        bookName: "Acts",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "Acts 5:1-21"
    }
    ]
  },
  {
    key: 167,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 6,
        startVerseNumber: 0,
        endVerseNumber: 17,
        text: "Proverbs 6:1-17"
      },
      {
        bookName: "Acts",
        chapterNumber: 5,
        startVerseNumber: 22,
        endVerseNumber:42,
        text: "Acts 5:22-42"
    }
    ]
  },
  {
    key: 168,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 6,
        startVerseNumber: 18,
        endVerseNumber: 35,
        text: "Proverbs 6:18-35"
      },
      {
        bookName: "Acts",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:15,
        text: "Acts 6"
    }
    ]
  },
  {
    key: 169,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 7,
        startVerseNumber: 0,
        endVerseNumber: 15,
        text: "Proverbs 7:1-15"
      },
      {
        bookName: "Acts",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:19,
        text: "Acts 7:1-19"
    }
    ]
  },
  {
    key: 170,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 7,
        startVerseNumber: 16,
        endVerseNumber: 27,
        text: "Proverbs 7:16-27"
      },
      {
        bookName: "Acts",
        chapterNumber: 7,
        startVerseNumber: 20,
        endVerseNumber:43,
        text: "Acts 7:20-43"
        }
    ]
  },
  {
    key: 171,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 8,
        startVerseNumber: 0,
        endVerseNumber: 17,
        text: "Proverbs 8:1-17"
      },
      {
        bookName: "Acts",
        chapterNumber: 7,
        startVerseNumber: 44,
        endVerseNumber:60,
        text: "Acts 7:44-60"
        }
    ]
  },
  {
    key: 172,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 8,
        startVerseNumber: 18,
        endVerseNumber: 36,
        text: "Proverbs 8:18-36"
      },
      {
        bookName: "Acts",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: "Acts 8:1-25"
        }
    ]
  },
  {
    key: 173,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 9,
        startVerseNumber: 0,
        endVerseNumber: 10,
        text: "Proverbs 9:1-10"
      },
      {
        bookName: "Acts",
        chapterNumber: 8,
        startVerseNumber: 26,
        endVerseNumber:40,
        text: "Acts 8:26-40"
    }
    ]
  },
  {
    key: 174,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 9,
        startVerseNumber: 11,
        endVerseNumber: 18,
        text: "Proverbs 9:11-18"
      },
      {
        bookName: "Acts",
        chapterNumber:  9,
        startVerseNumber: 1,
        endVerseNumber:31,
        text: "Acts 9:1-31"
    }
    ]
  },
  {
    key: 175,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 10,
        startVerseNumber: 0,
        endVerseNumber: 16,
        text: "Proverbs 10:1-16"
      },
      {
        bookName: "Acts",
        chapterNumber: 9,
        startVerseNumber: 32,
        endVerseNumber:43,
        text: "Acts 9:32-43"
    }
    ]
  },
  {
    key: 176,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 10,
        startVerseNumber: 17,
        endVerseNumber: 31,
        text: "Proverbs 10:17-31"
      },
      {
        bookName: "Acts",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:23,
        text: "Acts 10:1-23"
        }
    ]
  },
  {
    key: 177,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 11,
        startVerseNumber: 0,
        endVerseNumber: 15,
        text: "Proverbs 11:1-15"
      },
      {
        bookName: "Acts",
        chapterNumber: 10,
        startVerseNumber: 24,
        endVerseNumber:48,
        text: "Acts 10:24-48"
        }
    ]
  },
  {
    key: 178,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 11,
        startVerseNumber: 16,
        endVerseNumber: 31,
        text: "Proverbs 11:16-31"
      },
      {
        bookName: "Acts",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: "Acts 11"
        }
    ]
  },
  {
    key: 179,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 12,
        startVerseNumber: 0,
        endVerseNumber: 14,
        text: "Proverbs 12:1-14"
      },
      {
        bookName: "Acts",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: "Acts 12"
        }
    ]
  },
  {
    key: 180,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 12,
        startVerseNumber: 15,
        endVerseNumber: 28,
        text: "Proverbs 12:15-28"
      },
      {
        bookName: "Acts",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: "Acts 13:1-25"
        }
    ]
  },
  {
    key: 181,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 13,
        startVerseNumber: 0,
        endVerseNumber: 12,
        text: "Proverbs 13:1-12"
      },
      {
        bookName: "Acts",
       chapterNumber: 13,
       startVerseNumber: 26,
       endVerseNumber:52,
       text: "Acts 13:26-52"
       }
    ]
  },
  {
    key: 182,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 13,
        startVerseNumber: 13,
        endVerseNumber: 25,
        text: "Proverbs 13:13-25"
      },
      {
        bookName: "Acts",
        chapterNumber: 14,
        startVerseNumber: 1,
        endVerseNumber:28,
        text: "Acts 14"
    }
    ]
  },
  {
    key: 183,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 14,
        startVerseNumber: 0,
        endVerseNumber: 17,
        text: "Proverbs 14:1-17"
      },
      {
        bookName: "Acts",
        chapterNumber: 15,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "Acts 15:1-21"
    }
    ]
  },
  {
    key: 184,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 14,
        startVerseNumber: 0,
        endVerseNumber: 35,
        text: "Proverbs 14:18-35"
      },
      {
        bookName: "Acts",
        chapterNumber: 15,
        startVerseNumber: 22,
        endVerseNumber:41,
        text: "Acts 15:22-41"
    }
    ]
  },
  {
    key: 185,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 15,
        startVerseNumber: 1,
        endVerseNumber: 16,
        text: "Proverbs 15:1-16"
      },
      {
        bookName: "Acts",
        chapterNumber: 16,
        startVerseNumber: 1,
        endVerseNumber:15,
        text: "Acts 16:1-15"
    }
    ]
  },
  {
    key: 186,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 15,
        startVerseNumber: 17,
        endVerseNumber: 33,
        text: "Proverbs 15:17-33"
      },
      {
        bookName: "Acts",
        chapterNumber: 16,
        startVerseNumber: 16,
        endVerseNumber:40,
        text: "Acts 16:16-40"
        }
    ]
  },
  {
    key: 187,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 16,
        startVerseNumber: 1,
        endVerseNumber: 16,
        text: "Proverbs 16:1-16"
      },
      {
        bookName: "Acts",
        chapterNumber: 17,
        startVerseNumber: 1,
        endVerseNumber:34,
        text: "Acts 17"
    }
    ]
  },
  {
    key: 188,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 16,
        startVerseNumber: 17,
        endVerseNumber: 33,
        text: "Proverbs 16:17-33"
      },
      {
        bookName: "Acts",
        chapterNumber: 18,
        startVerseNumber: 1,
        endVerseNumber:28,
        text: "Acts 18"
        }
    ]
  },
  {
    key: 189,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 17,
        startVerseNumber: 1,
        endVerseNumber: 200,
        text: "Proverbs 17"
      },
      {
        bookName: "Acts",
        chapterNumber: 19,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: "Acts 19:1-22"
        }
    ]
  },
  {
    key: 190,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 18,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Proverbs 18"
      },
      {
        bookName: "Acts",
        chapterNumber: 19,
        startVerseNumber: 23,
        endVerseNumber:41,
        text: "Acts 19:23-41"
        }
    ]
  },
  {
    key: 191,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 19,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Proverbs 19"
      },
      {
        bookName: "Acts",
        chapterNumber: 20,
        startVerseNumber: 1,
        endVerseNumber:38,
        text: "Acts 20"
        }
    ]
  },
  {
    key: 192,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 20,
        startVerseNumber: 0,
        endVerseNumber:15,
        text: "Proverbs 20:1-15"
      },
      {
        bookName: "Acts",
        chapterNumber: 21,
        startVerseNumber: 1,
        endVerseNumber:26,
        text: "Acts 21:1-26"
        }
    ]
  },
  {
    key: 193,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 20,
        startVerseNumber: 16,
        endVerseNumber:30,
        text: "Proverbs 20:16-30"
      },
      {
        bookName: "Acts",
        chapterNumber: 21,
        startVerseNumber: 27,
        endVerseNumber:40,
        text: "Acts 21:27-40"
        }
    ]
  },
  {
    key: 194,
    dayChapters: [{
      bookName: "Proverbs",
      chapterNumber: 21,
      startVerseNumber: 1,
      endVerseNumber:15,
      text: "Proverbs 21:1-15"
    },
    {
      bookName: "Acts",
      chapterNumber: 22,
      startVerseNumber: 1,
      endVerseNumber:30,
      text: "Acts 22"
      }
  
  ]
  },
  {
    key: 195,
    dayChapters: [{
      bookName: "Proverbs",
      chapterNumber: 21,
      startVerseNumber: 16,
      endVerseNumber:31,
      text: "Proverbs 21:16-31"
    },
    {
      bookName: "Acts",
      chapterNumber: 23,
      startVerseNumber: 1,
      endVerseNumber:35,
      text: "Acts 23"
      }
  ]
  },
  {
    key: 196,
    dayChapters: [{
      bookName: "Proverbs",
      chapterNumber: 22,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Proverbs 22"
    },
    {
      bookName: "Acts",
      chapterNumber: 24,
      startVerseNumber: 1,
      endVerseNumber:27,
      text: "Acts 24"
      }
  ]
  },
  {
    key: 197,
    dayChapters: [{
      bookName: "Proverbs",
      chapterNumber: 23,
      startVerseNumber: 1,
      endVerseNumber:17,
      text: "Proverbs 23:1-17"
    },
    {
      bookName: "Acts",
      chapterNumber: 25,
      startVerseNumber: 1,
      endVerseNumber:27,
      text: "Acts 25"
      }
  ]
  },
  {
    key: 198,
    dayChapters:[{
      bookName: "Proverbs",
      chapterNumber: 23,
      startVerseNumber: 18,
      endVerseNumber:35,
      text: "Proverbs 23:18-35"
    },
    {
      bookName: "Acts",
      chapterNumber: 26,
      startVerseNumber: 1,
      endVerseNumber:32,
      text: "Acts 26"
      }
  ]
  },
  {
    key: 199,
    dayChapters:[{
      bookName: "Proverbs",
      chapterNumber: 24,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Proverbs 24"
    },
    {
      bookName: "Acts",
      chapterNumber: 27,
      startVerseNumber: 1,
      endVerseNumber:26,
      text: "Acts 27:1-26"
      }
  ]
  },
  {
    key: 200,
    dayChapters: [{
      bookName: "Proverbs",
      chapterNumber: 25,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Proverbs 25"
    },
    {
      bookName: "Acts",
      chapterNumber: 27,
      startVerseNumber: 27,
      endVerseNumber:44,
      text: "Acts 27:27-44"
      }
  ]
  },
  {
    key: 201,
    dayChapters: [{
      bookName: "Proverbs",
      chapterNumber: 26,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Proverbs 26"
    },
    {
      bookName: "Acts",
      chapterNumber: 28,
      startVerseNumber: 1,
      endVerseNumber:31,
      text: "Acts 28"
      }
  ]
  },
  {
    key: 202,
    dayChapters: [{
      bookName: "Proverbs",
      chapterNumber: 27,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Proverbs 27"
    },
    {
      bookName: "Romans",
      chapterNumber: 1,
      startVerseNumber: 0,
      endVerseNumber:17,
      text: "Romans 1:1-17"
    }
  ]
  },
  {
    key: 203,
    dayChapters: [{
      bookName: "Proverbs",
      chapterNumber: 28,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Proverbs 28"
    },
    {
      bookName: "Romans",
      chapterNumber: 1,
      startVerseNumber: 18,
      endVerseNumber:32,
      text: "Romans 1:18-32"
    }
  ]
  },
  {
    key: 204,
    dayChapters: [{
      bookName: "Proverbs",
      chapterNumber: 29,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Proverbs 29"
    },
    {
      bookName: "Romans",
      chapterNumber: 2,
      startVerseNumber: 1,
      endVerseNumber:29,
      text: "Romans 2"
    }
  ]
  },
  {
    key: 205,
    dayChapters: [{
      bookName: "Proverbs",
      chapterNumber: 30,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Proverbs 30"
    },
    {
      bookName: "Romans",
      chapterNumber: 3,
      startVerseNumber: 0,
      endVerseNumber:31,
      text: "Romans 3"
    }
  ]
  },
  {
    key: 206,
    dayChapters: [{
      bookName: "Proverbs",
      chapterNumber: 31,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Proverbs 31"
    },
    {
      bookName: "Romans",
      chapterNumber: 4,
      startVerseNumber: 0,
      endVerseNumber:25,
      text: "Romans 4"
}
  ]
  },
  {
    key: 207,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 1,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 1"
    },
    {
      bookName: "Romans",
      chapterNumber: 5,
      startVerseNumber: 0,
      endVerseNumber:21,
      text: "Romans 5"
    }
  ]
  },
  {
    key: 208,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 2,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 2"
    },
    {
      bookName: "Romans",
      chapterNumber: 6,
      startVerseNumber: 1,
      endVerseNumber:23,
      text: "Romans 6"
}
  ]
  },
  {
    key: 209,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 2,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 3"
    },
    {
      bookName: "Romans",
      chapterNumber: 7,
      startVerseNumber: 1,
      endVerseNumber:25,
      text: "Romans 7"
}
  ]
  },
  {
    key: 210,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 4,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 4"
    },
    {
      bookName: "Romans",
      chapterNumber: 8,
      startVerseNumber: 1,
      endVerseNumber:17,
      text: "Romans 8:1-17"
}
  ]
  },
  {
    key: 211,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 5,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 5"
    },
    {
      bookName: "Romans",
      chapterNumber: 8,
      startVerseNumber: 18,
      endVerseNumber:39,
      text: "Romans 8:18-39"
}
  ]
  },
  {
    key: 212,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 6,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 6"
    },
    {
      bookName: "Romans",
      chapterNumber: 9,
      startVerseNumber: 1,
      endVerseNumber:13,
      text: "Romans 9:1-13"
    }
  ]
  },
  {
    key: 213,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 7,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 7"
    },
    {
      bookName: "Romans",
      chapterNumber: 9,
      startVerseNumber: 14,
      endVerseNumber:33,
      text: "Romans 9:14-33"
    }
  ]
  },
  {
    key: 214,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 8,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 8"
    },
    {
      bookName: "Romans",
      chapterNumber: 10,
      startVerseNumber: 1,
      endVerseNumber:21,
      text: "Romans 10"
    }
  ]
  },
  {
    key: 215,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 9,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 9"
    },
    {
      bookName: "Romans",
      chapterNumber: 11,
      startVerseNumber: 1,
      endVerseNumber:24,
      text: "Romans 11:1-24"
    }
  ]
  },
  {
    key: 216,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 10,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 10"
    },
    {
      bookName: "Romans",
      chapterNumber: 11,
      startVerseNumber: 25,
      endVerseNumber:36,
      text: "Romans 11:25-36"
}
  ]
  },
  {
    key: 217,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 11,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 11"
    },
    {
      bookName: "Romans",
      chapterNumber: 12,
      startVerseNumber: 1,
      endVerseNumber:21,
      text: "Romans 12"
}
  ]
  },
  {
    key: 218,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 12,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 12"
    },
    {
      bookName: "Romans",
      chapterNumber: 13,
      startVerseNumber: 1,
      endVerseNumber:14,
      text: "Romans 13"
}
  ]
  },
  {
    key: 219,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 13,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 13"
    },
    {
      bookName: "Romans",
      chapterNumber: 14,
      startVerseNumber: 1,
      endVerseNumber:23,
      text: "Romans 14"
    }
  ]
  },
  {
    key: 220,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 14,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 14"
    },
    {
      bookName: "Romans",
      chapterNumber: 15,
      startVerseNumber: 1,
      endVerseNumber:22,
      text: "Romans 15:1-22"
    }
  ]
  },
  {
    key: 221,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 15,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 15"
    },
    {
      bookName: "Romans",
      chapterNumber: 15,
      startVerseNumber: 23,
      endVerseNumber:33,
      text: "Romans 15:23-33"
    }
  ]
  },
  {
    key: 222,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 16,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 16"
    },
    {
      bookName: "Romans",
      chapterNumber: 16,
      startVerseNumber: 1,
      endVerseNumber:16,
      text: "Romans 16:1-16"
    }
  ]
  },
  {
    key: 223,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 17,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 17"
    },
    {
      bookName: "Romans",
      chapterNumber: 16,
      startVerseNumber: 17,
      endVerseNumber:27,
      text: "Romans 16:17-27"
    }
  ]
  },
  {
    key: 224,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 18,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 18"
    },
    {
      bookName: "1 Corinthians",
      chapterNumber: 1,
      startVerseNumber: 0,
      endVerseNumber:17,
      text: "1 Corinthians 1:1-17"
    }
  ]
  },
  {
    key: 225,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 19,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 19"
    },
    {
      bookName: "1 Corinthians",
      chapterNumber: 1,
      startVerseNumber: 18,
      endVerseNumber:31,
      text: "1 Corinthians 1:18-31"
    }
  ]
  },
  {
    key: 226,
    dayChapters: [{
      bookName: "Psalm",
      chapterNumber: 20,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "Psalm 20"
    },
    {
      bookName: "1 Corinthians",
      chapterNumber: 2,
      startVerseNumber: 1,
      endVerseNumber:16,
      text: "1 Corinthians 2"
    }
  ]
  },
  {
    key: 227,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 21,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 21"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:23,
        text: "1 Corinthians 3"
      }
    ]
  },
  {
    key: 228,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 22,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 22"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:21,
        text: "1 Corinthians 4"
  }
    ]
  },
  {
    key: 229,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 23,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 23"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 5,
        startVerseNumber: 0,
        endVerseNumber:13,
        text: "1 Corinthians 5"
      }
    ]
  },
  {
    key: 230,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 24,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 24"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: "1 Corinthians 6"
  }
    ]
  },
  {
    key: 231,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 25,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 25"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: "1 Corinthians 7:1-24"
  }
    ]
  },
  {
    key: 232,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 26,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 26"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 7,
        startVerseNumber: 25,
        endVerseNumber:40,
        text: "1 Corinthians 7:25-40"
  }
    ]
  },
  {
    key: 233,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 27,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 27"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:13,
        text: "1 Corinthians 8"
  }
    ]
  },
  {
    key: 234,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 28,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 28"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 9,
        startVerseNumber: 1,
        endVerseNumber:27,
        text: "1 Corinthians 9"
      }
    ]
  },
  {
    key: 235,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 29,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 29"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: "1 Corinthians 10:1-22"
      }
    ]
  },
  {
    key: 236,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 30,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 30"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 10,
        startVerseNumber: 23,
        endVerseNumber:33,
        text: "1 Corinthians 10:23-33"
      }
    ]
  },
  {
    key: 237,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 31,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 31"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:16,
        text: "1 Corinthians 11:1-16"
  }
    ]
  },
  {
    key: 238,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 32,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 32"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 11,
        startVerseNumber: 17,
        endVerseNumber:34,
        text: "1 Corinthians 11:17-34"
  }
    ]
  },
  {
    key: 239,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 33,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 33"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:11,
        text: "1 Corinthians 12:1-11"
  }
    ]
  },
  {
    key: 240,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 34,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 34"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 12,
        startVerseNumber: 12,
        endVerseNumber:31,
        text: "1 Corinthians 12:12-31"
      }
    ]
  },
  {
    key: 241,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 35,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 35"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:13,
        text: "1 Corinthians 13"
      }
    ]
  },
  {
    key: 242,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 36,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 36"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 14,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: "1 Corinthians 14:1-25"
      }
    ]
  },
  {
    key: 243,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 37,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 37"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 14,
        startVerseNumber: 26,
        endVerseNumber:40,
        text: "1 Corinthians 14:26-40"
      }
    ]
  },
  {
    key: 244,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 38,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 38"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 15,
        startVerseNumber: 1,
        endVerseNumber:34,
        text: "1 Corinthians 15:1-34"
      }
    ]
  },
  {
    key: 245,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 39,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 39"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 15,
        startVerseNumber: 35,
        endVerseNumber:58,
        text: "1 Corinthians 15:35-58"
  }
    ]
  },
  {
    key: 246,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 40,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 40"
      },
      {
        bookName: "1 Corinthians",
        chapterNumber: 16,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: "1 Corinthians 16"
  }
    ]
  },
  {
    key: 247,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 41,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 41"
      },
      {
        bookName: "2 Corinthians",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:24,
        text: "2 Corinthians 1"
      }
    ]
  },
  {
    key: 248,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 42,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 42"
      },
      {
        bookName: "2 Corinthians",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:17,
        text: "2 Corinthians 2"
      }
    ]
  },
  {
    key: 249,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 43,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 43"
      },
      {
        bookName: "2 Corinthians",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:18,
        text: "2 Corinthians 3"
      }
    ]
  },
  {
    key: 250,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 44,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 44"
      },
      {
        bookName: "2 Corinthians",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:18,
        text: "2 Corinthians 4"
  }
    ]
  },
  {
    key: 251,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 45,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 45"
      },
      {
        bookName: "2 Corinthians",
        chapterNumber: 5,
        startVerseNumber: 0,
        endVerseNumber:21,
        text: "2 Corinthians 5"
      }
    ]
  },
  {
    key: 252,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 46,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 46"
      },
      {
        bookName: "2 Corinthians",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: "2 Corinthians 6"
  }
    ]
  },
  {
    key: 253,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 47,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 47"
      },
      {
        bookName: "2 Corinthians",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:16,
        text: "2 Corinthians 7"
  }
    ]
  },
  {
    key: 254,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 48,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 48"
      },
      {
        bookName: "2 Corinthians",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: "2 Corinthians 8"
  }
    ]
  },
  {
    key: 255,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 49,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 49"
      },
      {
        bookName: "2 Corinthians",
        chapterNumber: 9,
        startVerseNumber: 1,
        endVerseNumber:15,
        text: "2 Corinthians 9"
  }
    ]
  },
  {
    key: 256,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 50,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 50"
      },
      {
        bookName: "2 Corinthians",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: "2 Corinthians 10"
      }
    ]
  },
  {
    key: 257,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 51,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 51"
      },
      {
        bookName: "2 Corinthians",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:15,
        text: "2 Corinthians 11:1-15"
      }
    ]
  },
  {
    key: 258,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 52,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 52"
      },
      {
        bookName: "2 Corinthians",
        chapterNumber: 11,
        startVerseNumber: 16,
        endVerseNumber:33,
        text: "2 Corinthians 11:16-33"
      }
    ]
  },
  {
    key: 259,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 53,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 53"
      },
      {
        bookName: "2 Corinthians",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "2 Corinthians 12"
      }
    ]
  },
  {
    key: 260,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 54,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 54"
      },
      {
        bookName: "2 Corinthians",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:14,
        text: "2 Corinthians 13"
  }
    ]
  },
  {
    key: 261,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 55,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 55"
      },
      {
        bookName: "Galatians",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:24,
        text: "Galatians 1"
      }
    ]
  },
  {
    key: 262,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 56,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 56"
      },
      {
        bookName: "Galatians",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "Galatians 2"
      }
    ]
  },
  {
    key: 263,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 57,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 57"
      },
      {
        bookName: "Galatians",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:14,
        text: "Galatians 3:1-14"
      }
    ]
  },
  {
    key: 264,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 58,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 58"
      },
      {
        bookName: "Galatians",
        chapterNumber: 3,
        startVerseNumber: 15,
        endVerseNumber:29,
        text: "Galatians 3:15-29"
  }
    ]
  },
  {
    key: 265,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 59,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 59"
      },
      {
        bookName: "Galatians",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:20,
        text: "Galatians 4:1-20"
      }
    ]
  },
  {
    key: 266,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 60,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 60"
      },
      {
            
        bookName: "Galatians",
        chapterNumber: 4,
        startVerseNumber: 21,
        endVerseNumber:31,
        text: "Galatians 4:21-31"
  }
    ]
  },
  {
    key: 267,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 61,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 61"
      },
      {
        bookName: "Galatians",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:26,
        text: "Galatians 5"
  }
    ]
  },
  {
    key: 268,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 62,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 62"
      },
      {
        bookName: "Galatians",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: "Galatians 6"
  }
    ]
  },
  {
    key: 269,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 63,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 63"
      },
      {
        bookName: "Ephesians",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:23,
        text: "Ephesians 1"
      }
    ]
  },
  {
    key: 270,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 64,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 64"
      },
      {
        bookName: "Ephesians",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: "Ephesians 2"
      }
    ]
  },
  {
    key: 271,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 65,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 65"
      },
      {
        bookName: "Ephesians",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:21,
        text: "Ephesians 3"
      }
    ]
  },
  {
    key: 272,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 66,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 66"
      },
      {
        bookName: "Ephesians",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:16,
        text: "Ephesians 4:1-16"
  }
    ]
  },
  {
    key: 273,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 67,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 67"
      },
      {
        bookName: "Ephesians",
        chapterNumber: 4,
        startVerseNumber: 17,
        endVerseNumber:32,
        text: "Ephesians 4:17-32"
      }
    ]
  },
  {
    key: 274,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 68,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 68"
      },
      {
        bookName: "Ephesians",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "Ephesians 5:1-21"
  }
    ]
  },
  {
    key: 275,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 69,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 69"
      },
      {
        bookName: "Ephesians",
        chapterNumber: 5,
        startVerseNumber: 22,
        endVerseNumber:33,
        text: "Ephesians 5:22-33"
  }
    ]
  },
  {
    key: 276,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 70,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 70"
      },
      {
        bookName: "Ephesians",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: "Ephesians 6"
  }
    ]
  },
  {
    key: 277,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 71,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 71"
      },
      {
        bookName: "Philippians",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:30,
        text: "Philippians 1"
      }
    ]
  },
  {
    key: 278,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 72,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 72"
      },
      {
        bookName: "Philippians",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: "Philippians 2"
      }
    ]
  },
  {
    key: 279,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 73,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 73"
      },
      {
        bookName: "Philippians",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:21,
        text: "Philippians 3"
      }
    ]
  },
  {
    key: 280,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 74,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 74"
      },
      {
        bookName: "Philippians",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:23,
        text: "Philippians 4"
  }
    ]
  },
  {
    key: 281,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 75,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 75"
      },
      {
        bookName: "Colossians",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:29,
        text: "Colossians 1"
      }
    ]
  },
  {
    key: 282,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 76,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 76"
      },
      {
        bookName: "Colossians",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:23,
        text: "Colossians 2"
      }
    ]
  },
  {
    key: 283,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 77,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 77"
      },
      {
        bookName: "Colossians",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: "Colossians 3"
      }
    ]
  },
  {
    key: 284,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 78,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 78"
      },
      {
        bookName: "Colossians",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: "Colossians 4"
  }
    ]
  },
  {
    key: 285,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 79,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 79"
      },
      {
        bookName: "1 Thessalonians",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:10,
        text: "1 Thessalonians 1"
      }
    ]
  },
  {
    key: 286,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 80,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 80"
      },
      {
        bookName: "1 Thessalonians",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: "1 Thessalonians 2"
      }
    ]
  },
  {
    key: 287,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 81,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 81"
      },
      {
        bookName: "1 Thessalonians",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:13,
        text: "1 Thessalonians 3"
      }
    ]
  },
  {
    key: 288,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 82,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 82"
      },
      {
        bookName: "1 Thessalonians",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: "1 Thessalonians 4"
  }
    ]
  },
  {
    key: 289,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 83,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 83"
      },
      {
        bookName: "1 Thessalonians",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:28,
        text: "1 Thessalonians 5"
  }
    ]
  },
  {
    key: 290,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 84,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 84"
      },
      {
        bookName: "2 Thessalonians",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:12,
        text: "2 Thessalonians 1"
      }
    ]
  },
  {
    key: 291,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 85,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 85"
      },
      {
        bookName: "2 Thessalonians",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:17,
        text: "2 Thessalonians 2"
      }
    ]
  },
  {
    key: 292,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 86,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 86"
      },
      {
        bookName: "2 Thessalonians",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: "2 Thessalonians 3"
      }
    ]
  },
  {
    key: 293,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 87,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 87"
      },
      {
        bookName: "1 Timothy",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:20,
        text: "1 Timothy 1"
      }
    ]
  },
  {
    key: 294,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 88,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 88"
      },
      {
        bookName: "1 Timothy",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:15,
        text: "1 Timothy 2"
      }
    ]
  },
  {
    key: 295,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 89,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 89"
      },
      {
        bookName: "1 Timothy",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:16,
        text: "1 Timothy 3"
      }
    ]
  },
  {
    key: 296,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 90,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 90"
      },
      {
        bookName: "1 Timothy",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:16,
        text: "1 Timothy 4"
  }
    ]
  },
  {
    key: 297,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 91,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 91"
      },
      {
        bookName: "1 Timothy",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: "1 Timothy 5"
  }
    ]
  },
  {
    key: 298,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 92,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 92"
      },
      {
        bookName: "1 Timothy",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: "1 Timothy 6"
    }
    ]
  },
  {
    key: 299,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 93,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 93"
      },
      {
        bookName: "2 Timothy",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:18,
        text: "2 Timothy 1"
      }
    ]
  },
  {
    key: 300,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 95,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 95"
      },
      {
        bookName: "2 Timothy",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:26,
        text: "2 Timothy 2"
      }
    ]
  },
  {
    key: 301,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 95,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 95"
      },
      {
        bookName: "2 Timothy",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:17,
        text: "2 Timothy 3"
      }
    ]
  },
  {
    key: 302,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 96,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 96"
      },
      {
        bookName: "2 Timothy",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: "2 Timothy 4"
  }
    ]
  },
  {
    key: 303,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 97,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 97"
      },
      {
        bookName: "Titus",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:16,
        text: "Titus 1"
      }
    ]
  },
  {
    key: 304,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 98,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 98"
      },
      {
        bookName: "Titus",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:15,
        text: "Titus 2"
      }
    ]
  },
  {
    key: 305,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 99,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 99"
      },
      {
        bookName: "Titus",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:15,
        text: "Titus 3"
      }
    ]
  },
  {
    key: 306,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 100,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 100"
      },
      {
        bookName: "Philemon",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: "Philemon 1"
      }
    ]
  },
  {
    key: 307,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 101,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 101"
      },
      {
        bookName: "Hebrews",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:14,
        text: "Hebrews 1"
      }
    ]
  },
  {
    key: 308,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 102,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 102"
      },
      {
        bookName: "Hebrews",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: "Hebrews 2"
      }
    ]
  },
  {
    key: 309,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 103,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 103"
      },
      {
        bookName: "Hebrews",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:19,
        text: "Hebrews 3"
      }
    ]
  },
  {
    key: 310,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 104,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 104"
      },
      {
        bookName: "Hebrews",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:16,
        text: "Hebrews 4"
      }
    ]
  },
  {
    key: 311,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 105,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 105"
      },
      {
        bookName: "Hebrews",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:14,
        text: "Hebrews 5"
      }
    ]
  },
  {
    key: 312,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 106,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 106"
      },
      {
        bookName: "Hebrews",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: "Hebrews 6"
      }
    ]
  },
  {
    key: 313,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 107,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 107"
      },
      {
        bookName: "Hebrews",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:28,
        text: "Hebrews 7"
      }
    ]
  },
  {
    key: 314,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 108,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 108"
      },
      {
        bookName: "Hebrews",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:13,
        text: "Hebrews 8"
      }
    ]
  },
  {
    key: 315,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 109,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 109"
      },
      {
          bookName: "Hebrews",
          chapterNumber: 9,
          startVerseNumber: 1,
          endVerseNumber:28,
          text: "Hebrews 9"
      }
    ]
  },
  {
    key: 316,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 110,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 110"
      },
      {
        bookName: "Hebrews",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: "Hebrews 10:1-18"
      }
    ]
  },
  {
    key: 317,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 111,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 111"
      },
      {
        bookName: "Hebrews",
        chapterNumber: 10,
        startVerseNumber: 19,
        endVerseNumber:39,
        text: "Hebrews 10:19-39"
      }
    ]
  },
  {
    key: 318,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 112,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 112"
      },
      {
        bookName: "Hebrews",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: "Hebrews 11:1-20"
      }
    ]
  },
  {
    key: 319,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 113,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 113"
      },
      {
        bookName: "Hebrews",
        chapterNumber: 11,
        startVerseNumber: 21,
        endVerseNumber:40,
        text: "Hebrews 11:21-40"
      }
    ]
  },
  {
    key: 320,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 114,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 114"
      },
      {
        bookName: "Hebrews",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:13,
        text: "Hebrews 12:1-13"
      }
    ]
  },
  {
    key: 321,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 115,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 115"
      },
      {
        bookName: "Hebrews",
        chapterNumber: 12,
        startVerseNumber: 14,
        endVerseNumber:29,
        text: "Hebrews 12:14-29"
      }
    ]
  },
  {
    key: 322,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 116,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 116"
      },
      {
        bookName: "Hebrews",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: "Hebrews 13"
      }
    ]
  },
  {
    key: 323,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 117,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 117"
      },
      {
        bookName: "James",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:27,
        text: "James 1"
      }
    ]
  },
  {
    key: 324,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 118,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 118"
      },
      {
        bookName: "James",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:26,
        text: "James 2"
      }
    ]
  },
  {
    key: 325,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 0,
        endVerseNumber: 16,
        text: "Psalm 119:1-16"
      },
      {
        bookName: "James",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: "James 3"
      }
    ]
  },
  {
    key: 326,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 17,
        endVerseNumber: 32,
        text: "Psalm 119:17-32"
      },
      {
        bookName: "James",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:17,
        text: "James 4"
      }
    ]
  },
  {
    key: 327,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 33,
        endVerseNumber: 56,
        text: "Psalm 119:33-56"
      },
      {
        bookName: "James",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: "James 5"
      }
    ]
  },
  {
    key: 328,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 57,
        endVerseNumber: 72,
        text: "119:57-72"
      },
      {
        bookName: "1 Peter",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: "1 Peter 1"
      }
    ]
  },
  {
    key: 329,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 73,
        endVerseNumber: 88,
        text: "Psalm 119:73-88"
      },
      {
        bookName: "1 Peter",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: "1 Peter 2"
      }
    ]
  },
  {
    key: 330,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 89,
        endVerseNumber: 104,
        text: "Psalm 119:89-104"
      },
      {
        bookName: "1 Peter",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: "1 Peter 3"
      }
    ]
  },
  {
    key: 331,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 105,
        endVerseNumber: 120,
        text: "Psalm 119:105-120"
      },
      {
        bookName: "1 Peter",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:19,
        text: "1 Peter 4"
  }
    ]
  },
  {
    key: 332,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 121,
        endVerseNumber: 136,
        text: "Psalm 119:121-136"
      },
      {
        bookName: "1 Peter",
        chapterNumber: 5,
        startVerseNumber: 0,
        endVerseNumber:14,
        text: "1 Peter 5"
      }
    ]
  },
  {
    key: 333,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 137,
        endVerseNumber: 152,
        text: "Psalm 119:137-152"
      },
      {
        bookName: "2 Peter",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:21,
        text: "2 Peter 1"
      }
    ]
  },
  {
    key: 334,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 119,
        startVerseNumber: 137,
        endVerseNumber: 176,
        text: "Psalm 119:153-176"
      },
      {
        bookName: "2 Peter",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: "2 Peter 2"
      }
    ]
  },
  {
    key: 335,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 120,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 120"
      },
      {
        bookName: "2 Peter",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: "2 Peter 3"
      }
    ]
  },
  {
    key: 336,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 121,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 121"
      },
      {
        bookName: "1 John",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:10,
        text: "1 John 1"
      }
    ]
  },
  {
    key: 337,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 122,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 122"
      },
      {
        bookName: "1 John",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:29,
        text: "1 John 2"
      }
    ]
  },
  {
    key: 338,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 123,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 123"
      },
      {
        bookName: "1 John",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: "1 John 3"
      }
    ]
  },
  {
    key: 339,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 124,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 124"
      },
      {
        bookName: "1 John",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "1 John 4"
      }
    ]
  },
  {
    key: 340,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 125,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 125"
      },
      {
        bookName: "1 John",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "1 John 5"
      }
    ]
  },
  {
    key: 341,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 126,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 126"
      },
      {
        bookName: "2 John",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:13,
        text: "2 John 1"
      }
    ]
  },
  {
    key: 342,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 127,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 127"
      },
      {
        bookName: "3 John",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:15,
        text: "3 John 1"
      }
    ]
  },
  {
    key: 343,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 128,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 128"
      },
      {
        bookName: "Jude",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: "Jude 1"
      }
    ]
  },
  {
    key: 344,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 129,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 129"
      },
      {
        bookName: "Revelation",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:20,
        text: "Revelation 1"
       }
    ]
  },
  {
    key: 345,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 130,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 130"
      },
      {
        bookName: "Revelation",
        chapterNumber: 2,
        startVerseNumber: 0,
        endVerseNumber:17,
        text: "Revelation 2:1-17"
       }
    ]
  },
  {
    key: 346,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 131,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 131"
      },
      {
        bookName: "Revelation",
        chapterNumber: 2,
        startVerseNumber: 18,
        endVerseNumber:29,
        text: "Revelation 2:18-29"
       }
    ]
  },
  {
    key: 347,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 132,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 132"
      },
      {
        bookName: "Revelation",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: "Revelation 3"
       }
    ]
  },
  {
    key: 348,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 133,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 133"
      },
      {
        bookName: "Revelation",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:11,
        text: "Revelation 4"
       }
    ]
  },
  {
    key: 349,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 134,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 134"
      },
      {
        bookName: "Revelation",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:14,
        text: "Revelation 5"
   }
    ]
  },
  {
    key: 350,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 135,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 135"
      },
      {
        bookName: "Revelation",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:17,
        text: "Revelation 6"
   }
    ]
  },
  {
    key: 351,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 136,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 136"
      },
      {
        bookName: "Revelation",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:17,
        text: "Revelation 7"
   }
    ]
  },
  {
    key: 352,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 137,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 137"
      },
      {
        bookName: "Revelation",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:13,
        text: "Revelation 8"
     }
    ]
  },
  {
    key: 353,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 138,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 138"
      },
      {
        bookName: "Revelation",
        chapterNumber: 9,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "Revelation 9"
 }
    ]
  },
  {
    key: 354,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 139,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 139"
      },
      {
        bookName: "Revelation",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:11,
        text: "Revelation 10"
     }
    ]
  },
  {
    key: 355,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 140,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 140"
      },
      {
        bookName: "Revelation",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:19,
        text: "Revelation 11"
     }
    ]
  },
  {
    key: 356,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 141,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 141"
      },
      {
        bookName: "Revelation",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:17,
        text: "Revelation 12"
 }
    ]
  },
  {
    key: 357,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 142,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 142"
      },
      {
        bookName: "Revelation",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: "Revelation 13"
     }
    ]
  },
  {
    key: 358,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 143,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 143"
      },
      {
        bookName: "Revelation",
        chapterNumber: 14,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: "Revelation 14"
     }
    ]
  },
  {
    key: 359,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 144,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 144"
      },
      {
        bookName: "Revelation",
        chapterNumber: 15,
        startVerseNumber: 1,
        endVerseNumber:8,
        text: "Revelation 15"
     }
    ]
  },
  {
    key: 360,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 145,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 145"
      },
      {
        bookName: "Revelation",
        chapterNumber: 16,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "Revelation 16"
     }
    ]
  },
  {
    key: 361,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 146,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 146"
      },
      {
        bookName: "Revelation",
        chapterNumber: 17,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: "Revelation 17"
     }
    ]
  },
  {
    key: 362,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 147,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 147"
      },
      {
        bookName: "Revelation",
        chapterNumber: 18,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: "Revelation 18"
     }
    ]
  },
  {
    key: 363,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 148,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 148"
      },
      {
        bookName: "Revelation",
        chapterNumber: 19,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "Revelation 19"
     }
    ]
  },
  {
    key: 364,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 149,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 149"
      },
      {
        bookName: "Revelation",
        chapterNumber: 20,
        startVerseNumber: 1,
        endVerseNumber:15,
        text: "Revelation 20"
     },
     {
      bookName: "Revelation",
      chapterNumber: 21,
      startVerseNumber: 1,
      endVerseNumber:27,
      text: "Revelation 21"
   }
    ]
  },
  {
    key: 365,
    dayChapters: [
      {
        bookName: "Psalm",
        chapterNumber: 150,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "Psalm 150"
      },
      {
        bookName: "Revelation",
        chapterNumber: 22,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: "Revelation 22"
     }
      
    ]
  },
];
export const checkedList = _.times(365, _.constant([false]));
export const arabicCheckedList = _.times(365, _.constant([false]));

export const ArabicContent = [
  {
    key: 1,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:6,
        text: `مزامير ${Helpers.parseToArabic(1)}`
      },
      {
        bookName: "متى",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: `متى ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 2,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 2,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "مزامير ۲"
      },
      {
        bookName: "متى",
        chapterNumber: 2,
        startVerseNumber: 0,
        endVerseNumber:23,
        text: "متى ۲"
      }
    ]
  },
  {
    key: 3,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "مزامير ۳"
      },
      {
        bookName: "متى",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:17,
        text: "متى ۳"
      }
    ]
  },
  {
    key: 4,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(4)}`
      },
      {
        bookName: "متى",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: `متى ${Helpers.parseToArabic(4)}`
  }
    ]
  },
  {
    key: 5,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 5,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(5)}`
      },
      {
        bookName: "متى",
        chapterNumber: 5,
        startVerseNumber: 0,
        endVerseNumber:26,
        text: `متي ${Helpers.parseToArabic(5)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(26)}`
      }
    ]
  },
  {
    key: 6,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 6,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ٦`
      },
      {
            
        bookName: "متى",
        chapterNumber: 5,
        startVerseNumber: 27,
        endVerseNumber:48,
        text: `متي ${Helpers.parseToArabic(5)}: ${Helpers.parseToArabic(27)} - ${Helpers.parseToArabic(48)}`
  }
    ]
  },
  {
    key: 7,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 7,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "مزامير ۷"
      },
      {
        bookName: "متى",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:34,
        text: "متى ٦"
  }
    ]
  },
  {
    key: 8,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 8,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "مزامير ۸"
      },
      {
        bookName: "متى",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:29,
        text: "متى ۷"
  }
    ]
  },
  {
    key: 9,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 9,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "مزامير ۹"
      },
      {
        bookName: "متى",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:34,
        text: "متى ۸"
      }
    ]
  },
  {
    key: 10,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 10,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "مزامير ۱۰"
      },
      {
        bookName: "متى",
        chapterNumber: 9,
        startVerseNumber: 1,
        endVerseNumber:38,
        text: "متى ۹"
      }
    ]
  },
  {
    key: 11,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 11,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "مزامير ۱۱"
      },
      {
        bookName: "متى",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:23,
        text: `متي ${Helpers.parseToArabic(10)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(23)}`
      }
    ]
  },
  {
    key: 12,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 12,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "مزامير ۱۲"
      },
      {
        bookName: "متى",
        chapterNumber: 10,
        startVerseNumber: 24,
        endVerseNumber:42,
        text: `متي ${Helpers.parseToArabic(10)} :${Helpers.parseToArabic(24)} - ${Helpers.parseToArabic(42)}`
  }
    ]
  },
  {
    key: 13,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 13,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "مزامير ۱۳"
      },
      {
        bookName: "متى",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: "متى ۱۱"
  }
    ]
  },
  {
    key: 14,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 14,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(14)}`
      },
      {
        bookName: "متى",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `متي ${Helpers.parseToArabic(12)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(21)}`
      }
    ]
  },
  {
    key: 15,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 15,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(15)}`
      },
      {
        bookName: "متى",
        chapterNumber: 12,
        startVerseNumber: 22,
        endVerseNumber:50,
        text: `متى ${Helpers.parseToArabic(12)} :${Helpers.parseToArabic(22)} - ${Helpers.parseToArabic(50)}`
      }
    ]
  },
  {
    key: 16,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 16,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(16)}`
      },
      {
        bookName: "متى",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: `متى ${Helpers.parseToArabic(13)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(30)}`
      }
    ]
  },
  {
    key: 17,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 17,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(17)}`
      },
      {
        bookName: "متى",
        chapterNumber: 13,
        startVerseNumber: 31,
        endVerseNumber:58,
        text: `متى ${Helpers.parseToArabic(13)} :${Helpers.parseToArabic(31)} - ${Helpers.parseToArabic(58)}`
      }
    ]
  },
  {
    key: 18,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 18,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(18)}`
      },
      {
        bookName: "متى",
    chapterNumber: 14,
    startVerseNumber: 1,
    endVerseNumber:21,
    text: `متى ${Helpers.parseToArabic(14)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(21)}`
  }
    ]
  },
  {
    key: 19,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 19,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(19)}`
      },
      {
        bookName: "متى",
       chapterNumber: 14,
       startVerseNumber: 22,
       endVerseNumber:36,
       text: `متى ${Helpers.parseToArabic(14)} :${Helpers.parseToArabic(22)} - ${Helpers.parseToArabic(36)}`
      }
    ]
  },
  {
    key: 20,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 20,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(20)}`
      },
      {
        bookName: "متى",
        chapterNumber: 15,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: `متى ${Helpers.parseToArabic(15)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(20)}`
      }
    ]
  },
  {
    key: 21,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 21,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(21)}`
      },
      {
        bookName: "متى",
        chapterNumber: 15,
        startVerseNumber: 21,
        endVerseNumber:39,
        text: `متى ${Helpers.parseToArabic(15)} :${Helpers.parseToArabic(21)} - ${Helpers.parseToArabic(39)}`
  }
    ]
  },
  {
    key: 22,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 22,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(22)}`
      },
      {
        bookName: "متى",
        chapterNumber: 16,
        startVerseNumber: 1,
        endVerseNumber:28,
        text: `متى ${Helpers.parseToArabic(16)}`
  }
    ]
  },
  {
    key: 23,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 23,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(23)}`
      },
      {
        bookName: "متى",
        chapterNumber: 17,
        startVerseNumber: 1,
        endVerseNumber:27,
        text: `متى ${Helpers.parseToArabic(17)}`
  }
    ]
  },
  {
    key: 24,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 24,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(24)}`
      },
      {
        bookName: "متى",
        chapterNumber: 18,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: `متى ${Helpers.parseToArabic(18)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(20)}`
      }
    ]
  },
  {
    key: 25,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 25,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(25)}`
      },
      {
        bookName: "متى",
        chapterNumber: 18,
        startVerseNumber: 21,
        endVerseNumber:35,
        text: `متى ${Helpers.parseToArabic(18)} :${Helpers.parseToArabic(21)} - ${Helpers.parseToArabic(35)}`
  }
    ]
  },
  {
    key: 26,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 26,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(26)}`
      },
      {
        bookName: "متى",
        chapterNumber: 19,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: `متى ${Helpers.parseToArabic(19)}`
      }
    ]
  },
  {
    key: 27,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 27,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(27)}`
      },
      {
            
        bookName: "متى",
        chapterNumber: 20,
        startVerseNumber: 1,
        endVerseNumber:19,
        text: `متى ${Helpers.parseToArabic(20)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(19)}`
  }
    ]
  },
  {
    key: 28,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 28,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(28)}`
      },
      {
        bookName: "متى",
        chapterNumber: 20,
        startVerseNumber: 20,
        endVerseNumber:34,
        text: `متى ${Helpers.parseToArabic(20)} :${Helpers.parseToArabic(20)} - ${Helpers.parseToArabic(34)}`
  }
    ]
  },
  {
    key: 29,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 29,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(29)}`
      },
      {
        bookName: "متى",
        chapterNumber: 21,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: `متى ${Helpers.parseToArabic(21)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(22)}`
  }
    ]
  },
  {
    key: 30,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 30,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(30)}`
      },
      {
        bookName: "متى",
        chapterNumber: 21,
        startVerseNumber: 23,
        endVerseNumber:46,
        text: `متى ${Helpers.parseToArabic(21)} :${Helpers.parseToArabic(23)} - ${Helpers.parseToArabic(46)}`
      }
    ]
  },
  {
    key: 31,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 31,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(31)}`
      },
      {
        bookName: "متى",
        chapterNumber: 22,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: `متى ${Helpers.parseToArabic(22)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(22)}`
  }
    ]
  },
  {
    key: 32,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 32,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(32)}`
      },
      {
        bookName: "متى",
        chapterNumber: 22,
        startVerseNumber: 23,
        endVerseNumber:46,
        text: `متى ${Helpers.parseToArabic(22)} :${Helpers.parseToArabic(23)} - ${Helpers.parseToArabic(46)}`
      }
    ]
  },
  {
    key: 33,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 33,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(33)}`
      },
      {
        bookName: "متى",
        chapterNumber: 23,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: `متى ${Helpers.parseToArabic(23)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(22)}`
  }
    ]
  },
  {
    key: 34,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 34,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(34)}`
      },
      {
        bookName: "متى",
        chapterNumber: 23,
        startVerseNumber: 23,
        endVerseNumber:39,
        text: `متى ${Helpers.parseToArabic(23)} :${Helpers.parseToArabic(23)} - ${Helpers.parseToArabic(39)}`
      }
    ]
  },
  {
    key: 35,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 35,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(35)}`
      },
      {
        bookName: "متى",
        chapterNumber: 24,
        startVerseNumber: 1,
        endVerseNumber:31,
        text: `متى ${Helpers.parseToArabic(24)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(31)}`
      }
    ]
  },
  {
    key: 36,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 36,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(36)}`
      },
      {
        bookName: "متى",
        chapterNumber: 24,
        startVerseNumber: 31,
        endVerseNumber:51,
        text: `متى ${Helpers.parseToArabic(24)} :${Helpers.parseToArabic(31)} - ${Helpers.parseToArabic(51)}`
  }
    ]
  },
  {
    key: 37,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 37,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(37)}`
      },
      {
        bookName: "متى",
        chapterNumber: 25,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: `متى ${Helpers.parseToArabic(25)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(30)}`
  }
    ]
  },
  {
    key: 38,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 38,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(38)}`
      },
      {
            
        bookName: "متى",
        chapterNumber: 25,
        startVerseNumber: 31,
        endVerseNumber:46,
        text: `متى ${Helpers.parseToArabic(25)} :${Helpers.parseToArabic(31)} - ${Helpers.parseToArabic(46)}`
  }
    ]
  },
  {
    key: 39,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 39,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(39)}`
      },
      {
        bookName: "متى",
        chapterNumber: 26,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: `متى ${Helpers.parseToArabic(26)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(30)}`
      }
    ]
  },
  {
    key: 40,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 40,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(40)}`
      },
      {
        bookName: "متى",
        chapterNumber: 26,
        startVerseNumber: 31,
        endVerseNumber:56,
        text: `متى ${Helpers.parseToArabic(26)} :${Helpers.parseToArabic(31)} - ${Helpers.parseToArabic(56)}`
      }
    ]
  },
  {
    key: 41,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 41,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(41)}`
      },
      {
            
        bookName: "متى",
        chapterNumber: 26,
        startVerseNumber: 57,
        endVerseNumber:75,
        text: `متى ${Helpers.parseToArabic(26)} :${Helpers.parseToArabic(57)} - ${Helpers.parseToArabic(75)}`
  }
    ]
  },
  {
    key: 42,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 42,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(42)}`
      },
      {
        bookName: "متى",
        chapterNumber: 27,
        startVerseNumber: 1,
        endVerseNumber:31,
        text: `متى ${Helpers.parseToArabic(27)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(31)}`
  }
    ]
  },
  {
    key: 43,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 43,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(43)}`
      },
      {
        bookName: "متى",
        chapterNumber: 27,
        startVerseNumber: 32,
        endVerseNumber:66,
        text: `متى ${Helpers.parseToArabic(27)} :${Helpers.parseToArabic(32)} - ${Helpers.parseToArabic(66)}`
    }
    ]
  },
  {
    key: 44,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 44,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(44)}`
      },
      {
        bookName: "متى",
        chapterNumber: 28,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: `متى ${Helpers.parseToArabic(28)}`
    }
    ]
  },
  {
    key: 45,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 45,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(45)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:28,
        text: `مرقس ${Helpers.parseToArabic(1)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(28)}`
      }
    ]
  },
  {
    key: 46,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 46,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(46)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 1,
        startVerseNumber: 29,
        endVerseNumber:45,
        text: `مرقس ${Helpers.parseToArabic(1)} :${Helpers.parseToArabic(29)} - ${Helpers.parseToArabic(45)}`
      }
    ]
  },
  {
    key: 47,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 47,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(47)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 2,
        startVerseNumber: 0,
        endVerseNumber:28,
        text: `مرقس ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 48,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 48,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(48)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:35,
        text: `مرقس ${Helpers.parseToArabic(3)}`
  }
    ]
  },
  {
    key: 49,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 49,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(49)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: `مرقس ${Helpers.parseToArabic(4)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(25)}`
      }
    ]
  },
  {
    key: 50,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 50,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(50)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 4,
        startVerseNumber: 26,
        endVerseNumber:41,
        text: `مرقس ${Helpers.parseToArabic(4)} :${Helpers.parseToArabic(26)} - ${Helpers.parseToArabic(41)}`
  }
    ]
  },
  {
    key: 51,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 51,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(51)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: `مرقس ${Helpers.parseToArabic(5)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(20)}`
      }
    ]
  },
  {
    key: 52,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 52,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(52)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 5,
        startVerseNumber: 21,
        endVerseNumber:43,
        text: `مرقس ${Helpers.parseToArabic(5)} :${Helpers.parseToArabic(21)} - ${Helpers.parseToArabic(43)}`
  }
    ]
  },
  {
    key: 53,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 53,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(53)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:29,
        text: `مرقس ${Helpers.parseToArabic(6)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(29)}`
  }
    ]
  },
  {
    key: 54,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 54,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(54)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 6,
        startVerseNumber: 30,
        endVerseNumber:56,
        text: `مرقس ${Helpers.parseToArabic(6)} :${Helpers.parseToArabic(30)} - ${Helpers.parseToArabic(56)}`
      }
    ]
  },
  {
    key: 55,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 55,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(55)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:23,
        text: `مرقس ${Helpers.parseToArabic(7)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(23)}`
      }
    ]
  },
  {
    key: 56,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 56,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(56)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 7,
        startVerseNumber: 24,
        endVerseNumber:37,
        text: `مرقس ${Helpers.parseToArabic(7)} :${Helpers.parseToArabic(24)} - ${Helpers.parseToArabic(37)}`
      }
    ]
  },
  {
    key: 57,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 57,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(57)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `مرقس ${Helpers.parseToArabic(8)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(21)}`
  }
    ]
  },
  {
    key: 58,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 58,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(58)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 8,
        startVerseNumber: 22,
        endVerseNumber:38,
        text: `مرقس ${Helpers.parseToArabic(8)} :${Helpers.parseToArabic(22)} - ${Helpers.parseToArabic(38)}`
  }
    ]
  },
  {
    key: 59,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 59,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(59)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 9,
        startVerseNumber: 1,
        endVerseNumber:29,
        text: `مرقس ${Helpers.parseToArabic(9)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(29)}`
  }
    ]
  },
  {
    key: 60,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 60,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(60)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 9,
        startVerseNumber: 30,
        endVerseNumber:50,
        text: `مرقس ${Helpers.parseToArabic(9)} :${Helpers.parseToArabic(30)} - ${Helpers.parseToArabic(50)}`
      }
    ]
  },
  {
    key: 61,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 61,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(61)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:31,
        text: `مرقس ${Helpers.parseToArabic(10)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(31)}`
      }
    ]
  },
  {
    key: 62,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 62,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(62)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 10,
        startVerseNumber: 32,
        endVerseNumber:52,
        text: `مرقس ${Helpers.parseToArabic(10)} :${Helpers.parseToArabic(32)} - ${Helpers.parseToArabic(52)}`
      }
    ]
  },
  {
    key: 63,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 63,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(63)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:33,
        text: `مرقس ${Helpers.parseToArabic(11)}`
      }
    ]
  },
  {
    key: 64,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 64,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(64)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:27,
        text: `مرقس ${Helpers.parseToArabic(12)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(27)}`
      }
    ]
  },
  {
    key: 65,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 65,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(65)}`
      },
      {
        bookName: "مرقس",
       chapterNumber: 12,
       startVerseNumber: 28,
       endVerseNumber:44,
       text: `مرقس ${Helpers.parseToArabic(12)} :${Helpers.parseToArabic(28)} - ${Helpers.parseToArabic(44)}`
      }
    ]
  },
  {
    key: 66,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 66,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(66)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:37,
        text: `مرقس ${Helpers.parseToArabic(13)}`
  }
    ]
  },
  {
    key: 67,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 67,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(67)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 14,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `مرقس ${Helpers.parseToArabic(14)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(21)}`
      }
    ]
  },
  {
    key: 68,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 68,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(68)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 14,
        startVerseNumber: 22,
        endVerseNumber:52,
        text: `مرقس ${Helpers.parseToArabic(14)} :${Helpers.parseToArabic(22)} - ${Helpers.parseToArabic(52)}`
  }
    ]
  },
  {
    key: 69,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 69,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(69)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 14,
        startVerseNumber: 53,
        endVerseNumber:72,
        text: `مرقس ${Helpers.parseToArabic(14)} :${Helpers.parseToArabic(53)} - ${Helpers.parseToArabic(72)}`
      }
    ]
  },
  {
    key: 70,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 70,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(70)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 15,
        startVerseNumber: 1,
        endVerseNumber:32,
        text: `مرقس ${Helpers.parseToArabic(15)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(32)}`
      }
    ]
  },
  {
    key: 71,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 71,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(71)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 15,
        startVerseNumber: 33,
        endVerseNumber:47,
        text: `مرقس ${Helpers.parseToArabic(15)} :${Helpers.parseToArabic(33)} - ${Helpers.parseToArabic(47)}`
  }
    ]
  },
  {
    key: 72,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 72,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(72)}`
      },
      {
        bookName: "مرقس",
        chapterNumber: 16,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: `مرقس ${Helpers.parseToArabic(16)}`
      }
    ]
  },
  {
    key: 73,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 73,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(73)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: `لوقا ${Helpers.parseToArabic(1)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(25)}`
      }
    ]
  },
  {
    key: 74,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 74,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(74)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 1,
        startVerseNumber: 26,
        endVerseNumber:66,
        text: `لوقا ${Helpers.parseToArabic(1)} :${Helpers.parseToArabic(26)} - ${Helpers.parseToArabic(66)}`
      }
    ]
  },
  {
    key: 75,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 75,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(75)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 1,
        startVerseNumber: 67,
        endVerseNumber:80,
        text: `لوقا ${Helpers.parseToArabic(1)} :${Helpers.parseToArabic(67)} - ${Helpers.parseToArabic(80)}`
      }
    ]
  },
  {
    key: 76,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 76,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(76)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: `لوقا ${Helpers.parseToArabic(2)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(20)}`
    }
    ]
  },
  {
    key: 77,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 77,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(77)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 2,
        startVerseNumber: 21,
        endVerseNumber:50,
        text: `لوقا ${Helpers.parseToArabic(2)} :${Helpers.parseToArabic(21)} - ${Helpers.parseToArabic(50)}`
    }
    ]
  },
  {
    key: 78,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 78,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(78)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: `لوقا ${Helpers.parseToArabic(3)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(20)}`
    }
    ]
  },
  {
    key: 79,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 79,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(79)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 3,
        startVerseNumber: 21,
        endVerseNumber:38,
        text: `لوقا ${Helpers.parseToArabic(3)} :${Helpers.parseToArabic(21)} - ${Helpers.parseToArabic(38)}`
    }
    ]
  },
  {
    key: 80,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 80,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(80)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: `لوقا ${Helpers.parseToArabic(4)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(30)}`
    }
    ]
  },
  {
    key: 81,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 81,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(81)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 4,
        startVerseNumber: 31,
        endVerseNumber:44,
        text: `لوقا ${Helpers.parseToArabic(4)} :${Helpers.parseToArabic(31)} - ${Helpers.parseToArabic(44)}`
    }
    ]
  },
  {
    key: 82,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 82,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(82)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:16,
        text: `لوقا ${Helpers.parseToArabic(5)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(16)}`
    }
    ]
  },
  {
    key: 83,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 83,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(83)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 5,
        startVerseNumber: 17,
        endVerseNumber:39,
        text: `لوقا ${Helpers.parseToArabic(5)} :${Helpers.parseToArabic(17)} - ${Helpers.parseToArabic(39)}`
    }
    ]
  },
  {
    key: 84,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 84,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(84)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:26,
        text: `لوقا ${Helpers.parseToArabic(6)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(26)}`
    }
    ]
  },
  {
    key: 85,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 85,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(85)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 6,
        startVerseNumber: 27,
        endVerseNumber:49,
        text: `لوقا ${Helpers.parseToArabic(6)} :${Helpers.parseToArabic(27)} - ${Helpers.parseToArabic(49)}`
    }
    ]
  },
  {
    key: 86,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 86,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(86)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:35,
        text: `لوقا ${Helpers.parseToArabic(7)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(35)}`
    }
    ]
  },
  {
    key: 87,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 87,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(87)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 7,
        startVerseNumber: 36,
        endVerseNumber:50,
        text: `لوقا ${Helpers.parseToArabic(7)} :${Helpers.parseToArabic(36)} - ${Helpers.parseToArabic(50)}`
    }
    ]
  },
  {
    key: 88,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 88,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(88)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: `لوقا ${Helpers.parseToArabic(8)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(25)}`
    }
    ]
  },
  {
    key: 89,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 89,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(89)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 8,
        startVerseNumber: 26,
        endVerseNumber:56,
        text: `لوقا ${Helpers.parseToArabic(8)} :${Helpers.parseToArabic(26)} - ${Helpers.parseToArabic(56)}`
    }
    ]
  },
  {
    key: 90,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 90,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(90)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 9,
        startVerseNumber: 1,
        endVerseNumber:27,
        text: `لوقا ${Helpers.parseToArabic(9)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(27)}`
    }
    ]
  },
  {
    key: 91,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 91,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(91)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 9,
        startVerseNumber: 28,
        endVerseNumber:50,
        text: `لوقا ${Helpers.parseToArabic(9)} :${Helpers.parseToArabic(28)} - ${Helpers.parseToArabic(50)}`
    }
    ]
  },
  {
    key: 92,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 92,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(92)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 9,
        startVerseNumber: 51,
        endVerseNumber:62,
        text: `لوقا ${Helpers.parseToArabic(9)} :${Helpers.parseToArabic(51)} - ${Helpers.parseToArabic(62)}`
    }
    ]
  },
  {
    key: 93,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 93,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(93)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: `لوقا ${Helpers.parseToArabic(10)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(24)}`
    }
    ]
  },
  {
    key: 94,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 94,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(94)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 10,
        startVerseNumber: 25,
        endVerseNumber:42,
        text: `لوقا ${Helpers.parseToArabic(10)} :${Helpers.parseToArabic(25)} - ${Helpers.parseToArabic(42)}`
    }
    ]
  },
  {
    key: 95,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 95,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(95)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:28,
        text: `لوقا ${Helpers.parseToArabic(11)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(28)}`
    }
    ]
  },
  {
    key: 96,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 96,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(96)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 11,
        startVerseNumber: 29,
        endVerseNumber:54,
        text: `لوقا ${Helpers.parseToArabic(11)} :${Helpers.parseToArabic(29)} - ${Helpers.parseToArabic(54)}`
    }
    ]
  },
  {
    key: 97,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 97,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(97)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:34,
        text: `لوقا ${Helpers.parseToArabic(12)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(34)}`
    }
    ]
  },
  {
    key: 98,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 98,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(98)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 12,
        startVerseNumber: 35,
        endVerseNumber:59,
        text: `لوقا ${Helpers.parseToArabic(12)} :${Helpers.parseToArabic(35)} - ${Helpers.parseToArabic(59)}`
    }
    ]
  },
  {
    key: 99,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 99,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(99)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `لوقا ${Helpers.parseToArabic(13)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(21)}`
    }
    ]
  },
  {
    key: 100,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 100,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(100)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 13,
        startVerseNumber: 22,
        endVerseNumber:35,
        text: `لوقا ${Helpers.parseToArabic(13)} :${Helpers.parseToArabic(22)} - ${Helpers.parseToArabic(35)}`
    }
    ]
  },
  {
    key: 101,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 101,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(101)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 14,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: `لوقا ${Helpers.parseToArabic(14)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(24)}`
    }
    ]
  },
  {
    key: 102,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 102,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(102)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 14,
        startVerseNumber: 25,
        endVerseNumber:35,
        text: `لوقا ${Helpers.parseToArabic(14)} :${Helpers.parseToArabic(25)} - ${Helpers.parseToArabic(35)}`
    }
    ]
  },
  {
    key: 103,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 103,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(103)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 15,
        startVerseNumber: 1,
        endVerseNumber:32,
        text: `لوقا ${Helpers.parseToArabic(15)}`
    }
    ]
  },
  {
    key: 104,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 104,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(104)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 16,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: `لوقا ${Helpers.parseToArabic(16)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(18)}`
    }
    ]
  },
  {
    key: 105,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 105,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(105)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 16,
        startVerseNumber: 19,
        endVerseNumber:31,
        text: `لوقا ${Helpers.parseToArabic(16)} :${Helpers.parseToArabic(19)} - ${Helpers.parseToArabic(31)}`
    }
    ]
  },
  {
    key: 106,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 106,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(106)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 17,
        startVerseNumber: 1,
        endVerseNumber:19,
        text: `لوقا ${Helpers.parseToArabic(17)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(19)}`
    }
    ]
  },
  {
    key: 107,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 107,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(107)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 17,
        startVerseNumber: 20,
        endVerseNumber:37,
        text: `لوقا ${Helpers.parseToArabic(17)} :${Helpers.parseToArabic(20)} - ${Helpers.parseToArabic(37)}`
    }
    ]
  },
  {
    key: 108,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 108,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(108)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 18,
        startVerseNumber: 1,
        endVerseNumber:17,
        text: `لوقا ${Helpers.parseToArabic(18)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(17)}`
    }
    ]
  },
  {
    key: 109,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 109,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(109)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 18,
        startVerseNumber: 18,
        endVerseNumber:43,
        text: `لوقا ${Helpers.parseToArabic(18)} :${Helpers.parseToArabic(18)} - ${Helpers.parseToArabic(43)}`
    }
    ]
  },
  {
    key: 110,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 110,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(110)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 19,
        startVerseNumber: 1,
        endVerseNumber:27,
        text: `لوقا ${Helpers.parseToArabic(19)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(27)}`
    }
    ]
  },
  {
    key: 111,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 111,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(111)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 19,
        startVerseNumber: 28,
        endVerseNumber:48,
        text: `لوقا ${Helpers.parseToArabic(19)} :${Helpers.parseToArabic(28)} - ${Helpers.parseToArabic(48)}`
    }
    ]
  },
  {
    key: 112,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 112,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(112)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 20,
        startVerseNumber: 1,
        endVerseNumber:26,
        text: `لوقا ${Helpers.parseToArabic(20)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(26)}`
    }
    ]
  },
  {
    key: 113,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 113,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(113)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 20,
        startVerseNumber: 27,
        endVerseNumber:47,
        text: `لوقا ${Helpers.parseToArabic(20)} :${Helpers.parseToArabic(27)} - ${Helpers.parseToArabic(47)}`
    }
    ]
  },
  {
    key: 114,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 114,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(114)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 21,
        startVerseNumber: 1,
        endVerseNumber:38,
        text: `لوقا ${Helpers.parseToArabic(21)}`
    }
    ]
  },
  {
    key: 115,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 115,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(115)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 22,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: `لوقا ${Helpers.parseToArabic(22)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(30)}`
    }
    ]
  },
  {
    key: 116,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 116,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(116)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 22,
        startVerseNumber: 31,
        endVerseNumber:53,
        text: `لوقا ${Helpers.parseToArabic(22)} :${Helpers.parseToArabic(31)} - ${Helpers.parseToArabic(53)}`
    }
    ]
  },
  {
    key: 117,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 117,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(117)}`
      },
      {
            
        bookName: "لوقا",
        chapterNumber: 22,
        startVerseNumber: 54,
        endVerseNumber:71,
        text: `لوقا ${Helpers.parseToArabic(22)} :${Helpers.parseToArabic(54)} - ${Helpers.parseToArabic(71)}`
    }
    ]
  },
  {
    key: 118,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 118,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(118)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 23,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: `لوقا ${Helpers.parseToArabic(23)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(25)}`
    }
    ]
  },
  {
    key: 119,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 0,
        endVerseNumber: 16,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(16)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 23,
        startVerseNumber: 26,
        endVerseNumber:56,
        text: `لوقا ${Helpers.parseToArabic(23)} :${Helpers.parseToArabic(26)} - ${Helpers.parseToArabic(56)}`
    }
    ]
  },
  {
    key: 120,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 17,
        endVerseNumber: 32,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(17)} - ${Helpers.parseToArabic(32)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 24,
        startVerseNumber: 1,
        endVerseNumber:35,
        text: `لوقا ${Helpers.parseToArabic(24)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(35)}`
    }
    ]
  },
  {
    key: 121,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 33,
        endVerseNumber: 56,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(33)} - ${Helpers.parseToArabic(56)}`
      },
      {
        bookName: "لوقا",
        chapterNumber: 24,
        startVerseNumber: 36,
        endVerseNumber:53,
        text: `لوقا ${Helpers.parseToArabic(24)} :${Helpers.parseToArabic(36)} - ${Helpers.parseToArabic(53)}`
    }
    ]
  },
  {
    key: 122,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 57,
        endVerseNumber: 72,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(57)} - ${Helpers.parseToArabic(72)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:28,
        text: `يوحنا ${Helpers.parseToArabic(1)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(28)}`
      }
    ]
  },
  {
    key: 123,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 73,
        endVerseNumber: 88,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(73)} - ${Helpers.parseToArabic(88)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 1,
        startVerseNumber: 29,
        endVerseNumber:51,
        text: `يوحنا ${Helpers.parseToArabic(1)} :${Helpers.parseToArabic(29)} - ${Helpers.parseToArabic(51)}`
      }
    ]
  },
  {
    key: 124,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 89,
        endVerseNumber: 104,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(89)} - ${Helpers.parseToArabic(104)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 2,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: `يوحنا ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 125,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 105,
        endVerseNumber: 120,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(105)} - ${Helpers.parseToArabic(120)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:24,
        text: `يوحنا ${Helpers.parseToArabic(3)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(24)}`
  }
    ]
  },
  {
    key: 126,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 121,
        endVerseNumber: 136,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(121)} - ${Helpers.parseToArabic(136)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 3,
        startVerseNumber: 25,
        endVerseNumber:36,
        text: `يوحنا ${Helpers.parseToArabic(3)} :${Helpers.parseToArabic(25)} - ${Helpers.parseToArabic(36)}`
  }
    ]
  },
  {
    key: 127,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 137,
        endVerseNumber: 152,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(137)} - ${Helpers.parseToArabic(152)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:30,
        text: `يوحنا ${Helpers.parseToArabic(4)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(30)}`
      }
    ]
  },
  {
    key: 128,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 153,
        endVerseNumber: 176,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(153)} - ${Helpers.parseToArabic(176)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 4,
        startVerseNumber: 31,
        endVerseNumber:54,
        text: `يوحنا ${Helpers.parseToArabic(4)} :${Helpers.parseToArabic(31)} - ${Helpers.parseToArabic(54)}`
  }
    ]
  },
  {
    key: 129,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 120,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(120)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: `يوحنا ${Helpers.parseToArabic(5)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(30)}`
  }
    ]
  },
  {
    key: 130,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 121,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(121)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 5,
        startVerseNumber: 31,
        endVerseNumber:47,
        text: `يوحنا ${Helpers.parseToArabic(5)} :${Helpers.parseToArabic(31)} - ${Helpers.parseToArabic(47)}`
  }
    ]
  },
  {
    key: 131,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 122,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(122)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: `يوحنا ${Helpers.parseToArabic(6)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(24)}`
  }
    ]
  },
  {
    key: 132,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 123,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(123)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 6,
        startVerseNumber: 25,
        endVerseNumber:59,
        text: `يوحنا ${Helpers.parseToArabic(6)} :${Helpers.parseToArabic(25)} - ${Helpers.parseToArabic(59)}`
      }
    ]
  },
  {
    key: 133,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 124,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(124)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 6,
        startVerseNumber: 60,
        endVerseNumber:71,
        text: `يوحنا ${Helpers.parseToArabic(6)} :${Helpers.parseToArabic(60)} - ${Helpers.parseToArabic(71)}`
      }
    ]
  },
  {
    key: 134,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 125,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(125)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: `يوحنا ${Helpers.parseToArabic(7)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(24)}`
      }
    ]
  },
  {
    key: 135,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 126,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(126)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 7,
        startVerseNumber: 25,
        endVerseNumber:53,
        text: `يوحنا ${Helpers.parseToArabic(7)} :${Helpers.parseToArabic(25)} - ${Helpers.parseToArabic(53)}`
  }
    ]
  },
  {
    key: 136,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 127,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(127)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:29,
        text: `يوحنا ${Helpers.parseToArabic(8)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(29)}`
  }
    ]
  },
  {
    key: 137,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 128,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(128)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 8,
        startVerseNumber: 30,
        endVerseNumber:59,
        text: `يوحنا ${Helpers.parseToArabic(8)} :${Helpers.parseToArabic(30)} - ${Helpers.parseToArabic(59)}`
  }
    ]
  },
  {
    key: 138,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 129,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(129)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 9,
        startVerseNumber: 1,
        endVerseNumber:41,
        text: `يوحنا ${Helpers.parseToArabic(9)}`
      }
    ]
  },
  {
    key: 139,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 130,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(130)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `يوحنا ${Helpers.parseToArabic(10)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(21)}`
      }
    ]
  },
  {
    key: 140,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 131,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(131)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 10,
        startVerseNumber: 22,
        endVerseNumber:42,
        text: `يوحنا ${Helpers.parseToArabic(10)} :${Helpers.parseToArabic(22)} - ${Helpers.parseToArabic(42)}`
      }
    ]
  },
  {
    key: 141,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 132,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(132)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:44,
        text: `يوحنا ${Helpers.parseToArabic(11)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(44)}`
      }
    ]
  },
  {
    key: 142,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 133,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(133)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 11,
        startVerseNumber: 45,
        endVerseNumber:57,
        text: `يوحنا ${Helpers.parseToArabic(11)} :${Helpers.parseToArabic(45)} - ${Helpers.parseToArabic(57)}`
      }
    ]
  },
  {
    key: 143,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 134,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(134)}`
      },
      {
        bookName: "يوحنا",
       chapterNumber: 12,
       startVerseNumber: 1,
       endVerseNumber:33,
       text: `يوحنا ${Helpers.parseToArabic(12)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(33)}`
      }
    ]
  },
  {
    key: 144,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 135,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(135)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 12,
        startVerseNumber: 34,
        endVerseNumber:50,
        text: `يوحنا ${Helpers.parseToArabic(12)} :${Helpers.parseToArabic(34)} - ${Helpers.parseToArabic(50)}`
      }
    ]
  },
  {
    key: 145,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 136,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(136)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:19,
        text: `يوحنا ${Helpers.parseToArabic(13)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(19)}`
  }
    ]
  },
  {
    key: 146,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 137,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(137)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 13,
        startVerseNumber: 20,
        endVerseNumber:38,
        text: `يوحنا ${Helpers.parseToArabic(13)} :${Helpers.parseToArabic(20)} - ${Helpers.parseToArabic(38)}`
  }
    ]
  },
  {
    key: 147,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 138,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(138)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 14,
        startVerseNumber: 1,
        endVerseNumber:14,
        text: `يوحنا ${Helpers.parseToArabic(14)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(14)}`
  }
    ]
  },
  {
    key: 148,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 139,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(139)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 14,
        startVerseNumber: 15,
        endVerseNumber:31,
        text: `يوحنا ${Helpers.parseToArabic(14)} :${Helpers.parseToArabic(15)} - ${Helpers.parseToArabic(31)}`
  }
    ]
  },
  {
    key: 149,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 140,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(140)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 15,
        startVerseNumber: 1,
        endVerseNumber:27,
        text: `يوحنا ${Helpers.parseToArabic(15)}`
      }
    ]
  },
  {
    key: 150,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 141,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(141)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 16,
        startVerseNumber: 1,
        endVerseNumber:16,
        text: `يوحنا ${Helpers.parseToArabic(16)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(16)}`
  }
    ]
  },
  {
    key: 151,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 142,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(142)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 16,
        startVerseNumber: 17,
        endVerseNumber:33,
        text: `يوحنا ${Helpers.parseToArabic(16)} :${Helpers.parseToArabic(17)} - ${Helpers.parseToArabic(33)}`
  }
    ]
  },
  {
    key: 152,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 143,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(143)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 17,
        startVerseNumber: 1,
        endVerseNumber:26,
        text: `يوحنا ${Helpers.parseToArabic(17)}`
      }
    ]
  },
  {
    key: 153,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 144,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(144)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 18,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: `يوحنا ${Helpers.parseToArabic(18)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(24)}`
      }
    ]
  },
  {
    key: 154,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 145,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(145)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 18,
        startVerseNumber: 25,
        endVerseNumber:40,
        text: `يوحنا ${Helpers.parseToArabic(18)} :${Helpers.parseToArabic(25)} - ${Helpers.parseToArabic(40)}`
      }
    ]
  },
  {
    key: 155,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 146,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(146)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 19,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: `يوحنا ${Helpers.parseToArabic(19)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(24)}`
      }
    ]
  },
  {
    key: 156,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 147,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(147)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 19,
        startVerseNumber: 25,
        endVerseNumber:42,
        text: `يوحنا ${Helpers.parseToArabic(19)} :${Helpers.parseToArabic(25)} - ${Helpers.parseToArabic(42)}`
      }
    ]
  },
  {
    key: 157,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 148,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(148)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 20,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: `يوحنا ${Helpers.parseToArabic(20)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(18)}`
      }
    ]
  },
  {
    key: 158,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 149,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(149)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 20,
        startVerseNumber: 19,
        endVerseNumber:31,
        text: `يوحنا ${Helpers.parseToArabic(20)} :${Helpers.parseToArabic(19)} - ${Helpers.parseToArabic(31)}`
      }
    ]
  },
  {
    key: 159,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 150,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(150)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 21,
        startVerseNumber: 1,
        endVerseNumber:14,
        text: `يوحنا ${Helpers.parseToArabic(21)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(14)}`
      }
    ]
  },
  {
    key: 160,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber: 19,
        text: `امثال ${Helpers.parseToArabic(1)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(19)}`
      },
      {
        bookName: "يوحنا",
        chapterNumber: 21,
        startVerseNumber: 15,
        endVerseNumber:25,
        text: `يوحنا ${Helpers.parseToArabic(21)} :${Helpers.parseToArabic(15)} - ${Helpers.parseToArabic(25)}`
      }
    ]
  },
  {
    key: 161,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 1,
        startVerseNumber: 20,
        endVerseNumber: 33,
        text: `امثال ${Helpers.parseToArabic(1)}: ${Helpers.parseToArabic(20)} - ${Helpers.parseToArabic(33)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:26,
        text: `اعمال ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 162,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 2,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `امثال ${Helpers.parseToArabic(2)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `اعمال ${Helpers.parseToArabic(2)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(21)}`
        }
    ]
  },
  {
    key: 163,
    dayChapters: [
      {
        bookName: "Proverbs",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber: 17,
        text: `امثال ${Helpers.parseToArabic(3)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(17)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 2,
        startVerseNumber: 22,
        endVerseNumber:47,
        text: `اعمال ${Helpers.parseToArabic(2)}: ${Helpers.parseToArabic(22)} - ${Helpers.parseToArabic(47)}`
        }
    ]
  },
  {
    key: 164,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 3,
        startVerseNumber: 18,
        endVerseNumber: 35,
        text: `امثال ${Helpers.parseToArabic(3)}: ${Helpers.parseToArabic(18)} - ${Helpers.parseToArabic(35)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:26,
        text: `اعمال ${Helpers.parseToArabic(3)}`
    }
    ]
  },
  {
    key: 165,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `امثال ${Helpers.parseToArabic(4)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:37,
        text: `اعمال ${Helpers.parseToArabic(4)}`
        }
    ]
  },
  {
    key: 166,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 5,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `امثال ${Helpers.parseToArabic(5)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `اعمال ${Helpers.parseToArabic(5)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(21)}`
    }
    ]
  },
  {
    key: 167,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 6,
        startVerseNumber: 0,
        endVerseNumber: 17,
        text: `امثال ${Helpers.parseToArabic(6)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(17)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 5,
        startVerseNumber: 22,
        endVerseNumber:42,
        text: `اعمال ${Helpers.parseToArabic(5)}: ${Helpers.parseToArabic(22)} - ${Helpers.parseToArabic(42)}`
    }
    ]
  },
  {
    key: 168,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 6,
        startVerseNumber: 18,
        endVerseNumber: 35,
        text: `امثال ${Helpers.parseToArabic(6)}: ${Helpers.parseToArabic(18)} - ${Helpers.parseToArabic(35)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:15,
        text: `اعمال ${Helpers.parseToArabic(6)}`
    }
    ]
  },
  {
    key: 169,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 7,
        startVerseNumber: 0,
        endVerseNumber: 15,
        text: `امثال ${Helpers.parseToArabic(7)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(15)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:19,
        text: `اعمال ${Helpers.parseToArabic(7)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(19)}`
    }
    ]
  },
  {
    key: 170,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 7,
        startVerseNumber: 16,
        endVerseNumber: 27,
        text: `امثال ${Helpers.parseToArabic(7)}: ${Helpers.parseToArabic(16)} - ${Helpers.parseToArabic(27)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 7,
        startVerseNumber: 20,
        endVerseNumber:43,
        text: `اعمال ${Helpers.parseToArabic(7)}: ${Helpers.parseToArabic(20)} - ${Helpers.parseToArabic(43)}`
        }
    ]
  },
  {
    key: 171,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 8,
        startVerseNumber: 0,
        endVerseNumber: 17,
        text: `امثال ${Helpers.parseToArabic(8)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(17)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 7,
        startVerseNumber: 44,
        endVerseNumber:60,
        text: `اعمال ${Helpers.parseToArabic(7)}: ${Helpers.parseToArabic(44)} - ${Helpers.parseToArabic(60)}`
        }
    ]
  },
  {
    key: 172,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 8,
        startVerseNumber: 18,
        endVerseNumber: 36,
        text: `امثال ${Helpers.parseToArabic(8)}: ${Helpers.parseToArabic(18)} - ${Helpers.parseToArabic(36)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: `اعمال ${Helpers.parseToArabic(8)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(25)}`
        }
    ]
  },
  {
    key: 173,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 9,
        startVerseNumber: 0,
        endVerseNumber: 10,
        text: `امثال ${Helpers.parseToArabic(9)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(10)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 8,
        startVerseNumber: 26,
        endVerseNumber:40,
        text: `اعمال ${Helpers.parseToArabic(8)}: ${Helpers.parseToArabic(26)} - ${Helpers.parseToArabic(40)}`
    }
    ]
  },
  {
    key: 174,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 9,
        startVerseNumber: 11,
        endVerseNumber: 18,
        text: `امثال ${Helpers.parseToArabic(9)}: ${Helpers.parseToArabic(11)} - ${Helpers.parseToArabic(18)}`
      },
      {
        bookName: "اعمال",
        chapterNumber:  9,
        startVerseNumber: 1,
        endVerseNumber:31,
        text: `اعمال ${Helpers.parseToArabic(9)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(31)}`
    }
    ]
  },
  {
    key: 175,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 10,
        startVerseNumber: 0,
        endVerseNumber: 16,
        text: `امثال ${Helpers.parseToArabic(10)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(16)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 9,
        startVerseNumber: 32,
        endVerseNumber:43,
        text: `اعمال ${Helpers.parseToArabic(9)}: ${Helpers.parseToArabic(32)} - ${Helpers.parseToArabic(43)}`
    }
    ]
  },
  {
    key: 176,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 10,
        startVerseNumber: 17,
        endVerseNumber: 31,
        text: `امثال ${Helpers.parseToArabic(10)}: ${Helpers.parseToArabic(17)} - ${Helpers.parseToArabic(31)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:23,
        text: `اعمال ${Helpers.parseToArabic(10)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(23)}`
        }
    ]
  },
  {
    key: 177,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 11,
        startVerseNumber: 0,
        endVerseNumber: 15,
        text: `امثال ${Helpers.parseToArabic(11)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(15)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 10,
        startVerseNumber: 24,
        endVerseNumber:48,
        text: `اعمال ${Helpers.parseToArabic(10)}: ${Helpers.parseToArabic(24)} - ${Helpers.parseToArabic(48)}`
        }
    ]
  },
  {
    key: 178,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 11,
        startVerseNumber: 16,
        endVerseNumber: 31,
        text: `امثال ${Helpers.parseToArabic(11)}: ${Helpers.parseToArabic(16)} - ${Helpers.parseToArabic(31)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: `اعمال ${Helpers.parseToArabic(11)}`
        }
    ]
  },
  {
    key: 179,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 12,
        startVerseNumber: 0,
        endVerseNumber: 14,
        text: `امثال ${Helpers.parseToArabic(12)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(14)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: `اعمال ${Helpers.parseToArabic(12)}`
        }
    ]
  },
  {
    key: 180,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 12,
        startVerseNumber: 15,
        endVerseNumber: 28,
        text: `امثال ${Helpers.parseToArabic(12)}: ${Helpers.parseToArabic(15)} - ${Helpers.parseToArabic(28)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: `اعمال ${Helpers.parseToArabic(13)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(25)}`
        }
    ]
  },
  {
    key: 181,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 13,
        startVerseNumber: 0,
        endVerseNumber: 12,
        text: `امثال ${Helpers.parseToArabic(13)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(12)}`
      },
      {
        bookName: "اعمال",
       chapterNumber: 13,
       startVerseNumber: 26,
       endVerseNumber:52,
       text: `اعمال ${Helpers.parseToArabic(13)}: ${Helpers.parseToArabic(26)} - ${Helpers.parseToArabic(52)}`
      }
    ]
  },
  {
    key: 182,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 13,
        startVerseNumber: 13,
        endVerseNumber: 25,
        text: `امثال ${Helpers.parseToArabic(13)}: ${Helpers.parseToArabic(13)} - ${Helpers.parseToArabic(25)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 14,
        startVerseNumber: 1,
        endVerseNumber:28,
        text: `اعمال ${Helpers.parseToArabic(14)}`
    }
    ]
  },
  {
    key: 183,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 14,
        startVerseNumber: 0,
        endVerseNumber: 17,
        text: `امثال ${Helpers.parseToArabic(14)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(17)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 15,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `اعمال ${Helpers.parseToArabic(15)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(21)}`
    }
    ]
  },
  {
    key: 184,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 14,
        startVerseNumber: 18,
        endVerseNumber: 35,
        text: `امثال ${Helpers.parseToArabic(14)}: ${Helpers.parseToArabic(18)} - ${Helpers.parseToArabic(35)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 15,
        startVerseNumber: 22,
        endVerseNumber:41,
        text: `اعمال ${Helpers.parseToArabic(15)}: ${Helpers.parseToArabic(22)} - ${Helpers.parseToArabic(41)}`
    }
    ]
  },
  {
    key: 185,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 15,
        startVerseNumber: 1,
        endVerseNumber: 16,
        text: `امثال ${Helpers.parseToArabic(15)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(16)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 16,
        startVerseNumber: 1,
        endVerseNumber:15,
        text: `اعمال ${Helpers.parseToArabic(16)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(15)}`
    }
    ]
  },
  {
    key: 186,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 15,
        startVerseNumber: 17,
        endVerseNumber: 33,
        text: `امثال ${Helpers.parseToArabic(15)}: ${Helpers.parseToArabic(17)} - ${Helpers.parseToArabic(33)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 16,
        startVerseNumber: 16,
        endVerseNumber:40,
        text: `اعمال ${Helpers.parseToArabic(16)}: ${Helpers.parseToArabic(16)} - ${Helpers.parseToArabic(40)}`
        }
    ]
  },
  {
    key: 187,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 16,
        startVerseNumber: 1,
        endVerseNumber: 16,
        text: `امثال ${Helpers.parseToArabic(16)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(16)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 17,
        startVerseNumber: 1,
        endVerseNumber:34,
        text: `اعمال ${Helpers.parseToArabic(17)}`
    }
    ]
  },
  {
    key: 188,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 16,
        startVerseNumber: 17,
        endVerseNumber: 33,
        text: `امثال ${Helpers.parseToArabic(16)}: ${Helpers.parseToArabic(17)} - ${Helpers.parseToArabic(33)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 18,
        startVerseNumber: 1,
        endVerseNumber:28,
        text: `اعمال ${Helpers.parseToArabic(18)}`
        }
    ]
  },
  {
    key: 189,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 17,
        startVerseNumber: 1,
        endVerseNumber:200,
        text: `امثال ${Helpers.parseToArabic(17)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 19,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: `اعمال ${Helpers.parseToArabic(19)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(22)}`
        }
    ]
  },
  {
    key: 190,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 18,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `امثال ${Helpers.parseToArabic(18)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 19,
        startVerseNumber: 23,
        endVerseNumber:41,
        text: `اعمال ${Helpers.parseToArabic(19)}: ${Helpers.parseToArabic(23)} - ${Helpers.parseToArabic(41)}`
        }
    ]
  },
  {
    key: 191,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 19,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `امثال ${Helpers.parseToArabic(19)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 20,
        startVerseNumber: 1,
        endVerseNumber:38,
        text: `اعمال ${Helpers.parseToArabic(20)}`
        }
    ]
  },
  {
    key: 192,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 20,
        startVerseNumber: 0,
        endVerseNumber:15,
        text: `امثال ${Helpers.parseToArabic(20)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(15)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 21,
        startVerseNumber: 1,
        endVerseNumber:26,
        text: `اعمال ${Helpers.parseToArabic(21)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(26)}`
        }
    ]
  },
  {
    key: 193,
    dayChapters: [
      {
        bookName: "امثال",
        chapterNumber: 20,
        startVerseNumber: 16,
        endVerseNumber:30,
        text: `امثال ${Helpers.parseToArabic(20)}: ${Helpers.parseToArabic(16)} - ${Helpers.parseToArabic(30)}`
      },
      {
        bookName: "اعمال",
        chapterNumber: 21,
        startVerseNumber: 27,
        endVerseNumber:40,
        text: `اعمال ${Helpers.parseToArabic(21)}: ${Helpers.parseToArabic(27)} - ${Helpers.parseToArabic(40)}`
        }
    ]
  },
  {
    key: 194,
    dayChapters: [{
      bookName: "امثال",
      chapterNumber: 21,
      startVerseNumber: 1,
      endVerseNumber:15,
      text: `امثال ${Helpers.parseToArabic(21)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(15)}`
    },
    {
      bookName: "اعمال",
      chapterNumber: 22,
      startVerseNumber: 1,
      endVerseNumber:30,
      text: `اعمال ${Helpers.parseToArabic(22)}`
    }
  
  ]
  },
  {
    key: 195,
    dayChapters: [{
      bookName: "امثال",
      chapterNumber: 21,
      startVerseNumber: 16,
      endVerseNumber:31,
      text: `امثال ${Helpers.parseToArabic(21)}: ${Helpers.parseToArabic(16)} - ${Helpers.parseToArabic(31)}`
    },
    {
      bookName: "اعمال",
      chapterNumber: 23,
      startVerseNumber: 1,
      endVerseNumber:35,
      text: `اعمال ${Helpers.parseToArabic(23)}`
      }
  ]
  },
  {
    key: 196,
    dayChapters: [{
      bookName: "امثال",
      chapterNumber: 22,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `امثال ${Helpers.parseToArabic(22)}`
    },
    {
      bookName: "اعمال",
      chapterNumber: 24,
      startVerseNumber: 1,
      endVerseNumber:27,
      text: `اعمال ${Helpers.parseToArabic(24)}`
      }
  ]
  },
  {
    key: 197,
    dayChapters: [{
      bookName: "امثال",
      chapterNumber: 23,
      startVerseNumber: 1,
      endVerseNumber:17,
      text: `امثال ${Helpers.parseToArabic(23)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(17)}`
    },
    {
      bookName: "اعمال",
      chapterNumber: 25,
      startVerseNumber: 1,
      endVerseNumber:27,
      text: `اعمال ${Helpers.parseToArabic(25)}`
      }
  ]
  },
  {
    key: 198,
    dayChapters:[{
      bookName: "امثال",
      chapterNumber: 23,
      startVerseNumber: 18,
      endVerseNumber:35,
      text: `امثال ${Helpers.parseToArabic(23)}: ${Helpers.parseToArabic(18)} - ${Helpers.parseToArabic(35)}`
    },
    {
      bookName: "اعمال",
      chapterNumber: 26,
      startVerseNumber: 1,
      endVerseNumber:32,
      text: `اعمال ${Helpers.parseToArabic(26)}`
      }
  ]
  },
  {
    key: 199,
    dayChapters:[{
      bookName: "امثال",
      chapterNumber: 24,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `امثال ${Helpers.parseToArabic(24)}`
    },
    {
      bookName: "اعمال",
      chapterNumber: 27,
      startVerseNumber: 1,
      endVerseNumber:26,
      text: `اعمال ${Helpers.parseToArabic(27)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(26)}`
      }
  ]
  },
  {
    key: 200,
    dayChapters: [{
      bookName: "امثال",
      chapterNumber: 25,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `امثال ${Helpers.parseToArabic(25)}`
    },
    {
      bookName: "اعمال",
      chapterNumber: 27,
      startVerseNumber: 27,
      endVerseNumber:44,
      text: `اعمال ${Helpers.parseToArabic(27)}: ${Helpers.parseToArabic(27)} - ${Helpers.parseToArabic(44)}`
      }
  ]
  },
  {
    key: 201,
    dayChapters: [{
      bookName: "امثال",
      chapterNumber: 26,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `امثال ${Helpers.parseToArabic(26)}`
    },
    {
      bookName: "اعمال",
      chapterNumber: 28,
      startVerseNumber: 1,
      endVerseNumber:31,
      text: `اعمال ${Helpers.parseToArabic(28)}`
      }
  ]
  },
  {
    key: 202,
    dayChapters: [{
      bookName: "امثال",
      chapterNumber: 27,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `امثال ${Helpers.parseToArabic(27)}`
    },
    {
      bookName: "رومية",
      chapterNumber: 1,
      startVerseNumber: 0,
      endVerseNumber:17,
      text: `رومية ${Helpers.parseToArabic(1)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(17)}`
    }
  ]
  },
  {
    key: 203,
    dayChapters: [{
      bookName: "امثال",
      chapterNumber: 28,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `امثال ${Helpers.parseToArabic(28)}`
    },
    {
      bookName: "رومية",
      chapterNumber: 1,
      startVerseNumber: 18,
      endVerseNumber:32,
      text: `رومية ${Helpers.parseToArabic(1)}: ${Helpers.parseToArabic(18)} - ${Helpers.parseToArabic(32)}`
    }
  ]
  },
  {
    key: 204,
    dayChapters: [{
      bookName: "Proverbs",
      chapterNumber: 29,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `امثال ${Helpers.parseToArabic(29)}`
    },
    {
      bookName: "رومية",
      chapterNumber: 2,
      startVerseNumber: 1,
      endVerseNumber:29,
      text: `رومية ${Helpers.parseToArabic(2)}`
    }
  ]
  },
  {
    key: 205,
    dayChapters: [{
      bookName: "Proverbs",
      chapterNumber: 30,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `امثال ${Helpers.parseToArabic(30)}`
    },
    {
      bookName: "رومية",
      chapterNumber: 3,
      startVerseNumber: 0,
      endVerseNumber:31,
      text: `رومية ${Helpers.parseToArabic(3)}`
    }
  ]
  },
  {
    key: 206,
    dayChapters: [{
      bookName: "Proverbs",
      chapterNumber: 31,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `امثال ${Helpers.parseToArabic(31)}`
    },
    {
      bookName: "رومية",
      chapterNumber: 4,
      startVerseNumber: 0,
      endVerseNumber:25,
      text: `رومية ${Helpers.parseToArabic(4)}`
}
  ]
  },
  {
    key: 207,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 1,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `مزامير ${Helpers.parseToArabic(1)}`
    },
    {
      bookName: "رومية",
      chapterNumber: 5,
      startVerseNumber: 0,
      endVerseNumber:21,
      text: `رومية ${Helpers.parseToArabic(5)}`
    }
  ]
  },
  {
    key: 208,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 2,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "مزامير ۲"
    },
    {
      bookName: "رومية",
      chapterNumber: 6,
      startVerseNumber: 1,
      endVerseNumber:23,
      text: `رومية ${Helpers.parseToArabic(6)}`
}
  ]
  },
  {
    key: 209,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 2,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "مزامير ۳"
    },
    {
      bookName: "رومية",
      chapterNumber: 7,
      startVerseNumber: 1,
      endVerseNumber:25,
      text: `رومية ${Helpers.parseToArabic(7)}`
}
  ]
  },
  {
    key: 210,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 4,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `مزامير ${Helpers.parseToArabic(4)}`
    },
    {
      bookName: "رومية",
      chapterNumber: 8,
      startVerseNumber: 1,
      endVerseNumber:17,
      text: `رومية ${Helpers.parseToArabic(8)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(17)}`
}
  ]
  },
  {
    key: 211,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 5,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `مزامير ${Helpers.parseToArabic(5)}`
    },
    {
      bookName: "رومية",
      chapterNumber: 8,
      startVerseNumber: 18,
      endVerseNumber:39,
      text: `رومية ${Helpers.parseToArabic(8)}: ${Helpers.parseToArabic(18)} - ${Helpers.parseToArabic(39)}`
}
  ]
  },
  {
    key: 212,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 6,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `مزامير ٦`
    },
    {
      bookName: "رومية",
      chapterNumber: 9,
      startVerseNumber: 1,
      endVerseNumber:13,
      text: `رومية ${Helpers.parseToArabic(9)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(13)}`
    }
  ]
  },
  {
    key: 213,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 7,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "مزامير ۷"
    },
    {
      bookName: "رومية",
      chapterNumber: 9,
      startVerseNumber: 14,
      endVerseNumber:33,
      text: `رومية ${Helpers.parseToArabic(9)}: ${Helpers.parseToArabic(14)} - ${Helpers.parseToArabic(33)}`
    }
  ]
  },
  {
    key: 214,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 8,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "مزامير ۸"
    },
    {
      bookName: "رومية",
      chapterNumber: 10,
      startVerseNumber: 1,
      endVerseNumber:21,
      text: `رومية ${Helpers.parseToArabic(10)}`
    }
  ]
  },
  {
    key: 215,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 9,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "مزامير ۹"
    },
    {
      bookName: "رومية",
      chapterNumber: 11,
      startVerseNumber: 1,
      endVerseNumber:24,
      text: `رومية ${Helpers.parseToArabic(11)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(24)}`
    }
  ]
  },
  {
    key: 216,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 10,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "مزامير ۱۰"
    },
    {
      bookName: "رومية",
      chapterNumber: 11,
      startVerseNumber: 25,
      endVerseNumber:36,
      text: `رومية ${Helpers.parseToArabic(11)}: ${Helpers.parseToArabic(25)} - ${Helpers.parseToArabic(36)}`
}
  ]
  },
  {
    key: 217,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 11,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "مزامير ۱۱"
    },
    {
      bookName: "رومية",
      chapterNumber: 12,
      startVerseNumber: 1,
      endVerseNumber:21,
      text: `رومية ${Helpers.parseToArabic(12)}`
}
  ]
  },
  {
    key: 218,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 12,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "مزامير ۱۲"
    },
    {
      bookName: "رومية",
      chapterNumber: 13,
      startVerseNumber: 1,
      endVerseNumber:14,
      text: `رومية ${Helpers.parseToArabic(13)}`
}
  ]
  },
  {
    key: 219,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 13,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: "مزامير ۱۳"
    },
    {
      bookName: "رومية",
      chapterNumber: 14,
      startVerseNumber: 1,
      endVerseNumber:23,
      text: `رومية ${Helpers.parseToArabic(14)}`
    }
  ]
  },
  {
    key: 220,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 14,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `مزامير ${Helpers.parseToArabic(14)}`
    },
    {
      bookName: "رومية",
      chapterNumber: 15,
      startVerseNumber: 1,
      endVerseNumber:22,
      text: `رومية ${Helpers.parseToArabic(15)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(22)}`
    }
  ]
  },
  {
    key: 221,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 15,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `مزامير ${Helpers.parseToArabic(15)}`
    },
    {
      bookName: "رومية",
      chapterNumber: 15,
      startVerseNumber: 23,
      endVerseNumber:33,
      text: `رومية ${Helpers.parseToArabic(15)}: ${Helpers.parseToArabic(23)} - ${Helpers.parseToArabic(33)}`
    }
  ]
  },
  {
    key: 222,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 16,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `مزامير ${Helpers.parseToArabic(16)}`
    },
    {
      bookName: "رومية",
      chapterNumber: 16,
      startVerseNumber: 1,
      endVerseNumber:16,
      text: `رومية ${Helpers.parseToArabic(16)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(16)}`
    }
  ]
  },
  {
    key: 223,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 17,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `مزامير ${Helpers.parseToArabic(17)}`
    },
    {
      bookName: "رومية",
      chapterNumber: 16,
      startVerseNumber: 17,
      endVerseNumber:27,
      text: `رومية ${Helpers.parseToArabic(16)}: ${Helpers.parseToArabic(17)} - ${Helpers.parseToArabic(27)}`
    }
  ]
  },
  {
    key: 224,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 18,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `مزامير ${Helpers.parseToArabic(18)}`
    },
    {
      bookName: "1 كورنثوس",
      chapterNumber: 1,
      startVerseNumber: 0,
      endVerseNumber:17,
      text: `كورنثوس الاولي  ${Helpers.parseToArabic(1)}: ${Helpers.parseToArabic(17)} - ${Helpers.parseToArabic(27)}`
    }
  ]
  },
  {
    key: 225,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 19,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `مزامير ${Helpers.parseToArabic(19)}`
    },
    {
      bookName: "1 كورنثوس",
      chapterNumber: 1,
      startVerseNumber: 18,
      endVerseNumber:31,
      text: `كورنثوس الاولي  ${Helpers.parseToArabic(1)}: ${Helpers.parseToArabic(18)} - ${Helpers.parseToArabic(31)}`
    }
  ]
  },
  {
    key: 226,
    dayChapters: [{
      bookName: "مزامير",
      chapterNumber: 20,
      startVerseNumber: 1,
      endVerseNumber:200,
      text: `مزامير ${Helpers.parseToArabic(20)}`
    },
    {
      bookName: "1 كورنثوس",
      chapterNumber: 2,
      startVerseNumber: 1,
      endVerseNumber:16,
      text: `كورنثوس الاولي  ${Helpers.parseToArabic(2)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(16)}`
    }
  ]
  },
  {
    key: 227,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 21,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(21)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:23,
        text: `كورنثوس الاولي  ${Helpers.parseToArabic(3)}`
      }
    ]
  },
  {
    key: 228,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 22,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(22)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:21,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(4)}`
  }
    ]
  },
  {
    key: 229,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 23,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(23)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 5,
        startVerseNumber: 0,
        endVerseNumber:13,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(5)}`
      }
    ]
  },
  {
    key: 230,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 24,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(24)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(6)}`
  }
    ]
  },
  {
    key: 231,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 25,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(25)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(7)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(24)}`
      }
    ]
  },
  {
    key: 232,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 26,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: "مزامير 26"
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 7,
        startVerseNumber: 25,
        endVerseNumber:40,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(7)}: ${Helpers.parseToArabic(25)} - ${Helpers.parseToArabic(40)}`
  }
    ]
  },
  {
    key: 233,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 27,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(27)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:13,
        text: `كورنثوس الاولي  ${Helpers.parseToArabic(8)}`
  }
    ]
  },
  {
    key: 234,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 28,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(28)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 9,
        startVerseNumber: 1,
        endVerseNumber:27,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(9)}`
      }
    ]
  },
  {
    key: 235,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 29,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(29)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(10)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(22)}`
      }
    ]
  },
  {
    key: 236,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 30,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(30)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 10,
        startVerseNumber: 23,
        endVerseNumber:33,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(10)}: ${Helpers.parseToArabic(23)} - ${Helpers.parseToArabic(33)}`
      }
    ]
  },
  {
    key: 237,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 31,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(31)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:16,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(11)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(16)}`
  }
    ]
  },
  {
    key: 238,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 32,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(32)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 11,
        startVerseNumber: 17,
        endVerseNumber:34,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(11)}: ${Helpers.parseToArabic(17)} - ${Helpers.parseToArabic(34)}`
  }
    ]
  },
  {
    key: 239,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 33,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(33)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:11,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(12)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(11)}`
  }
    ]
  },
  {
    key: 240,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 34,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(34)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 12,
        startVerseNumber: 12,
        endVerseNumber:31,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(12)}: ${Helpers.parseToArabic(12)} - ${Helpers.parseToArabic(31)}`
      }
    ]
  },
  {
    key: 241,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 35,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(35)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:13,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(13)}`
      }
    ]
  },
  {
    key: 242,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 36,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(36)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 14,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(14)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(25)}`
      }
    ]
  },
  {
    key: 243,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 37,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(37)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 14,
        startVerseNumber: 26,
        endVerseNumber:40,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(14)}: ${Helpers.parseToArabic(26)} - ${Helpers.parseToArabic(40)}`
      }
    ]
  },
  {
    key: 244,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 38,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(38)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 15,
        startVerseNumber: 1,
        endVerseNumber:34,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(15)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(34)}`
      }
    ]
  },
  {
    key: 245,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 39,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(39)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 15,
        startVerseNumber: 35,
        endVerseNumber:58,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(15)}: ${Helpers.parseToArabic(35)} - ${Helpers.parseToArabic(58)}`
  }
    ]
  },
  {
    key: 246,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 40,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(40)}`
      },
      {
        bookName: "1 كورنثوس",
        chapterNumber: 16,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: `كورنثوس الاولي ${Helpers.parseToArabic(16)}`
  }
    ]
  },
  {
    key: 247,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 41,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(41)}`
      },
      {
        bookName: "2 كورنثوس",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:24,
        text: `كورنثوس الثانيه ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 248,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 42,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(42)}`
      },
      {
        bookName: "2 كورنثوس",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:17,
        text: `كورنثوس الثانيه ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 249,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 43,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(43)}`
      },
      {
        bookName: "2 كورنثوس",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:18,
        text: `كورنثوس الثانيه ${Helpers.parseToArabic(3)}`
      }
    ]
  },
  {
    key: 250,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 44,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(44)}`
      },
      {
        bookName: "2 كورنثوس",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:18,
        text: `كورنثوس الثانيه ${Helpers.parseToArabic(4)}`
  }
    ]
  },
  {
    key: 251,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 45,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(45)}`
      },
      {
        bookName: "2 كورنثوس",
        chapterNumber: 5,
        startVerseNumber: 0,
        endVerseNumber:21,
        text: `كورنثوس الثانيه ${Helpers.parseToArabic(5)}`
      }
    ]
  },
  {
    key: 252,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 46,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(46)}`
      },
      {
        bookName: "2 كورنثوس",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: `كورنثوس الثانيه ${Helpers.parseToArabic(6)}`
  }
    ]
  },
  {
    key: 253,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 47,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(47)}`
      },
      {
        bookName: "2 كورنثوس",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:16,
        text: `كورنثوس الثانيه ${Helpers.parseToArabic(7)}`
  }
    ]
  },
  {
    key: 254,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 48,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(48)}`
      },
      {
        bookName: "2 كورنثوس",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: `كورنثوس الثانيه ${Helpers.parseToArabic(8)}`
  }
    ]
  },
  {
    key: 255,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 49,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(49)}`
      },
      {
        bookName: "2 كورنثوس",
        chapterNumber: 9,
        startVerseNumber: 1,
        endVerseNumber:15,
        text: `كورنثوس الثانيه ${Helpers.parseToArabic(9)}`
  }
    ]
  },
  {
    key: 256,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 50,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(50)}`
      },
      {
        bookName: "2 كورنثوس",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: `كورنثوس الثانيه ${Helpers.parseToArabic(10)}`
      }
    ]
  },
  {
    key: 257,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 51,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(51)}`
      },
      {
        bookName: "2 كورنثوس",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:15,
        text: `كورنثوس الثانيه ${Helpers.parseToArabic(11)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(15)}`
      }
    ]
  },
  {
    key: 258,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 52,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(52)}`
      },
      {
        bookName: "2 كورنثوس",
        chapterNumber: 11,
        startVerseNumber: 16,
        endVerseNumber:33,
        text: `كورنثوس الثانيه ${Helpers.parseToArabic(11)}: ${Helpers.parseToArabic(16)} - ${Helpers.parseToArabic(33)}`
      }
    ]
  },
  {
    key: 259,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 53,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(53)}`
      },
      {
        bookName: "2 كورنثوس",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `كورنثوس الثانيه ${Helpers.parseToArabic(12)}`
      }
    ]
  },
  {
    key: 260,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 54,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(54)}`
      },
      {
        bookName: "2 كورنثوس",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:14,
        text: `كورنثوس الثانيه ${Helpers.parseToArabic(13)}`
  }
    ]
  },
  {
    key: 261,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 55,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(55)}`
      },
      {
        bookName: "غلاطية",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:24,
        text: `غلاطية ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 262,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 56,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(56)}`
      },
      {
        bookName: "غلاطية",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `غلاطية ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 263,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 57,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(57)}`
      },
      {
        bookName: "غلاطية",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:14,
        text: `غلاطية ${Helpers.parseToArabic(3)}: غلاطية ${Helpers.parseToArabic(1)} - غلاطية ${Helpers.parseToArabic(14)}`
      }
    ]
  },
  {
    key: 264,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 58,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(58)}`
      },
      {
        bookName: "غلاطية",
        chapterNumber: 3,
        startVerseNumber: 15,
        endVerseNumber:29,
        text: `غلاطية ${Helpers.parseToArabic(3)}: غلاطية ${Helpers.parseToArabic(15)} - غلاطية ${Helpers.parseToArabic(29)}`
  }
    ]
  },
  {
    key: 265,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 59,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(59)}`
      },
      {
        bookName: "غلاطية",
        chapterNumber: 4,
        startVerseNumber: 0,
        endVerseNumber:20,
        text: `غلاطية ${Helpers.parseToArabic(4)}: غلاطية ${Helpers.parseToArabic(1)} - غلاطية ${Helpers.parseToArabic(20)}`
      }
    ]
  },
  {
    key: 266,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 60,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(60)}`
      },
      {
            
        bookName: "غلاطية",
        chapterNumber: 4,
        startVerseNumber: 21,
        endVerseNumber:31,
        text: `غلاطية ${Helpers.parseToArabic(4)}: غلاطية ${Helpers.parseToArabic(21)} - غلاطية ${Helpers.parseToArabic(31)}`
  }
    ]
  },
  {
    key: 267,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 61,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(61)}`
      },
      {
        bookName: "غلاطية",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:26,
        text: `غلاطية ${Helpers.parseToArabic(5)}`
  }
    ]
  },
  {
    key: 268,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 62,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(62)}`
      },
      {
        bookName: "غلاطية",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: `غلاطية ${Helpers.parseToArabic(6)}`
  }
    ]
  },
  {
    key: 269,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 63,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(63)}`
      },
      {
        bookName: "افسس",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:23,
        text: `افسس ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 270,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 64,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(64)}`
      },
      {
        bookName: "افسس",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: `افسس ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 271,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 65,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(65)}`
      },
      {
        bookName: "افسس",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:21,
        text: `افسس ${Helpers.parseToArabic(3)}`
      }
    ]
  },
  {
    key: 272,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 66,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(66)}`
      },
      {
        bookName: "افسس",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:16,
        text: `افسس ${Helpers.parseToArabic(4)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(16)} `
  }
    ]
  },
  {
    key: 273,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 67,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(67)}`
      },
      {
        bookName: "افسس",
        chapterNumber: 4,
        startVerseNumber: 17,
        endVerseNumber:32,
        text: `افسس ${Helpers.parseToArabic(4)}: ${Helpers.parseToArabic(17)} - ${Helpers.parseToArabic(32)} `
      }
    ]
  },
  {
    key: 274,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 68,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(68)}`
      },
      {
        bookName: "افسس",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `افسس ${Helpers.parseToArabic(5)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(21)} `
  }
    ]
  },
  {
    key: 275,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 69,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(69)}`
      },
      {
        bookName: "افسس",
        chapterNumber: 5,
        startVerseNumber: 22,
        endVerseNumber:33,
        text: `افسس ${Helpers.parseToArabic(5)}: ${Helpers.parseToArabic(22)} - ${Helpers.parseToArabic(33)} `
  }
    ]
  },
  {
    key: 276,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 70,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(70)}`
      },
      {
        bookName: "افسس",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: `افسس ${Helpers.parseToArabic(6)}`
  }
    ]
  },
  {
    key: 277,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 71,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(71)}`
      },
      {
        bookName: "فيلبي",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:30,
        text: `فيلبي ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 278,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 72,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(72)}`
      },
      {
        bookName: "فيلبي",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:30,
        text: `فيلبي ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 279,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 73,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(73)}`
      },
      {
        bookName: "فيلبي",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:21,
        text: `فيلبي ${Helpers.parseToArabic(3)}`
      }
    ]
  },
  {
    key: 280,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 74,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(74)}`
      },
      {
        bookName: "فيلبي",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:23,
        text: `فيلبي ${Helpers.parseToArabic(4)}`
  }
    ]
  },
  {
    key: 281,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 75,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(75)}`
      },
      {
        bookName: "كولوسي",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:29,
        text: `كولوسي ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 282,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 76,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(76)}`
      },
      {
        bookName: "كولوسي",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:23,
        text: `كولوسي ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 283,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 77,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(77)}`
      },
      {
        bookName: "كولوسي",
        chapterNumber: 3,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: `كولوسي ${Helpers.parseToArabic(3)}`
      }
    ]
  },
  {
    key: 284,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 78,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(78)}`
      },
      {
        bookName: "كولوسي",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: `كولوسي ${Helpers.parseToArabic(4)}`
  }
    ]
  },
  {
    key: 285,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 79,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(79)}`
      },
      {
        bookName: "1 تسالونيكي",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:10,
        text: `تسالونيكي الاولي ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 286,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 80,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(80)}`
      },
      {
        bookName: "1 تسالونيكي",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: `تسالونيكي الاولي ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 287,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 81,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(81)}`
      },
      {
        bookName: "1 تسالونيكي",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:13,
        text: `تسالونيكي الاولي ${Helpers.parseToArabic(3)}`
      }
    ]
  },
  {
    key: 288,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 82,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(82)}`
      },
      {
        bookName: "1 تسالونيكي",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: `تسالونيكي الاولي ${Helpers.parseToArabic(4)}`
  }
    ]
  },
  {
    key: 289,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 83,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(83)}`
      },
      {
        bookName: "1 تسالونيكي",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:28,
        text: `تسالونيكي الاولي ${Helpers.parseToArabic(5)}`
  }
    ]
  },
  {
    key: 290,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 84,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(84)}`
      },
      {
        bookName: "2 تسالونيكي",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:12,
        text: `تسالونيكي الثانيه ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 291,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 85,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(85)}`
      },
      {
        bookName: "2 تسالونيكي",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:17,
        text: `تسالونيكي الثانيه ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 292,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 86,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(86)}`
      },
      {
        bookName: "2 تسالونيكي",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: `تسالونيكي الثانيه ${Helpers.parseToArabic(3)}`
      }
    ]
  },
  {
    key: 293,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 87,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(87)}`
      },
      {
        bookName: "1 تيموثاوس",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:20,
        text: `تيموثاوس الاولي ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 294,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 88,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(88)}`
      },
      {
        bookName: "1 تيموثاوس",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:15,
        text: `تيموثاوس الاولي ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 295,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 89,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(89)}`
      },
      {
        bookName: "1 تيموثاوس",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:16,
        text: `تيموثاوس الاولي ${Helpers.parseToArabic(3)}`
      }
    ]
  },
  {
    key: 296,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 90,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(90)}`
      },
      {
        bookName: "1 تيموثاوس",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:16,
        text: `تيموثاوس الاولي ${Helpers.parseToArabic(4)}`
  }
    ]
  },
  {
    key: 297,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 91,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(91)}`
      },
      {
        bookName: "1 تيموثاوس",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: `تيموثاوس الاولي ${Helpers.parseToArabic(5)}`
  }
    ]
  },
  {
    key: 298,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 92,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(92)}`
      },
      {
        bookName: "1 تيموثاوس",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: `تيموثاوس الاولي ${Helpers.parseToArabic(6)}`
    }
    ]
  },
  {
    key: 299,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 93,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(93)}`
      },
      {
        bookName: "2 تيموثاوس",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:18,
        text: `تيموثاوس الثانيه ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 300,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 95,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(94)}`
      },
      {
        bookName: "2 تيموثاوس",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:26,
        text: `تيموثاوس الثانيه ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 301,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 95,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(95)}`
      },
      {
        bookName: "2 تيموثاوس",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:17,
        text: `تيموثاوس الثانيه ${Helpers.parseToArabic(3)}`
      }
    ]
  },
  {
    key: 302,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 96,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(96)}`
      },
      {
        bookName: "2 تيموثاوس",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: `تيموثاوس الثانيه ${Helpers.parseToArabic(4)}`
  }
    ]
  },
  {
    key: 303,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 97,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(97)}`
      },
      {
        bookName: "تيطس",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:16,
        text: `تيطس ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 304,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 98,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(98)}`
      },
      {
        bookName: "تيطس",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:15,
        text: `تيطس ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 305,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 99,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(99)}`
      },
      {
        bookName: "تيطس",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:15,
        text: `تيطس ${Helpers.parseToArabic(3)}`
      }
    ]
  },
  {
    key: 306,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 100,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(100)}`
      },
      {
        bookName: "فليمون",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: `فليمون ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 307,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 101,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(101)}`
      },
      {
        bookName: "عبرانيين",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:14,
        text: `عبرانيين ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 308,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 102,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(102)}`
      },
      {
        bookName: "عبرانيين",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: `عبرانيين ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 309,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 103,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(103)}`
      },
      {
        bookName: "عبرانيين",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:19,
        text: `عبرانيين ${Helpers.parseToArabic(3)}`
      }
    ]
  },
  {
    key: 310,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 104,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(104)}`
      },
      {
        bookName: "عبرانيين",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:16,
        text: `عبرانيين ${Helpers.parseToArabic(4)}`
      }
    ]
  },
  {
    key: 311,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 105,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(105)}`
      },
      {
        bookName: "عبرانيين",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:14,
        text: `عبرانيين ${Helpers.parseToArabic(5)}`
      }
    ]
  },
  {
    key: 312,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 106,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(106)}`
      },
      {
        bookName: "عبرانيين",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: `عبرانيين ${Helpers.parseToArabic(6)}`
      }
    ]
  },
  {
    key: 313,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 107,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(107)}`
      },
      {
        bookName: "عبرانيين",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:28,
        text: `عبرانيين ${Helpers.parseToArabic(7)}`
      }
    ]
  },
  {
    key: 314,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 108,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(108)}`
      },
      {
        bookName: "عبرانيين",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:13,
        text: `عبرانيين ${Helpers.parseToArabic(8)}`
      }
    ]
  },
  {
    key: 315,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 109,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(109)}`
      },
      {
          bookName: "عبرانيين",
          chapterNumber: 9,
          startVerseNumber: 1,
          endVerseNumber:28,
          text: `عبرانيين ${Helpers.parseToArabic(9)}`
        }
    ]
  },
  {
    key: 316,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 110,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(110)}`
      },
      {
        bookName: "عبرانيين",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: `عبرانيين ${Helpers.parseToArabic(10)}:${Helpers.parseToArabic(1)}-${Helpers.parseToArabic(18)} `
      }
    ]
  },
  {
    key: 317,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 111,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(111)}`
      },
      {
        bookName: "عبرانيين",
        chapterNumber: 10,
        startVerseNumber: 19,
        endVerseNumber:39,
        text: `عبرانيين ${Helpers.parseToArabic(10)}:${Helpers.parseToArabic(19)}-${Helpers.parseToArabic(39)} `
      }
    ]
  },
  {
    key: 318,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 112,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(112)}`
      },
      {
        bookName: "عبرانيين",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: `عبرانيين ${Helpers.parseToArabic(11)}:${Helpers.parseToArabic(1)}-${Helpers.parseToArabic(20)} `
      }
    ]
  },
  {
    key: 319,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 113,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(113)}`
      },
      {
        bookName: "عبرانيين",
        chapterNumber: 11,
        startVerseNumber: 21,
        endVerseNumber:40,
        text: `عبرانيين ${Helpers.parseToArabic(11)}:${Helpers.parseToArabic(21)}-${Helpers.parseToArabic(40)} `
      }
    ]
  },
  {
    key: 320,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 114,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(114)}`
      },
      {
        bookName: "عبرانيين",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:13,
        text: `عبرانيين ${Helpers.parseToArabic(12)}:${Helpers.parseToArabic(1)}-${Helpers.parseToArabic(13)} `
      }
    ]
  },
  {
    key: 321,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 115,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(115)}`
      },
      {
        bookName: "عبرانيين",
        chapterNumber: 12,
        startVerseNumber: 14,
        endVerseNumber:29,
        text: `عبرانيين ${Helpers.parseToArabic(12)}: ${Helpers.parseToArabic(14)} - ${Helpers.parseToArabic(29)}`
      }
    ]
  },
  {
    key: 322,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 116,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(116)}`
      },
      {
        bookName: "عبرانيين",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: `عبرانيين ${Helpers.parseToArabic(13)}`
      }
    ]
  },
  {
    key: 323,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 117,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(117)}`
      },
      {
        bookName: "يعقوب",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:27,
        text: `يعقوب ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 324,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 118,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(118)}`
      },
      {
        bookName: "يعقوب",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:26,
        text: `يعقوب ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 325,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 0,
        endVerseNumber: 16,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(16)}`
      },
      {
        bookName: "يعقوب",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: `يعقوب ${Helpers.parseToArabic(3)}`
      }
    ]
  },
  {
    key: 326,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 17,
        endVerseNumber: 32,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(17)} - ${Helpers.parseToArabic(32)}`
      },
      {
        bookName: "يعقوب",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:17,
        text: `يعقوب ${Helpers.parseToArabic(4)}`
      }
    ]
  },
  {
    key: 327,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 33,
        endVerseNumber: 56,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(33)} - ${Helpers.parseToArabic(56)}`
      },
      {
        bookName: "يعقوب",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: `يعقوب ${Helpers.parseToArabic(5)}`
      }
    ]
  },
  {
    key: 328,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 57,
        endVerseNumber: 72,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(57)} - ${Helpers.parseToArabic(72)}`
      },
      {
        bookName: "1 بطرس",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: `بطرس الاولي ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 329,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 73,
        endVerseNumber: 88,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(73)} - ${Helpers.parseToArabic(88)}`
      },
      {
        bookName: "1 بطرس",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:25,
        text: `بطرس الاولي ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 330,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 89,
        endVerseNumber: 104,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(89)} - ${Helpers.parseToArabic(104)}`
      },
      {
        bookName: "1 بطرس",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: `بطرس الاولي ${Helpers.parseToArabic(3)}`
      }
    ]
  },
  {
    key: 331,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 105,
        endVerseNumber: 120,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(105)} - ${Helpers.parseToArabic(120)}`
      },
      {
        bookName: "1 بطرس",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:19,
        text: `بطرس الاولي ${Helpers.parseToArabic(4)}`
  }
    ]
  },
  {
    key: 332,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 121,
        endVerseNumber: 136,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(121)} - ${Helpers.parseToArabic(136)}`
      },
      {
        bookName: "1 بطرس",
        chapterNumber: 5,
        startVerseNumber: 0,
        endVerseNumber:14,
        text: `بطرس الاولي ${Helpers.parseToArabic(5)}`
      }
    ]
  },
  {
    key: 333,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 137,
        endVerseNumber: 152,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(137)} - ${Helpers.parseToArabic(152)}`
      },
      {
        bookName: "2 بطرس",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:21,
        text: `بطرس الثانيه ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 334,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 119,
        startVerseNumber: 153,
        endVerseNumber: 176,
        text: `مزامير ${Helpers.parseToArabic(119)}: ${Helpers.parseToArabic(153)} - ${Helpers.parseToArabic(176)}`
      },
      {
        bookName: "2 بطرس",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: `بطرس الثانيه ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 335,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 120,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(120)}`
      },
      {
        bookName: "2 بطرس",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: `بطرس الثانيه ${Helpers.parseToArabic(3)}`
      }
    ]
  },
  {
    key: 336,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 121,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(121)}`
      },
      {
        bookName: "1 يوحنا",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:10,
        text: `يوحنا الاولي ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 337,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 122,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(122)}`
      },
      {
        bookName: "1 يوحنا",
        chapterNumber: 2,
        startVerseNumber: 1,
        endVerseNumber:29,
        text: `يوحنا الاولي ${Helpers.parseToArabic(2)}`
      }
    ]
  },
  {
    key: 338,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 123,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(123)}`
      },
      {
        bookName: "1 يوحنا",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: `يوحنا الاولي ${Helpers.parseToArabic(3)}`
      }
    ]
  },
  {
    key: 339,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 124,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(124)}`
      },
      {
        bookName: "1 يوحنا",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `يوحنا الاولي ${Helpers.parseToArabic(4)}`
      }
    ]
  },
  {
    key: 340,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 125,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(125)}`
      },
      {
        bookName: "1 يوحنا",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `يوحنا الاولي ${Helpers.parseToArabic(5)}`
      }
    ]
  },
  {
    key: 341,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 126,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(126)}`
      },
      {
        bookName: "2 يوحنا",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:13,
        text: `يوحنا الثانيه ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 342,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 127,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(127)}`
      },
      {
        bookName: "3 يوحنا",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:15,
        text: `يوحنا الثالثه ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 343,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 128,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(128)}`
      },
      {
        bookName: "يهوذا",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:25,
        text: `يهوذا ${Helpers.parseToArabic(1)}`
      }
    ]
  },
  {
    key: 344,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 129,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(129)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 1,
        startVerseNumber: 0,
        endVerseNumber:20,
        text: `رؤيا ${Helpers.parseToArabic(1)}`
       }
    ]
  },
  {
    key: 345,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 130,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(130)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 2,
        startVerseNumber: 0,
        endVerseNumber:17,
        text: `رؤيا ${Helpers.parseToArabic(2)} : ${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(17)} `
       }
    ]
  },
  {
    key: 346,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 131,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(131)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 2,
        startVerseNumber: 18,
        endVerseNumber:29,
        text: `رؤيا ${Helpers.parseToArabic(2)} : ${Helpers.parseToArabic(18)} - ${Helpers.parseToArabic(29)} `
       }
    ]
  },
  {
    key: 347,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 132,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(132)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 3,
        startVerseNumber: 1,
        endVerseNumber:22,
        text: `رؤيا ${Helpers.parseToArabic(3)}`
       }
    ]
  },
  {
    key: 348,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 133,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(133)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 4,
        startVerseNumber: 1,
        endVerseNumber:11,
        text: `رؤيا ${Helpers.parseToArabic(4)}`
       }
    ]
  },
  {
    key: 349,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 134,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(134)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 5,
        startVerseNumber: 1,
        endVerseNumber:14,
        text: `رؤيا ${Helpers.parseToArabic(5)}`
   }
    ]
  },
  {
    key: 350,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 135,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(135)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 6,
        startVerseNumber: 1,
        endVerseNumber:17,
        text: `رؤيا ${Helpers.parseToArabic(6)}`
   }
    ]
  },
  {
    key: 351,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 136,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(136)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 7,
        startVerseNumber: 1,
        endVerseNumber:17,
        text: `رؤيا ${Helpers.parseToArabic(7)}`
   }
    ]
  },
  {
    key: 352,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 137,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(137)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 8,
        startVerseNumber: 1,
        endVerseNumber:13,
        text: `رؤيا ${Helpers.parseToArabic(8)}`
     }
    ]
  },
  {
    key: 353,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 138,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(138)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 9,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `رؤيا ${Helpers.parseToArabic(9)}`
 }
    ]
  },
  {
    key: 354,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 139,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(139)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 10,
        startVerseNumber: 1,
        endVerseNumber:11,
        text: `رؤيا ${Helpers.parseToArabic(10)}`
     }
    ]
  },
  {
    key: 355,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 140,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(140)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 11,
        startVerseNumber: 1,
        endVerseNumber:19,
        text: `رؤيا ${Helpers.parseToArabic(11)}`
     }
    ]
  },
  {
    key: 356,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 141,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(141)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 12,
        startVerseNumber: 1,
        endVerseNumber:17,
        text: `رؤيا ${Helpers.parseToArabic(12)}`
 }
    ]
  },
  {
    key: 357,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 142,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(142)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 13,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: `رؤيا ${Helpers.parseToArabic(13)}`
     }
    ]
  },
  {
    key: 358,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 143,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(143)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 14,
        startVerseNumber: 1,
        endVerseNumber:20,
        text: `رؤيا ${Helpers.parseToArabic(14)}`
     }
    ]
  },
  {
    key: 359,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 144,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(144)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 15,
        startVerseNumber: 1,
        endVerseNumber:8,
        text: `رؤيا ${Helpers.parseToArabic(15)}`
     }
    ]
  },
  {
    key: 360,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 145,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(145)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 16,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `رؤيا ${Helpers.parseToArabic(16)}`
     }
    ]
  },
  {
    key: 361,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 146,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(146)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 17,
        startVerseNumber: 1,
        endVerseNumber:18,
        text: `رؤيا ${Helpers.parseToArabic(17)}`
     }
    ]
  },
  {
    key: 362,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 147,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(147)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 18,
        startVerseNumber: 1,
        endVerseNumber:24,
        text: `رؤيا ${Helpers.parseToArabic(18)}`
     }
    ]
  },
  {
    key: 363,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 148,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(148)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 19,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `رؤيا ${Helpers.parseToArabic(19)}`
     }
    ]
  },
  {
    key: 364,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 149,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(149)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 20,
        startVerseNumber: 1,
        endVerseNumber:15,
        text: `رؤيا ${Helpers.parseToArabic(20)}`
     },
     {
      bookName: "رؤيا",
      chapterNumber: 21,
      startVerseNumber: 1,
      endVerseNumber:27,
      text: `رؤيا ${Helpers.parseToArabic(21)}`
    }
    ]
  },
  {
    key: 365,
    dayChapters: [
      {
        bookName: "مزامير",
        chapterNumber: 150,
        startVerseNumber: 0,
        endVerseNumber:200,
        text: `مزامير ${Helpers.parseToArabic(150)}`
      },
      {
        bookName: "رؤيا",
        chapterNumber: 22,
        startVerseNumber: 1,
        endVerseNumber:21,
        text: `رؤيا ${Helpers.parseToArabic(22)}`
     }
      
    ]
  },
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
  "1 Samuel": "https://www.dropbox.com/s/0ww6vcf3poeup72/1%20Samuel.json?dl=1",
  "2 Samuel": "https://www.dropbox.com/s/yzvvr8u2zqi2t6m/2%20Samuel.json?dl=1",
  "1 Kings": "https://www.dropbox.com/s/m4ob2d57h3y6fw6/1%20Kings.json?dl=1",
  "2 Kings": "https://www.dropbox.com/s/io9vcpn40tua3m0/2%20Kings.json?dl=1",
  "1 Chronicles":
    "https://www.dropbox.com/s/u7x59kypcam862m/1%20Chronicles.json?dl=1",
  "2 Chronicles":
    "https://www.dropbox.com/s/7xm0v4uqteqrckk/2%20Chronicles.json?dl=1",
  Ezra: "https://www.dropbox.com/s/hpt79b5ssdyjc5o/Ezra.json?dl=1",
  Nehemiah: "https://www.dropbox.com/s/iq25b5upa5oazb6/Nehemiah.json?dl=1",
  Esther: "https://www.dropbox.com/s/wrofxssjl8glz26/Esther.json?dl=1",
  Job: "https://www.dropbox.com/s/qc6z20q7ur5ycrl/Job.json?dl=1",
  Psalm: "https://www.dropbox.com/s/zd8wfmghjr6unua/Psalm.json?dl=1",
  Proverbs: "https://www.dropbox.com/s/w9jucfmpgtapi0k/Proverbs.json?dl=1",
  Ecclesiastes:
    "https://www.dropbox.com/s/c69doqk89t7kcbb/Ecclesiastes.json?dl=1",
  "Song of Solomon":
    "https://www.dropbox.com/s/5bz3itq9w02qyb2/Song%20of%20Solomon.json?dl=1",
  Isaiah: "https://www.dropbox.com/s/vnggfdy8p7vsww3/Isaiah.json?dl=1",
  Jeremiah: "https://www.dropbox.com/s/gxmagc01sxa8346/Jeremiah.json?dl=1",
  Lamentations:
    "https://www.dropbox.com/s/huooq8iz1b0ek6u/Lamentations.json?dl=1",
  Ezekiel: "https://www.dropbox.com/s/dr68bhrqqmvdhye/Ezekiel.json?dl=1",
  Daniel: "https://www.dropbox.com/s/0q5m644pnnnwmdm/Daniel.json?dl=1",
  Hosea: "https://www.dropbox.com/s/f0ndgocjt3504wk/Hosea.json?dl=1",
  Joel: "https://www.dropbox.com/s/xui1fqrfr7hordx/Joel.json?dl=1",
  Amos: "https://www.dropbox.com/s/wqr306jqr28o7hs/Amos.json?dl=1",
  Obadiah: "https://www.dropbox.com/s/9x1iajblvrhaij6/Obadiah.json?dl=1",
  Jonah :"https://www.dropbox.com/s/ry5u3ktid0hkb5l/Jonah.json?dl=1",
  Micah: "https://www.dropbox.com/s/iozyugbutxmzmjb/Micah.json?dl=1",
  Nahum: "https://www.dropbox.com/s/uu766lqlvtk0zw6/Nahum.json?dl=1",
  Habakkuk: "https://www.dropbox.com/s/zflpcnbhzy47m3o/Habakkuk.json?dl=1",
  Zephaniah: "https://www.dropbox.com/s/9c244gvky3yrfo9/Zephaniah.json?dl=1",
  Haggai: "https://www.dropbox.com/s/6lj6g5c3t0zsnlt/Haggai.json?dl=1",
  Zechariah  :"https://www.dropbox.com/s/waqomftmtq3b2tv/Zechariah.json?dl=1",
  Malachi: "https://www.dropbox.com/s/ro6ckcncatpw8y9/Malachi.json?dl=1",
  Matthew: "https://www.dropbox.com/s/5ty8fk61vlsuz8n/Matthew.json?dl=1",
  Mark: "https://www.dropbox.com/s/qpmmmgk1qqm7bs6/Mark.json?dl=1",
  Luke: "https://www.dropbox.com/s/0x51go1ho2tdqn3/Luke.json?dl=1",
  John: "https://www.dropbox.com/s/em1z9gteq64lfin/John.json?dl=1",
  Acts: "https://www.dropbox.com/s/08l64hglzngyiei/Acts.json?dl=1",
  Romans: "https://www.dropbox.com/s/r65xvclohq509co/Romans.json?dl=1",
  "1 Corinthians":
    "https://www.dropbox.com/s/ydm0eyt9o6uk3b6/1%20Corinthians.json?dl=1",
  "2 Corinthians":
    "https://www.dropbox.com/s/j9eudpd151q4bpo/2%20Corinthians.json?dl=1",
  Galatians: "https://www.dropbox.com/s/19j2xr5rk9fry8l/Galatians.json?dl=1",
  Ephesians: "https://www.dropbox.com/s/pqxak36tc4xbts3/Ephesians.json?dl=1",
  Philippians:
    "https://www.dropbox.com/s/vaauw9ynaphxtlt/Philippians.json?dl=1",
  Colossians: "https://www.dropbox.com/s/xwzfdfg9hl6jmjr/Colossians.json?dl=1",
  "1 Thessalonians":
    "https://www.dropbox.com/s/6tg0j20jqj9dh3l/1%20Thessalonians.json?dl=1",
  "2 Thessalonians":
    "https://www.dropbox.com/s/lsi85kvpx6gxa4m/2%20Thessalonians.json?dl=1",
  "1 Timothy":
    "https://www.dropbox.com/s/s317rqcdenx65sy/1%20Timothy.json?dl=1",
  "2 Timothy":
    "https://www.dropbox.com/s/dk0f9avl2zge5qq/2%20Timothy.json?dl=1",
  Titus: "https://www.dropbox.com/s/yet36pthclnqak5/Titus.json?dl=1",
  Philemon: "https://www.dropbox.com/s/slj4zp7rc0owyjv/Philemon.json?dl=1",
  Hebrews: "https://www.dropbox.com/s/lpi3gklxxyc2m5e/Hebrews.json?dl=1",
  James: "https://www.dropbox.com/s/jpf3m4qe0ycgudx/James.json?dl=1",
  "1 Peter": "https://www.dropbox.com/s/g6knfle5b58wh0n/1%20Peter.json?dl=1",
  "2 Peter": "https://www.dropbox.com/s/m6cpqidf6zhrwsa/2%20Peter.json?dl=1",
  "1 John": "https://www.dropbox.com/s/f6vufoai9iv1d6m/1%20John.json?dl=1",
  "2 John": "https://www.dropbox.com/s/re1celioexu8t3z/2%20John.json?dl=1",
  "3 John": "https://www.dropbox.com/s/4w1smgr9bvlq1hn/3%20John.json?dl=1",
  Jude: "https://www.dropbox.com/s/nbjn4d6kiprcng5/Jude.json?dl=1",
  Revelation: "https://www.dropbox.com/s/jlauyydhkrq6vfw/Revelation.json?dl=1"
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
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
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
  "2 Peter",
  "1 John",
  "2 John",
  "3 John",
  "Jude",
  "Revelation"
];
export const arabicBookNames = [
  "GAr",
  "ExodusAr",
  "LeviticusAr",
  "NumbersAr",
  "DeuteronomyAr",
  "JoshuaAr",
  "JudgesAr",
  "RuthAr",
  "1 SamuelAr",
  '2 SamuelAr',
  "1 KingsAr",
  "2 KingsAr",
  "1 ChroniclesAr",
  "2 ChroniclesAr",
  "EzraAr",
  "NehemiahAr",
  "EstherAr",
  "JobAr",
  "PsalmAr",
    "ProverbsAr",
    "EcclesiastesAr",
    "Song of SolomonAr",
    "IsaiahAr",
    "JeremiahAr",
    "LamentationsAr",
    "EzekielAr",
    "DanielAr",
    "HoseaAr",
    "JoelAr",
    "AmosAr",
    "ObadiahAr",
    "JonahAr",
    "MicahAr",
    "NahumAr",
    "HabakkukAr" ,
    "ZephaniahAr",
    "HaggaiAr" ,
    "ZechariahAr" ,
    "MalachiAr",
    "MatthewAr",
    "MarkAr" ,
    "LukeAr",
    "JohnAr",
    "ActsAr",
    "RomansAr",
     "1 CorinthiansAr",
     "2 CorinthiansAr",
     "GalatiansAr",
     "EphesiansAr",
     "PhilippiansAr",
     "ColossiansAr",
     "1 ThessaloniansAr",
     "2 ThessaloniansAr",
     "1 TimothyAr",
     "2 TimothyAr",
     "TitusAr",
      "PhilemonAr",
      "HebrewsAr",
      "JamesAr",
      "1 PeterAr",
      "2 PeterAr",
       "1 JohnAr",
       "2 JohnAr",
       "3 JohnAr",
       "JudeAr",
       "RevelationAr"
]
  export const arabicContentUri = {
    GAr :"https://www.dropbox.com/s/43rya2qqxtn91ui/%D8%AA%D9%83%D9%88%D9%8A%D9%862.json?dl=1",
    ExodusAr:"https://www.dropbox.com/s/1t35itdo0hinpze/%D8%AE%D8%B1%D9%88%D8%AC.json?dl=1",
    LeviticusAr:"https://www.dropbox.com/s/m7c4z595zsi0ox8/%D9%84%D8%A7%D9%88%D9%8A%D9%8A%D9%86.json?dl=1",
    NumbersAr:"https://www.dropbox.com/s/xxmixpaxbij1rmf/%D8%B9%D8%AF%D8%AF.json?dl=1",
    DeuteronomyAr:"https://www.dropbox.com/s/984tml5jdjakvpp/%D8%AA%D8%AB%D9%86%D9%8A%D8%A9.json?dl=1",
    JoshuaAr:"https://www.dropbox.com/s/iw2eim7g4vgdn3t/%D9%8A%D8%B4%D9%88%D8%B9.json?dl=1",
    JudgesAr:"https://www.dropbox.com/s/25ic5spg4xd0mr8/%D9%82%D8%B6%D8%A7%D8%A9.json?dl=1",
    RuthAr:"https://www.dropbox.com/s/cjg2abu0uulnzgk/%D8%B1%D8%A7%D8%B9%D9%88%D8%AB.json?dl=1",
    "1 SamuelAr":"https://www.dropbox.com/s/x60s1uwbg8irho6/1%20%D8%B5%D9%85%D9%88%D8%A6%D9%8A%D9%84.json?dl=1",
    "2 SamuelAr":"https://www.dropbox.com/s/o128i6j0ixgh7nt/2%20%D8%B5%D9%85%D9%88%D8%A6%D9%8A%D9%84.json?dl=1",
    "1 KingsAr":"https://www.dropbox.com/s/mcogx1lxnzo52r0/1%20%D9%85%D9%84%D9%88%D9%83.json?dl=1",
    "2 KingsAr":"https://www.dropbox.com/s/gwsw7yw6r5s4q3c/2%20%D9%85%D9%84%D9%88%D9%83.json?dl=1",
    "1 ChroniclesAr":"https://www.dropbox.com/s/vejx1kzt5ywtvj8/1%20%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1.json?dl=1",
    "2 ChroniclesAr":"https://www.dropbox.com/s/it99hmuun15xu3h/2%20%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1.json?dl=1",
    EzraAr :"https://www.dropbox.com/s/ophgw4wunvb19vl/%D8%B9%D8%B2%D8%B1%D8%A7.json?dl=1",
    NehemiahAr:"https://www.dropbox.com/s/eihkulyrpy8l3jr/%D9%86%D8%AD%D9%85%D9%8A%D8%A7.json?dl=1",
    EstherAr:"https://www.dropbox.com/s/uws8pt3j7a0udma/%D8%A7%D8%B3%D8%AA%D9%8A%D8%B1.json?dl=1",
    JobAr:"https://www.dropbox.com/s/84m4jyad2zlw62u/%D8%A7%D9%8A%D9%88%D8%A8.json?dl=1",
    PsalmAr:
      "https://www.dropbox.com/s/w024fcn2ghuj7u8/%D9%85%D8%B2%D8%A7%D9%85%D9%8A%D8%B1.json?dl=1",
      ProverbsAr:"https://www.dropbox.com/s/qfe89lf1tgtkfdq/%D8%A7%D9%85%D8%AB%D8%A7%D9%84.json?dl=1",
      EcclesiastesAr:"https://www.dropbox.com/s/fnrwtegmyoen4dq/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9.json?dl=1",
      "Song of SolomonAr" :
      "https://www.dropbox.com/s/auy0jmb7e6vz465/%D9%86%D8%B4%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D9%86%D8%B4%D8%A7%D8%AF.json?dl=1",
      IsaiahAr:"https://www.dropbox.com/s/l3qh9vlrm4e3k7s/%D8%A7%D8%B4%D8%B9%D9%8A%D8%A7%D8%A1.json?dl=1",
      JeremiahAr:"https://www.dropbox.com/s/eexdz5jxyidho1s/%D8%A7%D8%B1%D9%85%D9%8A%D8%A7.json?dl=1",
      LamentationsAr:"https://www.dropbox.com/s/qoz80ai81wu0hqw/%D9%85%D8%B1%D8%A7%D8%AB%D9%8A.json?dl=1",
      EzekielAr:"https://www.dropbox.com/s/f736933ar9t3rwu/%D8%AD%D8%B2%D9%82%D9%8A%D8%A7%D9%84.json?dl=1",
      DanielAr:"https://www.dropbox.com/s/v2rszxi11wxpbep/%D8%AF%D8%A7%D9%86%D9%8A%D8%A7%D9%84.json?dl=1",
      HoseaAr:"https://www.dropbox.com/s/u38s7wwxh2hdcik/%D9%87%D9%88%D8%B4%D8%B9.json?dl=1",
      JoelAr:"https://www.dropbox.com/s/7kffuhmpqqzvjef/%D9%8A%D9%88%D8%A6%D9%8A%D9%84.json?dl=1",
      AmosAr:"https://www.dropbox.com/s/61r827crpo30f99/%D8%B9%D8%A7%D9%85%D9%88%D8%B3.json?dl=1",
      ObadiahAr:"https://www.dropbox.com/s/hmx8k1rz59j4r26/%D8%B9%D9%88%D8%A8%D8%AF%D9%8A%D8%A7.json?dl=1",
      JonahAr:"https://www.dropbox.com/s/bjlrs46gxspmtrr/%D9%8A%D9%88%D9%86%D8%A7%D9%86.json?dl=1",
      MicahAr:"https://www.dropbox.com/s/in1l5b0xddgwunc/%D9%85%D9%8A%D8%AE%D8%A7.json?dl=1",
      NahumAr:"https://www.dropbox.com/s/0m2bwys0isfk83e/%D9%86%D8%A7%D8%AD%D9%88%D9%85.json?dl=1",
      HabakkukAr :"https://www.dropbox.com/s/n04pfq2nx1h3j0i/%D8%AD%D8%A8%D9%82%D9%88%D9%82.json?dl=1",
      ZephaniahAr:"https://www.dropbox.com/s/swkp4o5elbb808m/%D8%B5%D9%81%D9%86%D9%8A%D8%A7.json?dl=1",
      HaggaiAr :"https://www.dropbox.com/s/pv3rvo93lt158gv/%D8%AD%D8%AC%D9%89.json?dl=1",
      ZechariahAr :"https://www.dropbox.com/s/m2750avjaswekxd/%D8%B2%D9%83%D8%B1%D9%8A%D8%A7.json?dl=1",
      MalachiAr:"https://www.dropbox.com/s/2woynm5bzyvqc1s/%D9%85%D9%84%D8%A7%D8%AE%D9%8A.json?dl=1",
      MatthewAr:"https://www.dropbox.com/s/ezfvulrl52vauxp/%D9%85%D8%AA%D9%8A.json?dl=1",
      MarkAr :"https://www.dropbox.com/s/qwj8t32tlpg6acj/%D9%85%D8%B1%D9%82%D8%B3.json?dl=1",
      LukeAr:"https://www.dropbox.com/s/cy891etxezpt6yp/%D9%84%D9%88%D9%82%D8%A7.json?dl=1",
      JohnAr:"https://www.dropbox.com/s/majkx3bgwg17ws0/%D9%8A%D9%88%D8%AD%D9%86%D8%A7.json?dl=1",
      ActsAr:"https://www.dropbox.com/s/ueia6hkq5irmra7/%D8%A7%D8%B9%D9%85%D8%A7%D9%84.json?dl=1",
      RomansAr:"https://www.dropbox.com/s/yhbpeggj6syhn5y/%D8%B1%D9%88%D9%85%D9%8A%D8%A9.json?dl=1",
       "1 CorinthiansAr" :"https://www.dropbox.com/s/5ymur8m3htmemc6/1%20%D9%83%D9%88%D8%B1%D9%86%D8%AB%D9%88%D8%B3.json?dl=1",
       "2 CorinthiansAr":"https://www.dropbox.com/s/lgbu13y7jir5th6/2%20%D9%83%D9%88%D8%B1%D9%86%D8%AB%D9%88%D8%B3.json?dl=1",
       GalatiansAr:"https://www.dropbox.com/s/iknj77hgrfmyth8/%D8%BA%D9%84%D8%A7%D8%B7%D9%8A%D8%A9.json?dl=1",
       EphesiansAr:"https://www.dropbox.com/s/l5w3p20aqtujrz4/%D8%A7%D9%81%D8%B3%D8%B3.json?dl=1",
       PhilippiansAr:"https://www.dropbox.com/s/cz4em1bj72lir9r/%D9%81%D9%8A%D9%84%D8%A8%D9%8A.json?dl=1",
       ColossiansAr:"https://www.dropbox.com/s/98spb5mqvbkx3j2/%D9%83%D9%88%D9%84%D9%88%D8%B3%D9%8A.json?dl=1",
       "1 ThessaloniansAr":
       "https://www.dropbox.com/s/lsly20pkiwt1r1w/1%20%D8%AA%D8%B3%D8%A7%D9%84%D9%88%D9%86%D9%8A%D9%83%D9%8A.json?dl=1",
       "2 ThessaloniansAr":
       "https://www.dropbox.com/s/55cpoiryxzjdvl8/2%20%D8%AA%D8%B3%D8%A7%D9%84%D9%88%D9%86%D9%8A%D9%83%D9%8A.json?dl=1",
       "1 TimothyAr":
       "https://www.dropbox.com/s/gbt1dqjvuhdktwv/1%20%D8%AA%D9%8A%D9%85%D9%88%D8%AB%D8%A7%D9%88%D8%B3.json?dl=1",
       "2 TimothyAr":
       "https://www.dropbox.com/s/vy7k920zzp7qged/2%20%D8%AA%D9%8A%D9%85%D9%88%D8%AB%D8%A7%D9%88%D8%B3.json?dl=1",
       "TitusAr":
        "https://www.dropbox.com/s/cu91tjnkn4i55y6/%D8%AA%D9%8A%D8%B7%D8%B3.json?dl=1",
        "PhilemonAr":
        "https://www.dropbox.com/s/zfbdx6pwfjeyp8y/%D9%81%D9%84%D9%8A%D9%85%D9%88%D9%86.json?dl=1",
        "HebrewsAr":
        "https://www.dropbox.com/s/88c3qzd8682fplf/%D8%B9%D8%A8%D8%B1%D8%A7%D9%86%D9%8A%D9%8A%D9%86.json?dl=1",
        "JamesAr":
        "https://www.dropbox.com/s/0sxwbqn0km8nz2i/%D9%8A%D8%B9%D9%82%D9%88%D8%A8.json?dl=1",
        "1 PeterAr":
        "https://www.dropbox.com/s/szckmo80xbxg80c/1%20%D8%A8%D8%B7%D8%B1%D8%B3.json?dl=1",
        "2 PeterAr":
         "https://www.dropbox.com/s/sdmayo81il1afu1/2%20%D8%A8%D8%B7%D8%B1%D8%B3.json?dl=1",
         "1 JohnAr":
         "https://www.dropbox.com/s/s4372rojz1hq5ho/1%20%D9%8A%D9%88%D8%AD%D9%86%D8%A7.json?dl=1",
         "2 JohnAr":
         "https://www.dropbox.com/s/k7nvd4hddmo7qxw/2%20%D9%8A%D9%88%D8%AD%D9%86%D8%A7.json?dl=1",
         "3 JohnAr":
         "https://www.dropbox.com/s/ccxt0hghij0gare/3%20%D9%8A%D9%88%D8%AD%D9%86%D8%A7.json?dl=1",
         "JudeAr":
         "https://www.dropbox.com/s/pwmo8pg7vk8kh52/%D9%8A%D9%87%D9%88%D8%B0%D8%A7.json?dl=1",
         "RevelationAr":
         "https://www.dropbox.com/s/c0e45ccdkdh9efy/%D8%B1%D8%A4%D9%8A%D8%A7.json?dl=1"
  };
export const IS_ENGLISH_CONTENT_DOWNLOADED = "english";
export const IS_ARABIC_CONTENT_DOWNLOADED = "arabic";
export const IS_FIRST_ARABIC_PLAN_DOWNLOADED  = "IsFirstAarabicPlanDownloaded"
export const  bookNamesDictionary = {
  GAr: "تكوين",
  ExodusAr : "خروج",
  LeviticusAr: "لاويين",
  NumbersAr : "عدد" ,
  DeuteronomyAr:"تثنية",
  JoshuaAr :"يشوع",
  JudgesAr :"قضاة",
  RuthAr:"راعوث",
  "1 SamuelAr" :"1 صموئيل",
  '2 SamuelAr':"2 صموئيل",
  "1 KingsAr" :"1 ملوك",
  "2 KingsAr":"2 ملوك",
  "1 ChroniclesAr" :"1 اخبار",
  "2 ChroniclesAr":"2 اخبار",
  EzraAr:"عزرا",
  NehemiahAr :"نحميا",
  EstherAr:"استير",
  JobAr:"ايوب",
  PsalmAr:"مزامير",
    ProverbsAr:"امثال",
   EcclesiastesAr:"جامعة",
    "Song of SolomonAr":"نشيد الانشاد",
    IsaiahAr:"اشعياء",
    JeremiahAr:"ارميا",
    LamentationsAr:"مراثي",
   EzekielAr:"حزقيال",
   DanielAr:"دانيال",
    HoseaAr:"هوشع",
    JoelAr :"يوئيل",
    AmosAr:"عاموس",
    ObadiahAr:"عوبديا",
    JonahAr:"يونان",
    MicahAr:"ميخا",
    NahumAr:"ناحوم",
    HabakkukAr:"حبقوق" ,
    ZephaniahAr:"صفنيا",
   HaggaiAr :"حجى" ,
   ZechariahAr :"زكريا",
   MalachiAr:"ملاخي",
    MatthewAr :"متى",
    MarkAr:"مرقس" ,
    LukeAr:"لوقا",
    JohnAr:"يوحنا",
    ActsAr:"اعمال",
    RomansAr :"رومية",
     "1 CorinthiansAr":"1 كورنثوس",
     "2 CorinthiansAr":"2 كورنثوس",
     GalatiansAr:"غلاطية",
     EphesiansAr:"افسس",
     PhilippiansAr:"فيلبي",
     ColossiansAr:"كولوسي",
     "1 ThessaloniansAr":"1 تسالونيكي",
     "2 ThessaloniansAr":"2 تسالونيكي",
     "1 TimothyAr":"1 تيموثاوس",
     "2 TimothyAr":"2 تيموثاوس",
     TitusAr:"تيطس",
     PhilemonAr:"فليمون",
     HebrewsAr:"عبرانيين",
     JamesAr:"يعقوب",
      "1 PeterAr":"1 بطرس",
      "2 PeterAr":"2 بطرس",
       "1 JohnAr":"1 يوحنا",
       "2 JohnAr":"2 يوحنا",
       "3 JohnAr":"3 يوحنا",
       JudeAr:"يهوذا",
       RevelationAr:"رؤيا"
}
export const booksOfFirstArabicPlan = [
  "PsalmAr",
  "ProverbsAr",
  "MatthewAr",
    "MarkAr" ,
    "LukeAr",
    "JohnAr",
    "ActsAr",
    "RomansAr",
     "1 CorinthiansAr",
     "2 CorinthiansAr",
     "GalatiansAr",
     "EphesiansAr",
     "PhilippiansAr",
     "ColossiansAr",
     "1 ThessaloniansAr",
     "2 ThessaloniansAr",
     "1 TimothyAr",
     "2 TimothyAr",
     "TitusAr",
      "PhilemonAr",
      "HebrewsAr",
      "JamesAr",
      "1 PeterAr",
      "2 PeterAr",
       "1 JohnAr",
       "2 JohnAr",
       "3 JohnAr",
       "JudeAr",
       "RevelationAr"
]
export const EXPO_PUSH_TOKEN_KEY='expoToken'
export const agbyaKeys = [
  {
    id: 1,
    name:  "baker",
    links: [
    {
      id:"1st-1",
      name:'مقدمه كل ساعه'
    },
    {
      id: "1st-2",
      name:'الصلاه الربانيه'
    },
    {
      id: "1st-3",
      name:'صلاه الشكر'
    },
    {
      id: "1st-4",
      name:'المزمور الخمسون',
      bookName: 'PsalmAr',
      chapterNumber: 50
    },
    {
      id: "1st-5",
      name:'البولس من رساله افسس'
    },
    {
      id: "1st-6",
      name:'البولس من رساله افسس'
    },
    {
      id: "1st-7",
      name:'من ايمان الكنيسه'
    },
    {
      id: "1st-8",
      name:'بدء صلاه باكر'
    },
    {
      id: "1st-9",
      name:'المزمور الاول',
      bookName: 'PsalmAr',
      chapterNumber: 1
    },
    {
      id: "1st-10",
      name:'المزمور الثاني',
      bookName: 'PsalmAr',
      chapterNumber: 2
    },
    {
      id: "1st-11",
      name:'المزمور الثالث',
      bookName: 'PsalmAr',
      chapterNumber: 3
    },
    {
      id: "1st-12",
      name:'المزمور الرابع',
      bookName: 'PsalmAr',
      chapterNumber: 4
    },
    {
      id: "1st-13",
      name:'المزمور الخامس',
      bookName: 'PsalmAr',
      chapterNumber: 5
    },
    {
      id: "1st-14",
      name:'المزمور السادس',
      bookName: 'PsalmAr',
      chapterNumber: 6
    },
    {
      id: "1st-15",
      name:'المزمور الثامن',
      bookName: 'PsalmAr',
      chapterNumber: 8
    },
    {
      id: "1st-16",
      name:'المزمور الحادي عشر',
      bookName: 'PsalmAr',
      chapterNumber: 11
    },
    {
      id: "1st-17",
      name:'المزمور الثاني عشر',
      bookName: 'PsalmAr',
      chapterNumber: 12
    },
    {
      id: "1st-18",
      name:'المزمور الرابع عشر',
      bookName: 'PsalmAr',
      chapterNumber: 14
    },
    {
      id: "1st-19",
      name:'المزمور الخامس عشر',
      bookName: 'PsalmAr',
      chapterNumber: 15
    },
    {
      id: "1st-20",
      name:'المزمور الثامن عشر',
      bookName: 'PsalmAr',
      chapterNumber: 18
    },
    {
      id: "1st-21",
      name:'المزمور الرابع والعشرون',
      bookName: 'PsalmAr',
      chapterNumber: 24
    },
    {
      id: "1st-22",
      name:'المزمور السادس والعشرون',
      bookName: 'PsalmAr',
      chapterNumber: 26
    },
    {
      id: "1st-23",
      name:'المزمور الثاني الستون',
      bookName: 'PsalmAr',
      chapterNumber: 62
    },
    {
      id: "1st-24",
      name:'المزمور السادس والستون',
      bookName: 'PsalmAr',
      chapterNumber: 66
    },
    {
      id: "1st-25",
      name:'المزمور التاسع والستون',
      bookName: 'PsalmAr',
      chapterNumber: 69
    },
    {
      id: "1st-26",
      name:'المزمور المائه والثاني عشر',
      bookName: 'PsalmAr',
      chapterNumber: 112
    },
     {
      id: "1st-27",
      name:'المزمور المائه الثاني والاربعون'
    },
    {
      id: "1st-28",
      name:'انجيل يوحنا'
    },
    {
      id: "1st-29",
      name:'القطع'
    },
    {
      id: "1st-30",
      name:'تسبحه الملائكه'
    },
    {
      id: "1st-31",
      name:'الثلاثه تقديسات'
    },
    {
      id: "1st-32",
      name:'السلام لك'
    },
    {
      id: "1st-33",
      name:'بدء قانون الايمان'
    },
    {
      id: "1st-34",
      name:'قانون الايمان'
    },
    {
      id: "1st-35",
      name:'قدوس قدوس قدوس'
    },
    {
      id: "1st-36",
      name:'التحليل'
    },
    {
      id: "1st-37",
      name:'طلبه تصلي اخر كل ساعه'
    },
    ]
  },
  {
    id:2,
    name:"thirdPray",
    links: [
      {
        id:"1d-1",
        name:"مقدمه كل ساعه"
      },
      {
        id:"1d-2",
        name:'الصلاه الربانيه'
      },
      {
        id: "1d-3",
        name: 'صلاه الشكر'
      },
      {
        id: '1d-4',
        name: 'المزمور الخمسين',
        bookName: 'PsalmAr',
        chapterNumber: 50
      },
      {
        id:"3d-5",
        name: 'بدء الصلاه'
      },
      {
        id : "3d-6",
        name : 'المزمور التاسع عشر',
        bookName: 'PsalmAr',
        chapterNumber: 19
      },{
        id : "3d-7",
        name :  'المزمور الثاني والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 22
      },
      {
        id : "3d-8",
        name :  'المزمور الثالث والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 23
      },
      {
        id : "3d-9",
        name :  'المزمور الخامس والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 25
      },
      {
        id : "3d-10",
        name :  'المزمور الثامن والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 28
      },
      {
        id : "3d-11",
        name :  'المزمور التاسع والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 29
      },
      {
        id : "3d-12",
        name :  'المزمور الثالث و الثلاثون',
        bookName: 'PsalmAr',
        chapterNumber: 33
      },
      {
        id : "3d-13",
        name :  'المزمور الاربعون',
        bookName: 'PsalmAr',
        chapterNumber: 40
      },
      {
        id : "3d-14",
        name :  'المزمور الثاني والاربعون',
        bookName: 'PsalmAr',
        chapterNumber: 42
      },
      {
        id : "3d-15",
        name : 'المزمور الرابع والاربعون',
        bookName: 'PsalmAr',
        chapterNumber: 44
      },
      {
        id : "3d-16",
        name : 'المزمور الخامس والاربعون',
        bookName: 'PsalmAr',
        chapterNumber: 45
      },
      {
        id : "3d-17",
        name : 'المزمور السادس والاربعون',
        bookName: 'PsalmAr',
        chapterNumber: 46
      },
      {
        id : "3d-18",
        name : 'يوحنا 14 : 26-30'
      },
      {
        id : "3d-19",
        name : 'قدوس قدوس قدوس'
      },
      {
        id : "3d-20",
        name : 'التحليل'
      },
      {
        id : "3d-21",
        name : 'طلبه تصلي اخر كل ساعه'
      },
      ]
  },
  {
    id:3,
    name:"sixthPray",
    links: [
      {
        id:"6d-1",
        name:"مقدمه كل ساعه"
      },
      {
        id:"6d-2",
        name:'الصلاه الربانيه'
      },
      {
        id: "6d-3",
        name: 'صلاه الشكر'
      },
      {
        id: '6d-4',
        name: 'المزمور الخمسين',
        bookName: 'PsalmAr',
        chapterNumber: 50
      },
      {
        id:"6d-5",
        name: 'بدء الصلاه'
      },
      {
        id : "6d-6",
        name : 'المزمور الثالث والخمسون',
        bookName: 'PsalmAr',
        chapterNumber: 53
      },{
        id : "6d-7",
        name : 'المزمور السادس والخمسون',
        bookName: 'PsalmAr',
        chapterNumber: 56
      },
      {
        id : "6d-8",
        name :  'المزمور الستون',
        bookName: 'PsalmAr',
        chapterNumber: 60
      },
      {
        id : "6d-9",
        name :  'المزمور الثاني والستون',
        bookName: 'PsalmAr',
        chapterNumber: 62
      },
      {
        id : "6d-10",
        name :  'المزمور السادس  والستون',
        bookName: 'PsalmAr',
        chapterNumber: 66
      },
      {
        id : "6d-11",
        name :  'المزمور التاسع و الستون',
        bookName: 'PsalmAr',
        chapterNumber: 69
      },
      {
        id : "6d-12",
        name :  'المزمور الثالث و الثمانون',
        bookName: 'PsalmAr',
        chapterNumber: 83
      },
      {
        id : "6d-13",
        name :  'المزمور الرابع والثمانون',
        bookName: 'PsalmAr',
        chapterNumber: 84
      },
      {
        id : "6d-14",
        name :  'المزمور الخامس والثمانون',
        bookName: 'PsalmAr',
        chapterNumber: 84
      },
      {
        id : "6d-15",
        name : 'المزمور السادس والثمانون',
        bookName: 'PsalmAr',
        chapterNumber: 86
      },
      {
        id : "6d-16",
        name : 'المزمور التسعون ',
        bookName: 'PsalmAr',
        chapterNumber: 90
      },
      {
        id : "6d-17",
        name : 'المزمور الثاني والتسعون',
        bookName: 'PsalmAr',
        chapterNumber: 92
      },
      {
        id : "6d-18",
        bookName:'MatthewAr',
        chapterNumber: 15,
        name: `متي ${Helpers.parseToArabic(15)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(16)}`
      },
      {
        id : "6d-20",
        name : 'القطع'
      },
      {
        id : "6d-21",
        name : 'قدوس قدوس قدوس'
      },
      {
        id : "6d-22",
        name : 'التحليل'
      },
      {
        id : "6d-23",
        name : 'طلبه تصلي اخر كل ساعه'
      },
      ]
  },
  {
    id:4,
    name:"ninthPray",
    links: [
      {
        id:"9d-1",
        name:"مقدمه كل ساعه"
      },
      {
        id:"9d-2",
        name:'الصلاه الربانيه'
      },
      {
        id: "9d-3",
        name: 'صلاه الشكر'
      },
      {
        id: '9d-4',
        name: 'المزمور الخمسين',
        bookName: 'PsalmAr',
        chapterNumber: 50
      },
      {
        id:"9d-5",
        name: 'بدء الصلاه'
      },
      {
        id : "9d-6",
        name : 'المزمور الخامس و التسعون',
        bookName: 'PsalmAr',
        chapterNumber: 95
      },{
        id : "9d-7",
        name : 'المزمور السادس و التسعون',
        bookName: 'PsalmAr',
        chapterNumber: 96
      },
      {
        id : "9d-8",
        name :  'المزمور السابع والتسعون',
        bookName: 'PsalmAr',
        chapterNumber: 97
      },
      {
        id : "9d-9",
        name :  'المزمور الثامن والتسعون',
        bookName: 'PsalmAr',
        chapterNumber: 98
      },
      {
        id : "9d-10",
        name :  'المزمور التاسع و التسعون',
        bookName: 'PsalmAr',
        chapterNumber: 99
      },
      {
        id : "9d-11",
        name :  'المزمور المائه ',
        bookName: 'PsalmAr',
        chapterNumber: 100
      },
      {
        id : "9d-12",
        name :  'المزمور المائه والتاسع',
        bookName: 'PsalmAr',
        chapterNumber: 109
      },
      {
        id : "9d-13",
        name :  'المزمور المائه و العاشر',
        bookName: 'PsalmAr',
        chapterNumber: 110
      },
      {
        id : "9d-14",
        name :  'المزمور المائه والحادي عشر ',
        bookName: 'PsalmAr',
        chapterNumber: 111
      },
      {
        id : "9d-15",
        name : 'المزمور المائه الثاني عشر',
        bookName: 'PsalmAr',
        chapterNumber: 112
      },
      {
        id : "9d-16",
        name : 'المزمور المائه والرابع عشر ',
        bookName: 'PsalmAr',
        chapterNumber: 114
      },
      {
        id : "9d-17",
        name : 'المزمور المائه والخامس عشر ',
        bookName: 'PsalmAr',
        chapterNumber: 92
      },
      {
        id : "9d-18",
        bookName:'LukeAr',
        chapterNumber: 9,
        name: `لوقا ${Helpers.parseToArabic(9)} :${Helpers.parseToArabic(10)} - ${Helpers.parseToArabic(17)}`
      },
      {
        id : "9d-19",
        name : 'القطع'
      },
      {
        id : "9d-20",
        name : 'قدوس قدوس قدوس'
      },
      {
        id : "9d-22",
        name : 'التحليل'
      },
      {
        id : "9d-23",
        name : 'طلبه تصلي اخر كل ساعه'
      },
      ]
  },
  {
    id:5,
    name:"eleventhPray",
    links: [
      {
        id:"11d-1",
        name:"مقدمه كل ساعه"
      },
      {
        id:"11-2",
        name:'الصلاه الربانيه'
      },
      {
        id: "11d-3",
        name: 'صلاه الشكر'
      },
      {
        id: '11d-4',
        name: 'المزمور الخمسين',
        bookName: 'PsalmAr',
        chapterNumber: 50
      },
      {
        id:"11d-5",
        name: 'بدء الصلاه'
      },
      {
        id : "11d-6",
        name : 'المزمور المائة والسادس عشر',
        bookName: 'PsalmAr',
        chapterNumber: 116
      },{
        id : "11d-7",
        name : 'المزمور المائة السابع عشر',
        bookName: 'PsalmAr',
        chapterNumber: 117
      },
      {
        id : "11d-8",
        name :  'المزمور السابع والتسعون',
        bookName: 'PsalmAr',
        chapterNumber: 119
      },
      {
        id : "9d-9",
        name :  'المزمور والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 120
      },
      {
        id : "9d-10",
        name :  'المزمور المائة والحادي والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 121
      },
      {
        id : "11d-11",
        name :  'المزمور المائة والثاني والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 122
      },
      {
        id : "11d-12",
        name :  'المزمور المائةوالثالت والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 123
      },
      {
        id : "11d-13",
        name :  'المزمور المائةوالرابع والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 124
      },
      {
        id : "11d-14",
        name :  'المزمور والخامس والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 125
      },
      {
        id : "11d-15",
        name :  'المزمور والسادس والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 126
      },
      {
        id : "11d-16",
        name :  'المزمور والسابع والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 127
      },
      {
        id : "11d-17",
        name : 'المزمور والثامن والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 128
      },
      {
        id : "11d-18",
        bookName:'LukeAr',
        chapterNumber: 9,
        name: `لوقا ${Helpers.parseToArabic(4)} :${Helpers.parseToArabic(38)} - ${Helpers.parseToArabic(41)}`
      },
      {
        id : "11d-19",
        name : 'القطع'
      },
      {
        id : "11d-20",
        name : 'قدوس قدوس قدوس'
      },
      {
        id : "11d-22",
        name : 'التحليل'
      },
      {
        id : "11d-23",
        name : 'طلبه تصلي اخر كل ساعه'
      },
      ]
  },
  {
    id:6,
    name: "twelvthPray", // صلاه النوم
    links: [
      {
        id:"slp-1",
        name:"مقدمه كل ساعه"
      },
      {
        id:"slp-2",
        name:'الصلاه الربانيه'
      },
      {
        id: "slp-3",
        name: 'صلاه الشكر'
      },
      {
        id: 'slp-4',
        name: 'المزمور الخمسين',
        bookName: 'PsalmAr',
        chapterNumber: 50
      },
      {
        id:"slp-5",
        name: 'بدء الصلاه'
      },
      {
        id : "slp-6",
        name : 'المزمور المائة والتاسع والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 129
      },{
        id : "slp-7",
        name : 'المزمور المائة والثلاثون',
        bookName: 'PsalmAr',
        chapterNumber: 130
      },
      {
        id : "slp-8",
        name :  'المزمور المائة والحادي والثلاثون',
        bookName: 'PsalmAr',
        chapterNumber: 131
      },
      {
        id : "slp-9",
        name :  'المزمور المائة والثاني والثلاثون',
        bookName: 'PsalmAr',
        chapterNumber: 132
      },
      {
        id : "slp-10",
        name :  'المزمور المائة والثالث والثلاثون',
        bookName: 'PsalmAr',
        chapterNumber: 133
      },
      {
        id : "slp-11",
        name :  'المزمور المائة والسادس والثلاثون',
        bookName: 'PsalmAr',
        chapterNumber: 136
      },
      {
        id : "slp-12",
        name :  'المزمور المائة والسابع والثلاثون',
        bookName: 'PsalmAr',
        chapterNumber: 137
      },
      {
        id : "slp-13",
        name :  'المزمور المائة والأربعون',
        bookName: 'PsalmAr',
        chapterNumber: 140
      },
      {
        id : "slp-14",
        name :  'المزمور المائة والحادي والأربعون',
        bookName: 'PsalmAr',
        chapterNumber: 141
      },
      {
        id : "slp-15",
        name :  'المزمور المائة والخامس والأربعون',
        bookName: 'PsalmAr',
        chapterNumber: 145
      },
      {
        id : "slp-16",
        name :  'المزمور المائة والسادس والأربعون',
        bookName: 'PsalmAr',
        chapterNumber: 146
      },
      {
        id : "slp-17",
        name : ' المزمور المائة والسابع والأربعون',
        bookName: 'PsalmAr',
        chapterNumber: 147
      },
      {
        id : "slp-18",
        bookName:'LukeAr',
        chapterNumber: 2,
        name: `لوقا ${Helpers.parseToArabic(2)} :${Helpers.parseToArabic(25)} - ${Helpers.parseToArabic(32)}`
      },
      {
        id : "slp-19",
        name : 'القطع'
      },
      {
        id : "slp-20",
        name : 'قدوس قدوس قدوس'
      },
      {
        id : "slp-21",
        name : 'التحليل'
      },
      {
        id : "slp-22",
        name : 'طلبه تصلي اخر كل ساعه'
      },
      ]
  },
  {
    id:7,
    name:"midnightPray", // صلاه نصف الليل
   links: [
      {
        id:"mid-0",
        name:"لخدمة الأولى"
      },
      {
        id:"mid-1",
        name:"مقدمه كل ساعه"
      },
      {
        id:"mid-2",
        name:'الصلاه الربانيه'
      },
      {
        id: "mid-3",
        name: 'صلاه الشكر'
      },
      {
        id: 'mid-4',
        name: 'المزمور الخمسين',
        bookName: 'PsalmAr',
        chapterNumber: 50
      },
      {
        id: 'mid-5',
        name: 'قوموا يا بني النور',
      },
      {
        id: 'mid-6',
        name: 'بدء الصلاه'
      },
      {
        id : "mid-7",
        name : 'المزمور الثالث',
        bookName: 'PsalmAr',
        chapterNumber: 3
      },{
        id : "mid-8",
        name : 'المزمور السادس',
        bookName: 'PsalmAr',
        chapterNumber: 6
      },
      {
        id : "mid-9",
        name :  'المزمور الثاني عشر',
        bookName: 'PsalmAr',
        chapterNumber: 12
      },
      {
        id : "mid-10",
        name :  'المزمور التاسع والستون',
        bookName: 'PsalmAr',
        chapterNumber: 69
      },
      {
        id : "mid-11",
        name :  'المزمور الخامس والثمانون',
        bookName: 'PsalmAr',
        chapterNumber: 85
      },
      {
        id : "mid-12",
        name :  'المزمور المائة والسادس والثلاثون',
        bookName: 'PsalmAr',
        chapterNumber: 90
      },
      {
        id : "mid-13",
        name :  'المزمور التسعون',
        bookName: 'PsalmAr',
        chapterNumber: 90
      },
      {
        id : "mid-14",
        name :  'المزمور المائة والسادس عشر',
        bookName: 'PsalmAr',
        chapterNumber: 116
      },
      {
        id : "mid-15",
        name :  'المزمور المائة والسابع عشر',
        bookName: 'PsalmAr',
        chapterNumber: 117
      },
      {
        id : "mid-16",
        name :  'المزمور المائة والثامن عشر',
        bookName: 'PsalmAr',
        chapterNumber: 118
      },
      {
        id : "mid-17",
        bookName: 'MatthewAr',
        chapterNumber: 25,
        name: `MatthewAr ${Helpers.parseToArabic(25)} :${Helpers.parseToArabic(1)} - ${Helpers.parseToArabic(13)}`

      },
      {
        id : "mid-18",
        name : 'القطع'
      },
      {
        id : "mid-19",
        name : 'قدوس قدوس قدوس'
      },
      {
        id : "mid-20",
        name : 'الخدمه الثانيه'
      },
      {
        id : "mid-21",
        name : 'بدء الصلاه'
      },
      {
        id : "mid-22",
        name :  'المزمور المائةوالتاسع عشر',
        bookName: 'PsalmAr',
        chapterNumber: 119
      },
      {
        id : "mid-23",
        name :  'المزمور المائة والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 120
      },
      {
        id : "mid-24",
        name :  'المزمور المائة والحادي والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 121
      },
      {
        id : "mid-25",
        name :  'المزمور المائة والثاني والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 122
      },
      {
        id : "mid-26",
        name :  'المزمور المائة والثالث والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 123
      },
      {
        id : "mid-27",
        name :  'المزمور المائة والرابع والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 124
      },
      {
        id : "mid-28",
        name :  'المزمور المائة والخامس والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 125
      },
      {
        id : "mid-29",
        name :  'المزمور المائة والسادس والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 126
      },
      {
        id : "mid-30",
        name :  'المزمور المائة والسابع والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 127
      },
      {
        id : "mid-30",
        name :  'المزمور المائة والثامن والعشرون',
        bookName: 'PsalmAr',
        chapterNumber: 128
      },
      ]
  },
  {
    id:8,
    name:"darkPray", // صلاه الستار
    links: [
      {
        id : "mid-7",
        name : 'المزمور الثالث',
        bookName: 'PsalmAr',
        chapterNumber: 3
      },{
        id : "mid-8",
        name : 'المزمور السادس',
        bookName: 'PsalmAr',
        chapterNumber: 6
      },
      {
        id : "mid-9",
        name :  'المزمور الثاني عشر',
        bookName: 'PsalmAr',
        chapterNumber: 12
      },
    ]
  },
  {
    id:9,
    name:"otherPray",
    links:   [
      {
        id : "ninth-1",
        name : 'صلاه التوبه',
      },{
        id : "ninth-2",
        name : 'صلاة قبل الاعتراف',
      },
      {
        id : "ninth-3",
        name : 'صلاة بعد الاعتراف',
      },
    ]
  }
]
export const arabicAgbyaNames = [
  'lordPrayerAr',
  'thanksPrayerAr',
  'baker',
  'thirdPray',
  'sixthPray',
  'ninthPray',
  'eleventhPray',
  'twelvthPray',
  'midnightPray',
  'darkPray',
  'otherPray'
]
export  const arabicAgbyaUri = {
   lordPrayerAr: 'https://www.dropbox.com/s/l2tt7685mpccioa/lordPrayerAr.json?dl=1',
   thanksPrayerAr : 'https://www.dropbox.com/s/oikffq3p99vwu0l/thanksPrayerAr.json?dl=1',
   baker: 'https://www.dropbox.com/s/gflmo1r1ra1v4hq/baker.json?dl=1',
   thirdPray: 'https://www.dropbox.com/s/u1b6scotdy2nwhe/thirdPray.json?dl=1',
   sixthPray:'https://www.dropbox.com/s/2c2jd5eshqibyls/sixthPray.json?dl=1',
   ninthPray: 'https://www.dropbox.com/s/7cp4q4emgvxpwuh/ninthPray.json?dl=1',
   eleventhPray : "https://www.dropbox.com/s/cq58ph64xfsx0sh/eleventhPray.json?dl=1",
   twelvthPray: "https://www.dropbox.com/s/cv04d6i1kftz0lh/twelvthPray.json?dl=1",
   midnightPray: "https://www.dropbox.com/s/h5uu7pm02owy5x0/midnightPray.json?dl=1",
   darkPray: "https://www.dropbox.com/s/zewtpngpc3rxnbn/darkPray.json?dl=1",
   otherPray : "https://www.dropbox.com/s/v0mpjj1lcdy1hjk/otherPrays.json?dl=1"
}
export const  praysNamesDictionary = {
  lordPrayerAr: "الصلاه الربانيه",
  thanksPrayerAr: 'صلاه الشكر',
  baker: 'صلاه باكر',
  thirdPray: 'صلاه الساعه الثالثه',
  sixthPray: 'صلاه الساعه السادسه',
  ninthPray: 'صلاه الساعه التاسعه',
  eleventhPray: 'صلاه الغروب',
  twelvthPray: 'صلاه النوم',
  midnightPray:"صلاه نصف الليل",
  darkPray: 'صلاه الستار',
  otherPrays: "صلوات اخري"
}