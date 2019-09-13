// @Flow
import { AnyAction } from "redux";
import { ContentState, ContentInitialState } from "./state";
// import * as actions from "./action-creator";
import * as types from "./actions";
import { State } from "react-native-gesture-handler";

// type Action = actions.L;

export function contentReducer(
  state: ContentState = ContentInitialState,
  action: any
): ContentState {
  switch (action.type) {
    case types.CONTENT_LOADING: {
      return {
        ...state,
        loading: !state.loading
      };
    }
    case types.SELECT_BOOK: {
      return {
        ...state,
        selectedBook: action.payload
      };
    }
    case types.CLEAR_SELECTED_CHAPTER: {
      return {
        ...state,
        selectedBook: 0,
        numberOfChaptersOfSelectedBook: 0
      };
    }
    case types.SELECT_CHAPTER: {
      return {
        ...state,
        numberOfSelectedChapter: action.payload
      };
    }
    case types.LOAD_CHAPTER_CONTENT: {
      return {
        ...state,
        contentOfSelectedChapter: action.payload.contentOfSelectedChapter,
        numberOfSelectedChapter: action.payload.chapterNumber,
        bookName: action.payload.bookName
      };
    }
    case types.TOGGLE_LANGUAGE_CONTENT: {
      return {
        ...state,
        isArabic: !state.isArabic
      };
    }
    case types.LOAD_BOOKMARKED_VERSES: {
      return {
        ...state,
        bookMarkedVerses: action.payload
      };
    }
    case types.LOAD_NOTES: {
      return {
        ...state,
        arrayOfNotes: action.payload
      };
    }
    case types.TOGGLE_VIEW_NOTE: {
      return {
        ...state,
        isViewModal: !state.isViewModal
      };
    }
    case types.SELECT_NOTE: {
      return {
        ...state,
        selectedNote: action.payload
      };
    }
    case types.INSERT_BOOKMARK_SUCCESS: {
      return {
        ...state,
        isInsertedBookmark: true
      };
    }
    case types.INSERT_BOOKMARK_FAILED: {
      return {
        ...state,
        isInsertedBookmark: false
      };
    }
    case types.INSERT_BOOKMARK_SUCCESS:
    case types.DELETE_BOOKMARK_FAILED:
    default:
      return state;
  }
}
