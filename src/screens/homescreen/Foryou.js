import React, {useRef} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Accountsheet from '../../component/Accountsheet';
import Header from '../../component/Header';
import {theme} from '../../utiles/Constants';

const Foryou = () => {
  const Sheetref = useRef();
  const dimension = useWindowDimensions();
  const Data = [
    {
      title: 'Health',
      title_discription: 'The Battle Between Hope vs. Fear in Arizona',
      discription: 'Immigrant youth and their allies won a big victory in Arizona on May 10th. The Arizona House of  passed legislation to...',
      img: require('../../assets/Images/poster1.png'),
      img_title: 'Amanda Kramer El Semanario',
    },
    {
      title: 'Science',

      title_discription: 'The Battle Between Hope vs. Fear in Arizona',
      discription: 'Immigrant youth and their allies won a big victory in Arizona on May 10th. The Arizona House of  passed legislation to...',
      img: require('../../assets/Images/poster2.png'),
      img_title: 'Amanda Kramer El Semanario',
    },

    {
      title: 'Today’s Games',
      title_discription: 'The Battle Between Hope vs. Fear in Arizona',
      discription: 'Immigrant youth and their allies won a big victory in Arizona on May 10th. The Arizona House of  passed legislation to...',
      // img: require('../../assets/Images/poster2.png'),
      // img_title: 'Amanda Kramer El Semanario',
      Games: [
        {
          src: require('../../assets/Icons/rubik.png'),
          name: 'The Mini Crosword ',
          detail: 'Enim cursus cursus id donec eu.',
        },
        {
          src: require('../../assets/Icons/spelling.png'),
          name: 'Spolling Bee ',
          detail: 'Lorem ipsum dolor sit amet, consectetur',
        },
        {
          src: require('../../assets/Icons/tetris.png'),
          name: 'Tiles',
          detail: 'Lorem ipsum dolor sit amet, consectetur',
        },
        {
          src: require('../../assets/Icons/graphene.png'),
          name: 'Vertes',
          detail: 'Lorem ipsum dolor sit amet, consectetur',
        },
      ],
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.white}}>
      <Header R_onPress={() => Sheetref.current.open()} Center={<Text style={{fontSize: 22, color: theme.colors.white, fontWeight: '600'}}>For You</Text>} />

      <ScrollView showsVerticalScrollIndicator={false} style={{paddingBottom: 40, marginHorizontal: 20}}>
        <Text style={{fontSize: 20, color: theme.colors.OtherText, fontWeight: '600', marginTop: 20}}>Your daily recommend from across The Time</Text>
        <View style={{marginVertical: 10, borderBottomColor: theme.colors.Black, borderBottomWidth: 1}} />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={({item, index}) => (
            <View>
              <Text style={{fontSize: 14, color: theme.colors.Black, fontWeight: '700', marginTop: 10, textTransform: 'uppercase'}}>{item.title}</Text>

              <Text style={{fontSize: 22, color: theme.colors.text_color, marginVertical: 10}}>
                {item.title_discription} <Text style={{fontSize: 22, color: theme.colors.softGrey, marginVertical: 10}}>{item.discription}</Text>
              </Text>
              {item.Games && (
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={item.Games}
                  renderItem={({item, index}) => (
                    <View style={{marginRight: 10, width: dimension.width / 3.5, marginBottom: 10}}>
                      <Image source={item.src} resizeMode="contain" style={{width: dimension.width / 3 - 50, height: 70, alignSelf: 'flex-start', marginTop: 10}} />
                      <Text style={{fontSize: 14, color: theme.colors.Black, fontWeight: '700', marginTop: 10, textTransform: 'capitalize'}}>{item.name}</Text>
                      <Text style={{fontSize: 14, color: theme.colors.Black, marginVertical: 5}}>{item.detail} </Text>
                    </View>
                  )}
                />
              )}
              {item.img && <Image source={item.img} resizeMode="cover" style={{width: dimension.width - 40, height: dimension.width * 0.5, alignSelf: 'center', marginTop: 10}} />}

              {item.img_title && <Text style={{fontSize: 12, color: theme.colors.softGrey, textAlign: 'right', marginVertical: 3}}>{item.img_title}</Text>}

              <View style={{marginVertical: 8, borderBottomColor: theme.colors.Black, borderBottomWidth: 1}} />
            </View>
          )}
        />
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

export default Foryou;

const styles = StyleSheet.create({});
