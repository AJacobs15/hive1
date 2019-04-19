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
    AppRegistry
    
} from 'react-native';

export default class Header extends Component{
    render() {
        return (
        
                <ImageBackground style={styles.headerBackground} source={require('../../assets/images/wrap.jpg')}>
                
                    <View style = {styles.header}>
                
                        <View style = {styles.profilepicWrap}>
                            <Image style = {styles.profilepic} source = {require('../../assets/images/art.jpg')}/>
                        </View>
                
                        <Text style={styles.name1}>Arthur Jacobs</Text>
                        <Text style={styles.name2}>Chief Visionary Officer</Text>
                        <Text style={styles.name3}>30 Combs</Text>
                
                    </View>
                
                </ImageBackground>
        
            );
    }
}

const styles = StyleSheet.create({
     headerBackground: {
         flex: 1,
         width: null,
         alignSelf: 'stretch'
     },
     
     header: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
         padding: 20,
         backgroundColor: 'rgba(0,0,0,0.5)',
     },
                                 
     profilepicWrap: {
         width: 180,
         height: 180,
         borderRadius: 100,
         borderColor: 'rgba(0,0,0, 0.4)',
         borderWidth: 16,
                                 
     },
            
     profilepic: {
         flex: 1,
         width: null,
         alignSelf: 'stretch',
         borderRadius: 100,
         borderColor: '#fff',
         borderWidth: 4
     },
     
     name1: {
         marginTop: 20,
         fontSize: 16,
         color: '#fff',
         fontWeight: 'bold'
     },
     
     name2: {
         fontSize: 14,
         color: '#0394c0',
         fontWeight: '300',
         fontStyle: 'italic'
     },
                                 
     name3: {
         fontSize: 18,
         color: '#f4883d',
         fontWeight: 'bold',
     }
                                 
                                 
 });

