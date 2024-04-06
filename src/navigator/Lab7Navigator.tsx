import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AuthScreen, MainScreen } from '../screens';

const Lab7_Navigator = () => {
    const [isLogin, setIsLogin] = useState(false);
    const user = useSelector((state: any) => state.User.user);

    useEffect(() => {
        user ? setIsLogin(true) : setIsLogin(false);
    }, [user]);

    const Stack = createNativeStackNavigator();

    const MainRouter = (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name = "MainScreen" component={MainScreen}/>
        </Stack.Navigator>
    )

    const AuthRouter = <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = 'AuthScreen' component={AuthScreen}/>
    </Stack.Navigator>

    return user ? MainRouter : AuthRouter;

}

export default Lab7_Navigator