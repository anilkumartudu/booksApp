import React from 'react';
import CustomIcon from '../customIcon';
import {MainContainer, TextInput} from './style';

export default CustomTextInput = props => {
  const {
    iconName,
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
      <CustomIcon name={iconName} height="25" width="25" />
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
