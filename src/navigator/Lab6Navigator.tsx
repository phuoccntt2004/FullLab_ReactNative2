import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TabLab6Navigator from './TabLab6Navigator';

const Lab6Navigator = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name='MainLab6' component={TabLab6Navigator}/>
    </Stack.Navigator>
  )
}

export default Lab6Navigator