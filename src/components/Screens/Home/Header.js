import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          paddingTop: 10,
          paddingBottom: 10,
          borderBottomColor: 'rgb(191, 191, 191)',
          borderBottomWidth: 1
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row'
            
          }}
        >

          <TouchableOpacity
            onPress={() => { this.props.navigate('Camera') }}
          >
            <Image
              source={require('../../../assets/icons/camera.png')}
              style={{
                width: 30,
                height: 30,
                marginLeft: 10
              }}
            />
          </TouchableOpacity>

          <Image
            source={require('../../../assets/images/instagram_letter.png')}
            style={{
              width: '50%',
              height: '100%',
              resizeMode: 'contain'
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row'
          }}
        >

          <Image
            source={require('../../../assets/icons/tv.png')}
            style={{
              width: 30,
              height: 30,
              marginRight: 10
            }}
          />

          <Image
            source={require('../../../assets/icons/paper_plane.png')}
            style={{
              width: 30,
              height: 30,
              marginRight: 10
            }}
          />

        </View>
      </View>
    )
  }
}
