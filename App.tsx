import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgetPasswordScreen from './src/screens/ForgetPassword';
import SignUpScreen from './src/screens/SignUp';
import PostScreen from './src/screens/Post';
import ListingScreen from './src/screens/Listing';
import MainTabs from './src/navigations/MainTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={MainTabs}  options={{ headerShown: false }}/>
        <Stack.Screen name="ForgetPassord" component={ForgetPasswordScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Post" component={PostScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Listing" component={ListingScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Menu" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
