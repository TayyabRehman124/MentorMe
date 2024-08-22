import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/main/HomeScreen';
import SubscriptionScreen from '../../screens/main/SubscriptionScreen';
import ProfileScreen from '../../screens/main/ProfileScreen';
import ChatsScreen from '../../screens/main/ChatsScreen';
import MatchScreen from '../../screens/main/MatchScreen';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../components/Colors';

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Octicons name={'home'} size={30} />,
        }}
      />

      <Tab.Screen
        name="SubscriptionScreen"
        component={SubscriptionScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name={'pricetag-outline'} size={30} />,
        }}
      />

      <Tab.Screen
        name="MatchScreen"
        component={MatchScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Octicons name={'heart'} size={30} />,
        }}
      />

      <Tab.Screen
        name="ChatsScreen"
        component={ChatsScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name={'chatbubble-ellipses-outline'} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome5 name={'user'} size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
