import React, { Component, Fragment } from 'react'
import { Text, View, TouchableOpacity, TouchableHighlight, Image, StyleSheet, Modal } from 'react-native'
import Avatar from '../../Avatar/index'

const styles = StyleSheet.create({
  defaultHeaderText: {
    fontWeight: 'bold',
    color: 'black'
  },
  leftHeader: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10
  },
  rightHeader: {
    flex: 1,
    alignItems: 'flex-end',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10
  },
  followerDetail: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 10,
  },
  editProfileButton: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#c7c7c7',
    alignItems: 'center'
  }
})

export default class Header extends Component {
  state = {
    modalVisible: false
  }

  _handleToggleModle = () => {
    console.log("The state is ", this.state)
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }

  _handleHideModal = () => {
    console.log("I am click ", this.state.modalVisible)
    this.setState({
      modalVisible: false
    })
  }
  render() {
    
    const data = [
      {text: "Posts", amount: '11'}, 
      {text: "Follower", amount: '1657'}, 
      {text: "Following", amount: '1345'}
    ]

    return (
      <Fragment>
        {/* TOP HEADERS */}
        <View style={{ flexDirection: 'row' }} >
          <View style={styles.leftHeader} >
            <TouchableOpacity onPress={this._handleToggleModle}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.defaultHeaderText} >
                  sochetra_nov_fs
                </Text>

                <Image
                  source={require('../../../assets/icons/arrow_down.png')}
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 10
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rightHeader} >
            <TouchableOpacity
              onPress={() => console.log("Message page")}
            >
              <Image
                source={require('../../../assets/icons/menu_bar.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
          </View>

        </View>
        {/* END TOP HEADERS */}
        
        {/* FOLLOWER DETAILS */}
        <View style={styles.followerDetail} >
          <View
            style={{
              flex: 1,
              marginLeft: 10
            }}
          >
            <Avatar
              width={80}
              height={80}
              source={require('../../../assets/images/kanha.jpg')}
            />
          </View>

          {data.map((item, index) => 
            <View
              key={item.text + index}
              style={{
                flex: 1,
                alignItems: 'center'
              }}
            >
              <Text style={styles.defaultHeaderText} >{item.amount}</Text>
              <Text>{item.text}</Text>
            </View>
          )}
          
        </View> 
        
        <View
          style={{

            padding: 10,
            marginTop: 10,
            alignItems: 'center'
          }}
        >
          <View style={styles.editProfileButton} >
            <Text style={styles.defaultHeaderText}>Edit Profile</Text>
          </View>
        </View>

        <Modal
          animationType="fade"
          presentationStyle="overFullScreen"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View 
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            <TouchableOpacity
              onPress={this._handleHideModal} >
              <View
                style={{
                  height: '100%',
                  backgroundColor: '#000000',
                  opacity: 0.4
                }}
              >
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: '#fff'
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10
                }}
              >
                <Avatar
                  width={50}
                  height={50}
                  source={require('../../../assets/images/kanha.jpg')}
                />

                <Text style={{ ...styles.defaultHeaderText, marginLeft: 10 }}>sochetra_nov_fs</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 10,
                  paddingRight: 10
                }}
              >
                <View style={{
                  padding: 5,
                  marginRight: 10,
                  borderWidth: 1,
                  borderRadius: 50,
                  borderColor: '#c7c7c7',
                  alignItems: 'center',
                  flex: 1
                }} >
                  <Text style={styles.defaultHeaderText}>Edit Profile</Text>
                </View>

                <View style={{
                  padding: 5,
                  borderWidth: 1,
                  borderRadius: 50,
                  borderColor: '#c7c7c7',
                  alignItems: 'center',
                  flex: 1
                }} >
                  <Text style={styles.defaultHeaderText}>Edit Profile</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  backgroundColor: '#eff0f1'
                }}
              >
                <View
                  style={{
                    flex: 1,
                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <Image
                    source={require('../../../assets/icons/plus_no_border.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginRight: 10
                    }}
                  />
                  <Text style={styles.defaultHeaderText}>Add Account</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        
      </Fragment>
    )
  }
}
