import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, TextInput,TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';

const MedCert = ( {navigation} ) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    let parameter = global.fname

    const getMed = async () => {
        try {
        const response = await fetch(`http://10.0.2.2:8000/api/medi/${parameter}`);
        const json = await response.json();
        setData(json.reqmed);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    useEffect(() => {
        getMed();
    }, []);

    return(
        <View style = {{ padding: 30 }}>
            <Text style={styles.headerText}>Medical Certificate</Text>  

            <View>
            <Text style={styles.letter}>To Whom It May Concern:</Text> 
            </View>

            <View>
            <Text style={styles.body}>This is to certify that </Text>
            <TextInput style={styles.body1}>
            </TextInput>
            <Text style={styles.body2}>that he/she </Text>
            <TextInput style={styles.body3}>
            </TextInput>
            <Text style={styles.body4}>
                to participate to the said event
                and given permission by the resendential doctor.
            </Text>
            </View>

            <View>
              <Text style={{ marginLeft: 180, marginTop: 20 }}>_______________________</Text>   
              <Text style={styles.closing1}>Attending Doctor</Text> 
            </View>
            {isLoading ? <ActivityIndicator/> : (
            <FlatList
                style = {{ marginTop: -140, marginLeft: 165 }}
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <View>
                        <Text style = {styles.txt}>{item.fname}, {item.lname}</Text>
                    </View>
                )}
            />
            )}
            {isLoading ? <ActivityIndicator/> : (
            <FlatList
                style = {{ marginTop: 1, marginLeft: 120 }}
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <View>
                        <Text style = {styles.txt}>{item.verdict}</Text>
                    </View>
                )}
            />
            )}
            {isLoading ? <ActivityIndicator/> : (
            <FlatList
                style = {{ marginTop: 55, marginLeft: 200 }}
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <View>
                        <Text style = {styles.txt}>{item.doctor}</Text>
                    </View>
                )}
            />
            )}

        </View>
    );
}
export default MedCert;
const styles = StyleSheet.create({
    appButtonText: {
      fontSize: 30,
      color: "white",
      alignSelf: "center",
      fontFamily:"sans-serif-condensed"
    },
    appButtonContainer: {
        backgroundColor:'#4350A8',
        height:40,
        width:205,
        borderRadius:10,
        marginTop:50,
    },
    txt: {
        color: 'black',
    },
    container:{
        flex:1,
        marginTop:25,
      },
      
      card: {
        backgroundColor: '#ededed',
        borderRadius: 28,
        paddingVertical: 50,
        paddingHorizontal: 25,
        width:360,
        marginVertical: 50,
        marginLeft:15,   
      },
    
       headerText:{
         fontSize:32,
         textAlign:"center",
         fontWeight:"bold",
         marginTop:50,
         fontFamily:"monospace",
         color:"black"
      },
    
      letter:{
        marginTop:25,
        fontWeight:'bold',
        fontSize:20,
        color:'black',
        marginLeft:10,
      },
    
      body:{
        marginTop:25,
        fontSize:15,
        color:'black',
        marginLeft:10,
      },
    
      body1:{
        marginTop:-33,
        marginLeft:160,
        color: 'white'
      },
    
      body2:{
        marginTop:-15,
        fontSize:15,
        color:'black',
        marginLeft:10,
      },
    
      body3:{
        marginTop:-35,
        marginLeft:110,
        color: 'white'
      },
    
      body4:{
        marginTop:-10,
        fontSize:15,
        color:'black',
        marginLeft:10,
      },
    
    
      closing:{
        marginLeft:205,
        color:'black',
        marginTop:-20,
      },
    
      closing1:{
        marginLeft:200,
        color:'black',
      },
    
      img:{
        width:90,
        height:90,
        marginTop:100,
        marginLeft:210,
      }
  })
