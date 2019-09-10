import React, {Component} from 'react';
import {ImageBackground, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomButton, CustomTextInput} from '../../components';
import theme from '../../theme';
import {MainContainer, ColumnContainer, CustomText} from './style';

class SetPassword extends Component {
  render() {
    const {height, width} = Dimensions.get('window');

    return (
      <ImageBackground
        source={require('../../assets/background.jpg')}
        style={{height: '100%', width: '100%'}}
        resizeMode="cover">
        <KeyboardAwareScrollView
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}>
          <MainContainer style={{height: height, width: width}}>
            <ColumnContainer>
              <CustomText>
                One Time Password (OTP) has been sent to your email address,
                please enter the same here and set your password as desired.
              </CustomText>
            </ColumnContainer>
            <CustomTextInput
              iconName="lock"
              placeholder="OTP"
              placeholderColor={theme.colors.white}
              color={theme.colors.white}
              bgColor={theme.colors.murkyWhite}
              secureTextEntry={true}
            />
            <CustomTextInput
              iconName="lock"
              placeholder="Password"
              placeholderColor={theme.colors.white}
              color={theme.colors.white}
              bgColor={theme.colors.murkyWhite}
              secureTextEntry={true}
            />
            <CustomTextInput
              iconName="lock"
              placeholder="Repeat Password"
              placeholderColor={theme.colors.white}
              color={theme.colors.white}
              bgColor={theme.colors.murkyWhite}
              secureTextEntry={true}
            />
            <CustomButton
              name="SET PASSWORD"
              onPress={() => alert('SET PASSWORD')}
              color={theme.colors.black}
              bgColor={theme.colors.white}
            />
          </MainContainer>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

export default SetPassword;
