import React, { PureComponent } from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Text,
  Content,
  Card,
  CardItem,
  Body,
  ListItem,
  Left,
  Right,
  Button,
  Icon,
  Input,
  Item
} from "native-base";
import _ from "lodash";

//import { NoteStyleEnum } from '../../../../database/entities';

export class NoteItem extends PureComponent {
  render() {
    const { isArabic } = this.props.item;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "white",
          marginTop: 10,
          marginLeft: 10,
          padding: 10,
          justifyContent: "space-around",
          borderColor: "black",
          borderRadius: 30,
          marginBottom: 20
        }}
      >
        <View style={{ flex: 0.5, flexDirection: "row" }}>
          <Text
            onPress={() => {
              this.props.selectNote(this.props.item);
              this.props.toggleViewNoteModal();
            }}
            style={{}}
          >
            <Text style={{}}> {this.props.item.title} </Text>
          </Text>
        </View>
        <View style={{ flexDirection: "row-reverse" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Icon
              name="eye"
              style={{ color: "blue", marginRight: 10 }}
              large
              onPress={() => {
                this.props.selectNote(this.props.item);
                this.props.toggleViewNoteModal();
              }}
            />
            {/* to do updated with another condition this.props.note.noteStyle !== NoteStyleEnum.handWrittenNote && note.imageLines */}
            <Icon
              name="trash"
              color="red"
              style={{ marginRight: 10, color: "red" }}
              red
              large
              onPress={() => {
                this.props.delete(this.props.item);
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
