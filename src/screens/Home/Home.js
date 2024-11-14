import React from 'react';
import {
  BLACK,
  DIM_WHITE,
  GHOST_WHITE,
  Half_GRAY,
  Half_WHITE, // Ensure this is correctly defined as a lighter gray color
  THEME_COLOR,
  WHITE_BG,
} from '../../strings/Colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import Main from '../Main';
import Search from '../Search';
import Favorites from '../Favorites';
import Account from '../Account';

const Bottom = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: WHITE_BG,
          borderWidth: 0,
          height: 55,
          paddingHorizontal: 4,
        },
        tabBarActiveTintColor: BLACK, // Active icon color
        tabBarInactiveTintColor: Half_GRAY, // Inactive icon color (light gray)
        tabBarLabelStyle: {fontWeight: 'bold'},
        tabBarItemStyle: {paddingVertical: 6},
      }}>
      <Bottom.Screen
        name="Dashboard"
        options={{
          headerShown: true,
          headerStyle: {
            height: 100,
            backgroundColor: Half_WHITE,
            elevation:0.9
          },
          headerTitleAlign: 'center',
          headerTitle: () => {
            return (
              <View>
                <Image
                  style={{width: 180, height: 180}} // Adjust as necessary
                  resizeMode="contain"
                  source={require('../../images/nwwnewlogo.png')}
                />
              </View>
            );
          },
          tabBarIcon: (
            {color}, // Use the color prop here
          ) => (
            <View>
              <Entypo name="home" size={22} color={color} />
            </View>
          ),
          tabBarLabel: '',
        }}
        component={Main}
      />

      <Bottom.Screen
        name="Search"
        options={{
          headerShown: true,
          tabBarIcon: (
            {color}, // Use the color prop here
          ) => (
            <View>
              <FontAwesome name="search" size={22} color={color} />
            </View>
          ),
          tabBarLabel: '',
        }}
        component={Search}
      />

      <Bottom.Screen
        name="Favorite"
        options={{
          headerShown: true,
          tabBarIcon: (
            {color}, // Use the color prop here
          ) => (
            <View>
              <Fontisto name="favorite" size={22} color={color} />
            </View>
          ),
          tabBarLabel: '',
        }}
        component={Favorites}
      />

      <Bottom.Screen
        name="Account"
        options={{
          headerShown: true,
          tabBarIcon: (
            {color}, // Use the color prop here
          ) => (
            <View>
              <FontAwesome6 name="user-large" size={22} color={color} />
            </View>
          ),
          tabBarLabel: '',
        }}
        component={Account}
      />
    </Bottom.Navigator>
  );
};

export default Home;
