import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import komponen-komponen yang diperlukan
import LoginScreen from './Scrn/LoginScreen';
import HomeScreen from './Scrn/HomeScreen';
import History from './Scrn/History';
import Detail from './Scrn/Detail';
import Kotak from './Component/Kotak';
import Profile from './Scrn/Profile';
import Security from './Scrn/Security';
import ChangePass from './Scrn/ChangePass';
import Help from './Scrn/Help';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'History') {
            iconName = 'time-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="History" component={History} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
        />
        <Stack.Screen
          name="Kotak"
          component={Kotak}
        />
        <Stack.Screen
          name="Security"
          component={Security}
        />
        <Stack.Screen
          name="ChangePass"
          component={ChangePass}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Help"
          component={Help}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
