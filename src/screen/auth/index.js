import { createStackNavigator } from "react-navigation-stack";
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';

export default createStackNavigator({
   Login:{
      screen: LoginScreen,
      navigationOptions:{
         title: 'LOGIN SCREEN'
      }
   },
   Register:{
      screen: RegisterScreen,
      navigationOptions:{
         title:'REGISTER SCREEN'
      }
   }
})