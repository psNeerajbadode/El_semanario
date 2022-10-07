import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../utiles/Constants';

const Accountsheet = ({downpress}) => {
  return (
    <View style={{backgroundColor: theme.colors.white}}>
      <TouchableOpacity onPress={downpress} style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, alignSelf: 'flex-start'}}>
        <Image
          source={require('../assets/Icons/chevronDown.png')}
          style={{
            resizeMode: 'contain',
            width: 18,
            height: 24,
            marginRight: 10,
          }}
        />
        <Text style={{fontSize: 18, color: theme.colors.OtherText, fontWeight: '700'}}>Account</Text>
      </TouchableOpacity>
      <ScrollView>
        <Text style={{fontSize: 16, color: theme.colors.OtherText, marginHorizontal: 20, marginTop: 20}}>Subscribe</Text>
        <View style={{marginVertical: 12, borderBottomColor: theme.colors.Black, borderBottomWidth: 1, opacity: 0.2, marginHorizontal: 20}} />
        <Text style={{fontSize: 16, color: theme.colors.OtherText, marginHorizontal: 20}}>Log In or Register</Text>
        <Hr_Balck />

        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 20}}>
          <Image
            source={require('../assets/Icons/bell.png')}
            style={{
              resizeMode: 'contain',
              width: 18,
              height: 24,
              marginRight: 10,
            }}
          />
          <Text style={{fontSize: 16, color: theme.colors.OtherText}}>Notification</Text>
        </View>
        <Hr_Gray />
        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 20}}>
          <Image
            source={require('../assets/Icons/video.png')}
            style={{
              resizeMode: 'contain',
              width: 18,
              height: 24,
              marginRight: 10,
            }}
          />
          <Text style={{fontSize: 16, color: theme.colors.OtherText}}>Video Autoplay</Text>
        </View>
        <Hr_Gray />
        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 20}}>
          <Text
            style={{
              fontSize: 16,
              color: theme.colors.OtherText,
              fontWeight: '700',
              marginRight: 10,
            }}>
            A<Text style={{fontSize: 14, fontWeight: '600'}}>A</Text>
          </Text>
          <Text style={{fontSize: 16, color: theme.colors.OtherText}}>Text Size</Text>
        </View>
        <Hr_Balck />

        <Data_mange
          Heading={'Data Management'}
          title={'Background Update'}
          Detail={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mauris mauris in fermentum. Dictum faucibus.'}
        />
        <Hr_Gray />
        <Data_mange
          marginTop={-10}
          HeadingTop
          title={'Ofline Reading'}
          Detail={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mauris mauris in fermentum. Dictum faucibus.'}
        />
        <Hr_Gray />
        <Data_mange
          marginTop={-10}
          HeadingTop
          title={'Image Download Settings'}
          Detail={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mauris mauris in fermentum. Dictum faucibus.'}
        />
        <Hr_Balck />

        <Support Heading={'Support'} title={'Contact us'} />
        <Support HeadingTop title={'Send App Feedbck'} />
        <Support HeadingTop title={'Contact Newsroom'} />
        <Support hr HeadingTop title={'Frequntly Asked Qustions'} />
        <Hr_Balck />

        <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 20}}>
          <Image source={require('../assets/Icons/about.png')} resizeMode="contain" style={{position: 'absolute', left: 5, width: 30, height: 30}} />
          <Text style={{fontSize: 16, color: theme.colors.Black, textAlign: 'center'}}>About the Application</Text>
        </View>
        <Hr_Balck opacity={0} />
      </ScrollView>
    </View>
  );
};

const Hr_Gray = () => <View style={{marginVertical: 18, borderBottomColor: theme.colors.Black, borderBottomWidth: 1, opacity: 0.2, marginHorizontal: 20}} />;
const Hr_Balck = ({opacity}) => <View style={{marginVertical: 18, borderBottomColor: theme.colors.Black, borderBottomWidth: 1, opacity: opacity}} />;

const Data_mange = ({Detail, title, Heading, HeadingTop, marginTop}) => (
  <View style={{marginHorizontal: 20, marginTop: marginTop}}>
    {HeadingTop || <Text style={{fontSize: 15, color: theme.colors.Black, fontWeight: '700', textTransform: 'uppercase'}}>{Heading}</Text>}
    <Text style={{fontSize: 15, color: theme.colors.Black, marginTop: 10, marginBottom: 3}}>{title}</Text>
    <Text style={{fontSize: 12, color: theme.colors.softGrey, textTransform: 'uppercase', lineHeight: 20}}>{Detail}</Text>
  </View>
);

const Support = ({hr, title, Heading, HeadingTop, marginTop, onPress}) => (
  <View style={{marginHorizontal: 20, marginTop: marginTop}}>
    {HeadingTop || <Text style={{fontSize: 15, color: theme.colors.Black, fontWeight: '700', textTransform: 'uppercase', marginBottom: 5}}>{Heading}</Text>}
    <Text onPress={onPress} style={{fontSize: 15, color: theme.colors.Black, marginTop: 10, marginBottom: 3}}>
      {title}
    </Text>
    {hr || <View style={{marginVertical: 10, borderBottomColor: theme.colors.Black, borderBottomWidth: 1, opacity: 0.2}} />}
  </View>
);
export default Accountsheet;

const styles = StyleSheet.create({});
