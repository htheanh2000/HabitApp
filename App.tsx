import React, { useEffect, useState } from 'react';
import * as Screens from '@/screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
const App = () => {

  const Stack = createNativeStackNavigator();
  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="spash" component={Screens.SpashScreen} />
        <Stack.Screen name="intro" component={Screens.IntroScreen} />
        <Stack.Screen name="sign-in" component={Screens.SignInScreen} />
        <Stack.Screen name="sign-up" component={Screens.SignUpScreen} />
        <Stack.Screen name="reset-password" component={Screens.ResetPasswordScreen} />
        <Stack.Screen name="homepage" component={Screens.HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
