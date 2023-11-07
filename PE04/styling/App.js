import React, { Component } from 'react';
import { Image, StyleSheet, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage}        
                               source={require('./user.png')}/>         
                    </View>
                </View>
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue';  

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: { 
        alignItems: 'center',  
        backgroundColor: profileCardColor,
        borderColor: 'black', 
        borderWidth: 3,  
        borderStyle: 'solid',
        borderRadius: 30,
        width: 300,
        height: 400
    },
    cardImageContainer: {  
        alignItems: 'center',      
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 20,     
        paddingTop: 15 
    },
    cardImage: {        
        width: 80,
        height: 80,
        
    }
});