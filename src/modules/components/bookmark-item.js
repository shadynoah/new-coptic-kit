import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Container, Header, Text, Content, Card, CardItem, Body, ListItem, Left, Right, Button, Icon, Input, Item } from 'native-base';
import _ from 'lodash';


//import { NoteStyleEnum } from '../../../../database/entities';

export class BookMarkItem extends PureComponent {



    render() {
        let { item, NavigatorService } = this.props;
        return (
            <View style={{

                flex: 1, flexDirection: 'column', backgroundColor: 'white', marginTop: 10, marginLeft: 10,
                padding: 10, justifyContent: 'space-around', borderColor: 'black', borderRadius: 30,
                marginBottom: 20
            }}>
                <View style={{ flex: .5 , flexDirection:'row' }}>
                    <Text  onPress={
                        () => {
                            // console.log("----bookmark object is===", item)
                            this.props.loadChapterContent(item.bookName, item.chapterNumber , item.isArabic)
                            this.props.selectBook({ bookName: item.bookName })
                            NavigatorService.navigate("VerseScreen")

                        }
                    } style={{}} > {item.bookName}  {item.chapterNumber}  - {item.dateOfBookMark} </Text>

                </View>
                <View style={{ flexDirection:'row-reverse' }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        {/* to do updated with another condition this.props.note.noteStyle !== NoteStyleEnum.handWrittenNote && note.imageLines */}
                        <Icon name="trash" color='red' style={{ marginRight: 10, color: 'red', }} red large onPress={() => {
                             this.props.delete(this.props.item)
                        }} />
                    </View>
                </View>
            </View>


        );
    }
}