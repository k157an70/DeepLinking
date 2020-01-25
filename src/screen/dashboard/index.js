import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import FriendsScreen from './FriendsScreen';
import ChatScreen from './ChatScreen';

export default createStackNavigator({
   Home:{
      screen: HomeScreen,
      navigationOptions:{
         title: 'HOME'
      }
   },
   Friends:{
      screen: FriendsScreen,
      path: 'friends',
      navigationOptions:{
         title: 'MY FRIENDS'
      }
   },
   Chat:{
      screen: ChatScreen,
      path:'chat/:friend',
      navigationOptions: ({ navigation }) =>{
         return{
            title: `CHAT WITH ${navigation.state.params.friend}`
         }
      }
   }
})