import React, {Component} from 'react';
import {Text, ImageBackground, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomButton, CustomLink, CustomTextInput} from '../../components';
import theme from '../../theme';
import {MainContainer, RowContainer, ColumnContainer} from './style';

class SetPassword extends Component {
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
                  fontWeight: theme.fontWeight.normal,
                  fontSize: 22,
                }}>
                One Time Password (OTP) has been sent to your email address,
                please enter the same here and set your password as desired.
              </Text>
            </ColumnContainer>
            <CustomTextInput
              iconName="lock"
              placeholder="OTP"
              placeholderColor={theme.colors.white}
              color={theme.colors.white}
              bgColor="rgba(255,255,255,0.4)"
              secureTextEntry={true}
            />
            <CustomTextInput
              iconName="lock"
              placeholder="Password"
              placeholderColor={theme.colors.white}
              color={theme.colors.white}
              bgColor="rgba(255,255,255,0.4)"
              secureTextEntry={true}
            />
            <CustomTextInput
              iconName="lock"
              placeholder="Repeat Password"
              placeholderColor={theme.colors.white}
              color={theme.colors.white}
              bgColor="rgba(255,255,255,0.4)"
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
