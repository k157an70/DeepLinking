import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoadingScreen from './src/screen/auth/LoadingScreen';
import AuthStack from './src/screen/auth';
import DashboardStack from './src/screen/dashboard';


const App = createSwitchNavigator({
  Loading: LoadingScreen,
  Auth: AuthStack,
  Dashboard: DashboardStack
})

export default createAppContainer(App);