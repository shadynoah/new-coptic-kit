import React, { Component } from "react";
import { FlatList, StyleSheet, ImageBackground, Alert } from "react-native";
import {
  Container,
  Button,
  Icon,
  Text,
  Footer,
  FooterTab,
  Input,
  Thumbnail,
  Item,
  Content,
  connectStyle,
  Header,
  Title,
  Left,
  Body,
  Right,
  Spinner,
  View,
  Picker,
  Toast
} from "native-base";

import Modal from "react-native-modal";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { bindActionCreators } from "redux";
import { NavigationStackScreenOptions } from "react-navigation";
import _ from "lodash";
import { SQLite } from "expo-sqlite";
import Constants from "expo-constants";

import { NoteItem } from "../components/note-list-item";
const db = SQLite.openDatabase("db.db");
import { ViewNoteModal } from "../components/view-note-modal";
import { State } from "../../state";

import {
  toggleViewNoteModal,
  selectNote
} from "../../state/content/action-creators";
// import Toast from 'react-native-whc-toast'
const SUPPORTED_ORIENTATIONS = [
  "portrait",
  "portrait-upside-down",
  "landscape",
  "landscape-left",
  "landscape-right"
];

export class NoteListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfColumns: 1,
      selectedNoteStyle: "1",
      notes: [],
      refresh: false,
      isArabic: false
    };
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: params.title
    };
  };

  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        "select * from items where isArabic = (?) ",
        [this.props.isArabic],
        (_, { rows }) => {
          //   console.log(JSON.stringify(rows))
          //  console.log("======object is ====", rows._array)
          this.setState(
            {
              notes: rows._array
            }
            // () => console.log("====from state of note list===", this.state.notes)
          );
        }
      );
    }, null);
  }
  delete(item) {
    db.transaction(
      tx => {
        tx.executeSql("delete from items where id = ?", [item.id]);
      },
      null,
      () => {
        this.setState({
          refresh: false
        });
        db.transaction(tx => {
          tx.executeSql("select * from items", [], (_, { rows }) => {
            // console.log(JSON.stringify(rows))
            // console.log("======object is ====", rows._array)
            this.setState(
              {
                notes: rows._array
              }
              //  () => console.log("====from state of note list===", this.state.notes)
            );
          });
        }, null);
      }
    );
  }

  static mapStateToProps(state: State) {
    return {
      isViewModal: state.content.isViewModal,
      selectedNote: state.content.selectedNote,
      isArabic: state.content.isArabic
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      {
        toggleViewNoteModal,
        selectNote
      },
      dispatch
    );
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isArabic !== prevState.isArabic) {
      nextProps.navigation.setParams({
        title: nextProps.isArabic ? "ملاحظات" : "Notes"
      });
      return {
        isArabic: nextProps.isArabic
      };
    } else return null;
  }

  // componentWillMount() {
  //   this.checkDeviceType();
  // }

  checkDeviceType = () => {
    // TO DO
    const deviceType =
      (Constants.platform.android &&
        Constants.platform.android.userInterfaceIdiom) ||
      (Constants.platform.ios && Constants.platform.ios.userInterfaceIdiom);
    this.setState({ noOfColumns: deviceType !== "tablet" ? 1 : 2 });
  };
  render() {
    let viewModal = (
      <ViewNoteModal
        toggleViewNoteModal={this.props.toggleViewNoteModal}
        isViewModal={this.props.isViewModal}
        selectedNote={this.props.selectedNote}
        isArabic={this.props.isArabic}
      />
    );

    return (
      <Container>
        <Container screen>
          {viewModal}
          <ImageBackground
            source={require("../../../assets/images/background.jpg")}
            style={{ flex: 1 }}
          >
            <FlatList
              numColumns={1}
              style={{
                padding: 10
              }}
              initialNumToRender={15}
              //  data={notes.filter(n => n.date >= new Date())}
              data={this.state.notes}
              keyExtractor={note => note.id.toString()}
              renderItem={({ item }) => (
                <NoteItem
                  item={item}
                  toggleViewNoteModal={this.props.toggleViewNoteModal}
                  selectViewNote={this.props.selectViewNote}
                  selectNote={this.props.selectNote}
                  delete={this.delete.bind(this)}
                />

                //  console.log("====render item====", item)
              )}
            />
          </ImageBackground>
        </Container>
      </Container>
    );
  }
}

export const NoteListScreen = connect(
  NoteListContainer.mapStateToProps,
  NoteListContainer.mapDispatchToProps
)(NoteListContainer);
