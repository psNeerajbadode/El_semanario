import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../component/Header';
import {theme} from '../../utiles/Constants';

const Sections = () => {
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.white}}>
      <Header Center={<Text style={{fontSize: 22, color: theme.colors.white, fontWeight: '600'}}>Sections</Text>} source={require('../../assets/Icons/searchWhite.png')} />
      <View style={{marginVertical: 5}} />
      <ScrollView>
        <Menu_Item Name={'Most Popular'} Left={<Image resizeMode="contain" style={{width: 22, height: 22}} source={require('../../assets/Icons/mostpopular.png')} />} />
        <Menu_Item Name={'Option'} Left={<Image resizeMode="contain" style={{width: 22, height: 22}} source={require('../../assets/Icons/option.png')} />} />
        <Menu_Item Name={'World'} Left={<Image resizeMode="contain" style={{width: 22, height: 22}} source={require('../../assets/Icons/earth.png')} />} />
        <Menu_Item Name={'U.S.'} Left={<Image resizeMode="contain" style={{width: 22, height: 22}} source={require('../../assets/Icons/us.png')} />} />
        <Menu_Item Name={'Politics'} Left={<Image resizeMode="contain" style={{width: 22, height: 22}} source={require('../../assets/Icons/politics.png')} />} />
        <Menu_Item Name={'Business'} Left={<Image resizeMode="contain" style={{width: 22, height: 22}} source={require('../../assets/Icons/Buisness.png')} />} />
        <Menu_Item Name={'Sports'} Left={<Image resizeMode="contain" style={{width: 22, height: 22}} source={require('../../assets/Icons/sports.png')} />} />

        <Menu_Item Name={'Magzine'} Left={<Image resizeMode="contain" style={{width: 22, height: 22}} source={require('../../assets/Icons/magazine.png')} />} />
        <Menu_Item Name={'Arts'} Left={<Image resizeMode="contain" style={{width: 22, height: 22}} source={require('../../assets/Icons/arts.png')} />} />

        <Menu_Item Name={'Health'} Left={<Image resizeMode="contain" style={{width: 22, height: 22}} source={require('../../assets/Icons/health.png')} />} />
        <Menu_Item Name={'Recently Viewed'} Left={<Image resizeMode="contain" style={{width: 22, height: 22}} source={require('../../assets/Icons/recents.png')} />} />
      </ScrollView>
    </View>
  );
};

const Menu_Item = ({Name, Left, onPress}) => (
  <TouchableOpacity onPress={onPress} style={{marginHorizontal: 20, marginVertical: 14, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
    {Left}
    <Text style={{fontSize: 15, color: theme.colors.Black, fontWeight: '600', textTransform: 'capitalize', marginLeft: 20}}>{Name}</Text>
  </TouchableOpacity>
);
export default Sections;

const styles = StyleSheet.create({});
