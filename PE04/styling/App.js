import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import update from 'immutability-helper'; 
import { Platform, Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native'; 

const userImage = require('./user.png');

const data = [{
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  },

  
  
  
];

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {  
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress}> 
      <View style={[containerStyles]}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image}/>
        </View>
        <View>
          <Text style={styles.cardName}>
            {name}
          </Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>
            {occupation}
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  )
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      data: data
    }
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
    });
  };
  
  render() {
    const list = this.state.data.map(function(item, index) { 
      const { image, name, occupation, description, showThumbnail } = item;
      return(
        <ProfileCard key={'card-' + index}
                      image={image}
                      name={name}
                      occupation={occupation}
                      description={description}
                      onPress={() => this.handleProfileCardPress(index)}
                      showThumbnail={showThumbnail}/>
      ); 
    }, this);

    const rows = [];
    for (let i = 0; i < list.length; i += 2) {
      const row = (
        <View key={i/2} style={styles.cardRow}>
          {list.slice(i, i + 2)}
        </View>
      );
      rows.push(row);
    }

    return (
      <View style={styles.container}>
        <View style={[styles.wrapContainer]}>
          {rows} 
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
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 140,
    marginBottom: 20,
    height: 200,
    ...Platform.select({ 
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 60,
    height: 60,
    borderRadius: 60,
    marginTop: 15,
    paddingTop: 7,
    ...Platform.select({ 
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1
      },
      android: {
        borderWidth: 3,
        borderColor: 'black',
        elevation: 15
      }
    })
  },
  cardImage: {
    width: 40,
    height: 40
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 15,
    textShadowColor: 'black',
    textShadowOffset: {
        height: 5,
        width: 5
    },
    textShadowRadius: 3 
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 2
  },
  cardOccupation: {
    fontSize: 8,
    fontWeight: 'bold', 
    marginTop: 5,
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 7,
    fontStyle: 'italic', 
    marginTop: 5,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10
  },
  cardThumbnail: {
    transform: [{scale: 0.5}]
  },
  wrapContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});