import {
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';
import {
  DIM_WHITE,
  GHOST_WHITE,
  Half_GRAY,
  Half_WHITE,
  THEME_COLOR,
  WHITE_BG,
} from '../../strings/Colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const LatestScreen = () => {
  const navigation = useNavigation()
  const bgcover =
    'https://media.istockphoto.com/id/1767183261/photo/firefighter-concept-fireman-using-water-and-extinguisher-to-fighting-with-fire-flame.webp?a=1&b=1&s=612x612&w=0&k=20&c=1mEuoRWgLfnA4maF2haOxHYsQxgvjSZrzWxLenNx-Ks=';

  const data = [
    {
      source: {
        id: 'the-verge',
        name: 'The Verge',
      },
      author: 'Allison Johnson',
      title: 'The new Mac Mini is great — now do the iPhone SE',
      description:
        'Apple’s budget phone is overdue for an overhaul. Rumors of a fourth-generation iPhone SE point to a big update, with a modern design and upgraded internals.',
      url: 'https://www.theverge.com/2024/11/15/24296505/apple-iphone-se-rumors-mac-mini',
      urlToImage:
        'https://cdn.vox-cdn.com/thumbor/q-qtj-Y3uHht110F9n4w5lkQDkE=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23307885/ajohnson_221103_5070_0004.jpg',
      publishedAt: '2024-11-15T17:00:00Z',
      content:
        'The new Mac Mini is great now do the iPhone SE\r\nThe new Mac Mini is great now do the iPhone SE\r\n / Give us a decent $500 iPhone already, Apple.\r\nByAllison Johnson, a reviewer with 10 years of experie… [+5274 chars]',
    },

    {
      source: {
        id: null,
        name: 'Gizmodo.com',
      },
      author: 'Kyle Barr',
      title: 'The M4 MacBook Pro Might Be Hiding a Significant Screen Upgrade',
      description:
        'The M4 MacBook Pro models may be featuring quantum dot technology, though the jury is still out on whether these displays are truly better than before.',
      url: 'https://gizmodo.com/the-m4-macbook-pro-might-be-hiding-a-significant-screen-upgrade-2000524997',
      urlToImage:
        'https://cdn.mos.cms.futurecdn.net/RTFXRL9LHrGWdTbRB4vGCo-1200-80.jpg',
      publishedAt: '2024-11-15T15:02:10Z',
      content:
        'If the rumors are true, the latest MacBook Pro 14 and Pro 16 models could hide a secret upgrade. The new MacBooks reportedly switched to quantum dot displays, a technology that practically every disp… [+3826 chars]',
    },

    {
      source: {
        id: null,
        name: 'MacRumors',
      },
      author: 'Mitchel Broussard',
      title:
        'Best Apple Deals of the Week: Early Black Friday Prices Arrive for Apple Watch Series 10, MacBook Air, and More',
      description:
        "This week's best deals include new record low prices on Apple Watch Series 10 at $50 off, as well as great deals on AirPods 4, M2 MacBook Air, and Magic Keyboard for the M4 iPad Pro.\n\n\n\nNote: MacRumors is an affiliate partner with some of these vendors. When …",
      url: 'https://www.macrumors.com/2024/11/15/best-apple-deals-of-the-week-11-15-24/',
      urlToImage:
        'https://images.macrumors.com/t/LGedPyr5OXrWA54I4UATO9bYlXM=/2500x/article-new/2024/07/best-apple-deals-hero-new-blue.jpg',
      publishedAt: '2024-11-15T19:05:44Z',
      content:
        "This week's best deals include new record low prices on Apple Watch Series 10 at $50 off, as well as great deals on AirPods 4, M2 MacBook Air, and Magic Keyboard for the M4 iPad Pro.\r\nNote: MacRumors… [+2204 chars]",
    },

    {
      source: {
        id: null,
        name: 'MacRumors',
      },
      author: 'Joe Rossignol',
      title:
        "iPhone's Satellite Feature Launched Two Years Ago Today, Remains Free",
      description:
        'Today marks two years since Apple made its Emergency SOS via satellite feature available on all iPhone 14 models in the U.S. and Canada. Apple has since expanded its suite of satellite-based features, and they all remain free to use for now.\n\n\n\n\n\nBelow, we re…',
      url: 'https://www.macrumors.com/2024/11/15/iphone-satellite-feature-turns-two/',
      urlToImage:
        'https://images.macrumors.com/t/KcnK_VRPgMQgDnXP8TJophd5E3Y=/2072x/article-new/2024/11/iPhone-Satellite-Feature.jpg',
      publishedAt: '2024-11-15T19:39:47Z',
      content:
        'Today marks two years since Apple made its Emergency SOS via satellite feature available on all iPhone 14 models in the U.S. and Canada. Apple has since expanded its suite of satellite-based features… [+2873 chars]',
    },
  ];

  const handlePress = item => {
    navigation.navigate('NewsDetails', {item});
  };
  const handlFavorite = (item)=>{
    ToastAndroid.showWithGravity(
      'Added to favorite successfully !',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* headline */}
      <View style={{paddingVertical: 10, backgroundColor: '#F04939'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 17,
            fontWeight: '500',
            color: 'white',
          }}>
          BREAKING NEWS
        </Text>
      </View>
      {/* background cover banner */}
      <ImageBackground
        imageStyle={{opacity: 0.8, backgroundColor: '#000'}}
        source={{uri: bgcover}}
        style={{width: '100%', height: 230}}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
            flexDirection: 'column',
            gap: 10,
          }}>
          <Text style={{fontSize: 13, fontWeight: '500', color: GHOST_WHITE}}>
            {new Date().toDateString()}
          </Text>
          <View style={{maxWidth: 200}}>
            <Text style={{fontSize: 25, fontWeight: '900', color: WHITE_BG}}>
              Immediate step needed to stop fire{' '}
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    paddingVertical: 1,
                    paddingHorizontal: 10,
                    backgroundColor: THEME_COLOR,
                    color: Half_WHITE,
                  }}>
                  News
                </Text>
              </View>
            </Text>
          </View>
          <Text style={{fontSize: 12, fontWeight: '600', color: GHOST_WHITE}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            elit. Quisquam workim son dum bun elit..
          </Text>
        </View>
      </ImageBackground>

      <FlatList
        style={{
          backgroundColor: Half_WHITE,
          flex: 1,
          padding: 5,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={item => {
          return (
            // {/* news cards */}
            <TouchableOpacity
              onPress={() => handlePress(item?.item)}
              activeOpacity={0.8}
              style={{
                backgroundColor: WHITE_BG,
                borderRadius: 10,
                margin: 10,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 1,
              }}>
              {/* image */}
              <View>
                <Image
                  source={{uri: item.item?.urlToImage}}
                  resizeMode="cover"
                  style={{width: 180, height: 105, borderRadius: 10}}
                />
              </View>
              {/* text */}
              <View
                style={{
                  shadowOffset: {width: 0, height: 2},
                  width: 180,
                  padding: 4,
                }}>
                <View
                  style={{
                    paddingHorizontal: 8,
                    flexDirection: 'column',
                    gap: 6,
                    paddingVertical: 7,
                  }}>
                  <Text numberOfLines={3} style={{fontWeight: '800'}}>
                    {item?.item?.title}
                  </Text>
                  <Text numberOfLines={1} style={{fontWeight: '400'}}>
                    {item?.item?.description?.length > 10
                      ? item?.item?.description.slice(1, 23) + '...'
                      : item?.item?.description}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 4,
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontWeight: '300',color:Half_GRAY, fontSize: 13}}>
                      {new Date(item?.item?.publishedAt).toDateString()}
                    </Text>
                    <TouchableOpacity onPress={()=> handlFavorite(item?.item)}>
                      <Fontisto name="bookmark" size={18} color={THEME_COLOR} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
};

export default LatestScreen;
