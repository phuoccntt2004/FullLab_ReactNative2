import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home2 } from 'iconsax-react-native';
import React, { ReactNode } from 'react';
import { FONTFAMILY } from '../../assets/fonts';
import COLORS from '../assets/colors/Colors';
import { TextComponent } from '../components';
import { Bai1_2_Lab4, TrackPlayerApp } from '../screens';

const TabLab4Navigator = () => {
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
                    case 'Lab4_Bai1_2':
                        icon = <Home2 size={size} color={color} variant="Bold" />;
                        break;
                    case 'Lab4_Bai3':
                        icon = <Home2 size={size} color={color} variant="Bold" />
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
            <Tab.Screen name="Lab4_Bai1_2" component={Bai1_2_Lab4} />
            <Tab.Screen name="Lab4_Bai3" component={TrackPlayerApp} />
        </Tab.Navigator>
    )

}

export default TabLab4Navigator