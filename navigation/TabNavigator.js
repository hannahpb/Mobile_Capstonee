import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import IndexScreen from '../screens/index';
import AppointmentScreen from '../screens/appointment';
import ReqMed from "../screens/reqmedcert";
import UserScreen from "../screens/User";
import { Button , Image} from "react-native";
import HScreen from "../screens/home";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HScreen} options = {{ 
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../images/homeblue.png')
                  : require('../images/home.png')
              }
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
          headerShown: false,

        }}/>
          <Tab.Screen name="Appointments" component={IndexScreen} options = {{ 
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../images/indexblue.jpg')
                  : require('../images/index.jpg')
              }
              style={{
                width: 22,
                height: 22,
              }}
            />
          ),
          headerShown: false,

        }}/>
            <Tab.Screen name="RequestMedicalCertificate" component={ReqMed} options = {{ 
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../images/requestblue.png')
                  : require('../images/request.png')
              }
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
          headerShown: false,

        }}/>
            <Tab.Screen name="Appointment" component={AppointmentScreen} options = {{ 
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../images/aptblue.png')
                  : require('../images/apt.png')
              }
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
          headerShown: false,

        }}/>
            <Tab.Screen name="User" component={UserScreen} options = {{ 
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../images/userblue.png')
                  : require('../images/user.png')
              }
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
          headerShown: false,

        }}/>
        </Tab.Navigator>
    );
    
}

export default TabNavigator;