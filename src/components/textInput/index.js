import React from 'react';
import {MainContainer, TextInput} from './style';

export default CustomTextInput = props => {
  const {placeholder, color, borderColor, bgColor} = props;

  return (
    <MainContainer bgColor={bgColor} borderColor={borderColor}>
      <TextInput color={color} placeholder={placeholder} />
    </MainContainer>
  );
};
