// import React, { Component } from "react";
// import { FlatList, StyleSheet, ImageBackground, Alert } from "react-native";
// import {
//   Container,
//   Button,
//   Icon,
//   Text,
//   Footer,
//   FooterTab,
//   Input,
//   Thumbnail,
//   Item,
//   Content,
//   connectStyle,
//   Header,
//   Title,
//   Left,
//   Body,
//   Right,
//   Spinner,
//   View,
//   Picker,
//   Toast
// } from "native-base";

// import Modal from "react-native-modal";

// import { connect } from "react-redux";
// import { Dispatch } from "redux";
// import { bindActionCreators } from "redux";
// import { NavigationStackScreenOptions } from "react-navigation";
// import _ from "lodash";
// import {  ScreenOrientation } from "expo";
// import { SQLite } from 'expo-sqlite';
// import Constants from 'expo-constants';
// import { BookMarkItem } from "../components/bookmark-item";
// const db = SQLite.openDatabase("db.db");
// import {
//   loadChapterContent,
//   selectBook
// } from "../../state/content/action-creators";
// import { State, IBOOK } from "../../state";
// import NavigatorService from "../../services/navigator.js";

// // import Toast from 'react-native-whc-toast'
// const SUPPORTED_ORIENTATIONS = [
//   "portrait",
//   "portrait-upside-down",
//   "landscape",
//   "landscape-left",
//   "landscape-right"
// ];

// class BookMarkContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       noOfColumns: 1,
//       bookmarks: [],
//       refresh: false
//     };
//   }
//   static navigationOptions = ({ navigation }) => {
//     const params = navigation.state.params || {};

//     return {
//       title: "BookMarks"
//     };
//   };

//   componentDidMount() {
//     db.transaction(tx => {
//       tx.executeSql("select * from bookmark", [], (_, { rows }) => {
//         // console.log(JSON.stringify(rows))
//         // console.log("======object is ====", rows._array)
//         this.setState(
//           {
//             bookmarks: rows._array
//           }
//           // () => console.log("====from state of note list===", this.state.notes)
//         );
//       });
//     }, null);
//   }
//   static mapStateToProps(state: State) {
//     return {
//       selectedBook: state.content.selectedBook,
//       numberOfSelectedChapter: state.content.numberOfSelectedChapter
//     };
//   }

//   static mapDispatchToProps(dispatch: Dispatch) {
//     return bindActionCreators(
//       {
//         loadChapterContent,
//         selectBook
//       },
//       dispatch
//     );
//   }

//   componentWillMount() {
//     ScreenOrientation.allowAsync(
//       ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN
//     );

//     this.checkDeviceType();
//   }

//   checkDeviceType = () => {
//     // TO DO

//     const deviceType =
//       (Constants.platform.ios && Constants.platform.ios.userInterfaceIdiom) ||
//       (Constants.platform.android &&
//         Constants.platform.android.userInterfaceIdiom);
//     this.setState({ noOfColumns: deviceType !== "tablet" ? 1 : 2 });
//   };
//   delete(item) {
//     //console.log("------item from bookmark----" , item)
//     db.transaction(
//       tx => {
//         tx.executeSql("delete from bookmark where id = (?)", [item.id]);
//       },
//       null,
//       () => {
//         this.setState({
//           refresh: false
//         });
//         db.transaction(tx => {
//           tx.executeSql("select * from bookmark", [], (_, { rows }) => {
//             // console.log(JSON.stringify(rows))
//             // console.log("======object is ====", rows._array)
//             this.setState(
//               {
//                 bookmarks: rows._array
//               },
//               () =>
//                 console.log(
//                   "====from state of note list===",
//                   this.state.bookmarks
//                 )
//             );
//           });
//         }, null);
//       }
//     );
//   }

//   render() {
//     let { loadChapterContent } = this.props;

//     return (
//       <ImageBackground
//         source={require("../../../assets/images/background.jpg")}
//         style={{ flex: 1 }}
//       >
//         <FlatList
//           numColumns={1}
//           style={{
//             padding: 10,
//             flex: 1
//           }}
//           initialNumToRender={15}
//           //  data={notes.filter(n => n.date >= new Date())}
//           data={this.state.bookmarks}
//           keyExtractor={note => note.id.toString()}
//           renderItem={({ item }) => (
//             <BookMarkItem
//               item={item}
//               loadChapterContent={loadChapterContent}
//               NavigatorService={NavigatorService}
//               selectBook={this.props.selectBook}
//               delete={this.delete.bind(this)}
//             />

//             //  console.log("====render item====", item)
//           )}
//         />
//       </ImageBackground>
//     );
//   }
// }

// export const BookMarkScreen = connect(
//   BookMarkContainer.mapStateToProps,
//   BookMarkContainer.mapDispatchToProps
// )(BookMarkContainer);
