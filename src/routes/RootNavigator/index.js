import * as React from 'react';
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

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="RewindScreen"
          component={RewindScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="BordingScreen"
          component={BordingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MatchScreen2"
          component={MatchScreen2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountDeletionScreen"
          component={AccountDeletionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SurveyScreen"
          component={SurveyScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HelpCenterScreen"
          component={HelpCenterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AudioCallScreen"
          component={AudioCallScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VideoCallScreen"
          component={VideoCallScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
