import React, {Component} from 'react';
import {ImageBackground, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  CustomButton,
  CustomIcon,
  CustomLink,
  CustomTextInput,
} from '../../components';
import theme from '../../theme';
import {
  MainContainer,
  RowContainer,
  ColumnContainer,
  CustomText,
} from './style';

class Login extends Component {
  render() {
    const {height, width} = Dimensions.get('window');

    return (
      <ImageBackground
        source={require('../../assets/background.jpg')}
        style={{height: '100%', width: '100%'}}
        resizeMode="cover">
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <MainContainer style={{height: height, width: width}}>
            <ColumnContainer>
              <CustomIcon name="study" height="125" width="125" />
              <CustomText>BooksApp</CustomText>
            </ColumnContainer>
            <CustomTextInput
              iconName="email"
              placeholder="Email"
              placeholderColor={theme.colors.white}
              color={theme.colors.white}
              bgColor={theme.colors.murkyWhite}
            />
            <CustomTextInput
              iconName="lock"
              placeholder="Password"
              placeholderColor={theme.colors.white}
              color={theme.colors.white}
              bgColor={theme.colors.murkyWhite}
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
