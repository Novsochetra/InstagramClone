import React, { Component } from 'react'
import { View, FlatList }   from 'react-native'

import Story    from '../components/Screens/Home/Story/index'
import Post     from '../components/Screens/Home/Post'
import Header   from '../components/Screens/Home/Header'
import PostAPI  from './../api/post'

class Home extends Component {

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Header navigate={this.props.navigation.navigate} />

        <View
          style={{
            flex: 1
          }}
        >
          <FlatList
            data={PostAPI}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) =>
              (index <= 0)
                ?
                <Story />
                :
                <Post item={item} />
            }
          />

        </View >
      </View>
      
    )
  }
}

export default Home