import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';

import Login from '../scrn/Login';
import Home from '../scrn/Home';
import History from '../scrn/History';

const Tab = createBottomTabNavigator();

const Nav = () => {
  return (
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
                source={require('../assets/vekalender.png')} // Ganti dengan path gambar yang sesuai
                style={{ width: size, height: size, resizeMode: 'contain', tintColor: color }}
              />
            );
          }

          return iconComponent;
        },
      })}
    >
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};

export default Nav;
