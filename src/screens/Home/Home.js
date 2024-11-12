import React from 'react';
import {GHOST_WHITE, Half_WHITE, THEME_COLOR, WHITE_BG} from '../../strings/Colors';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LottieView from 'lottie-react-native';
import {Image, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Main from '../Main';

const Bottom = createBottomTabNavigator();

const Home = () => {
  const theme ={
    background: THEME_COLOR
  }
  const navigation = useNavigation()

  const handlPressNotifications = () => {
    navigation.navigate('AdminStack', {screen: 'allNotifications'})
  };

  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.background,
          borderWidth: 0,
          height: 60,
          paddingHorizontal: 4,
        },
        tabBarActiveTintColor: Half_WHITE,
        tabBarInactiveTintColor: GHOST_WHITE,
        tabBarLabelStyle: {fontWeight: 'bold'},
        tabBarItemStyle: {paddingVertical: 6},
      }}>
      <Bottom.Screen
        name="Dashboard"
        options={({navigation}) => ({
          headerShown: false,
          headerTitle: 'NWW.NEWS',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            color: WHITE_BG,
          },
          headerStyle: {backgroundColor: theme.background},
          tabBarIcon: () => (
            <View>
              <Image
                style={{width: 19, height: 19, tintColor: Half_WHITE}}
                source={require('../../images/dash.png')}
              />
            </View>
          ),
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text style={{color: Half_WHITE, fontSize: 10}}>Dashboard</Text>
            ) : null,
        })}
        component={Main}
      />
      {/* <Bottom.Screen
        name="Students"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Image
                style={{width: 22, height: 22, tintColor: Half_WHITE}}
                source={require('../../images/icons/students.png')}
              />
            </View>
          ),
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text style={{color: Half_WHITE, fontSize: 10}}>Students</Text>
            ) : null,
        }}
        component={StudentDrawerAdmin}
      />
      <Bottom.Screen
        name="Attendances"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Image
                style={{width: 22, height: 22, tintColor: Half_WHITE}}
                source={require('../../images/icons/attendance.png')}
              />
            </View>
          ),
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text style={{color: Half_WHITE, fontSize: 10}}>Attendances</Text>
            ) : null,
        }}
        component={AttendanceDrawerAdn}
      />
      <Bottom.Screen
        name="Teachers"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Image
                style={{width: 22, height: 22, tintColor: Half_WHITE}}
                source={require('../../images/icons/teacher.png')}
              />
            </View>
          ),
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text style={{color: Half_WHITE, fontSize: 10}}>Teachers</Text>
            ) : null,
        }}
        component={TeacherDrawerAdmin}
      />
      <Bottom.Screen
        name="Profile"
        component={PorfileDrawer}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Image
                style={{width: 22, height: 22, tintColor: Half_WHITE}}
                source={require('../../images/icons/user.png')}
              />
            </View>
          ),
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text style={{color: Half_WHITE, fontSize: 10}}>Profile</Text>
            ) : null,
        }}
      /> */}
    </Bottom.Navigator>
  );
};

export default Home;
