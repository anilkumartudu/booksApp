import React from 'react';
import {View, FlatList} from 'react-native';
import theme from '../../theme';
import {MainContainer} from './style';

export default HorizontalList = props => {
  const {data} = props;

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '90%',
          backgroundColor: theme.colors.white,
          marginLeft: '5%',
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <MainContainer>{item.name}</MainContainer>}
        keyExtractor={(item, index) => `${index}_${item}`}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};
