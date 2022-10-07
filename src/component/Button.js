import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../utiles/Constants';
import TextFormatted from './TextFormatted';

const Button = ({backgroundColor, ButtonName, onPress, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        marginHorizontal: 20,
        backgroundColor: backgroundColor || '#01A3CF',
        marginBottom: 15,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        paddingTop: 3,
      }}>
      <TextFormatted style={{color: theme.colors.white, fontSize: 14, fontWeight: '500', textTransform: 'uppercase'}}>{ButtonName}</TextFormatted>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
