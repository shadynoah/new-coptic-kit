export interface ContentState {
  loading: boolean;
  selectedBook: IBOOK;
  numberOfChaptersOfSelectedBook: number;
  numberOfSelectedChapter: number;
  selectedChapter: number;
  contentOfSelectedChapter: String;
  isEnglish: Boolean;
  bookMarkedVerses: [];
  arrayOfNotes: [];
  fontSizeOfText: Number;
  isViewModal: boolean;
  selectedNote: Object;
  isInsertedBookmark: boolean;
}

export const ContentInitialState: ContentState = {
  loading: false,
  selectedBook: null,
  numberOfChaptersOfSelectedBOok: 0,
  numberOfSelectedChapter: 0,
  selectedChapter: 0,
  contentOfSelectedChapter: null,
  isArabic: false,
  bookMarkedVerses: [],
  arrayOfNotes: [],
  fontSizeOfText: 20,
  isViewModal: false,
  selectedNote: {},
  isInsertedBookmark: false
};

export interface IBOOK {
  key: number;
  bookName: string;
  numberOfChapters: number;
}
