import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import Statusbar from '../../component/Statusbar';
import TextFormatted from '../../component/TextFormatted';
import {theme} from '../../utiles/Constants';

const Forgotpassword2 = () => {
  const dimension = useWindowDimensions();

  const navigation = useNavigation();
  //console.log(email);
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <Statusbar hidden={false} barStyle={'dark-content'} backgroundColor={'transparent'} translucent={false} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 45,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/Icons/back.png')}
            style={{
              resizeMode: 'contain',
              width: 24,
              height: 24,
              tintColor: theme.colors.white,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={R_onPress}>
          <Image
            source={require('../../assets/Icons/back.png')}
            style={{
              resizeMode: 'contain',
              width: 24,
              height: 24,
              tintColor: theme.colors.white,
              opacity: 0,
            }}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assets/Icons/logo2.png')}
        resizeMode="contain"
        style={{
          width: dimension.width / 2,
          height: dimension.width * 0.28,
          alignSelf: 'center',
        }}
      />
      <TextFormatted
        style={{
          color: theme.colors.primary,
          fontWeight: '500',
          fontSize: 18,
          marginTop: 30,
          textAlign: 'center',
          marginHorizontal: 20,
          lineHeight: 31,
        }}>
        Check your email to reset your password
      </TextFormatted>

      <TextFormatted
        style={{
          color: theme.colors.primary,
          fontWeight: '400',
          fontSize: 14,
          marginVertical: 14,
          textAlign: 'left',
          marginHorizontal: 20,
          lineHeight: 25,
        }}>
        Euismod ullamcorper nisl egestas porttitor. <TextFormatted style={{fontWeight: '600'}}>xyz123@gmail.com</TextFormatted> egestas po your password
      </TextFormatted>

      <TextFormatted
        style={{
          color: theme.colors.primary,
          fontWeight: '600',
          fontSize: 15,
          marginVertical: 8,
          textAlign: 'center',
          marginHorizontal: 20,
        }}>
        Still need help?{' '}
        <TextFormatted
          style={{
            color: theme.colors.secondary,
            fontWeight: '600',
            fontSize: 14,
            paddingHorizontal: 20,
            textDecorationLine: 'underline',
          }}>
          Contact Us
        </TextFormatted>
      </TextFormatted>
    </ScrollView>
  );
};

export default Forgotpassword2;

const styles = StyleSheet.create({});
