import React from 'react';
import {View, FlatList} from 'react-native';
import {MainContainer} from './style';

export default HorizontalList = props => {
  const {data} = props;

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <MainContainer>{item.name}</MainContainer>}
        keyExtractor={(item, index) => `${index}_${item}`}
      />
    </View>
  );
};
