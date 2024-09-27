import {View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import RootNavigator from './src/routes/RootNavigator'
import { Provider } from "react-redux";
import Store from "./src/components/redux/Store";
const App = () => {
 
  return (
    
    <Provider store={Store}>
       <RootNavigator/>
  </Provider>
 

  
  )
}

export default App

