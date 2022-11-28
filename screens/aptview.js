import React, { useState, useEffect } from 'react';
import {View, Button, Text, TextInput, StyleSheet, Alert, TouchableOpacity, Modal} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { MDPicker } from './components/MD';

const AptView = ( {navigation} ) => {
    const [name, setName] = useState('');
    const [purpose, setPurpose] = useState('');

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [t, setT] = useState('Select Time...');

    const [isModalVisible, setisModalVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        var today = new Date()
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: false,
            minimumDate: (today),
            maximumDate: (new Date(today.getFullYear(), today.getMonth(), today.getDate()+7)),
            minuteInterval: (10),
        }, 
        );
    };

    const showDatepicker = () => {
        showMode('date');

    };


    var x = global.id
    var y = global.fname
    var z = global.lname
    var v_ver = "Processing"
    var ct = "Dental"

    const getApt = async () => {
        try {
        const response = await fetch('http://10.0.2.2:8000/api/appointment');
        const json = await response.json();
        setData(json.appointment);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    useEffect(() => {
        getApt();
    }, []);

    const AddApt = async () => {
        try{
            const response = await fetch('http://10.0.2.2:8000/api/addapt', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fname: y,
                    lname: z,
                    aptcategory: ct,
                    aptdate: date.toLocaleDateString(),
                    apttime: t,
                    aptpurpose: purpose,
                    aptverify: v_ver,
                    user_id: x,
                })
            });
            if ((response).status === 201) {
                setName('');
                setCategory('');
                setDate('');
                setT('');
                setPurpose('');
                setid('');
            }
            Alert.alert('Appointment Set!');
            navigation.navigate('Appointment');
        const json = await response.json();
        setData(json.appointment);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const settheData = (option) => {
        setChooseData(option)
    }

    const cmv = (bool) => {
        setModalVisible(bool)
    }

    const sd = (option) => {
        setT(option)
    }

    return(
        <View style = {{ flex: 1, justifyContent: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor:'#E8EBFF'}}>
            
            <Text style={styles.appt1}>{ct} Appointment</Text>

            <TouchableOpacity onPress={showDatepicker} style={styles.appButtonContainer1}>
                <Text style={styles.appButtonText}>Select Date</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.opt} onPress={() => cmv(true) }>
                <Text>{t}</Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType='fade'
                visible={modalVisible}
                nRequestClose={() => cmv(false)}
            >
                <MDPicker 
                    changeModalVisibility={cmv}
                    setData={setT}
                />
            </Modal>

            <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setPurpose(text)] }
            placeholder='Enter purpose'
            placeholderTextColor= 'gray'
            />

            <TouchableOpacity onPress={ AddApt } style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Set Appointment</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    appt1:{
        fontSize:35,
        fontFamily:'sans-serif-condensed',
        marginTop:-25,
        color:'black'

    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#011387",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop:35
      },
      appButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      appButtonContainer1: {
        elevation: 8,
        backgroundColor: "#011387",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop:50
      },
    input: {
        marginTop:10,
        paddingTop:5,
        borderWidth:1,
        borderRadius:10,
        marginBottom:10,
        width:290,
    },
    opt: {
        marginTop:10,
        paddingTop:12,
        paddingBottom:12,
        borderWidth:1,
        borderRadius:10,
        marginBottom:10,
        width:290,
    }
})

export default AptView;