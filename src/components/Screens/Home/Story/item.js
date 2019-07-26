import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Avatar from './../../../Avatar/index'

export default class item extends Component {
  render() {
    const { item } = this.props
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar
          width={60}
          height={60}
          marginRight={10}
          source={item.imageName}
        />
        <Text
          style={{
            color: '#000000',
            marginLeft: -8
          }}
        >
          {item.name}
        </Text>
      </View>

    )
  }
}
