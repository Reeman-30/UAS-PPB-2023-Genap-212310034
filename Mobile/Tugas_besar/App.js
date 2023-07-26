import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';

import Home from './scrn/Home';
import Detail from './scrn/Detail';
import Login from './scrn/Login';
import History from './scrn/History';
import Kotak from './component/Kotak';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Kotak" component={Kotak} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconComponent;

            if (route.name === 'Home') {
              iconComponent = <Ionicons name="home" size={size} color={color} />;
            } else if (route.name === 'Login') {
              iconComponent = <Ionicons name="log-in" size={size} color={color} />;
            } else if (route.name === 'History') {
              iconComponent = (
                <Image
                  source={require('./assets/vekalender.png')}
                  style={{ width: size, height: size, resizeMode: 'contain', tintColor: color }}
                />
              );
            }

            return iconComponent;
          },
          tabBarLabel: () => null, // Menyembunyikan nama screen di bottom navigation
        })}
      >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="History" component={History} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
