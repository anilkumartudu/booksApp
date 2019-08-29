import React from 'react';
import {MainContainer, TextInput} from './style';

const textInput = props => {
  const {placeholder, color, bgColor} = props;

  return (
    <MainContainer color={color} bgColor={bgColor}>
      <TextInput placeholder={placeholder} />
    </MainContainer>
  );
};

export default textInput;
