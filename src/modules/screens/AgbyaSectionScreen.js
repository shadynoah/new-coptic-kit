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
import { CommonActions } from '@react-navigation/native';

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
      links : state.agbya.links,
      fontSizeOfText: state.content.fontSizeOfText,
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
  static navigationOptions = ({ navigation , route }) => {
   const params = route.params || {};
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
    // this.props.navigation.setParams({
    //   title: this.props.isArabic ? "الصلوات" : "Sections"
    // });
    const { isArabic } = this.props;
    this.props.navigation.dispatch(CommonActions.setParams({  title: isArabic ? "الصلوات" : "Sections" }));

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
    const { setPrays, loadPray , navigation, fontSizeOfText } = this.props;
    return <TouchableOpacity onPress={
     async ()=> {
       const {  isArabic } = this.props;
      await  loadPray(item.name);
      setPrays(item.links);
      navigation.navigate("AgbyaVersesScreen",{
        links: item.links,
        title: isArabic ? "ايات الاجبيه" : "verses agbya"
      })
    }} style={{
      padding:20,
    }}>
   <Text style={{textAlign: 'center', fontSize:20}}>{i18n.t(`praysNames.${item.name}`)}</Text>
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
