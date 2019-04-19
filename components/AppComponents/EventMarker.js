import React, { Component } from 'react';
import MapView from 'react-native-maps'

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ListView,
  TextInput,
  Button,
  Animated,
  Dimensions,

} from 'react-native';
import * as firebase from 'firebase';
import * as utils from './../../utils/utils';

// Modal tutorial: https://github.com/TonioGarcia07/Swipe/blob/master/components/ScrollableModal.js

class EventMarker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      eventPost: {
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
      },

      visible: false,
    }
  }

  componentDidMount() {

    utils.getEventPost(this.props.event_id, (value) => {
      if(this.props.event_id) {
        this.setState({
          eventPost: value
        })
      }
    })
  }

  openModal = () => this.setState({ visible: true });
  closeModal = () => this.setState({ visible: false });

  render() {

    var lat = this.state.eventPost.location.latitude;
    var long = this.state.eventPost.location.longitude;

    var markerCoordinates = {
      latitude: lat,
      longitude: long
    };

    //console.log(this.state.foodPost);
    return (
      <MapView.Marker
        coordinate={markerCoordinates} onPress={() => this.openModal()}>
        <View style={styles.a_radius}>
          <View style={styles.a_marker} />

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
    backgroundColor: 'rgba(136, 0, 0, 0.1)', //'rgba(128, 0, 0, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(136, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  a_marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: '#d67171',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#bc6464'
  },

  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 4,
    borderColor: "#C0C0C0",
    borderWidth: 2,
    marginHorizontal: 40,
    marginVertical: 120
  },

  description: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    fontSize: 18
  }

});

export default EventMarker;
