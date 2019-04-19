import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  // Button,
} from 'react-native';

import { Icon, Button } from 'react-native-elements'

import Modal from "react-native-modal";
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';


class AddPost extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  openModal = () => this.setState({ visible: true });
  closeModal = () => this.setState({ visible: false });

  render () {
    return (
      <View
        style={{
          // flex: 1,
          position:'absolute',
          justifyContent: 'flex-end',
          // alignSelf: 'flex-end',
          // top: 10,
          right: 0,
          marginLeft: 40,
          // left: 280,
          marginTop:20,
          // bottom:,
        }}>

        <Icon
          raised
          reverse
          name="add"
          // type="ionicon"
          size={30}
          color="#F7B538"
          // underlayColor = "#F08700"
          onPress={() => this.openModal()}
          // iconStyle={{size={50}}}
        />

        <Modal
          isVisible={this.state.visible}
          backdropOpacity={0.2}
          onBackdropPress={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.text} > What would you like to post? </Text>
            <Button 
              onPress={() => {this.setState({ visible: false }); this.props.navigation.navigate('Event')}}
              title = "Event"
              containerStyle = {styles.button}
              type="clear"
            />

            <Button
              onPress={() => {this.setState({ visible: false }); this.props.navigation.navigate('Food')}}
              title = "Food"
              type="clear"
            />
            
          </View>
        
        </Modal>

      </View>

      );

  }
}

const styles = StyleSheet.create({

  modalContainer: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderColor: "#C0C0C0",
    borderWidth: 2,

    backgroundColor: "#fff",
    padding: 20
  },

  button: {
     alignSelf: 'stretch',
     alignItems: 'center',
     width: '100%',
     flex: 1,
     // padding: 20,
     // backgroundColor: '#fccb00',
     // marginTop: 30,

     },

  text: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    padding: 10
  },

})

export default AddPost;

