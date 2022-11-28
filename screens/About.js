/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {} from 'react';
 import  {
    Text, 
    StyleSheet, 
    View,
    Image,
   } from 'react-native';
 
 const About = ({}) => {
 
   return (
     <View style={styles.container}>
        <View style={styles.shape}></View>
      
        <View>
          <Text style={styles.headerText}>About</Text> 
        </View>

         <Image style={styles.img} source={require('../images/logo1.png')}></Image>

        <View>
          <Text style={styles.hippo}>----------Hippo - Campus----------</Text> 
        </View>


        <View style={styles.mainCardView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.hippobody}>Hippo - Campus is a mobile and web based system 
                                          that is ideal for student, faculty and clinic personnel
                                          and the software and mobile application enables to 
                                          work on a various platforms and locations. 
                                          Hippo - Campus innovative system provides health 
                                          record management of the students of the students 
                                          and faculties. </Text>
          </View>
          </View>

            <View>
              <Text style={styles.dev}>Developers</Text> 
              <Image style={styles.img1} source={require('../images/jc.jpg')}></Image>
              <Text style={styles.name}>JCQ Dimazana</Text>
              <Image style={styles.img2} source={require('../images/hannah.jpg')}></Image>
              <Text style={styles.name1}>HPA Bacera</Text>
              <Image style={styles.img3} source={require('../images/maverick.jpg')}></Image>
              <Text style={styles.name2}>MG Del Moro</Text>
            </View>
            <View>
              <Text style={styles.end}>Ⓒ All rights reserved </Text>
            </View>      
        </View>


 
   )
 }
 
 const styles = StyleSheet.create({
   container:{
    flex: 1,
    justifyContent:"center",
    marginTop:70,
   }, 


   shape:{
    marginTop:-90,
    width:'100%',
    height:100,
    backgroundColor:"#011387",
   },

   headerText:{
     fontSize:35,
     fontWeight:"bold",
     marginTop:-60,
     fontFamily:"sans-serif",
     color:"white",
     marginLeft:50,

   },

   img:{
    width:150,
    height:200,
    marginTop:-10,
    marginLeft:115,
  },

  hippo:{
    marginLeft:100,
  },

  mainCardView: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 20,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },

  hippobody:{
    textAlign:'center',
    marginTop:-20,
    fontSize:16,
  },

  dev:{
    fontSize:15,
    marginLeft:150,
    paddingTop:25,
    fontWeight:'bold'
  },

  
  img1:{
    width:50,
    height:50,
    marginTop:15,
    marginLeft:50,
  },

  img2:{
    width:50,
    height:50,
    marginTop:-60,
    marginLeft:165,
  },

  img3:{
    width:50,
    height:50,
    marginTop:-60,
    marginLeft:280,
  },

  name:{
    fontSize:9,
    fontFamily:'monospace',
    marginLeft:38,
    fontWeight:'bold'


  },

  name1:{
    fontSize:8,
    fontFamily:'monospace',
    marginLeft:165,
    fontWeight:'bold'

  },

  name2:{
    fontSize:8,
    fontFamily:'monospace',
    marginLeft:280,
    fontWeight:'bold'

  },

  end:{
    textAlign:'center',
    marginTop:15,
    fontSize:10,
    fontWeight:'bold'

  }

  

   






   
 
 })
 
 
 export default About;
 