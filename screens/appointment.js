import React from 'react';
import {View, Image, StyleSheet, Button, Text, TouchableOpacity} from 'react-native';

const AppointmentScreen = ( {navigation} ) => {
    return(
        <View style = {{ flex: 1, alignItems: 'center'}}>
            <Image style={styles.img} source = { require('../images/aptimg.png')}/>
            <Text style={styles.bk}>Book Appointment</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('AptClinic')}>
                <Image style={styles.img2} source = { require('../images/clinicimg.png')}/>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('AptView')}>
                <Image style={styles.img2} source = { require('../images/dental.png')}/>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    img: {
      marginTop: -20,
    },
    bk: {
        marginLeft: -200,
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize:18,
    },
    img2: {
        width:200,
        marginBottom: 30,
        height:150,
    },
  })

export default AppointmentScreen;