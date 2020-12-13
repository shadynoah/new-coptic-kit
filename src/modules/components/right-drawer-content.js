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
        namesOfPray: state.agbya.namesOfPray
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
      const { navigation , namesOfPray } = this.props;
        return (
            <DrawerContentScrollView>
          {
              _.map(namesOfPray,(item, index) => {
              return   <DrawerItem key={item.id}
             label={item.name} 
                  onPress={async ()=>{
                    Application.current.scrollViewRef.scrollTo({
                      x:Application.current.scrollPositionsObj[index].x , y:Application.current.scrollPositionsObj[index].y
                    })
                    navigation.closeDrawer();
                 }}
                 />
              })
             }
   </DrawerContentScrollView>
        );
    }
        }
  
        
export const RightDrawerContent = connect(
    SidebarNotesDrawer.mapStateToProps,
    SidebarNotesDrawer.mapDispatchToProps
  )(SidebarNotesDrawer);
  

