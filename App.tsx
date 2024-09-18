import {View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import RootNavigator from './src/routes/RootNavigator'
const App = () => {
 
  return (<View style={{flex:1}}>
    <RootNavigator/>
    </View>
  )
}

export default App

