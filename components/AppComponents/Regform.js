import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ListView,
    TextInput,
    Button,
    Touch,
    AppRegistry
    
} from 'react-native';

export default class Regform extends React.Component{
    render() {
        return (
    
                <View style={styles.regform}>
                    <Text style = {styles.header}> See Some Free Food? Post It! </Text>
                    <TextInput style={styles.textinput} placeholder="Building" underlineColorAndroid={'transparent'}/>
                    <TextInput style={styles.textinput} placeholder="Description" underlineColorAndroid={'transparent'}/>
                    /*<TouchableOpacity style = {styles.button}>
                        <Text style={styles.btntext}>Add to your Hive!</Text>
                       // onPress = {this.handleSubmit}
                    </TouchableOpacity>*/
                </View>
        );
    }
}

const styles = StyleSheet.create({

     regform: {
     alignSelf: 'stretch',
     },
     
     header: {
     fontSize: 24,
     color: '#fff',
     paddingBottom: 10,
     marginBottom: 40,
     borderBottomColor: '#fccb00',
     borderBottomWidth: 1,
     },
     
     textinput: {
     alignSelf: 'stretch',
     height: 40,
     marginBottom: 30,
     color: '#fff',
     borderBottomColor: '#f8f8f8',
     borderBottomWidth: 1,
     
     },
     
     button: {
     alignSelf: 'stretch',
     alignItems: 'center',
     padding: 20,
     backgroundColor: '#fccb00',
     marginTop: 30,

     },
     
     btntext: {
     fontWeight: 'bold',
     }
     
                                 

 });

