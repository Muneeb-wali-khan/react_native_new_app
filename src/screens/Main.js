import React, {useState, useCallback} from 'react';
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Text} from 'react-native-paper';
import {
  Half_WHITE,
  THEME_COLOR,
  WHITE_BG,
  BLACK,
  Half_GRAY,
  DIM_BLACK,
} from '../strings/Colors';
import LatestScreen from './TopTabs/LatestScreen';
import RecentScreen from './TopTabs/RecentScreen';
import TechCrunch from './TopTabs/TechCrunch';
import BussinessUSA from './TopTabs/BussinessUSA';
import ArticlesJournal from './TopTabs/ArticlesJournal';

const Main = () => {
  const [index, setIndex] = useState(0);
  const someValue = 'Test Props';
  const otherValue = 'Other Props';

  const routes = [
    {key: 'today', title: 'Today News'},
    {key: 'latest', title: 'Latest Today'},
    {key: 'tech', title: 'Tech World'},
    {key: 'bussiness', title: 'Bussiness USA'},
    {key: 'articles', title: 'Articles Top'},
  ];
  const _handleIndexChange = useCallback(index => {
    setIndex(index);
  }, []);

  const _renderTabBar = props => {
    return (
      <View>
        <ScrollView
          contentContainerStyle={{
            paddingVertical: 8, // Adjusted for better height
            backgroundColor: Half_WHITE,
            borderWidth: 1,
            borderColor: Half_GRAY,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabBar}>
          {props.navigationState.routes.map((route, i) => {
            const isActive = index === i;

            return (
              <TouchableOpacity
                key={route.key}
                style={styles.tabItem}
                onPress={() => setIndex(i)}>
                <Text
                  style={{
                    color: isActive ? THEME_COLOR : DIM_BLACK,
                    fontWeight: isActive ? '800' : '700',
                    borderBottomWidth: isActive ? 2 : 0,
                    fontSize: 14,
                    borderBottomColor: isActive ? THEME_COLOR : 'transparent',
                  }}>
                  {route.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'today':
        return <LatestScreen someProps={someValue} />;
      case 'latest':
        return <RecentScreen otherProps={otherValue} />;
      case 'tech':
        return <TechCrunch />;
      case 'bussiness':
        return <BussinessUSA />;
      case 'articles':
        return <ArticlesJournal />;
      default:
        return null;
    }
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={_renderTabBar}
      lazy={true}
      style={{flex: 1}}
      renderLazyPlaceholder={() => (
        <View style={styles.lazyPlaceholder}>
          <Text>Loading...</Text>
        </View>
      )}
      onIndexChange={_handleIndexChange}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: Half_WHITE,
    elevation: 4,
  },
  tabItem: {
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  lazyPlaceholder: {
    flex: 1,
    backgroundColor: WHITE_BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
