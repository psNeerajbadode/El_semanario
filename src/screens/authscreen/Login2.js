import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import Button from '../../component/Button';
import InputFormatted from '../../component/InputFormatted';
import Statusbar from '../../component/Statusbar';
import TextFormatted from '../../component/TextFormatted';
import {theme} from '../../utiles/Constants';

const Login2 = () => {
  const dimension = useWindowDimensions();
  const [password, setpassword] = useState();
  const [secure, setSecure] = useState(true);
  const navigation = useNavigation();
  const {params} = useRoute();
  console.log(params.email);
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
        <TouchableOpacity onPress={() => navigation.goBack()} style={{alignSelf: 'flex-start'}}>
          <Image
            source={require('../../assets/Icons/back.png')}
            style={{
              resizeMode: 'contain',
              width: 24,
              height: 24,
            }}
          />
        </TouchableOpacity>
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
          textAlign: 'left',
          marginHorizontal: 20,
        }}>
        Sign in
      </TextFormatted>

      <TextFormatted
        style={{
          color: theme.colors.primary,
          fontWeight: '400',
          fontSize: 14,
          marginVertical: 8,
          textAlign: 'left',
          marginHorizontal: 20,
        }}>
        Euismod ullamcorper nisl egestas porttitor.
      </TextFormatted>
      <InputFormatted
        value={params.email}
        Inputcolor={theme.colors.softGrey}
        marginVertical={5}
        editable={false}
        placeholderTextColor={theme.colors.disable_text}
        icon_color={theme.colors.disable_text}
        borderColor={theme.colors.disable_text}
        source={require('../../assets/Icons/Message.png')}
      />
      <InputFormatted
        source={require('../../assets/Icons/Lock.png')}
        marginVertical={20}
        placeholder={'Your password'}
        value={password}
        secureTextEntry={secure ? true : false}
        onChangeText={setpassword}
        Right={
          secure ? (
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Image
                source={require('../../assets/Icons/Hide.png')}
                style={{
                  resizeMode: 'contain',
                  width: 24,
                  height: 24,
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Image
                source={require('../../assets/Icons/UnHide.png')}
                style={{
                  resizeMode: 'contain',
                  width: 24,
                  height: 24,
                }}
              />
            </TouchableOpacity>
          )
        }
      />
      <Button ButtonName={'Log In'} onPress={() => navigation.navigate('Tabnavigation')} />
      <TextFormatted
        onPress={() => navigation.navigate('Forgotpassword')}
        style={{
          color: theme.colors.primary,
          fontWeight: '400',
          fontSize: 14,
          marginTop: 30,
          alignSelf: 'center',
          marginHorizontal: 20,
        }}>
        Forgot Password?
      </TextFormatted>
    </ScrollView>
  );
};

export default Login2;

const styles = StyleSheet.create({});
