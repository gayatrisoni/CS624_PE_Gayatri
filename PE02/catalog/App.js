import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image 
          style = {{
            width: 200,
            height: 200,
            borderRadius: 100,
            marginTop: 15,}}
          source={require('./assets/icon.png')} />

        <View style = {styles.margin}>
          <Text>Which course did you like?</Text>
          <TextInput  style = {styles.textInput} 
            defaultValue="ex : cs624"
          />
        </View>
        
        <View style={ styles.color}>
          <Text style = {styles.baseText}>Core Requirements</Text>
          <Text style = {styles.baseText}>(24 credits)</Text>
        </View>

        <View>
          <Text>CS 504 Software Engineering</Text>
          <Text>CS 506 Programming for Computing</Text>
          <Text>CS 519 Cloud Computing Overview</Text>
          <Text>CS 533 Computer Architecture</Text>
          <Text>CS 547 Secure Systems and Programs </Text>
          <Text>CS 475 Artificial Intelligence</Text>
          <Text>CS 469 Data Structures and Algorithms in Computing</Text>
          <Text>DS 620 Machine Learning & Deep Learning</Text>
        </View>

        <View style={ styles.color}>
          <Text style = {styles.baseText}>Depth of study (6 credits)</Text>
        </View>

        <View>
          <Text>CS 624 Full-Stack Development </Text>
          <Text>CS 628 Full-Stack Development II </Text>
        </View>
        </View>
      </ScrollView>
    
  );
}

// styling 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 15,
    padding : 20,
    justifyContent:'space-between',
    borderColor : 'yellow'
  },
  baseText : {
    fontWeight: 'bold' 
  },

  color : {
    backgroundColor : 'yellow',
    justifyContent:'space-between',
    marginTop: 15,
  },

  textInput : {
    height : 40,
    borderColor : 'gray',
    borderWidth : 1,
    width : 200,
  },

  margin : {
    marginTop: 15,
  }

});

export default App;
