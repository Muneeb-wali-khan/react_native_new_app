import {View, Text, StatusBar, Image, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {SPLASH_COLOR} from '../../strings/Colors.js';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
// import LottieView from 'lottie-react-native';
import {Animated} from 'react-native';

const Splash = () => {
  const screenFocused = useIsFocused();
  const nav = useNavigation();
  const jumpAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      nav.navigate('HomeScreen');
    }, 3000);
  }, [screenFocused]);

  // jumping animation

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(jumpAnim, {
          toValue: -13,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(jumpAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [jumpAnim]);

  //   const verifyUserLogedIn = async () => {
  //     const accessToken = await AsyncStorage.getItem('accessToken');
  //     const userData = await AsyncStorage.getItem('userData');

  //     if (accessToken) {
  //       switch (JSON.parse(userData)?.role) {
  //         case 'admin':
  //           nav.navigate('AdminHome');
  //           break;
  //         default:
  //           console.error('Unknown role:', 'no role');
  //       }
  //     } else {
  //       setTimeout(() => {
  //         nav.navigate('Welcome');
  //       }, 3000);
  //     }
  //   };

  return (
    <>
      <View style={styles.container}>
        <Animated.Image
          style={[styles.logo, {transform: [{translateY: jumpAnim}]}]}
          source={require('../../images/splash.jpeg')}
        />
      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: SPLASH_COLOR,
  },
  logo: {
    width: responsiveScreenWidth(50),
    height: '50%',
    resizeMode: 'contain',
  },
  welcome: {
    height: responsiveScreenWidth(70),
    aspectRatio: 1,
  },
});
