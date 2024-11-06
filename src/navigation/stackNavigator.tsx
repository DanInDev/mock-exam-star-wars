import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/splashScreen';
import StarshipsScreen from '../screens/starshipsScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen 
        name="SplashScreen" 
        component={SplashScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="StarshipsScreen" 
        component={StarshipsScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
