import React, { PureComponent } from "react";
import { View } from "react-native";
import _ from "lodash";
import NavigatorService from "../../services/navigator.js";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
import Constants from "expo-constants";
import { Icon, Button, Text, TabHeading } from "native-base";

export class MenuOptionList extends PureComponent {
  render() {
    let {
      isbookmark,
      selectedBook,
      numberOfSelectedChapter,
      isArabic,
      deleteBookMark,
      fontSizeOfText,
      selectedVerses,
      highlightedVerses,
      _retrieveData,
      convertStringToArray,
      insertBookMark,
      increaseFontSize,
      decreaseFontSize,
      enableIsBookMark,
      disableIsBookMark,
      enableIsVisible,
      highlight,
      _storeData,
      onHighlight
    } = this.props;
    const deviceType =
      (Constants.platform.ios && Constants.platform.ios.userInterfaceIdiom) ||
      (Constants.platform.android &&
        Constants.platform.android.userInterfaceIdiom);

    return (
      <Menu>
        <MenuTrigger customStyles={{ backgroundColor: "green" }}>
          <Icon
            style={{
              color: "#007AFF",
              fontSize: deviceType == "tablet" ? 30 : 25,
              marginRight: 20
            }}
            //black   style={{ fontSize: deviceType == 'tablet' ? 30 : 20, marginRight: 20 }}
            name="more"
            black
            transparent
          />
        </MenuTrigger>

        <MenuOptions
          optionsContainerStyle={{
            width: deviceType == "tablet" ? "30%" : "40%"
          }}
        >
          <MenuOption
            onSelect={() => {
              NavigatorService.navigate("BookScreen");
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.7 }}>
                <Text style={{ marginRight: 10 }}>Home</Text>
              </View>
              <View style={{ flex: 0.3 }}>
                <Icon
                  style={{
                    color: "#007AFF",
                    fontSize: deviceType == "tablet" ? 30 : 20,
                    marginRight: 5
                  }}
                  //black   style={{ fontSize: deviceType == 'tablet' ? 30 : 20, marginRight: 20 }}
                  name="home"
                  black
                  transparent
                  onPress={() => {
                    NavigatorService.navigate("SettingScreen");
                  }}
                />
              </View>
            </View>
          </MenuOption>
          <MenuOption
            onSelect={() => {
              if (isbookmark) {
                deleteBookMark(selectedBook.bookName, numberOfSelectedChapter);
                disableIsBookMark();
              } else {
                insertBookMark(
                  selectedBook.bookName,
                  numberOfSelectedChapter,
                  isArabic
                );
                enableIsBookMark();
              }
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.7 }}>
                <Text style={{ marginRight: 10 }}>bookmark</Text>
              </View>

              <View style={{ flex: 0.3 }}>
                <Icon
                  style={{
                    color: "#007AFF",
                    fontSize: deviceType == "tablet" ? 32 : 22,
                    marginRight: 5
                  }}
                  //black   style={{ fontSize: deviceType == 'tablet' ? 30 : 20, marginRight: 20 }}
                  name="bookmark"
                  transparent
                  onPress={() => {
                    NavigatorService.navigate("BookMarkScreen");
                  }}
                />
              </View>
            </View>
          </MenuOption>
          <MenuOption
            onSelect={() => {
              // console.log("======from sticky note====", this.state.selectedVerses)

              enableIsVisible();
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.7 }}>
                <Text style={{ marginRight: 10 }}>Note</Text>
              </View>
              <View style={{ flex: 0.3 }}>
                <Icon
                  style={{
                    color: "#007AFF",
                    fontSize: deviceType == "tablet" ? 30 : 20,
                    marginRight: 5
                  }}
                  type="FontAwesome"
                  name="sticky-note"
                  transparent
                />
              </View>
            </View>
          </MenuOption>
          <MenuOption
            onSelect={() => {
              NavigatorService.navigate("SettingScreen");
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.7 }}>
                <Text style={{ marginRight: 10 }}>settings</Text>
              </View>
              <View style={{ flex: 0.3 }}>
                <Icon
                  style={{
                    color: "#007AFF",
                    fontSize: deviceType == "tablet" ? 30 : 20,
                    marginRight: 5
                  }}
                  name="settings"
                  black
                  transparent
                  onPress={() => {
                    NavigatorService.navigate("SettingScreen");
                  }}
                />
              </View>
            </View>
          </MenuOption>
          <MenuOption
            onSelect={() => {
              increaseFontSize();
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.7 }}>
                <Text style={{ marginRight: 10 }}>fontSize</Text>
              </View>
              <View style={{ flexDirection: "row", flex: 0.3 }}>
                <Icon
                  style={{
                    color: "#007AFF",
                    fontSize: deviceType == "tablet" ? 30 : 20,
                    marginRight: 5
                  }}
                  type="FontAwesome"
                  name="plus-circle"
                  black
                  transparent
                />
              </View>
            </View>
          </MenuOption>
          <MenuOption
            onSelect={() => {
              decreaseFontSize();
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.7 }}>
                <Text style={{ marginRight: 10 }}>fontSize</Text>
              </View>
              <View style={{ flex: 0.3 }}>
                <Icon
                  style={{
                    color: "#007AFF",
                    fontSize: deviceType == "tablet" ? 30 : 20,
                    marginRight: 5
                  }}
                  type="FontAwesome"
                  name="minus-circle"
                  black
                  transparent
                />
              </View>
            </View>
          </MenuOption>
          <MenuOption
            onSelect={() => {
              NavigatorService.navigate("AboutScreen");
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.7 }}>
                <Text style={{ marginRight: 10 }}>About</Text>
              </View>
              <View style={{ flex: 0.3 }}>
                <Icon
                  style={{
                    color: "#007AFF",
                    fontSize: deviceType == "tablet" ? 30 : 20,
                    marginRight: 5
                  }}
                  //black   style={{ fontSize: deviceType == 'tablet' ? 30 : 20, marginRight: 20 }}
                  name="info-circle"
                  type="FontAwesome"
                  black
                  transparent
                />
              </View>
            </View>
          </MenuOption>
          <MenuOption
            onSelect={() => {
              // console.log("======from sticky note====", this.state.selectedVerses)
              onHighlight();
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.7 }}>
                <Text style={{ marginRight: 10 }}>highlight</Text>
              </View>
              <View style={{ flex: 0.3 }}>
                <Icon
                  transparent
                  style={{
                    color: "#007AFF",
                    fontSize: deviceType == "tablet" ? 30 : 20,
                    marginRight: 5
                  }}
                  type="FontAwesome"
                  name="paint-brush"
                />
              </View>
            </View>
          </MenuOption>
        </MenuOptions>
      </Menu>
    );
  }
}
