import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const NotifScreen = ( {navigation} ) => {
    return(
        <View style = {{ flex: 1, justifyContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Notification View</Text>
            <TouchableOpacity style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
};
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
  })
export default NotifScreen;