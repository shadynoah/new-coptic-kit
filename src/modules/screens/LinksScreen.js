import React from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import NavigatorService from "../../services/navigator.js";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <View>
        <Button
          style={{ fontSize: 20, color: 'green' }}
          styleDisabled={{ color: 'red' }}
          onPress={() => NavigatorService.navigate("SettingsScreen")}
          title="Press Me"
        >
          Press links
</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
