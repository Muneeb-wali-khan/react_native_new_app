import React, { useState, useCallback } from 'react';
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Half_WHITE, THEME_COLOR, WHITE_BG, BLACK } from '../strings/Colors';

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);
const ThirdRoute = () => (
  <View style={[styles.container, { backgroundColor: '#0000' }]} />
);
const FourthRoute = () => (
  <View style={[styles.container, { backgroundColor: '#6737' }]} />
);
const FifthRoute = () => (
  <View style={[styles.container, { backgroundColor: '#6737' }]} />
);
const SixthRoute = () => (
  <View style={[styles.container, { backgroundColor: '#000' }]} />
);

const Main = () => {
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'third', title: 'Third' },
    { key: 'fourth', title: 'Fourth' },
    { key: 'fifth', title: 'Fifth' },
    { key: 'sixth', title: 'Sixth' },
  ];

  const _handleIndexChange = useCallback((index) => {
    setIndex(index);
  }, []);

  const _renderTabBar = (props) => {
    return (
      <ScrollView
        contentContainerStyle={{ height: 60,padding:4 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabBar}
      >
        {props.navigationState.routes.map((route, i) => {
          // Check if the current route is active
          const isActive = index === i;

          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tabItem}
              onPress={() => setIndex(i)}
            >
              <Animated.Text
                style={{
                  color: isActive ? THEME_COLOR : BLACK,
                  fontWeight: isActive ? '800' : '700',
                  borderBottomWidth: isActive ? 2 : 0,
                  fontSize:14.5,
                  borderBottomColor: isActive ? THEME_COLOR : 'transparent',
                }}
              >
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  const _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
    fifth: FifthRoute,
    sixth: SixthRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={_renderScene}
      renderTabBar={_renderTabBar}
      lazy={true}
      renderLazyPlaceholder={() => <View style={styles.lazyPlaceholder} />}
      onIndexChange={_handleIndexChange}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Half_WHITE,
  },
  tabItem: {
    alignItems: 'center',
    padding: 16,
    paddingVertical:10,
  },
  lazyPlaceholder: {
    flex: 1,
    backgroundColor: WHITE_BG,
  },
});

export default Main;
