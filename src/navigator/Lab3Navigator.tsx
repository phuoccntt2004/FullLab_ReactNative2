import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TabLab3Navigator from './TabLab3Navigator';

const Lab3Navigator = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name='MainLab3' component={TabLab3Navigator}/>
    </Stack.Navigator>
  )
}

export default Lab3Navigator