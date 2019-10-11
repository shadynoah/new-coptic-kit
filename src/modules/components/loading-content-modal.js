import React, { PureComponent } from "react";
import Modal from "react-native-modal";
import { View, Text, Spinner } from "native-base";
const SUPPORTED_ORIENTATIONS = [
  "portrait",
  "portrait-upside-down",
  "landscape",
  "landscape-left",
  "landscape-right"
];

export class LoadingContentModal extends PureComponent {
  props: {
    isVisible: boolean,
    message: string
  };
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={this.props.isVisible}
        supportedOrientations={SUPPORTED_ORIENTATIONS}
      >
        <View
          style={{
            padding: 10,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            borderColor: "rgba(0, 0, 0, 0.1)"
          }}
        >
          <View>
            <Text> {this.props.message}</Text>
            <Spinner color="blue" />
          </View>
        </View>
      </Modal>
    );
  }
}
