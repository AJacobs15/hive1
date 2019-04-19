import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
}
from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import Modal from "react-native-modal";
import * as utils from './../../utils/utils';

import FlagPost from './FlagPost';


const padding = 10;

class FoodModal extends Component {

  addView = () => {
    utils.updateFoodViews(this.props.food_id);
  }

  addEmpty = () => {
    utils.updateFoodEmpty(this.props.food_id);
  }

  render () {

    var address = this.props.foodPost.location.address;
    var photo = this.props.foodPost.photo;
    var time = this.props.foodPost.time;
    var description = this.props.foodPost.description;
    var views = this.props.foodPost.views;
    var empty = this.props.foodPost.empty;
    var last_confirm = this.props.foodPost.last_confirm;
    var last_empty = this.props.foodPost.last_empty;


    return (

        <View style={styles.modalContainer}>

          <Header name={address} />
          <Image
            resizeMode="cover"
            style={{
              flex: 1,
              backgroundColor: '#D8D8D8',
              width: undefined,
              height: undefined,
            }}
            source={{uri: photo}}
          />
          <Metadata time={time} description={description} />
          <Contributions confirmations={views} empties={empty} />
          <ContributionButtons view_fn={this.addView} empty_fn={this.addEmpty}/>
          <Signal last_confirm={last_confirm} last_empty={last_empty} />
        </View>
      )
  }
}

function formatTime(date) {
    var hour = date.slice(16, 18);
    console.log(hour);
    var time_type;

    if(hour <= 11){
      time_type = 'AM';
      if (hour == 0){
        hour = 12;
      }
    }
    else{
      time_type = 'PM';
      hour = hour - 12;
    }

    minutes = date.slice(18, 21);
    var time = hour.toString() + minutes + time_type;
    console.log(time);

    return time;
}

function lastSignal(last_confirm, last_empty) {
    console.log(last_confirm);
    var confirm_date = new Date(last_confirm);
    var empty_date = new Date(last_empty);
    if (confirm_date > empty_date) {
      var signal = "Confirmed at ";
      return signal + formatTime(last_confirm);
    }
    else{
      return "Empty at " + formatTime(last_empty);
    }
}

const Signal = ({last_confirm, last_empty}) => (
  <View style={styles.padding}>
    <Text style={styles.text}>Last signal: {lastSignal(last_confirm, last_empty)}</Text>
  </View>
);


const Metadata = ({ time, description}) => (
  <View style={styles.padding}>
    <View style={styles.row}>
      <Text style={styles.text}>Posted at {formatTime(time)}</Text>
      <FlagPost />
    </View>
    <Text style={styles.subtitle}>{description}</Text>
  </View>
);

const Contributions = ({confirmations, empties}) => (
  <View style={styles.contributionsRow}>
    <Text style={styles.textStyle}> {confirmations} </Text>
    <Text style={styles.textStyle}> {empties} </Text>
  </View>
);

const ContributionButtons = ({view_fn, empty_fn}) => (
  <View style={styles.contributionsRow}>
    <BigIcon name="ios-checkmark-circle-outline" fn={view_fn}/>
    <BigIcon name="ios-close-circle-outline" fn={empty_fn} />
  </View>
);

const Header = ({ name }) => (
  <View style={[styles.headerRow, styles.padding]}>
    <Icon name="ios-pin" />
    <Text style={styles.text}>{name}</Text>

  </View>
);

const Icon = ({ name }) => (
  <Ionicons style={{ marginRight: 8 }} name={name} size={24} color="black" />
);


const BigIcon = ({ name, fn }) => (
  <Ionicons
    name={name}
    size={70}
    color="#f4883d"
    onPress={fn}
  />
);

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    marginLeft: 90,
    height: 200,
    width: 200
  },
  text: {
    fontSize: 20,
    marginLeft: 150
  },

  modalContainer: {
    flex: 1,
    borderRadius: 10,
    borderColor: "#F7B538",
    borderWidth: 3,
    // marginHorizontal: 40,
    marginVertical: 50,
    backgroundColor: "#fff",
    padding: 20
  },

  description: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    fontSize: 18
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  contributionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  padding: {
    padding,
  },

  text: { fontWeight: '600' },

  subtitle: {
    opacity: 0.8,
  }
  ,

  viewStyle: {
    width: 300,
    height: 450,
    backgroundColor: "#fff",
    padding: 20
  },

  textStyle: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    padding: 5
  },


})


export default FoodModal;
