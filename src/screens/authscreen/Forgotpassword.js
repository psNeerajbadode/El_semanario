import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import Statusbar from '../../component/Statusbar';
import TextFormatted from '../../component/TextFormatted';

import {useNavigation} from '@react-navigation/native';
import Button from '../../component/Button';
import InputFormatted from '../../component/InputFormatted';
import {theme} from '../../utiles/Constants';

const Forgotpassword = () => {
  const dimension = useWindowDimensions();
  const [email, setEmail] = useState();
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
          textAlign: 'left',
          marginHorizontal: 20,
        }}>
        Reset your password
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
      <InputFormatted value={email} onChangeText={setEmail} />

      <Button onPress={() => navigation.navigate('Forgotpassword2')} ButtonName={'Continue'} />
    </ScrollView>
  );
};

export default Forgotpassword;

const styles = StyleSheet.create({});
