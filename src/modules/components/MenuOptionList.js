import Constants from "expo-constants";
import { Icon, Text } from "native-base";
import React, { PureComponent } from "react";
import { View } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger
} from "react-native-popup-menu";
import NavigatorService from "../../services/navigator.js";

export class MenuOptionList extends PureComponent {
  render() {
    let {
      isbookmark,
      selectedBook,
      numberOfSelectedChapter,
      isArabic,
      deleteBookMark,
      insertBookMark,
      enableIsBookMark,
      disableIsBookMark,
      enableIsVisible,
      onHighlight,
      navigation
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
              navigation.navigate("HomeScreen");
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.7 }}>
                <Text style={{ marginRight: 10 }}>
                  {isArabic ? "الرئيسية" : "Home"}
                </Text>
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
                insertBookMark(selectedBook, numberOfSelectedChapter, isArabic);
                enableIsBookMark();
              }
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.7 }}>
                <Text style={{ marginRight: 10 }}>
                  {isArabic ? "مُؤّشِر" : "bookmark"}
                </Text>
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
                />
              </View>
            </View>
          </MenuOption>
          <MenuOption
            onSelect={() => {
              enableIsVisible();
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.7 }}>
                <Text style={{ marginRight: 10 }}>
                  {isArabic ? "مُلاحَظة" : "Note"}
                </Text>
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
              onHighlight();
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.7 }}>
                <Text style={{ marginRight: 10 }}>
                  {isArabic ? "تعليم ايات" : "higlight"}
                </Text>
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
          <MenuOption
            onSelect={() => {
              navigation.navigate("AboutScreen");
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.7 }}>
                <Text style={{ marginRight: 10 }}>
                  {isArabic ? "من نحن" : "about"}
                </Text>
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
        </MenuOptions>
      </Menu>
    );
  }
}
