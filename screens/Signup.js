import React, { useState, useEffect } from 'react';
import {View, Button, Text, TextInput, StyleSheet, Alert, TouchableOpacity} from 'react-native';

const Signup = ( {navigation} ) => {
    const [name, setUsername] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const AddUser = async () => {
        try{
            const response = await fetch('http://10.0.2.2:8000/api/mregister', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: name,
                    fname: fname,
                    lname: lname,
                    email: email,
                    password: pw,
                })
            });
            if ((response).status === 201) {
                setUsername('');
                setFname('');
                setLname('');
                setEmail('');
                setPw('');
            }
            Alert.alert('User Created!');
            navigation.navigate('LoginForm');
        const json = await response.json();
        setData(json.useracc);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    const [chkemail, setchkemail] = useState(false);
    const checkemail = text => {
          let regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  
          if(regex.test(text)){
              setchkemail(false);
          } else {
              setchkemail(true);
          }
      }

    return(
        <View style = {{ flex: 1, justifyContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.ovalShape}></View>
            <View>
                <Text style={styles.headerText}>'Hippo-Campus'</Text> 
            </View>

            <View>
                <Text style={styles.subheaderText}>MSEUF’s first beta web based and mobile 
                application clinic management system </Text> 
            </View>

                
            <View>
                <Text style={styles.titlesign}>SIGNUP</Text> 
            </View>

            <TextInput 
            style = { styles.input1 }
            onChangeText = { (text) => [setUsername(text)] }
            placeholder='Enter Username'
            placeholderTextColor= 'gray'
            maxLength={15} 
            />
            <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setFname(text)] }
            placeholder='Enter First Name'
            placeholderTextColor= 'gray'
            maxLength={30} 
            />
            <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setLname(text)] }
            placeholder='Enter Last Name'
            placeholderTextColor= 'gray'
            maxLength={30} 
            />
            <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [checkemail(text), setEmail(text)] }
            placeholder='Enter Email'
            placeholderTextColor= 'gray'
            />
            {
            chkemail ? (
                <Text style={{ color: 'red' }}>Invalid Email Format</Text>
                ) : (
                <Text></Text>
            )
            }
            <TextInput 
            style = { styles.input2 }
            onChangeText = { (text) => [setPw(text)] }
            placeholder='Enter Password'
            placeholderTextColor= 'gray'
            secureTextEntry
            />

        <TouchableOpacity 
         style={styles.button}
         title='Sign Up'
         onPress={ AddUser }
            >
        <Text style={styles.text}>Signup</Text>
        </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    ovalShape:{
        marginTop:-10,
        width:250,
        height:120,
        borderRadius:90,
        transform: [{scale:2}],
        backgroundColor:"#6C85BD",
        opacity:0.3,
       },

       titlesign:{
        fontSize:50,
        marginTop:90,
        color:"black",
        fontFamily:"sans-serif-condensed",
       },

    input: {
        marginTop:10,
        paddingTop:5,
        borderWidth:1,
        borderRadius:10,
        marginBottom:10,
        width:290,
    },
    input1: {
        marginTop:15,
        paddingTop:5,
        borderWidth:1,
        borderRadius:10,
        marginBottom:10,
        width:290,
    },
    input2: {
        marginTop:-10,
        paddingTop:5,
        borderWidth:1,
        borderRadius:10,
        marginBottom:10,
        width:290,
    },

    headerText:{
        fontSize:32,
        textAlign:"center",
        fontWeight:"bold",
        marginTop:-80,
        fontFamily:"sans-serif-light",
        color:"black"
    
      },
      subheaderText:{
       fontSize:13,
       textAlign:"center",
       marginTop:-30,
       color:"black",
       fontWeight:"bold",
       fontFamily:"sans-serif-thin",
       justifyContent:"center",
     
     },

     text: {
        fontSize: 30,
        color: "white",
        alignSelf: "center",
        paddingLeft:5,
        fontFamily:"sans-serif-condensed"
      },
      button:{
       backgroundColor:'#011387',
       height:40,
       width:205,
       borderRadius:10,
       marginTop:15,
       marginLeft:5,
     },

})

export default Signup;