import React from 'react'
import { 
  createBottomTabNavigator, 
  createAppContainer 
} from 'react-navigation'

import HomeScreen               from './src/screens/Home'
import SearchScreen             from './src/screens/Search'
import FollowerScreen           from './src/screens/Follower'
import ProfileScreen            from './src/screens/Profile'
import CameraScreen            from './src/screens/Camera'
import CustomBottomTabNavigator from './src/components/CustomBottomTabNavigator/index'

const MainNavigator = createBottomTabNavigator(
  {
    Home:     HomeScreen,
    Search:   SearchScreen,
    Gallery:  SearchScreen,
    Follower: FollowerScreen,
    Profile:  ProfileScreen,
    Camera:   CameraScreen,
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: props => <CustomBottomTabNavigator navigation={props.navigation}/>
  }
);

const App = createAppContainer(MainNavigator);

export default App;