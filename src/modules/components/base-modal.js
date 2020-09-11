import React, { PureComponent } from "react";
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  TextInput,
  Platform
} from "react-native";

import {
  Container,
  Header,
  Text,
  Content,
  Card,
  CardItem,
  Body,
  ListItem,
  Left,
  Right,
  Button,
  Icon,
  Title,
  View,
  Spinner
} from "native-base";
import Modal from "react-native-modal";
import { ModalTypesEnum } from "../../enums";
import PropTypes from "prop-types";
const SUPPORTED_ORIENTATIONS = [
  "portrait",
  "portrait-upside-down",
  "landscape",
  "landscape-left",
  "landscape-right"
];
export interface BaseModalProperties {
  hadCloseHeader: boolean;
  hasHeaderTitle: boolean;
  headerTitle: string;

  hasFirstButton: boolean;
  firstButtonText: string;

  hasSecondButton: boolean;
  secondButtonText: string;

  hasThirdButton: boolean;
  thirdButtonText: string;

  modalText: string;
  modalType: number;
  firstButtonDisabled: false;
  secondButtonDisabled: false;
  thirdButtonDisabled: boolean;

  showLoadingSpinnger: false;

  toggleModal: () => void;
  onPressFirstBtn: () => void;
  onPressSecondBtn: () => void;
  onPressThirdBtn: () => void;
  isArabic: Boolean;
}
export class BaseModal extends PureComponent {
  constructor() {
    super();
    this.state = {
      textOfTextInput: ""
    };
  }
  static defaultProps = {
    hadCloseHeader: false,
    hasHeaderTitle: false,
    headerTitle: "",
    hasFirstButton: false,
    firstButtonText: "",
    hasSecondButton: false,
    secondButtonText: "",
    modalText: "",
    modalType: ModalTypesEnum.modalHasTwoButtons,
    showLoadingSpinnger: false,
    okButtonDisabled: false,
    cancelButtonDisabled: false,
    showLoadingSpinnger: false,
    isArabic: false
  };

  props: {
    baseModalProperties: BaseModalProperties
  };
  renderSwitch(
    param,
    firstButtonText = "Yes",
    secondButtonText = "No",
    thirdButtonText
  ) {
    switch (param) {
      case ModalTypesEnum.modalHasOneButton:
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30
            }}
          >
            <View style={{ flex: 0.7 }}>
              <Button
                style={{ margin: 10, paddingLeft: 30, paddingRight: 30 }}
                full
                rounded
                disabled={this.props.baseModalProperties.firstButtonDisabled}
                onPress={() => {
                  this.props.baseModalProperties.onPressFirstBtn(
                    this.state.textOfTextInput
                  );
                }}
              >
                <Text>{firstButtonText}</Text>
              </Button>
            </View>
          </View>
        );
      case ModalTypesEnum.modalHasTwoButtons:
        return (
          <View
            style={{
              marginTop: 30
            }}
          >
             <TextInput
            style={styles.TextInputStyleClass}
            underlineColorAndroid="transparent"
            placeholder={
              this.props.baseModalProperties.isArabic
                ? "اكتب ملاحظتك"
                : "write your note"
            }
            placeholderTextColor={"#9E9E9E"}
            numberOfLines={10}
            multiline={true}
            defaultValue=""
            onChangeText={text => {
              this.setState({
                textOfTextInput: text
              });
            }}
          />
          <View style={{ flexDirection:'row' }}>
          <View style={{ flex: 0.5 }}>
              <Button
                style={{ margin: 10, paddingLeft: 30, paddingRight: 30 }}
                full
                rounded
                disabled={this.props.baseModalProperties.firstButtonDisabled}
                onPress={() => {
                  this.props.baseModalProperties.onPressFirstBtn(
                    this.state.textOfTextInput
                  );
                }}
              >
                <Text>{firstButtonText}</Text>
              </Button>
            </View>
            <View style={{ flex: 0.5 }}>
              <Button
                style={{ margin: 10 }}
                full
                rounded
                disabled={this.props.baseModalProperties.secondButtonDisabled}
                onPress={() => {
                  this.props.baseModalProperties.onPressSecondBtn();
                }}
              >
                <Text>{secondButtonText}</Text>
              </Button>
            </View>
          </View>
          </View>
        );
      case ModalTypesEnum.warningModal:
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30
            }}
          >
            <View style={{ flex: 0.7 }}>
              <Button
                style={{ margin: 10, paddingLeft: 30, paddingRight: 30 }}
                full
                rounded
                disabled={this.props.baseModalProperties.firstButtonDisabled}
                onPress={() => {
                  this.props.baseModalProperties.onPressFirstBtn(
                    this.state.textOfTextInput
                  );
                }}
              >
                <Text>{firstButtonText}</Text>
              </Button>
            </View>
          </View>
        );

      default:
        return <Text>there is problem in modal </Text>;
    }
  }

  render() {
    var {
      firstButtonText,
      secondButtonText,
      thirdButtonText
    } = this.props.baseModalProperties;
    // firstButtonText = firstButtonText ? firstButtonText : "Yes"
    // secondButtonText = secondButtonText ? secondButtonText : "No"

    return (
      <Modal
        animationType="slide"
        avoidKeyboard 
        transparent={true}
        isVisible={this.props.isVisible}
        supportedOrientations={SUPPORTED_ORIENTATIONS}
      >
        <View
          style={{
            padding: 10,
            backgroundColor: "white",
            borderRadius: 4,
            borderColor: "rgba(0, 0, 0, 0.1)"
          }}
        >
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "center"
            }}
          >
            {this.props.baseModalProperties.hadCloseHeader && (
              <Right>
                <Button
                  iconLeft
                  transparent
                  onPress={() => {
                    this.props.baseModalProperties.toggleModal();
                  }}
                >
                  <Icon black name="close" />
                </Button>
              </Right>
            )}

            <Text modalHeaderTitleEnd black>
              {this.props.baseModalProperties.headerTitle}
            </Text>
            <Left />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: 10
            }}
          >
            <Text style={{ fontSize: 16, color: "#000" }}>
              {this.props.baseModalProperties.modalText}
            </Text>
          </View>
         
          {this.renderSwitch(
            this.props.baseModalProperties.modalType,
            firstButtonText,
            secondButtonText,
            thirdButtonText
          )}
        </View>
      </Modal>
    );
  }
}

BaseModal.propTypes = {
  baseModalProperties: PropTypes.shape({
    hadCloseHeader: PropTypes.bool.isRequired,
    hasHeaderTitle: PropTypes.bool.isRequired,
    headerTitle: PropTypes.string.isRequired,
    hasFirstButton: PropTypes.bool,
    hasSecondButton: PropTypes.bool,
    secondButtonText: PropTypes.string,
    modalText: PropTypes.string,
    modalType: PropTypes.number,
    onPressFirstBtn: PropTypes.func,
    onPressSecondBtn: PropTypes.func,
    firstButtonText: PropTypes.string,
    isArabic: PropTypes.bool
  })
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    justifyContent: "center",
    margin: 20
  },

  TextInputStyleClass: {
    padding: 15,
    textAlign: "left",
    width: "95%",
    borderWidth: 2,
    borderColor: "#9E9E9E",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    height: "50%"
  }
});
