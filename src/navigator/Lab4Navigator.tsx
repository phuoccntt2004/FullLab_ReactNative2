import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TabLab4Navigator from './TabLab4Navigator';

const Lab4Navigator = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name='MainLab4' component={TabLab4Navigator}/>
    </Stack.Navigator>
  )
}

export default Lab4Navigator