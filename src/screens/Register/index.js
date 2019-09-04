import React, {Component} from 'react';
import {Image, ImageBackground} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {CustomTextInput, CustomButton, CustomLink} from '../../components';
import theme from '../../theme';
import {MainContainer, RowContainer, ImageContainer} from './style';

class Register extends Component {
  state = {
    avatarSource: '',
  };

  imagePickerHandler = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {skipBackup: true, path: 'images'},
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        alert('Cancelled by user');
      } else if (response.error) {
        alert('There is some technical error, please try after sometime.');
      } else {
        let source = response;
        this.setState({avatarSource: source});
      }
    });
  };

  render() {
    const {avatarSource} = this.state;

    return (
      <ImageBackground
        source={require('../../assets/photo-1495640452828-3df6795cf69b.jpeg')}
        style={{width: '100%', height: '100%'}}
        resizeMode="cover">
        <MainContainer>
          <RowContainer>
            <ImageContainer onPress={this.imagePickerHandler}>
              {avatarSource ? (
                <Image
                  source={{uri: avatarSource.uri}}
                  style={{width: 124, height: 124, borderRadius: 70}}
                  resizeMode="cover"
                />
              ) : (
                <Image
                  source={require('../../assets/add.png')}
                  style={{width: 80, height: 80}}
                  resizeMode="cover"
                />
              )}
            </ImageContainer>
          </RowContainer>
          <CustomTextInput
            placeholder="Name"
            placeholderColor={theme.colors.white}
            color={theme.colors.white}
            bgColor="rgba(255,255,255,0.4)"
          />
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
          <CustomTextInput
            placeholder="Repeat Password"
            placeholderColor={theme.colors.white}
            color={theme.colors.white}
            bgColor="rgba(255,255,255,0.4)"
            secureTextEntry={true}
          />
          <CustomButton
            name="CREATE ACCOUNT"
            color={theme.colors.black}
            bgColor={theme.colors.white}
          />
          <RowContainer>
            <CustomLink
              name=" Already have an account?"
              color={theme.colors.white}
            />
          </RowContainer>
        </MainContainer>
      </ImageBackground>
    );
  }
}

export default Register;
