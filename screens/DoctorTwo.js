import React, {} from 'react';
import  {
   Text, 
   StyleSheet, 
   View,
   Image,
   ScrollView,
   
  } from 'react-native';

const DoctorTwo = ({}) => {

  return (

   <ScrollView>
    <View> 
       <Image style={styles.doc} source={require('../images/doct.png')}></Image> 

       <View>
         <Text style={styles.circle}></Text> 
         <Image style={styles.docname} source={require('../images/doc2.png')}></Image>  
       <View>
         <Text style={styles.docheader}>Doctor Elizabeth Jones</Text>
       </View>
       <View>
         <Text style={styles.special}>Residential Dentist</Text>
       </View>
       </View>
         <Text style={styles.about}>About Doctor</Text>
         <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra nulla a
         elit sodales iaculis. Proin volutpat commodo commodo. Proin odio quam, laoreet 
         ac aliquam quis, iaculis at velit. Vestibulum faucibus mi quis dui egestas sodales. Vestibulum at nisl tellus. Vivamus tempor blandit ultrices.</Text>
         
         <View>
           <Text></Text>
         </View>     
       </View>


     </ScrollView>



  )
}
const styles = StyleSheet.create({  
 back:{
   height:20,
   marginTop:50,
   marginLeft:30,
 },

 doc:{
   height:250,
   width:400,
   marginTop:20,

 }, 

 
 circle: {
   height: 80,
   width: 80,
   borderRadius: 50,
   backgroundColor:'#ADE9F7',
   marginLeft:20,
   marginTop:20
 },

  docheader:{
   color:'black',
   textAlign:'center',
   fontWeight:'bold',
   fontSize:20,
   fontFamily:'sans-serif-light',
   marginTop:-60,
   marginLeft: 63
  },

  special:{
   color:'black',
   textAlign:'center',
   fontWeight:'bold',
   fontSize:15,
   fontFamily:'sans-serif-light',
   marginTop:-40,
   marginLeft: -15
  },


 docname:{
   marginLeft:25,
   marginTop:-75,
   height:70,
   width:70
 },

 sched:{
   color:'black',
   textAlign:'center',
   fontWeight:'bold',
   fontSize:20,
   fontFamily:'sans-serif-light',
   marginTop:20,
   marginLeft:-150,
 },

 about:{
   color:'black',
   textAlign:'center',
   fontWeight:'bold',
   fontSize:25,
   fontFamily:'sans-serif-condensed',
   marginTop:30,
   marginLeft:-215,

 },

 description:{
   textAlign:'justify',
   marginLeft:25,
   marginRight:25,
 },

 


})


export default DoctorTwo;