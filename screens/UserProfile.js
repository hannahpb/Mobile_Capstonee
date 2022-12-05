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
    TouchableOpacity,
    
   } from 'react-native';
 
   const UserProfile = ({navigation}) => {

    const [data, setData] = useState('');
    const [isLoading, setLoading] = useState(true);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    let parameter = global.id

    const getUserDetails = async () => {
        try {
        const response = await fetch(`http://10.0.2.2:8000/api/edit/${parameter}`);
        const json = await response.json();
        setData(json.useracc);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    useEffect(() => {
        getUserDetails();
    }, []);

    const [chkemail, setchkemail] = useState(false);
    const checkemail = text => {
          let regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  
          if(regex.test(text)){
              setchkemail(false);
          } else {
              setchkemail(true);
          }
      }
    const [checkValidUN, setCheckValidUN] = useState(false);
    const checkUN = text => {
        if (text.length < 4){
            setCheckValidUN(true);
        }else{
            setCheckValidUN(false);
        }
    }
 
    const Update = async () => {
        try{
            const response = await fetch(`http://10.0.2.2:8000/api/update-user/${parameter}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                })
            });
            if ((response).status === 201) {
                setEmail('');
                setUsername('');
                setPw('');
            }
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    const user_validation = () => {
      errors = [];

      let regex2 = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
      if(regex2.test(email) == false){
          errors.push("Invalid Email format")
      }
      if (username.length < 4){
          errors.push("Username should have at least 4 characters")
      }
      if (errors.length == 0){
          Update();
          Alert.alert('User Updated!');
          navigation.navigate('User');
      }else{
          Alert.alert("Error!", errors.join('\n'))
      }
  }
   return (

    <ScrollView>
     <View style={{ alignItems: 'center' }}>  
      <View>
        <Text style={styles.editheader}>Edit Profile</Text>
      </View>
      <View style = {{ marginRight: 150, marginTop: -15 }}>
      </View>
      <View>
        <Text style={{ marginTop: 90, textAlign: 'center', fontSize:20, color:'black', fontFamily:'sans-serif-condensed', marginLeft:-190  }}>First Name: {data.fname}</Text>
        <Text style={{ textAlign: 'center', fontSize:20, color:'black', fontFamily:'sans-serif-condensed',  marginLeft:-170 }}>Last Name: {data.lname}</Text>
        <Text style={styles.user}>Username</Text>
        <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [checkUN(text) ,setUsername(text)] }
            placeholder='Enter Username'
            placeholderTextColor= 'gray'
            maxLength={15} 
            defaultValue={data.username}
            />
        {
          checkValidUN ? (
              <Text style={{ color: 'red' }}>Invalid Username Format</Text>
              ) : (
              <Text></Text>
          )
        }
        <Text style={styles.email}>Email Address</Text>
        <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [checkemail(text) ,setEmail(text)] }
            placeholder='Enter Email'
            placeholderTextColor= 'gray'
            defaultValue={data.email}
            />
          {
            chkemail ? (
                <Text style={{ color: 'red' }}>Invalid Email Format</Text>
                ) : (
                <Text></Text>
            )
            }
        <TouchableOpacity onPress={user_validation} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Update</Text>
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
    fontSize:35,
    fontFamily:'sans-serif-condensed',
    marginTop:40,

   },

   circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor:'#D8DCF4',
    marginLeft:150,
    marginTop:20
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
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginLeft:-10,
    marginTop:12,
  },

  email:{
    padding:10,
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginLeft:-10,
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
 
 
 export default UserProfile;
 