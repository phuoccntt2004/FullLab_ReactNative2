import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Lab1Navigator, Lab2Navigator, Lab3Navigator, Lab4Navigator, Lab6Navigator, Lab7Navigator } from './src/navigator'
import { Provider } from 'react-redux'
// import { persistor, store } from './src/screens/Lab5/store'

import { PersistGate } from 'redux-persist/integration/react'
import ImageUploader from './src/screens/Lab5/ImageUploader'
import { store } from './src/store/store'
import { NotificationScreen } from './src/screens'
import {PermissionsAndroid} from 'react-native';


const App = () => {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Lab1Navigator/> */}
        {/* <Lab2Navigator/> */}
        {/* <Lab3Navigator/> */}
        {/* <Lab4Navigator /> */}
        {/* <Lab6Navigator/> */}
        <Lab7Navigator/>
        {/* <NotificationScreen/> */}
      </NavigationContainer>
    </Provider>
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <ImageUploader />
    //   </PersistGate>
    // </Provider>
  )
}

export default App