import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import signin from './src/screens/signIn'
import signup from './src/screens/signUp'
import listofGroups from './src/screens/listofGroups'
import {Provider as AuthProvider} from './src/Context/authContext'
import {Provider as GroupProvider} from './src/Context/groupContext'
import {Provider as ItemProvider} from './src/Context/itemContext'
import {setNavigator} from './src/navigationRef'
import signout from './src/screens/signout'
import itemLists from './src/screens/itemList'
import addGroup from './src/screens/addGroup'
import addItem from './src/screens/addItem'

const mainNavigator = createSwitchNavigator({
  login: createStackNavigator({
    signin: signin,
    signup: signup
  }),
  main: createBottomTabNavigator({
    groupListMain: createStackNavigator({
      groupList: listofGroups,
      itemLists: itemLists,
      addGroup: addGroup,
      addItem: addItem
    }),
    Account: signout
  })
})

const App = createAppContainer(mainNavigator);

export default () => {
  return(
    <ItemProvider>
      <GroupProvider>
        <AuthProvider>
        <App ref={(navigator) => { setNavigator(navigator)}}/>
      </AuthProvider>
    </GroupProvider>
  </ItemProvider>
);
}
