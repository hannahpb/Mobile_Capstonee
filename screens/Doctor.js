import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator, FlatList, ScrollView, Touchable} from 'react-native';

const DoctorScreen = ( {navigation} ) => {

    return(
        <View style={{ flex:1, }}>
            <View style = {{ backgroundColor: "#011387",flex: 0.4}}>
                <Text style={{ marginTop: 1 }}></Text>
                <Image style={styles.gt2} source = { require('../images/userpic.png')}/>
                <Text style = {styles.gt3}>{global.username}</Text>
                <Text style = {styles.gt4}>{global.email}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Image style={styles.gt5} source = { require('../images/logo2.png')}/>
                </TouchableOpacity>
            </View>
            <View style = {{ backgroundColor: "white",flex: 1, borderRadius:20, marginTop: -95, alignItems:'center', alignContent: 'center'}}>
                <View style={{ marginLeft: 15, marginTop: 15,}}>
                    <Text style={styles.an}>Specialists</Text>
                </View>
                <View style={{ marginTop: -50 }}>
                    <TouchableOpacity onPress={() => {navigation.navigate('DoctorOne')}}>
                        <View style={styles.container}>
                            <Image style={styles.imgdoc} source = { require('../images/doc3.png')}/>
                            <View style={{ marginTop: -65, marginLeft: 100 }}>
                                <Text style={{ textAlign: 'left', color: 'black', fontWeight:'bold', fontSize: 18 }}>Dr. Michael Folly</Text>
                                <Text style={{ textAlign: 'left', fontSize: 14 }}>Residential Doctor</Text>
                                <Text style={{ textAlign: 'left', fontSize: 12 }}>Click Here for More Info</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate('DoctorTwo')}}>
                        <View style={styles.container}>
                            <Image style={styles.imgdoc} source = { require('../images/doc2.png')}/>
                            <View style={{ marginTop: -65, marginLeft: 100 }}>
                                <Text style={{ textAlign: 'left', color: 'black', fontWeight:'bold', fontSize: 18 }}>Dr. Elizabeth Jones</Text>
                                <Text style={{ textAlign: 'left', fontSize: 14 }}>Residential Dentist</Text>
                                <Text style={{ textAlign: 'left', fontSize: 12 }}>Click Here for More Info</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    imgdoc: {
        width:70,
        height:70,
        borderRadius: 50,
        marginTop: 15,
        marginLeft: 10,
    },
    txt: {
        color: 'black',
        textAlign:'center',
        fontSize: 15,
    },
    container: {
        backgroundColor: '#DBE0FC',
        width: 350,
        borderRadius: 10,
        height: 100,
        marginTop: 15
    },
    ref: {
        backgroundColor: 'white',
        color: 'black',
        textAlign:'center',
        fontSize: 15,
        padding: 10,
        width: 100,
        borderRadius: 20,
        marginLeft: 240,
        marginTop: -10,
    },
    txt1: {
        color: 'black',
        textAlign:'center',
        fontSize: 12,
    },
    cont: {
        backgroundColor: '#DBE0FC',
        width: 160,
        borderRadius: 10,
        height: 70,
        marginTop: 10
    },
    cont1: {
        backgroundColor: '#DBE0FC',
        width: 160,
        borderRadius: 10,
        height: 70,
        marginTop: 10,
        marginLeft:200
    },
    an: {
        marginTop:30,
        marginBottom: 55,
        fontWeight:'bold',
        color: 'black',
        fontSize:25
    },
    sp: {
        marginLeft:250,
        marginTop:-73,
        fontWeight: 'bold',
        color: 'black'
    },
    editprof: {
      backgroundColor: 'white',
      padding:5,
      borderRadius: 20,
      width: 150,
      alignItems: 'center',
      marginTop:15,
    },
    gt: {
        width:10,
        height:10,
        marginLeft: 110,
        marginTop: -12,
      },
    gt2: {
        width:50,
        height:50,
        borderRadius: 50,
        marginTop: 15,
        marginLeft: 10,
    },
    gt5: {
        width:100,
        height:100,
        borderRadius: 50,
        marginTop: -60,
        marginLeft: 270,
        },
    gt3: {
        color: 'white',
        marginLeft: 75,
        marginTop: -45,
        fontSize: 15,
        },
    gt4: {
        color: 'white',
        marginLeft: 75,
        fontSize:11,
        },
    gt1: {
        width:10,
        height:10,
        marginLeft: 290,
        marginTop: -12,
      },
  })
export default DoctorScreen;