import React, { Component } from 'react'
import { View } from 'react-native'
import Tab from '../components/Screens/Profile/CustomTab'
import ProfileHeader from '../components/Screens/Profile/Header'

export default class Profile extends Component {
  render() {
    
    return (
        <View
          style={{
            flex: 1
          }}
        >
            
           <ProfileHeader />

            <View
              style={{
                flex: 1,
                backgroundColor: 'red'
              }}
            >
              <Tab />
            </View> 

        </View>  

    )
  }
}



