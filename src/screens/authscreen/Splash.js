import {ImageBackground, StyleSheet, Text, useWindowDimensions, View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  const dimension = useWindowDimensions();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);

  return (
    <ImageBackground
      resizeMode="cover"
      style={{
        width: dimension.width,
        height: '100%',
        justifyContent: 'center',
      }}
      source={require('../../assets/Images/splash.png')}>
      <StatusBar hidden={true} />
      <Image
        resizeMode="contain"
        style={{
          width: dimension.width / 2,
          height: dimension.width / 2,
          alignSelf: 'center',
        }}
        source={require('../../assets/Icons/logo1.png')}
      />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({});
