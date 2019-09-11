import React from 'react';
import {View, Text} from 'react-native';

export const currentlyReadingRoute = () => {
  return (
    <View>
      <Text>currentlyReading</Text>
    </View>
  );
};

export const didNotFinishedRoute = () => {
  return (
    <View>
      <Text>didNotFinished</Text>
    </View>
  );
};

export const readRoute = () => {
  return (
    <View>
      <Text>read</Text>
    </View>
  );
};

export const wantToReadRoute = () => {
  return (
    <View>
      <Text>wantToRead</Text>
    </View>
  );
};
