import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Image, ImageBackground, Linking, ScrollView, Share, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import Statusbar from '../../component/Statusbar';
import TextFormatted from '../../component/TextFormatted';
import {theme} from '../../utiles/Constants';
import {Menu, MenuItem} from 'react-native-material-menu';

const Newsdetail = () => {
  const dimension = useWindowDimensions();
  const navigation = useNavigation();
  const [popup, setPopup] = useState(false);
  const Data = [
    'Beijing has long said that it wants to absorb Taiwan peacefully, but China could impose a sea and air blockade to into concessions.',
    'During this month’s exercises, China avoided provocative moves that could have prompted a more forceful response, but it still sought to convey real menace.',
    'Water is critical to Arizona’s future, and the state’s three public universities are challenging high school students to propose solutions for the water problems communities face around the state.',
    'The engineering departments at Arizona State, Northern Arizona and University of Arizona have joined forces for Challenge 2021, a competition for teams of high school juniors and seniors to identify and address water-related problems in Arizona with virtual engineering strategies.',
    'Jennifer Velez—outreach and recruitment program coordinator and senior at the Ira A. Fulton School of Engineering at Arizona State University—said they chose water because of its importance to people living in a desert climate.',
  ];
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'El_semanario Updated Post : "https://www.elsemanario.us/"',
        // title: 'El_semanario Updated Post',
        // url: 'https://www.elsemanario.us/',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.white}}>
      <Statusbar hidden={true} />
      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 70}}>
        <ImageBackground
          source={require('../../assets/Images/poster.png')}
          resizeMode="stretch"
          style={{width: dimension.width, height: dimension.width * 0.6, alignSelf: 'center'}}
        />

        <Text style={{fontSize: 22, color: theme.colors.text_color, textAlign: 'center', marginTop: 20}}>How China Could Choke Taiwan With a Blockade</Text>
        <Text
          style={{
            fontSize: 15,
            color: theme.colors.primary,
            marginTop: 10,
            textAlign: 'center',
          }}>
          <Text style={{color: theme.colors.softGrey}}>By</Text> Amanda <Text style={{color: theme.colors.softGrey}}>and</Text> Kramer
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: theme.colors.primary,
            textAlign: 'center',
          }}>
          23 Aug 2022
        </Text>
        <FlatList
          data={Data}
          renderItem={({item, index}) => (
            <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-evenly', marginTop: 12, marginHorizontal: 20}}>
              <TextFormatted style={{backgroundColor: theme.colors.Black, width: 7, height: 7, opacity: 0.4, borderRadius: 2, marginTop: 15, marginRight: 15}}></TextFormatted>
              <Text style={{fontSize: 16, color: theme.colors.text_color, marginVertical: 5}}>{item}</Text>
            </View>
          )}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            marginTop: 12,
            marginHorizontal: 15,
            borderColor: theme.colors.secondary,
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderWidth: 1.5,
          }}>
          <ImageBackground
            source={require('../../assets/Icons/Comma.png')}
            resizeMode="stretch"
            style={{
              width: 18,
              height: 22,
              marginRight: 20,
              marginTop: 10,
            }}
          />
          <Text style={{fontSize: 20, color: theme.colors.text_color, marginVertical: 5}}>
            We all use water, we all rely on water, but we may not know a whole lot about where that water comes from.
          </Text>
        </View>
        <View style={{alignSelf: 'flex-end'}}>
          <Menu visible={popup}>
            <PopMenu
              onPress={() => {
                Linking.openURL('https://www.elsemanario.us/');
                setPopup(false);
              }}
              title={'Open in Browser'}
            />

            <PopMenu
              onPress={() => {
                setPopup(false);
              }}
              title={'Refresh'}
            />

            <PopMenu
              onPress={() => {
                setPopup(false);
              }}
              title={'Settings'}
            />
            <PopMenu
              onPress={() => {
                setPopup(false);
              }}
              title={'Send App Feedback'}
            />
            <PopMenu
              onPress={() => {
                navigation.navigate('Login');
              }}
              title={'Log In or Create Account'}
            />
            <PopMenu
              onPress={() => {
                setPopup(false);
              }}
              title={'Subscribe'}
            />
          </Menu>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 1,
          height: 60,
          backgroundColor: theme.colors.white,
          width: '100%',
          paddingHorizontal: 25,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/Icons/back.png')}
            style={{
              resizeMode: 'contain',
              width: 24,
              height: 24,
            }}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '32%'}}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Icons/bookmark.png')}
              style={{
                resizeMode: 'contain',
                width: 24,
                height: 24,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onShare()}>
            <Image
              source={require('../../assets/Icons/share.png')}
              style={{
                resizeMode: 'contain',
                width: 24,
                height: 24,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setPopup(!popup)}>
            <Image
              source={require('../../assets/Icons/morevertical.png')}
              style={{
                resizeMode: 'contain',
                width: 24,
                height: 24,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const PopMenu = ({title, onPress}) => (
  <MenuItem onPress={onPress}>
    <Text style={{fontSize: 15, color: theme.colors.Black, fontWeight: '600', textAlign: 'left'}}>{title}</Text>
  </MenuItem>
);
export default Newsdetail;

const styles = StyleSheet.create({});
