import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/Auth/SplashScreen';
import LoginScreen from './src/screens/Auth/LoginScreen';
import RegisterScreen from './src/screens/Auth/RegisterScreen';
import AppDrawer from './src/navigation/AppDrawer/AppDrawer';
import ProductDetail from './src/screens/Home/ProductDetail';

const Stack = createStackNavigator();

function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen'>
          <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name='AppDrawer' component={AppDrawer} options={{ headerShown: false }} />
          <Stack.Screen name='ProductDetail' component={ProductDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}


export default App;
