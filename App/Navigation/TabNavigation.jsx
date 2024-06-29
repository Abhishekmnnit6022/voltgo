import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Favourite from '../screens/FavScreen/Favourite';
import HomeScreen from '../screens/Homesceen/HomeScreen';
import Profile from '../screens/Profilesceen/Profile';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab=createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false,
        tabBarIcon:({color,size})=>(
          <FontAwesome name="search" size={size} color={color} />),
          tabBarActiveTintColor:"#C70039",
          tabBarLabel:"Search",
      }}
        />
      <Tab.Screen name="Favourite" component={Favourite} options={{headerShown:false,
        tabBarIcon:({color,size})=>(
             <MaterialIcons name="favorite" size={size} color={color} /> ),
          tabBarActiveTintColor:"#C70039",
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{headerShown:false,tabBarLabel:"Profile",
        tabBarIcon:({color,size})=>(
          <MaterialCommunityIcons name="account" size={size} color={color} />),
          tabBarActiveTintColor:"#C70039",
      }}/>

      </Tab.Navigator>
  )
}