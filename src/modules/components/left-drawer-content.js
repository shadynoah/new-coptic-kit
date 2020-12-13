import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import i18n from 'i18n-js';
import _ from 'lodash';
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { agbyaKeys } from './../../constants';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const DrawerL = createDrawerNavigator();
const DrawerR = createDrawerNavigator();
import { loadPray } from '../../state/agbya/action-creators'
import { Application } from './../../application';
class SidebarNotesDrawer extends Component {
  constructor() {
    super();
  }
  static mapStateToProps(state) {
    return {
      x: state.content
    }
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      {
        loadPray
      },
      dispatch
    );
  }
    render(){
      const { navigation } = this.props;
        return (
            <DrawerContentScrollView>
            {
              _.map(agbyaKeys,item => {
              return   <DrawerItem key={item.id}
             label={i18n.t(`praysNames.${item.name}`)} 
                  onPress={async ()=>{
                    await this.props.loadPray(item.name);
                    Application.current.scrollViewRef.scrollTo({
                      x:0 , y:0
                    })
                    navigation.closeDrawer();
                    // Application.current.scrollPositions= [];
                 }}
                 />
              })
             }
        </DrawerContentScrollView>
        );
    }
        }
  
        
export const LeftDrawerContent = connect(
    SidebarNotesDrawer.mapStateToProps,
    SidebarNotesDrawer.mapDispatchToProps
  )(SidebarNotesDrawer);
  

