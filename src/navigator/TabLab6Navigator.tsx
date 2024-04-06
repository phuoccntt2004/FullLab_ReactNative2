import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home2 } from 'iconsax-react-native';
import React, { ReactNode } from 'react';
import { FONTFAMILY } from '../../assets/fonts';
import COLORS from '../assets/colors/Colors';
import { TextComponent } from '../components';
import { CounterScreen, FormScreen, ReducersQuery } from '../screens';

const TabLab6Navigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.HEX_BLACK,
                borderColor: COLORS.HEX_BLACK,
            },
            tabBarIcon: ({ focused, color, size }) => {
                let icon: ReactNode;
                color = focused ? COLORS.HEX_ORANGE : COLORS.HEX_LIGHT_GREY

                switch (route.name) {
                    case 'Bai1':
                        icon = <Home2 size={size} color={color} variant="Bold" />;
                        break;
                    case 'Bai2':
                        icon = <Home2 size={size} color={color} variant="Bold" />;
                        break;
                    case 'Bai3':
                        icon = <Home2 size={size} color={color} variant="Bold" />;
                        break;
                }
                return icon;
            },
            tabBarIconStyle: {
                marginTop: 4
            },
            tabBarLabel({ focused }) {
                return <TextComponent text={route.name} flex={0} size={12} color={focused ? COLORS.HEX_ORANGE : COLORS.HEX_LIGHT_GREY} font={FONTFAMILY.poppins_bold} />;
            },
        })}>
            <Tab.Screen name="Bai1" component={CounterScreen} />
            <Tab.Screen name="Bai2" component={ReducersQuery} />
            <Tab.Screen name="Bai3" component={FormScreen} />
        </Tab.Navigator>
    )

}

export default TabLab6Navigator