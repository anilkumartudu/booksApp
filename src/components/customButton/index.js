import React from 'react';
import {Button, ButtonText} from './style';

export default CustomButton = props => {
  const {name, color, borderColor, bgColor, onPress} = props;

  return (
    <Button bgColor={bgColor} borderColor={borderColor} onPress={onPress}>
      <ButtonText color={color}>{name}</ButtonText>
    </Button>
  );
};
