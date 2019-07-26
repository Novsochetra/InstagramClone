import React, { Component } from 'react'
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View
        >

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../../../assets/icons/camera.png')}
              style={{
                width: 30,
                height: 30,
                marginLeft: 10
              }}
            />
            <TextInput
              style={{
                flex: 1,
                height: '100%',
                fontSize: 20,
                paddingLeft: 10,
                paddingBottom: 5,
              }}
              autoFocus={false}
              onChangeText={() => console.log('search')}
              value="Sochetra NOV"
              placeholder='Search'
            >
            </TextInput>

            <Image
              source={require('../../../assets/icons/scan.png')}
              style={{
                width: 40,
                height: 40,
                marginRight: 10,
              }}
            />

          </View>

          <View>
            <FlatList
              data={['IGTV', 'Shop', 'Style', 'Sport', 'Dance', 'Gaming', 'Comic', 'Art', 'Decor']}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) =>
                <TouchableOpacity>
                  <View
                    style={{
                      justifyContent: 'center',
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 25,
                      paddingRight: 25,
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: '#e8e8e8',
                      marginLeft: 10,
                      marginBottom: 5
                    }}
                  >
                    <Text
                      style={{
                        color: 'black'
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              }
            />

          </View>
      </View>
    )
  }
}
