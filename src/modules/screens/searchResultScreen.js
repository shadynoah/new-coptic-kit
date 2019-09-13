// import React, { Component } from "react";
// import {
//     Image,
//     Platform,
//     ScrollView,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     View,
//     Button,
//     FlatList
// } from 'react-native';
// import { WebBrowser } from 'expo';

// import { MonoText } from '../../../components/StyledText';
// import NavigatorService from "../../services/navigator.js";
// import { State } from "../../state";
// import { connect } from "react-redux";
// import { Dispatch, bindActionCreators } from "redux";
// import { toggleLoading, selectBook, loadChapterContent } from '../../state/content/action-creators'
// import { IBOOK } from '../../state/content/state'
// const customData = require('../../data/data-structure.json');
// import Highlighter from 'react-native-highlight-words';

// var x = require("../../data/content.json")
// var myArray = { matta: 5, loca: 20 };
// class SearchResultScreenContainer extends Component {
//     static navigationOptions = {
//         title: 'Book',
//     };
//     static mapStatetToProps(state: State) {
//         return {
//             loading: state.content.loading,
//             selectedBook: state.content.selectedBook
//         };
//     }
//     static mapDispatchToProps(dispatch: Dispatch) {
//         return bindActionCreators({ toggleLoading, selectBook, loadChapterContent }, dispatch);
//     }
//     render() {
//         const styles = StyleSheet.create({
//             container: {
//                 flex: 1,
//                 paddingTop: 22
//             },
//             item: {
//                 padding: 10,
//                 fontSize: 18,
//                 height: 44,
//             },
//         })
//         return (
//             <Highlighter
//                 highlightStyle={{ backgroundColor: 'yellow' }}
//                 searchWords={['and', 'or', 'the']}
//                 textToHighlight='The dog is chasing the cat. Or perhaps they'
//             />
//         );
//     }
// }

// export const SearchResultScreen = connect(
//     SearchResultScreenContainer.mapStatetToProps,
//     SearchResultScreenContainer.mapDispatchToProps
// )(SearchResultScreenContainer);
