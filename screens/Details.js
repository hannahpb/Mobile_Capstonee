import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const DetailsScreen = ( {route} ) => {
    return(
        <View style = {{ flex: 1, justifyContent: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor:'#E8EBFF'}}>
        
            <Text style={ styles.details}>Category: {route.params.item.aptcategory}</Text>
            <Text style={styles.details}>Date: {route.params.item.aptdate}</Text>
            <Text style={styles.details}>Time: {route.params.item.apttime}</Text>
            <Text style={styles.details}>Purpose: {route.params.item.aptpurpose}</Text>
            <Text style={styles.details}>Verification: {route.params.item.aptverify}</Text>
        </View>





        
       
    );
};
const styles = StyleSheet.create({
  details:{
    color:'black',
    fontSize:25,
    fontFamily:'sans-serif-condensed',
    marginTop:15,



  },
    card: {
        height:40,
        backgroundColor: 'black',
        borderRadius: 20,
        width:350,
        marginTop:30,
        marginLeft:15
    
      },
    
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
  })
export default DetailsScreen;