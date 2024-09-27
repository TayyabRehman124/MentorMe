import * as React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/auth/LoginScreen';
import SignupScreen from '../../screens/auth/SignupScreen';
import BordingScreen from '../../screens/auth/BordingScreen';
import BottomTab from '../../routes/BottomTab';
import SettingsScreen from '../../screens/main/SettingsScreen';
import HelpCenterScreen from '../../screens/main/HelpCenterScreen';
import AccountDeletionScreen from '../../screens/main/AccountDeletionScreen';
import SurveyScreen from '../../screens/main/SurveyScreen';
import MessageScreen from '../../screens/main/MessageScreen';
import AudioCallScreen from '../../screens/main/AudioCallScreen';
import VideoCallScreen from '../../screens/main/VideoCallScreen';
import MatchScreen2 from '../../screens/main/MatchScreen2';
import RewindScreen from '../../screens/main/RewindScreen';
import AccountApprovalScreen from '../../screens/main/AccountApprovalScreen';
import AccountApprovedCodeScreen from '../../screens/main/AccountApprovedCodeScreen';
import SplashScreen from 'react-native-splash-screen';
const Stack = createNativeStackNavigator();

function RootNavigator() {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide(); // Hide splash screen after two seconds
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BordingScreen" component={BordingScreen} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />

        <Stack.Screen name="MatchScreen2" component={MatchScreen2} />
        <Stack.Screen
          name="AccountDeletionScreen"
          component={AccountDeletionScreen}
        />
        <Stack.Screen name="SurveyScreen" component={SurveyScreen} />

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
        <Stack.Screen name="AudioCallScreen" component={AudioCallScreen} />
        <Stack.Screen name="VideoCallScreen" component={VideoCallScreen} />
        <Stack.Screen
          name="AccountApprovalScreen"
          component={AccountApprovalScreen}
        />
        <Stack.Screen
          name="AccountApprovedCodeScreen"
          component={AccountApprovedCodeScreen}
        />
        <Stack.Screen name="RewindScreen" component={RewindScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
