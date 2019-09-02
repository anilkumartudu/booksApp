import React from 'react';
import {MainContainer, TextInput} from './style';

export default CustomTextInput = props => {
  const {
    placeholder,
    color,
    borderColor,
    bgColor,
    changeHandler,
    secureTextEntry,
  } = props;

  return (
    <MainContainer bgColor={bgColor} borderColor={borderColor}>
      <TextInput
        color={color}
        placeholder={placeholder}
        onChangeText={changeHandler}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
      />
    </MainContainer>
  );
};
