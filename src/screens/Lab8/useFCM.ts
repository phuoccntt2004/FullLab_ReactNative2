import AsyncStorage from "@react-native-async-storage/async-storage";
import  messaging from "@react-native-firebase/messaging";

export const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission()

    const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
                    
    if(enabled) {
        useFCM();
    }
}

export const useFCM = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken')

    if(!fcmToken) {
        try {
            const token = await messaging().getToken();
            if(token) {
                await AsyncStorage.setItem('fcmToken', token);
            }
        } catch (error) {
            console.log(`Can not get fcm token ${error}`)
        }
    }
}