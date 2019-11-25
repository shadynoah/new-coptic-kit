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

export class OutOfEditorMenuOptionList extends PureComponent {
  render() {
    let { isArabic } = this.props;
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
              NavigatorService.navigate("HomeScreen");
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
              NavigatorService.navigate("BookMarkScreen");
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.7 }}>
                <Text style={{ marginRight: 10 }}>
                  {isArabic ? "إشارات مرجعية" : "BookMarks"}
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
              NavigatorService.navigate("NoteListScreen");
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.7 }}>
                <Text style={{ marginRight: 10 }}>
                  {isArabic ? "ملاحظات" : "Notes"}
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
                  name="sticky-note"
                  type="FontAwesome"
                  black
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
                <Text style={{ marginRight: 10 }}>
                  {isArabic ? "الإعدادات" : "settings"}
                </Text>
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
              NavigatorService.navigate("AboutScreen");
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
