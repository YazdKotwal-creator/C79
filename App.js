import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import BookRequest from './screens/BookRequest';
import BookDonate from './screens/BookDonate';
import{createBottomTabNavigator} from 'react-navigation-tabs'
import{createSwitchNavigator, createAppContainer} from 'react-navigation-tabs'

export default function App() {
  return (
    <WelcomeScreen/>
  );
}

const TabNavigator = createBottomTabNavigator({
  Donate:{screen:BookDonate},
  RequestBook:{screen:BookRequest},

},{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName;
      if (routeName==="BookDonate"){
        return(
          <Image source ={require("./assets/request-list.png")}
          style={{width:20,height:20}}/>
        )
      }
      else if (routeName==="RequestBook"){
        return(
          <Image source ={require("./assets/request-book.png")}
          style={{width:20,height:20}}/>
        )
      }
    }
  })
})
const SwitchContainer = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  TabNavigator:TabNavigator
})
const AppContainer=createAppContainer(SwitchContainer)