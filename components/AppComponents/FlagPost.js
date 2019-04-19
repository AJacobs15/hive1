import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  // Button,
} from 'react-native';

import { Icon, Button } from 'react-native-elements'

// import * as utils from './../../utils/utils';
import Modal from "react-native-modal";


class FlagPost extends React.Component {
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
      <View>
        <Icon
          name="flag"
          // color="#F08700"
          // underlayColor = "#F08700"
          onPress={() => this.openModal()}
        />

        <Modal
          isVisible={this.state.visible}
          backdropOpacity={0.1}
          onBackdropPress={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.text}> Why are you flagging this post? </Text>
            <Button 
              // onPress={() => AppNavigator.navigate('Event')}
              title = "Inappropriate Content"
              onPress={() => console.log("event")}
              type="clear"
            />

            <Button
              title = "False Information"
              onPress={() => console.log("event")}   
              type="clear"                         
            />

            <Button
              title = "Duplicate Post"
              onPress={() => console.log("event")}
              type="clear"                            
            />

            <Button
              title = "Other"
              onPress={() => console.log("event")}
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
    flex: 0.32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "#C0C0C0",
    borderWidth: 2,

    backgroundColor: "#fff",
    padding: 20
  },

  text: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    padding: 10
  },

})

export default FlagPost;

