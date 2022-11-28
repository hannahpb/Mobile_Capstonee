import React from 'react';
import  {
   Text,
   Image, 
   StyleSheet, 
   View,
   TouchableOpacity,
  } from 'react-native';

const App = ({ navigation }) => {

  return (
    <View style={styles.bgcolor}>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.appButton}>
        <Text style={styles.appButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginForm')} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Login</Text>
      </TouchableOpacity>

      <Image style={styles.bgimage} source={require('../images/loginsign.png')}></Image>


    </View>
  
  )
}

const styles = StyleSheet.create({
  bgcolor:{
   flex: 1,
   backgroundColor:"#6C85BD",
  }, 
  bgimage:{
    width:420,
    height:450,
    marginTop:40,
  },
  appButton: {
    width:250,
    height:50,
    marginLeft:70,
    marginTop:200,
    borderRadius:15,
    backgroundColor:"#FFFFFF"
  },
  appButtonText: {
    fontSize: 30,
    color: "black",
    alignSelf: "center",
    paddingTop:5,
    paddingLeft:10,
    fontFamily:"sans-serif-condensed"
  },
  appButtonContainer: {
    width:250,
    height:50,
    marginLeft:70,
    marginTop:30,
    borderRadius:15,
    backgroundColor:"#FFFFFF"
    
  },
})


export default App;
