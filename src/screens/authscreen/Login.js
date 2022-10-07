import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import Button from '../../component/Button';
import InputFormatted from '../../component/InputFormatted';
import Statusbar from '../../component/Statusbar';
import TextFormatted from '../../component/TextFormatted';
import {theme} from '../../utiles/Constants';
import Toast from 'react-native-toast-message';

const Login = () => {
  const dimension = useWindowDimensions();
  const [email, setEmail] = useState();
  const navigation = useNavigation();

  const Emailvalidate = email => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!email) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Please Enter a Email',
      });
    } else {
      if (reg.test(email) === false) {
        Toast.show({
          type: 'info',
          position: 'top',
          text1: 'Please Enter a valid Email',
        });
        return false;
      } else {
        Toast.show({
          type: 'info',
          position: 'top',
          text1: 'Valid Email',
        });
        setTimeout(() => {
          navigation.navigate('Login2', {email});
        }, 1000);
      }
    }
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <Statusbar hidden={false} barStyle={'dark-content'} backgroundColor={'transparent'} translucent={false} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 35,
          // opacity: 0,
        }}>
        <Image
          source={require('../../assets/Icons/back.png')}
          style={{
            resizeMode: 'contain',
            width: 24,
            height: 24,
          }}
        />
        <Image
          source={require('../../assets/Icons/back.png')}
          style={{
            resizeMode: 'contain',
            width: 24,
            height: 24,
            opacity: 0,
          }}
        />
      </View>
      <Image
        source={require('../../assets/Icons/logo2.png')}
        style={{
          resizeMode: 'contain',
          width: dimension.width / 2,
          height: dimension.width * 0.28,
          alignSelf: 'center',
        }}
      />
      <Toast />
      <TextFormatted
        style={{
          color: theme.colors.primary,
          fontWeight: '500',
          fontSize: 18,
          marginTop: 30,
          textAlign: 'left',
          marginHorizontal: 20,
        }}>
        Sign in or create an account
      </TextFormatted>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginVertical: 8, marginHorizontal: 20}}>
        <TextFormatted
          style={{
            color: theme.colors.primary,
            fontWeight: '400',
            fontSize: 14,
            marginRight: 6,
          }}>
          At amet adipiscing?
        </TextFormatted>
        <TextFormatted
          style={{
            color: theme.colors.searchbar_text,
            fontWeight: '400',
            fontSize: 14,
          }}>
          Privacy policy
        </TextFormatted>
      </View>

      <InputFormatted source={require('../../assets/Icons/Mail.png')} value={email} onChangeText={setEmail} />
      <Button ButtonName={'Continue'} onPress={() => Emailvalidate(email)} />
      {/* <Button ButtonName={'Continue'} onPress={() => navigation.navigate('Login2')} /> */}

      <TextFormatted
        style={{
          color: theme.colors.softGrey,
          fontWeight: '500',
          fontSize: 16,
          marginVertical: 8,
          textAlign: 'center',
        }}>
        OR
      </TextFormatted>
      <Social_Bttn source={require('../../assets/Icons/google.png')} SocialName={'Login with Google'} />
      <Social_Bttn source={require('../../assets/Icons/facebook.png')} SocialName={'Login with Facebook'} />
    </ScrollView>
  );
};

const Social_Bttn = ({SocialName, source}) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 20,
      borderRadius: 12,
      borderColor: '#C1C1C1',
      borderWidth: 1,
      backgroundColor: theme.colors.white,
      marginBottom: 20,
      height: 56,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingHorizontal: 40,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    }}>
    <Image
      source={source}
      resizeMode="contain"
      style={{
        width: 26,
        height: 26,
      }}
    />
    <TextFormatted
      style={{
        color: theme.colors.primary,
        fontWeight: '400',
        fontSize: 14,
        marginVertical: 15,
      }}>
      {SocialName}
    </TextFormatted>
  </TouchableOpacity>
);

export default Login;

const styles = StyleSheet.create({});
