import React, { PureComponent, Fragment } from 'react';
import { ScrollView, Dimensions, Image, WebView } from 'react-native';
import { Container, Header, Text, Content, Card, CardItem, Body, ListItem, Left, Right, Button, Icon, View } from 'native-base';
import Modal from 'react-native-modal';


import _ from "lodash";
// var QuillDeltaToHtmlConverter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;
// import { QuillDeltaToHtmlConverter } from '../../../quill-delta-to-html/dist/commonjs/main';
const SUPPORTED_ORIENTATIONS = ['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right'];

export class ViewNoteModal extends PureComponent {

    props: {
        onToggleViewNoteModal: () => void,
        isViewModal: boolean,
        selectedNote: Note,
        selectedTemplate: Template
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                isVisible={this.props.isViewModal}
                supportedOrientations={SUPPORTED_ORIENTATIONS}
               
            >
                <Container style={{ flex: 1 }}>
                    <Header defaultModal>
                        <Left />
                        <Body><Text modalHeaderTitle>View Note </Text></Body>
                        <Right>
                            <Icon black name="close" onPress={() => this.props.toggleViewNoteModal()} />
                        </Right>
                    </Header>
                    <Content modalContent padder={true}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        
                                <Text>
                                {this.props.selectedNote.bookName} {this.props.selectedNote.chapterNumber}
                                </Text>
                                
                        
                          
                        </View>
                   
                        <Text>
                     {this.props.selectedNote.versesText}
                        </Text>
                        
                    </Content>
                </Container>
            </Modal>

        );
    }
}