import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {theme} from '../utiles/Constants';
import Statusbar from './Statusbar';

const Header = ({Center, source, R_onPress}) => {
  return (
    <View style={{backgroundColor: theme.colors.Black, justifyContent: 'center', paddingTop: 20, paddingBottom: 5}}>
      <Statusbar translucent={false} backgroundColor={theme.colors.Black} barStyle={'light-content'} />
      <View style={{flexDirection: 'row', marginHorizontal: 22, alignItems: 'center', justifyContent: 'space-between', marginTop: 18, marginBottom: 10}}>
        <Image
          source={require('../assets/Icons/Userr.png')}
          style={{
            resizeMode: 'contain',
            width: 24,
            height: 24,
            tintColor: theme.colors.white,
            opacity: 0,
          }}
        />
        {Center || <Image source={require('../assets/Icons/logo1.png')} resizeMode="contain" style={{width: 50, height: 50}} />}
        <TouchableOpacity onPress={R_onPress}>
          <Image
            source={source || require('../assets/Icons/Userr.png')}
            style={{
              resizeMode: 'contain',
              width: 24,
              height: 24,
              tintColor: theme.colors.white,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
