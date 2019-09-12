import React, {Component} from 'react';
import {ImageBackground, StatusBar} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import theme from '../../theme';
import {TabText} from './style';

import {
  currentlyReadingRoute,
  didNotFinishedRoute,
  readRoute,
  wantToReadRoute,
} from './tabViewSceneData';

class ViewMyBooks extends Component {
  state = {
    index: 0,
    routes: [
      {key: 'cr', title: 'Currently Reading'},
      {key: 'dnf', title: 'Did not Finished'},
      {key: 'r', title: 'Read'},
      {key: 'wtr', title: 'Want to Read'},
    ],
  };

  renderLabel = ({route}) => (
    <TabText
      style={{
        fontSize: theme.fontSize.large,
        fontWeight:
          route.key === this.state.index ? theme.fontWeight.bold : null,
      }}>
      {route.title}
    </TabText>
  );

  renderTabBar = props => {
    let {index} = props.navigationState;
    return (
      <TabBar
        {...props}
        scrollEnabled={true}
        renderLabel={this.renderLabel}
        style={{
          backgroundColor: theme.colors.murkyWhite,
        }}
        indicatorStyle={{
          backgroundColor: theme.colors.white,
          left: index === 0 ? 0 : index === 1 ? 10 : index === 2 ? 65 : 25,
          width: index === 0 ? 195 : index === 1 ? 180 : index === 2 ? 65 : 150,
        }}
        tabStyle={{
          height: 60,
          width: 195,
        }}
      />
    );
  };

  renderScene = SceneMap({
    cr: currentlyReadingRoute,
    dnf: didNotFinishedRoute,
    r: readRoute,
    wtr: wantToReadRoute,
  });

  render() {
    return (
      <ImageBackground
        source={require('../../assets/background-2-greyScale.jpg')}
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight,
        }}
        resizeMode="cover">
        <TabView
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={index => this.setState({index})}
        />
      </ImageBackground>
    );
  }
}

export default ViewMyBooks;
