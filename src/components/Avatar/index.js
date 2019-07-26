import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class index extends Component {
  render() {
    const { width, height, source, marginRight, marginLeft } = this.props
    return (
      <LinearGradient
        colors={['#ff002f', '#ff00c8', '#ef00ff', '#6e00ff', '#004eff', '#00dcff', '#00ff5a']}
        start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
        style={{
          backgroundColor: 'green',
          padding: 2,
          width,
          height,
          marginRight,
          marginLeft,
          borderRadius: 50,
        }}
      >
        <View
          style={{
            width: '100%',
            height: '100%',
            padding: 2,
            borderRadius: 50,
            backgroundColor: '#ffffff'
          }}
        >
          <Image
            source={source}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 50,
              resizeMode: 'contain',
            }} />

        </View>
      </LinearGradient>
    )
  }
}
