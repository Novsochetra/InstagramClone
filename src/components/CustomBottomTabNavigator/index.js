import React, { Component } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'


export default class index extends Component {
  render() {
    return (
      <View
        style={{
          borderTopColor: 'rgb(191, 191, 191)',
          borderTopWidth: 1,
          height: 50,
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <View
          style={{
            flex: 1,
            paddingTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('Home') }}
          >
            <Image
              source={require('../../assets/icons/home.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            paddingTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('Search') }}
          >
            <Image
              source={require('../../assets/icons/search.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            paddingTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('Search') }}
          >
            <Image
              source={require('../../assets/icons/plus.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            paddingTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('Follower') }}
          >
            <Image
              source={require('../../assets/icons/heart.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            paddingTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('Profile') }}
          >
            <Image
              source={require('../../assets/icons/user.png')}
              style={{
                width: 30,
                height: 30
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
