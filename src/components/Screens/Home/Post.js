import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Avatar from '../../Avatar/index'
import Icon from 'react-native-vector-icons/FontAwesome'
import FitImage from 'react-native-fit-image'

export default class Post extends Component {
  render() {
    const postItem = this.props.item
    return (
      <View
        style={{
          flex: 1,
          borderTopColor: '#e8e8e8',
          borderTopWidth: 1
        }}
      >
        {/* POST HEADER */}
        <View
          style={{
            height: 50,
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row'
            }}
          >
            <Avatar
              width={30}
              height={30}
              marginLeft={10}
              source={postItem.ownerUrl}
            />

            <Text
              style={{
                color: '#000000',
                marginLeft: 5
              }}
            >
              {postItem.ownerName}
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'center',
              marginRight: 10
            }}
          >
            <Icon
              name="ellipsis-v"
              size={20}
              style={{
                color: 'black'
              }}
            />
          </View>

        </View>
        {/* IMAGE */}
        <View
          style={{
            flex: 1
          }}
        >

          <FitImage
            source={postItem.postUrl}
            originalWidth={400}
            originalHeight={400}
          />

        </View>
        {/* COMMENT LIKE SHARE BUTTON */}
        <View
          style={{
            height: 50,
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >

            <Image
              source={require('../../../assets/icons/heart.png')}
              style={{
                width: 30,
                height: 30,
                marginLeft: 10
              }}
            />

            <Image
              source={require('../../../assets/icons/comment.png')}
              style={{
                width: 30,
                height: 30,
                marginLeft: 10,
              }}
            />

            <Image
              source={require('../../../assets/icons/paper_plane.png')}
              style={{
                width: 30,
                height: 30,
                marginLeft: 10,
              }}
            />

          </View>

          <View
            style={{
              marginRight: 10,
              justifyContent: 'center'
            }}
          >

            <Image
              source={require('../../../assets/icons/bookmark.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />

          </View>
        </View>
      </View>
    )
  }
}
