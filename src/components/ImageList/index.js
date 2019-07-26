import React, { Component } from 'react'
import { FlatList, Image, View } from 'react-native'
import GallaryApi from '../../api/gallary'
import FitImage from 'react-native-fit-image'

export default class index extends Component {
  render() {
    return (
      <FlatList
        data={['1', '2', '3', '4', '5', '6', '7', '8']}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => 
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              height: 100,
              backgroundColor: 'white'
            }}
          >
            <View
              style={{
                flex: 1,
                paddingLeft: 3
              }}
            >
              <FitImage
                source={GallaryApi[`${Math.floor((Math.random() * 25) + 1)}`]}
                originalWidth={100}
                originalHeight={100}
                style={{
                  marginTop: 3,
                }}
              />
              <Image 
                source={require(`../../assets/icons/copy.png`)}
                style={{
                  width: 20,
                  height: 20,
                  position: "absolute",
                  top: 13,
                  right: 10,
                  tintColor: 'white',
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                paddingLeft: 3
              }}
            >
              <FitImage
                source={GallaryApi[`${Math.floor((Math.random() * 25) + 1)}`]}
                originalWidth={100}
                originalHeight={100}
                style={{
                  marginTop: 3,
                }}
              />

              <Image 
                source={require(`../../assets/icons/copy.png`)}
                style={{
                  width: 20,
                  height: 20,
                  position: "absolute",
                  top: 13,
                  right: 10,
                  tintColor: 'white'
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                paddingRight: 3,
                paddingLeft: 3
              }}
            >
              <FitImage
                source={GallaryApi[`${Math.floor((Math.random() * 25) + 1)}`]}
                originalWidth={100}
                originalHeight={100}
                style={{
                  marginTop: 3,
                }}
              />

              <Image 
                source={require(`../../assets/icons/copy.png`)}
                style={{
                  width: 20,
                  height: 20,
                  position: "absolute",
                  top: 13,
                  right: 10,
                  tintColor: 'white'
                }}
              />
            </View>
          </View>
          
        }
      />
    )
  }
}
