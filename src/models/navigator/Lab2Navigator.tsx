import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainLab2 } from '../screens';

const Lab2Navigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Lab2' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Lab2' component={MainLab2}/>
    </Stack.Navigator>
  )
}

export default Lab2Navigator