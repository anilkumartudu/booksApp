import React, {Component} from 'react';
import {Text, ImageBackground} from 'react-native';
import {
  CustomButton,
  CustomIcon,
  CustomLink,
  CustomTextInput,
} from '../../components';
import theme from '../../theme';
import {MainContainer, RowContainer, ColumnContainer} from './style';

class Login extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/photo-1495640452828-3df6795cf69b.jpeg')}
        style={{height: '100%', width: '100%'}}
        resizeMode="cover">
        <MainContainer>
          <ColumnContainer>
            <CustomIcon name="study" height="125" width="125" />
            <Text
              style={{
                color: theme.colors.white,
                fontWeight: theme.fontWeight.bold,
                fontSize: 40,
              }}>
              BooksApp
            </Text>
          </ColumnContainer>
          <CustomTextInput
            placeholder="Email"
            placeholderColor={theme.colors.white}
            color={theme.colors.white}
            bgColor="rgba(255,255,255,0.4)"
          />
          <CustomTextInput
            placeholder="Password"
            placeholderColor={theme.colors.white}
            color={theme.colors.white}
            bgColor="rgba(255,255,255,0.4)"
            secureTextEntry={true}
          />
          <CustomButton
            name="LOGIN"
            color={theme.colors.black}
            bgColor={theme.colors.white}
          />
          <RowContainer>
            <CustomLink name="Register" color={theme.colors.white} />
            <CustomLink name="Forgot Password" color={theme.colors.white} />
          </RowContainer>
        </MainContainer>
      </ImageBackground>
    );
  }
}

export default Login;
