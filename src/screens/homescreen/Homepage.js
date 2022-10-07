import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Accountsheet from '../../component/Accountsheet';
import Header from '../../component/Header';
import TextFormatted from '../../component/TextFormatted';
import {theme} from '../../utiles/Constants';

const Homepage = () => {
  const dimension = useWindowDimensions();
  const navigation = useNavigation();
  const Sheetref = useRef();
  const categories = ['Russia-Ukraine War', 'Updates', 'Photos', 'Costs of the War'];
  const Newsdata = [
    {
      title: 'Long War Looms, Officials Say, Despite Ukraine’sDefiantMessage',
      description: 'Military leaders tried to prepare Ukrainians for a difficult fight ahead, as the U.S. warned that Russia would try to tighten its hold on seized territory.',
      readmore: 5,
      img: require('../../assets/Images/poster2.png'),
      img_title: 'Amanda Kramer El Semanario',
      bottom_tittle: 'W.N.B.A. stars are still traveling abroad to play, even as Brittney Griner’s arrest in Russia has complicated the decision.',
    },
    {
      title: 'The Battle Between Hope vs. Fear in Arizona',
      description: 'Immigrant youth and their allies won a big victory in Arizona on May 10th. The Arizona House of Representatives passed legislation to...',
      img: require('../../assets/Images/poster1.png'),
      img_title: 'Amanda Kramer El Semanario',
      bottom_tittle: 'W.N.B.A. stars are still traveling abroad to play, even as Brittney Griner’s arrest in Russia has complicated the decision.',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.white}}>
      <Header R_onPress={() => Sheetref.current.open()} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: 22, marginVertical: 15}}>
          <Text onPress={() => navigation.navigate('Newsdetail')} style={{fontSize: 22, color: theme.colors.text_color, fontFamily: 'Poppins-ExtraBold'}}>
            How China Could Choke Taiwan With a Blockade
          </Text>

          <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-evenly', marginTop: 12}}>
            <TextFormatted style={{backgroundColor: theme.colors.Black, width: 7, height: 7, opacity: 0.4, borderRadius: 2, marginTop: 15, marginRight: 15}}></TextFormatted>
            <Text style={{fontSize: 16, color: theme.colors.text_color, marginVertical: 5}}>
              Beijing has long said that it wants to absorb Taiwan peacefully, but China could impose a sea and air blockade to into concessions.
            </Text>
          </View>
          <Image
            source={require('../../assets/Images/poster.png')}
            resizeMode="cover"
            style={{width: dimension.width - 40, height: dimension.width * 0.5, alignSelf: 'center', marginTop: 10}}
          />
          <Text style={{fontSize: 12, color: theme.colors.softGrey, textAlign: 'right', marginVertical: 3}}>Amanda Kramer El Semanario</Text>
          <View style={{marginVertical: 2, borderBottomColor: theme.colors.Black, borderBottomWidth: 1}} />

          <FlatList
            showsVerticalScrollIndicator={false}
            data={categories}
            horizontal={true}
            renderItem={({item, index}) => (
              <TouchableOpacity onPress={() => index == 0 && navigation.navigate('Newsdetail')} style={{marginRight: 10}}>
                <TextFormatted style={{fontSize: 13, color: theme.colors.Black, fontWeight: index == 0 ? '600' : '400'}}>{item}</TextFormatted>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={{marginHorizontal: 20}}>
          <TextFormatted style={{color: '#F45017', textAlign: 'left', fontSize: 12}}>
            <Text style={{fontWeight: '700'}}>Live</Text> 16m ago
          </TextFormatted>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Newsdata}
            renderItem={({item, index}) => (
              <View style={{marginTop: 15}}>
                <Text onPress={() => navigation.navigate('Newsdetail')} style={{fontSize: 22, color: theme.colors.text_color}}>
                  {item.title}
                </Text>
                <Text style={{fontSize: 16, color: theme.colors.text_color, marginVertical: 5}}>{item.description}</Text>

                {item.readmore && (
                  <TouchableOpacity onPress={() => navigation.navigate('Newsdetail')} style={{alignSelf: 'flex-start', flexDirection: 'row', marginTop: 10}}>
                    <Text style={{fontSize: 14, color: theme.colors.Black, fontWeight: '600'}}>Read More</Text>
                    <Text
                      style={{
                        fontSize: 13,
                        color: theme.colors.white,
                        backgroundColor: theme.colors.Black,
                        paddingHorizontal: 10,
                        marginHorizontal: 5,
                        borderRadius: 5,
                      }}>
                      {item.readmore}+
                    </Text>
                  </TouchableOpacity>
                )}

                <Image source={item.img} resizeMode="cover" style={{width: dimension.width - 40, height: dimension.width * 0.5, alignSelf: 'center', marginTop: 12}} />
                <Text style={{fontSize: 12, color: theme.colors.softGrey, textAlign: 'right', marginVertical: 3}}>{item.img_title}</Text>
                <View style={{marginVertical: 2, borderBottomColor: theme.colors.softGrey, borderBottomWidth: 1}} />

                <Text Text style={{fontSize: 22, color: theme.colors.text_color, marginVertical: 12}}>
                  {item.bottom_tittle}
                </Text>

                <View style={{marginVertical: 2, borderBottomColor: theme.colors.Black, borderBottomWidth: 1}} />
              </View>
            )}
          />
        </View>
      </ScrollView>
      <RBSheet
        ref={Sheetref}
        height={dimension.width * 1.4}
        // openDuration={250}
        // closeOnDragDown={true}
        customStyles={{
          container: {
            backgroundColor: theme.colors.white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingVertical: 20,
          },
          draggableIcon: {
            display: 'none',
          },
        }}>
        <Accountsheet downpress={() => Sheetref.current.close()} />
      </RBSheet>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
