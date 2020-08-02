import React, { PureComponent, Fragment } from "react";
import { ScrollView, Dimensions, Image,KeyboardAvoidingView  } from "react-native";
import { Container, Header, Content, Form, Item, Input, Label ,Body,Title, Button ,Text } from 'native-base';
import Modal from "react-native-modal";

import _ from "lodash";
// var QuillDeltaToHtmlConverter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;
// import { QuillDeltaToHtmlConverter } from '../../../quill-delta-to-html/dist/commonjs/main';
const SUPPORTED_ORIENTATIONS = [
  "portrait",
  "portrait-upside-down",
  "landscape",
  "landscape-left",
  "landscape-right"
];

export class UserAdmineModal extends PureComponent {
  constructor(){
    super();
    this.state ={
      name:"",
      password: ""
    }
  }
  render() {
    const defaultModal = {
      backgroundColor: "#ecf0f1",
      justifyContent: "space-between",
      borderBottomColor: "#ecf0f1"
    };
    const modalHeaderTitle = {
      fontSize: 20,
      fontWeight: "bold",
      alignSelf: "center"
    };
    return (
     
      <Modal
        animationType="slide"
        transparent={false}
        isVisible={this.props.isVisible}
        supportedOrientations={SUPPORTED_ORIENTATIONS}
        style={{ flex: 1 }}
      >
         
        <Container style={{ flex: .8 }}>
        <Header >
        <Body>
            <Title>Admin</Title>
          </Body>
        </Header>
        <Content style={{ flex:1 }}>
        <KeyboardAvoidingView
           style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input onChangeText= {
                text => this.setState({
                  name: text
                })
              }  />
            </Item>
            <Item fixedLabel >
              <Label>Password</Label>
              <Input onChangeText= {
                text => this.setState({
                  password: text
                })
              } />
            </Item>
            <Item  style={{
             justifyContent:'center'
            }} >
            <Button
                style={{ margin: 10, paddingLeft: 30, paddingRight: 30 }}
                full
                rounded
                onPress={() => {
                  this.props.validateAdmin({
                    name:this.state.name,
                    password: this.state.password
                  })
                }}
              >
                <Text>Sign in</Text>
              </Button>
              <Button
                style={{ margin: 10, paddingLeft: 30, paddingRight: 30 }}
                full
                rounded
                onPress={() => {
                  this.props.toggleAdminModal()
                }}
              >
                <Text>Cancel</Text>
              </Button>
            </Item>
            
          </Form>
          </KeyboardAvoidingView>
        </Content>
        </Container>
      </Modal>
    );
  }
}
