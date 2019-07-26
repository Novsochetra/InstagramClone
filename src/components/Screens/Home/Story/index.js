import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import StoryItem from './item'
import Data from './data'

export default class index extends Component {
  render() {
    return (
      <View
        style={{
          height: 100,
          borderBottomColor: '#e8e8e8',
          borderBottomWidth: 1
        }}
      >
        <View
          style={{
            flex: 1,
            flexWrap: 'nowrap',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5
          }}
        >
          <FlatList
            data={Data}
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <StoryItem item={item} />}
          />
        </View>

      </View>
    )
  }
}
