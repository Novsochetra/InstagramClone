import React, { Component } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import Avatar from '../components/Avatar/index'
import DataFollower from '../components/Screens/Follower/data'
import DataFollowing from '../components/Screens/Follower/dataFollowing'

class You extends Component {

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <FlatList
          data={DataFollower}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => 
            <View>
              <View
                style={{
                  padding: 10
                }}
              >
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold'
                  }}
                >{Object.keys(item)[0]}</Text>
                
              </View>  

              {Object.values(item)[0].map((commentDetail, i) => 
                <View
                    style={{
                      padding: 10,
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}
                    key={commentDetail.peopleShared.join(" ") + i}
                  >
                    <Avatar
                      width={40}
                      height={40}
                      marginRight={10}
                      source={require('./../assets/images/kanha.jpg')}
                    />
                    <Text 
                      style={{
                        fontWeight: 'bold',
                        color: 'black',
                      }}
                    >
                      {commentDetail.peopleShared.join(", ")}
                    </Text>
                    <Text style={{color: 'black'}}> { commentDetail.text } {commentDetail.date}</Text>
                  </View>
                )}

              </View>
            }
          />
        
      </View>
    
    )
  }
}

class Following extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <FlatList
            data={DataFollowing}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => 
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}
              >
                <View
                  style={{
                    padding: 10,
                    paddingRight: 0,
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    width={40}
                    height={40}
                    marginRight={10}
                    source={item.avatarUrl}
                  />
                </View>
                <View
                  style={{
                      flex: 1,
                      padding: 10,
                      flexWrap: 'wrap',
                      alignItems: 'flex-start',
                      paddingRight: 0,
                      flexDirection: 'row',
                    }}
                >
                  <Text>
                    <Text 
                      style={{
                        fontWeight: 'bold',
                        color: 'black',
                      }}
                    >
                      {item.peopleLiked.join(", ")}
                    </Text>
                    <Text style={{color: 'black'}}> liked </Text>
                    <Text 
                      style={{
                        fontWeight: 'bold',
                        color: 'black'
                      }}
                    >
                      {item.ownerPost }'s comment: {item.commentText}
                    </Text>
                  </Text>
                 


                  
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                    marginRight: 10,
                    padding: 10,
                    paddingLeft: 0
                  }}
                >
                  <Image 
                    source={require('../assets/images/posts/erland-chanpion.jpg')}
                    style={{
                      width: 50,
                      height: 50,
                      alignSelf: 'flex-end',
                      borderRadius: 10,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </View>
            }
          />
        
      </View>
    
    )
  }
}

export default createMaterialTopTabNavigator({
    Following: Following,
    You: You
  }, 
  {
    initialRouteName: 'You',
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      },
      indicatorStyle: {
        backgroundColor: 'black'
      }
    },

  }
);