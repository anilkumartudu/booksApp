import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ForgotPasswordScreen from '../screens/ForgotPassword';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import SetPasswordScreen from '../screens/SetPassword';

const AppNavigator = createStackNavigator(
  {
    ForgotPassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },

    SetPassword: {
      screen: SetPasswordScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {initialRouteName: 'Login'},
);

export default createAppContainer(AppNavigator);
