import React, {Component} from 'react';
import {ImageBackground, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomButton, CustomLink, CustomTextInput} from '../../components';
import theme from '../../theme';
import {
  MainContainer,
  RowContainer,
  ColumnContainer,
  CustomText,
} from './style';

class ForgotPassword extends Component {
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
              <CustomText fontSize={true} fontWeight={true}>
                Forgot Password?
              </CustomText>
              <CustomText>
                Enter your email address here to receive further instructions.
              </CustomText>
            </ColumnContainer>
            <CustomTextInput
              iconName="email"
              placeholder="Email"
              placeholderColor={theme.colors.white}
              color={theme.colors.white}
              bgColor={theme.colors.murkyWhite}
            />
            <CustomButton
              name="SEND"
              onPress={() => alert('SEND')}
              color={theme.colors.black}
              bgColor={theme.colors.white}
            />
            <RowContainer>
              <CustomLink
                name="Back To Login"
                onPress={() => this.props.navigation.navigate('Login')}
                color={theme.colors.white}
              />
            </RowContainer>
          </MainContainer>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

export default ForgotPassword;
