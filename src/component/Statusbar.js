import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
import React from 'react';

const Statusbar = ({backgroundColor, props, hidden, barStyle, translucent}) => {
  return (
    <View style={[{backgroundColor, barStyle}]}>
      <SafeAreaView>
        <StatusBar translucent={translucent || true} backgroundColor={backgroundColor} barStyle={barStyle} hidden={hidden} {...props} />
      </SafeAreaView>
    </View>
  );
};

export default Statusbar;

const styles = StyleSheet.create({});
