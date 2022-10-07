import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {theme} from '../utiles/Constants';

const InputFormatted = ({
  borderColor,
  backgroundColor,
  secureTextEntry,
  Left,
  icon_color,
  placeholderTextColor,
  value,
  onChangeText,
  editable,
  placeholder,
  Right,
  marginVertical,
  ref,
  Inputcolor,
  source,
}) => {
  return (
    <View
      ref={ref}
      style={{
        marginHorizontal: 20,
        borderRadius: 12,
        borderColor: borderColor || '#01A3CF',
        borderWidth: 1,
        backgroundColor: backgroundColor || '#FFFFFF',
        marginVertical: marginVertical || 25,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
      }}>
      {Left || (
        <Image
          source={source}
          style={{
            resizeMode: 'contain',
            width: 24,
            height: 24,
          }}
        />
      )}
      <TextInput
        placeholder={placeholder || 'Email'}
        editable={editable}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor || theme.colors.secondary}
        style={{color: Inputcolor || theme.colors.secondary, fontSize: 14, fontWeight: '400', flex: 1, paddingLeft: 12}}
      />
      {Right}
    </View>
  );
};

export default InputFormatted;

const styles = StyleSheet.create({});
