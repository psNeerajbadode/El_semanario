import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import TextFormatted from '../component/TextFormatted';
import Forgotpassword from '../screens/authscreen/Forgotpassword';
import Forgotpassword2 from '../screens/authscreen/Forgotpassword2';
import Login from '../screens/authscreen/Login';
import Login2 from '../screens/authscreen/Login2';
import Splash from '../screens/authscreen/Splash';
import Foryou from '../screens/homescreen/Foryou';
import Homepage from '../screens/homescreen/Homepage';
import Newsdetail from '../screens/homescreen/Newsdetail';
import Sections from '../screens/homescreen/Sections';
import {theme} from '../utiles/Constants';

const Authnavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Login2" component={Login2} />
      <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
      <Stack.Screen name="Forgotpassword2" component={Forgotpassword2} />
      <Stack.Screen name="Tabnavigation" component={Tabnavigation} />
      <Stack.Screen name="Newsdetail" component={Newsdetail} />
    </Stack.Navigator>
  );
};

const Tabnavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={'Homepage'}
      screenOptions={{
        tabBarShowLabel: false,
        //tabBarLabelStyle: {color: theme.colors.Black, fontSize: 13, fontWeight: '500'},
        headerShown: false,
        tabBarStyle: {height: 70, backgroundColor: '#fff', alignItems: 'center'},
      }}>
      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{opacity: 1, alignItems: 'center', marginTop: 10}}>
                <Image
                  source={require('../assets/Icons/Homee.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 24,
                    height: 24,
                  }}
                />
                <TextFormatted style={{fontSize: 12, fontWeight: '500'}}>Today</TextFormatted>
              </View>
            ) : (
              <View style={{opacity: 0.3, alignItems: 'center', marginTop: 10}}>
                <Image
                  source={require('../assets/Icons/Homee.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 24,
                    height: 24,
                    tintColor: theme.colors.OtherText,
                  }}
                />
                <TextFormatted style={{fontSize: 12, fontWeight: '500'}}>Today</TextFormatted>
              </View>
            ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Foryou"
        component={Foryou}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{opacity: 1, alignItems: 'center', marginTop: 10}}>
                <Image
                  source={require('../assets/Icons/Star.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 24,
                    height: 24,
                    tintColor: theme.colors.primary,
                  }}
                />
                <TextFormatted style={{fontSize: 12, fontWeight: '500'}}>For You</TextFormatted>
              </View>
            ) : (
              <View style={{opacity: 0.3, alignItems: 'center', marginTop: 10}}>
                <Image
                  source={require('../assets/Icons/Star.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 24,
                    height: 24,
                    tintColor: theme.colors.OtherText,
                  }}
                />
                <TextFormatted style={{fontSize: 12, fontWeight: '500'}}>For You</TextFormatted>
              </View>
            ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Sections"
        component={Sections}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{opacity: 1, alignItems: 'center', marginTop: 10}}>
                <Image
                  source={require('../assets/Icons/sections.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 24,
                    height: 24,
                    tintColor: theme.colors.primary,
                  }}
                />
                <TextFormatted style={{fontSize: 12, fontWeight: '500'}}>Sections</TextFormatted>
              </View>
            ) : (
              <View style={{opacity: 0.3, alignItems: 'center', marginTop: 10}}>
                <Image
                  source={require('../assets/Icons/sections.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 24,
                    height: 24,
                    tintColor: theme.colors.otherText,
                  }}
                />
                <TextFormatted style={{fontSize: 12, fontWeight: '500'}}>Sections</TextFormatted>
              </View>
            ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Authnavigation;

const styles = StyleSheet.create({});
