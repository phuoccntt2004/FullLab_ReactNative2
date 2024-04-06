import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Bai1, Bai2_Lab1, Bai3_Lab1 } from '../screens';

const Lab1Navigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Lab1_Bai1' screenOptions={{headerShown:false}} >
        <Stack.Screen name='Lab1_Bai1' component={Bai1}/>
        <Stack.Screen name='Lab1_Bai2' component={Bai2_Lab1}/>
        <Stack.Screen name='Lab1_Bai3' component={Bai3_Lab1}/>
    </Stack.Navigator>
  )
}

export default Lab1Navigator