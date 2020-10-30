import i18n from 'i18n-js';
import React from "react";
import { FlatList, StyleSheet, Text ,ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { agbyaKeys } from './../../constants';
import { setPrays, loadPray } from './../../state/agbya/action-creators';
import { State } from "../../state";
import NavigatorService from "../../services/navigator.js";
import { DrawerList } from '../components/drawerlist';
import {Dashboard} from '../components/dashboard';

import { Drawer } from 'native-base';

class AgbyaScreenScreenContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isArabic: false,
      isPraySelected: false
    };
  }
  static mapStatetToProps(state: State) {
    return {
      isArabic: state.content.isArabic,
      links : state.agbya.links
      
    };
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      { 
        setPrays,
        loadPray
      },
      dispatch
    );
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: params.title,
      title: params.title
    };
  };
  static mapStatetToProps(state: State) {
    return {
      isArabic: state.content.isArabic
    };
  }
  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.isArabic ? "الصلوات" : "Sections"
    });
    // console.log("-----Location------",Location)
    //   console.log("homee")
    // NotificationManager.registerForPushNotifications()
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isArabic !== prevState.isArabic) {
      nextProps.navigation.setParams({
        title: nextProps.isArabic ? "من نحن" : "About"
      });
      return {
        isArabic: nextProps.isArabic
      };
    } else return null;
  }
  handleclick = (r)=>{
  }
  renderItem(item) {
    const { setPrays, loadPray } = this.props;
    return <TouchableOpacity onPress={
     async ()=> {
      await  loadPray(item.name);
      setPrays(item.links);
      NavigatorService.navigate("AgbyaVersesScreen",{
        links: item.links
      })
    }} style={{
      borderColor:'black',
      padding:5,
      borderWidth:2
    }}>
   <Text>{i18n.t(`praysNames.${item.name}`)}</Text>
    </TouchableOpacity>
  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  openDrawer2 = () => {
    this.drawer2._root.open()
  };
  render() {
    return (
      <ImageBackground
      source={require("../../../assets/images/background.jpg")}
      style={{ flex: 1 }}
    >
         <FlatList
      data={agbyaKeys}
      keyExtractor={p => p.id.toString()}
      renderItem={({ item }) => this.renderItem(item)}
      initialNumToRender={12}
    />
      </ImageBackground>
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
export const AboutScreena = connect(
 AgbyaScreenScreenContainer.mapStatetToProps,
 AgbyaScreenScreenContainer.mapDispatchToProps
)(AgbyaScreenScreenContainer);
