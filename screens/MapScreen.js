import React from 'react';
// import { ExpoConfigView } from '@expo/samples';
// import { AppLoading, Asset, Font, Icon, Permissions, Notifications,Constants,ImagePicker } from 'expo';
import {
  Button,
  View,
  StatusBar,
  ActivityIndicator,
  Clipboard,
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ListView,
  AppRegistry,
} from 'react-native';

export default class SettingsScreen extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to MapScreen!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
