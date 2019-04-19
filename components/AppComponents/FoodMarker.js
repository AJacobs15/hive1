import React, { Component } from 'react';
import MapView from 'react-native-maps'

import {
  StyleSheet,
  View,
} from 'react-native';

import * as utils from './../../utils/utils';
import FoodModal from './FoodModal';
import Modal from "react-native-modal";

// Modal tutorial: https://github.com/TonioGarcia07/Swipe/blob/master/components/ScrollableModal.js

class FoodMarker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      foodPost: {
        description: "constructor",
        empty: 0,
        location: {
          address: "",
          latitude: 0,
          longitude: 0,
        },
        photo: "",
        time: 0,
        user_id: "",
        views:0,
        last_confirm: 0,
        last_empty: 0,
      },

      visible: false,
    }
  }

  componentDidMount() {

    utils.getFoodPost(this.props.food_id, (value) => {
      if(this.props.food_id) {
        this.setState({
          foodPost: value
        })
      }
    })
  }

  openModal = () => this.setState({ visible: true });
  closeModal = () => this.setState({ visible: false });

  render() {

    var lat = this.state.foodPost.location.latitude;
    var long = this.state.foodPost.location.longitude;

    var markerCoordinates = {
      latitude: lat,
      longitude: long
    };

    return (
      <MapView.Marker
        coordinate={markerCoordinates} onPress={() => this.openModal()}>
        <View style={styles.a_radius}>
          <View style={styles.a_marker} />

        <Modal
          isVisible={this.state.visible}
          backdropOpacity={0.2}
          onBackdropPress={this.closeModal}
        >

        <FoodModal foodPost={this.state.foodPost} food_id={this.props.food_id}/>
        </Modal>

        </View>
      </MapView.Marker>
      );
  }
}

const styles = StyleSheet.create({

  a_radius:{
    height: 50,
    width: 50,
    borderRadius: 50/2,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 105, 0, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 105, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  a_marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'orange',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#FF6900'
  },

});

export default FoodMarker;
