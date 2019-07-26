import React, { Component } from 'react'
import {Image} from 'react-native'
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation'
import ListPostScreen from './ListPost'
import ListTagScreen from './ListTag'

const CustomTab = 
  createMaterialTopTabNavigator({
      ListPost: ListPostScreen,
      ListTag: ListTagScreen
    }, 
    {
      initialRouteName: 'ListPost',
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;

          if (routeName === 'ListPost') {
            return (<Image
              source={require('../../../assets/icons/grid.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />)
          } else if (routeName === 'ListTag') {
            return (<Image
              source={require('../../../assets/icons/tag_notification.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />)
          }
        },
      }),
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'white',
        },
        indicatorStyle: {
          backgroundColor: 'black'
        }
      },
    }
  )

export default createAppContainer(CustomTab)