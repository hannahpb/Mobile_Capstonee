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
    ScrollView,
   } from 'react-native';
 
 const Policy = ({}) => {
 
   return (
     <View style={styles.container}>
        <View style={styles.shape}></View>
      
        <View>
          <Text style={styles.headerText}>Policy</Text> 
         </View>
      
      <ScrollView>

        <View>
          <Text style={styles.title}>The following information summarizes some of the key policies that govern the University Clinic and nursing care functions. The University Clinic's primary responsibilities are as follows:</Text> 
        </View>

        <View>
         <Text  style={styles.one}>1. Students and faculties who are ill or injured should be given first aid or emergency care.</Text> 
        </View>
        <View>
         <Text  style={styles.two}>2. Students and faculties should be evaluated to detect early signs and symptoms of health issues that may interfere with their learning and teaching.</Text> 
        </View>
        <View>
         <Text  style={styles.three}>3. Administer nursing care in accordance with the students' and employees' identified nursing needs.</Text> 
        </View>
        <View>
         <Text  style={styles.four}>4. Plan, implement, and assess a health education program for students and faculties.</Text> 
        </View>

        <View>
          <Text style={styles.title1}>Policy on Accident and Emergencies</Text> 
        </View>

        <View>
         <Text  style={styles.five}>1.In the event of an accident or an emergency, 
         the University Nurse or other school personnel must notify the parents or guardians. Please ensure that all contact information is up to date with the university so that we can reach you in an emergency.</Text> 
        </View>

        <View>
         <Text  style={styles.six}>2.Before transferring sick or injured students to an emergency care institution, the University Nurses should ensure that their parents or guardians have authorized the administration of emergency medical treatment.</Text> 
        </View>

        
        <View>
          <Text style={styles.title2}>Confidentiality Policy</Text> 
        </View>

        
        <View>
         <Text  style={styles.seven}>2.Except with written permission from the parents or guardians, information in the student's and faculties University Health Record will not be released to third parties.</Text> 
        </View>
  

      </ScrollView>
        
      
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
    marginTop:-70,
    width:'100%',
    height:100,
    backgroundColor:"#011387",
   },

   headerText:{
     fontSize:35,
     fontWeight:"bold",
     marginTop:-70,
     fontFamily:"sans-serif",
     color:"white",
     marginLeft:50,

   },

   title:{
    fontSize:18,
    marginTop:30,
    marginLeft:2,
    color:"black",
    fontFamily:"serif",
    textAlign:'center',
   },

   one:{
    textAlign:'justify',
    color:'black',
    marginTop:20,
    marginLeft:10,
    fontSize:16,
    fontFamily:"sans-serif-light",

   },

   two:{
    textAlign:'justify',
    color:'black',
    marginTop:5,
    marginLeft:10,
    fontSize:16,
    fontFamily:"sans-serif-light",
   
   },


   three:{
    textAlign:'justify',
    color:'black',
    marginTop:5,
    marginLeft:10,
    fontSize:16,
    fontFamily:"sans-serif-light",

   },


   four:{
    textAlign:'justify',
    color:'black',
    marginTop:5,
    marginLeft:10,
    fontSize:16,
    fontFamily:"sans-serif-light",
   },

   title1:{
    fontSize:15,
    marginTop:25,
    marginLeft:-90,
    color:"black",
    fontWeight:'bold',
    fontFamily:"serif",
    textAlign:'center'
   },

   
   five:{
    textAlign:'justify',
    color:'black',
    marginTop:5,
    marginLeft:10,
    fontSize:16,
    fontFamily:"sans-serif-light",
   },

   six:{
    textAlign:'justify',
    color:'black',
    marginTop:5,
    marginLeft:10,
    fontSize:16,
    fontFamily:"sans-serif-light",
   },

   title2:{
    fontSize:15,
    marginTop:10,
    marginLeft:-200,
    color:"black",
    fontWeight:'bold',
    fontFamily:"serif",
    textAlign:'center'
   },

   seven:{
    textAlign:'justify',
    color:'black',
    marginTop:5,
    marginLeft:10,
    fontSize:16,
    fontFamily:"sans-serif-light",
   },









   
 
 })
 
 
 export default Policy;
 