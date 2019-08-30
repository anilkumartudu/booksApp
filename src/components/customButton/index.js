import React from 'react';
import {Button, ButtonText} from './style';

export default CustomButton = props => {
  const {name, color, borderColor, bgColor} = props;

  return (
    <Button bgColor={bgColor} borderColor={borderColor}>
      <ButtonText color={color}>{name}</ButtonText>
    </Button>
  );
};
