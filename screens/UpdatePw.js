import React, { useState, useEffect } from 'react';
 import  {
    Text, 
    StyleSheet, 
    View,
    Image,
    ScrollView,
    TextInput,
    Button,
    Alert,
    TouchableOpacity
    
   } from 'react-native';
 
 const UpdatePw = ({navigation}) => {

    const [pw, setPw] = useState('');

    let x = global.email;

    const myfun = async () => {
        await fetch('http://10.0.2.2:8000/api/mlogin', {
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({'email':x, 'password':pw})
        }).then(res => res.json())
        .then(resData =>{
          if ("error" in resData) {
            alert('Login Credentials do not match')
            console.log(resData)
          } else {
            navigation.navigate('NewPw')
          }
        })
      }
 
   return (

    <ScrollView>
     <View style={{ flex:1, alignItems: 'center', }}>  
      <View>
        <Text style={styles.editheader}>Update Password</Text>
      </View>
      <View style = {{ marginRight: 150, marginTop: -15 }}>
      </View>
      <View>
        <Text style={styles.user}>Enter Old Password</Text>
        <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setPw(text)] }
            placeholder='Enter Old Password'
            placeholderTextColor= 'gray'
            secureTextEntry
            />

                    
        <TouchableOpacity onPress={myfun} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Submit</Text>
        </TouchableOpacity>

      </View>
        
      </View>
      </ScrollView>


 
   )
 }
 const styles = StyleSheet.create({  
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#011387",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop:10
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },


  back:{
    height:20,
    marginTop:50,
    marginLeft:30,
  },
  input: {
    marginTop:10,
    paddingTop:5,
    borderWidth:1,
    borderRadius:10,
    marginBottom:10,
    width:290,
},
   editheader:{
    color:'black',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:30,
    fontFamily:'sans-serif-condensed',
    marginTop:40,

   },


  edit:{
    marginLeft:170,
    marginTop:-70
  },

  circle1: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor:'white',
    marginLeft:160,
    marginTop:-90
  },

  name:{
    padding:10,
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginLeft:20,
    marginTop:12,
  },

  user:{
    padding:10,
    fontSize:15,
    color:'black',
    fontWeight:'bold',
    alignSelf:'center',
    marginTop:12,
  },

  email:{
    padding:10,
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginLeft:20,
    marginTop:12,
  },

  uname:{
    padding:10,
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginLeft:20,
    marginTop:12,
  },

  password:{
    padding:10,
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginLeft:20,
    marginTop:12,
  },

  birth:{
    padding:10,
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginLeft:20,
    marginTop:12,
  },

  rectangle: {
    height: 50,
    width: 340,
    borderRadius: 10,
    backgroundColor:'#D8DCF4',
    marginLeft:30,
    marginTop:10
  },

  rectangle1: {
    height: 50,
    width: 340,
    borderRadius: 10,
    backgroundColor:'#D8DCF4',
    marginLeft:30,
    marginTop:10
  },

  rectangle2: {
    height: 50,
    width: 340,
    borderRadius: 10,
    backgroundColor:'#D8DCF4',
    marginLeft:30,
    marginTop:10
  },

  rectangle3: {
    height: 50,
    width: 340,
    borderRadius: 10,
    backgroundColor:'#D8DCF4',
    marginLeft:30,
    marginTop:10
  },

  rectangle4: {
    height: 50,
    width: 340,
    borderRadius: 10,
    backgroundColor:'#D8DCF4',
    marginLeft:30,
    marginTop:10
  },

  rectangle5: {
    height: 50,
    width: 340,
    borderRadius: 10,
    backgroundColor:'#D8DCF4',
    marginLeft:30,
    marginTop:10
  },  
 
 })
 
 
 export default UpdatePw;
 