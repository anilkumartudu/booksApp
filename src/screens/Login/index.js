import React, {Component} from 'react';
import {Text, ImageBackground, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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
    const {height, width} = Dimensions.get('window');

    return (
      <ImageBackground
        source={require('../../assets/photo-1495640452828-3df6795cf69b.jpeg')}
        style={{height: '100%', width: '100%'}}
        resizeMode="cover">
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <MainContainer height={height} width={width}>
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
              iconName="email"
              placeholder="Email"
              placeholderColor={theme.colors.white}
              color={theme.colors.white}
              bgColor="rgba(255,255,255,0.4)"
            />
            <CustomTextInput
              iconName="lock"
              placeholder="Password"
              placeholderColor={theme.colors.white}
              color={theme.colors.white}
              bgColor="rgba(255,255,255,0.4)"
              secureTextEntry={true}
            />
            <CustomButton
              name="LOGIN"
              onPress={() => alert('LOGIN')}
              color={theme.colors.black}
              bgColor={theme.colors.white}
            />
            <RowContainer>
              <CustomLink
                name="Register"
                onPress={() => this.props.navigation.navigate('Register')}
                color={theme.colors.white}
              />
              <CustomLink
                name="Forgot Password"
                onPress={() => this.props.navigation.navigate('ForgotPassword')}
                color={theme.colors.white}
              />
            </RowContainer>
          </MainContainer>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

export default Login;
