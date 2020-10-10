import { Button } from "native-base";
import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { State, loadAbyaPart } from "../../state";
import {
  setPrays,
  appendPray,
  loadPray
} from "./../../state/agbya/action-creators";
import { Drawer } from "native-base";
import { agbyaKeys, praysNamesDictionary } from "./../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import i18n from "i18n-js";
import _ from "lodash";
import NavigatorService from "../../services/navigator.js";

class AgbyaVersesScreenContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isArabic: false,
      isPraySelected: false
    };
    // this.openDrawer = this.openDrawer.bind(this);
  }
  static mapStatetToProps(state: State) {
    return {
      links: state.agbya.links,
      contentOfSelectedPray: state.agbya.contentOfSelectedPray,
      fontSizeOfText: state.content.fontSizeOfText,
      titleOfPray: state.agbya
    };
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      {
        setPrays,
        appendPray,
        loadPray,
        loadAbyaPart
      },
      dispatch
    );
  }
  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      openDrawer: this.openDrawer,
      openDrawer2: this.openDrawer2
    });
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: params.title,
      title: params.title,
      headerRight: (
        <View style={{ flexDirection: "row" }}>
          {/* <Button
            style={{ marginRight: 20 }}
            title={params.title == "Setting" ? "Home" : "الرئيسية"}
            onPress={() => params.openDrawer()}
            transparent
          >
            <Text>one</Text>
          </Button> */}
          <Button
            style={{ marginRight: 20}}
            title={params.title == "Setting" ? "Home" : "الرئيسية"}
            onPress={() => params.openDrawer2()}
            transparent
          >
            <Text>الاجزاء</Text>
          </Button>
        </View>
      ),
      headerLeft: (
        <Button
          title={params.title == "Setting" ? "Home" : "الرئيسية"}
          onPress={() => params.openDrawer()}
          transparent
          style={{ marginLeft: 20 }}
        >
          <Text>الصلوات</Text>
        </Button>
      )
    };
  };
  static mapStatetToProps(state: State) {
    return {
      isArabic: state.content.isArabic,
      contentOfSelectedPray: state.agbya.contentOfSelectedPray,
      links: state.agbya.links,
      titleOfPray: state.agbya.titleOfPray
    };
  }
  closeDrawer = () => {
    this.drawer._root.close();
  };
  closeDrawer2 = () => {
    this.drawer2._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  openDrawer2 = () => {
    this.drawer2._root.open();
  };
  renderItem(item) {
    const { setPrays } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          setPrays(item.links);
          this.closeDrawer();
          this.openDrawer2();
          // NavigatorService.navigate("AgbyaPrayScreen");
        }}
        style={{
          borderColor: "black",
          padding: 5,
          borderWidth: 2
        }}
      >
        <Text>{i18n.t(`praysNames.${item.name}`)}</Text>
      </TouchableOpacity>
    );
  }
  renderItem2(item) {
    const { loadPray } = this.props;
    return (
      <TouchableOpacity
        onPress={async () => {
          const { loadAbyaPart } = this.props;
          if(item.hasOwnProperty("bookName")){
            loadAbyaPart(item.bookName,
              item.chapterNumber
              )
          }
          else 
          {
            let bookName = _.invert(praysNamesDictionary)[item.name];
            await loadPray(bookName);
          }
       
          this.closeDrawer2();
        }}
        style={{
          borderColor: "black",
          padding: 5,
          borderWidth: 2
        }}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }
  render() {
    const { contentOfSelectedPray, links, loadPray  , fontSizeOfText , titleOfPray} = this.props;
    console.log("titleOfPray" , titleOfPray)
    return (
      <Drawer
        type="displace"
        ref={ref => {
          this.drawer = ref;
        }}
        content={
          <FlatList
            data={agbyaKeys}
            keyExtractor={p => p.id.toString()}
            renderItem={({ item }) => this.renderItem(item)}
            initialNumToRender={12}
          />
        }
        panOpenMask={0.4}
        onClose={this.closeDrawer}
        onOpen={this.openDrawe}
        captureGestures="open"
        side={"left"}
        openDrawerOffset={0.36}
      >
        <Drawer
          type="displace"
          ref={ref => {
            this.drawer2 = ref;
          }}
          content={
            <FlatList
              data={links}
              keyExtractor={p => p.id.toString()}
              renderItem={({ item }) => this.renderItem2(item)}
              initialNumToRender={12}
            />
          }
          panOpenMask={0.4}
          onClose={this.closeDrawer}
          onOpen={this.openDrawe}
          captureGestures="open"
          side={"right"}
          openDrawerOffset={0.36}
        >
          <ImageBackground
            source={require("../../../assets/images/background.jpg")}
            style={{ flex: 1 }}
          >
            <View>
              <View style={{flexDirection: 'row' , justifyContent: 'center'}}>
              <Text style={{marginTop:10 }}>{titleOfPray}</Text>
              </View>
              <ScrollView  contentContainerStyle={{ paddingBottom: 10  }}>
                <Text style={{padding: 20 ,fontSize: 15 }}>{contentOfSelectedPray}</Text>
              </ScrollView>
            </View>
          </ImageBackground>
        </Drawer>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
export const AgbyaVersesScreen = connect(
  AgbyaVersesScreenContainer.mapStatetToProps,
  AgbyaVersesScreenContainer.mapDispatchToProps
)(AgbyaVersesScreenContainer);
