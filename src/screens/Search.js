import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import Header from './../components/Screens/Search/Header'
import ImageList from '../components/ImageList/index'
export default class Screen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Header />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}
        >
          <ImageList />
        </View >
  
      </View>
    
    )
  }
}
