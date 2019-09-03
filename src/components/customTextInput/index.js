import React from 'react';
import {MainContainer, TextInput} from './style';

export default CustomTextInput = props => {
  const {
    placeholder,
    placeholderColor,
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
        placeholderTextColor={placeholderColor}
        onChangeText={changeHandler}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
      />
    </MainContainer>
  );
};
