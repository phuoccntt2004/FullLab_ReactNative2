import React, { useEffect, useState } from 'react'
import { FONTFAMILY } from '../../../assets/fonts'
import COLORS from '../../assets/colors/Colors'
import { SectionComponent, TextComponent } from '../../components'
import { requestUserPermission } from './useFCM'
import AsyncStorage from '@react-native-async-storage/async-storage'

const NotificationScreen = () => {
    const [token, setToken] = useState('');
    useEffect(() => {
        requestUserPermission();
        getFcmToken();
        console.log(token);
    }, []);

    const getFcmToken = async () => {
        const token = await AsyncStorage.getItem('fcmToken');

        if(token) {
            setToken(token)
            console.log(token)
        }
    }
    return (
        <SectionComponent
            styles={{
                flex: 1,
                padding: 16,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <TextComponent
                text='NotificationScreen'
                size={18}
                font={FONTFAMILY.poppins_bold}
                color={COLORS.HEX_LIGHT_GREY}></TextComponent>
            <TextComponent
                text={token}
                size={15}
                font={FONTFAMILY.poppins_bold}
                color={COLORS.HEX_LIGHT_GREY}></TextComponent>    
        </SectionComponent>
    )
}

export default NotificationScreen