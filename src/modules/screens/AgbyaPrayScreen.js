import i18n from 'i18n-js';
import React from "react";
import { FlatList, StyleSheet, Text ,ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { praysNamesDictionary } from './../../constants';
import { setPrays , loadPray } from './../../state/agbya/action-creators';
import { State } from "../../state";
import NavigatorService from "../../services/navigator.js";
import _ from 'lodash'
class AgbyaPrayScreenContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isArabic: false,
      isPraySelected: false
    };
  }
  static mapStatetToProps(state: State) {
    return {
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
    const { setPrays ,loadPray } = this.props;
    return <TouchableOpacity onPress={
     async ()=> {
      let bookName = _.invert(praysNamesDictionary)[item.name]
      console.log("bookname inverted",bookName)
     await  loadPray(bookName);
      setPrays(item)
      NavigatorService.navigate("AgbyaVersesScreen");
     } 
    } style={{
      borderColor:'black',
      padding:5,
      borderWidth:2
    }}>
   <Text>{item.name}</Text>
    </TouchableOpacity>
  }
  render() {
    return (
      <ImageBackground
      source={require("../../../assets/images/background.jpg")}
      style={{ flex: 1 }}
    >
        <FlatList
        data={this.props.navigation.state.params.links}
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
export const AgbyaPrayScreen = connect(
    AgbyaPrayScreenContainer.mapStatetToProps,
    AgbyaPrayScreenContainer.mapDispatchToProps
)(AgbyaPrayScreenContainer);
