import React, {Component} from 'react';
import {StatusBar, ImageBackground} from 'react-native';
import theme from '../../theme';
import {MainContainer, SubContainer, SubContainerText} from './style';

class Home extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/home-greyScale.jpg')}
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight,
        }}
        resizeMode="cover">
        <MainContainer>
          <SubContainer>
            <SubContainerText color={theme.colors.vMB}></SubContainerText>
          </SubContainer>
          <SubContainer>
            <SubContainerText
              color={theme.colors.bC}
              onPress={() => this.props.navigation.navigate('ViewMyBooks')}>
              View my Books
            </SubContainerText>
          </SubContainer>
          <SubContainer>
            <SubContainerText color={theme.colors.bA}>
              Browse Categories
            </SubContainerText>
          </SubContainer>
          <SubContainer>
            <SubContainerText color={theme.colors.uP}>
              Browse Authors
            </SubContainerText>
          </SubContainer>
          <SubContainer>
            <SubContainerText color={theme.colors.spare}>
              User Profile
            </SubContainerText>
          </SubContainer>
        </MainContainer>
      </ImageBackground>
    );
  }
}

export default Home;
