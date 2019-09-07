import React from 'react';
import {View, StatusBar} from 'react-native';
import MainContainer from './navigation/mainContainer';
import theme from './theme';

export default booksApp = () => (
  <View style={{flex: 1}}>
    <StatusBar
      barStyle="light-content"
      translucent={true}
      backgroundColor={theme.colors.black}
    />
    <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
      <MainContainer />
    </View>
  </View>
);
