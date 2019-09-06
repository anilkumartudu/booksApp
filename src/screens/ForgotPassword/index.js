import React, {Component} from 'react';
import {Text, ImageBackground, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomButton, CustomLink, CustomTextInput} from '../../components';
import theme from '../../theme';
import {MainContainer, RowContainer, ColumnContainer} from './style';

class ForgotPassword extends Component {
  render() {
    const {height, width} = Dimensions.get('window');

    return (
      <ImageBackground
        source={require('../../assets/photo-1495640452828-3df6795cf69b.jpeg')}
        style={{height: '100%', width: '100%'}}
        resizeMode="cover">
        <KeyboardAwareScrollView
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}>
          <MainContainer height={height} width={width}>
            <ColumnContainer>
              <Text
                style={{
                  color: theme.colors.white,
                  fontWeight: theme.fontWeight.bold,
                  fontSize: 38,
                }}>
                Forgot Password?
              </Text>
              <Text
                style={{
                  color: theme.colors.white,
                  fontWeight: theme.fontWeight.normal,
                  fontSize: 22,
                }}>
                Enter your email address here to receive further instructions.
              </Text>
            </ColumnContainer>
            <CustomTextInput
              iconName="email"
              placeholder="Email"
              placeholderColor={theme.colors.white}
              color={theme.colors.white}
              bgColor="rgba(255,255,255,0.4)"
            />
            <CustomButton
              name="SEND"
              color={theme.colors.black}
              bgColor={theme.colors.white}
            />
            <RowContainer>
              <CustomLink name="Back To Login" color={theme.colors.white} />
            </RowContainer>
          </MainContainer>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

export default ForgotPassword;
