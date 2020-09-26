import React from "react";
import { StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { State } from "../../state";
import { setPrays } from './../../state/agbya/action-creators';
import {  ImageBackground, ScrollView } from "react-native";

class AgbyaVersesScreenContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isArabic: false,
      isPraySelected: false
    };
  }
  static mapStatetToProps(state: State) {
    return {
      links : state.agbya.links,
      contentOfSelectedPray: state.agbya.contentOfSelectedPray
      
    };
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      { 
        setPrays
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
      isArabic: state.content.isArabic,
      contentOfSelectedPray: state.agbya.contentOfSelectedPray
    };
  }
 
  render() {
    const { contentOfSelectedPray } = this.props;
    return (
         <ImageBackground
        source={require("../../../assets/images/background.jpg")}
        style={{ flex: 1 }}
      >
 <ScrollView>
      <Text>{contentOfSelectedPray.text}</Text>
    </ScrollView>
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
export const AgbyaVersesScreen = connect(
  AgbyaVersesScreenContainer.mapStatetToProps,
  AgbyaVersesScreenContainer.mapDispatchToProps
)(AgbyaVersesScreenContainer);
