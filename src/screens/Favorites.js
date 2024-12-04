import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';
import {imgUri} from '../strings/imagesUri';
import {Half_WHITE, THEME_COLOR, WHITE_BG} from '../strings/Colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

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

const Favorites = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          flexDirection: 'column',
          // backgroundColor: Half_WHITE,
          gap: 15,
          paddingLeft: 10,
          paddingTop: 15,
        }}>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 8,
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center',
            shadowColor: '#000',
            backgroundColor: WHITE_BG,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
          }}>
          <Image
            style={{width: 130, height: 90, borderRadius: 7}}
            source={{uri: imgUri}}
            resizeMode="cover"
          />
          <View
            style={{
              flexDirection: 'column',
              gap: 7,
              width: 180,
              maxWidth: 400,
              padding: 5,
            }}>
            <View>
              <Text numberOfLines={2} style={{fontWeight: '800', fontSize: 13}}>
                Tesla self-driving Robotaxi shown in UK ahead of 2027 launch
              </Text>
            </View>
            <View style={{width: 40}}>
              <Text
                style={{
                  fontSize: 11,
                  paddingVertical: 1,
                  paddingHorizontal: 5,
                  backgroundColor: THEME_COLOR,
                  color: Half_WHITE,
                }}>
                News
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <Fontisto name="history" color={THEME_COLOR} size={11} />
                <Text style={{fontSize: 11}}>{new Date().toDateString()}</Text>
              </View>
              <View
                style={{flexDirection: 'row', gap: 14, alignItems: 'center'}}>
                <TouchableOpacity>
                  <Feather name="trash" size={14} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign name="sharealt" size={14} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          flexDirection: 'column',
          // backgroundColor: Half_WHITE,
          gap: 15,
          paddingLeft: 10,
          paddingTop: 15,
        }}>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 8,
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center',
            shadowColor: '#000',
            backgroundColor: WHITE_BG,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
          }}>
          <Image
            style={{width: 130, height: 90, borderRadius: 7}}
            source={{uri: imgUri}}
            resizeMode="cover"
          />
          <View
            style={{
              flexDirection: 'column',
              gap: 7,
              width: 180,
              maxWidth: 400,
              padding: 5,
            }}>
            <View>
              <Text numberOfLines={2} style={{fontWeight: '800', fontSize: 13}}>
                Tesla self-driving Robotaxi shown in UK ahead of 2027 launch
              </Text>
            </View>
            <View style={{width: 40}}>
              <Text
                style={{
                  fontSize: 11,
                  paddingVertical: 1,
                  paddingHorizontal: 5,
                  backgroundColor: THEME_COLOR,
                  color: Half_WHITE,
                }}>
                News
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <Fontisto name="history" color={THEME_COLOR} size={11} />
                <Text style={{fontSize: 11}}>{new Date().toDateString()}</Text>
              </View>
              <View
                style={{flexDirection: 'row', gap: 14, alignItems: 'center'}}>
                <TouchableOpacity>
                  <Feather name="trash" size={14} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign name="sharealt" size={14} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          flexDirection: 'column',
          // backgroundColor: Half_WHITE,
          gap: 15,
          paddingLeft: 10,
          paddingTop: 15,
        }}>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 8,
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center',
            shadowColor: '#000',
            backgroundColor: WHITE_BG,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
          }}>
          <Image
            style={{width: 130, height: 90, borderRadius: 7}}
            source={{uri: imgUri}}
            resizeMode="cover"
          />
          <View
            style={{
              flexDirection: 'column',
              gap: 7,
              width: 180,
              maxWidth: 400,
              padding: 5,
            }}>
            <View>
              <Text numberOfLines={2} style={{fontWeight: '800', fontSize: 13}}>
                Tesla self-driving Robotaxi shown in UK ahead of 2027 launch
              </Text>
            </View>
            <View style={{width: 40}}>
              <Text
                style={{
                  fontSize: 11,
                  paddingVertical: 1,
                  paddingHorizontal: 5,
                  backgroundColor: THEME_COLOR,
                  color: Half_WHITE,
                }}>
                News
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <Fontisto name="history" color={THEME_COLOR} size={11} />
                <Text style={{fontSize: 11}}>{new Date().toDateString()}</Text>
              </View>
              <View
                style={{flexDirection: 'row', gap: 14, alignItems: 'center'}}>
                <TouchableOpacity>
                  <Feather name="trash" size={14} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign name="sharealt" size={14} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          flexDirection: 'column',
          // backgroundColor: Half_WHITE,
          gap: 15,
          paddingLeft: 10,
          paddingTop: 15,
        }}>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 8,
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center',
            shadowColor: '#000',
            backgroundColor: WHITE_BG,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
          }}>
          <Image
            style={{width: 130, height: 90, borderRadius: 7}}
            source={{uri: imgUri}}
            resizeMode="cover"
          />
          <View
            style={{
              flexDirection: 'column',
              gap: 7,
              width: 180,
              maxWidth: 400,
              padding: 5,
            }}>
            <View>
              <Text numberOfLines={2} style={{fontWeight: '800', fontSize: 13}}>
                Tesla self-driving Robotaxi shown in UK ahead of 2027 launch
              </Text>
            </View>
            <View style={{width: 40}}>
              <Text
                style={{
                  fontSize: 11,
                  paddingVertical: 1,
                  paddingHorizontal: 5,
                  backgroundColor: THEME_COLOR,
                  color: Half_WHITE,
                }}>
                News
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <Fontisto name="history" color={THEME_COLOR} size={11} />
                <Text style={{fontSize: 11}}>{new Date().toDateString()}</Text>
              </View>
              <View
                style={{flexDirection: 'row', gap: 14, alignItems: 'center'}}>
                <TouchableOpacity>
                  <Feather name="trash" size={14} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign name="sharealt" size={14} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          flexDirection: 'column',
          // backgroundColor: Half_WHITE,
          gap: 15,
          paddingLeft: 10,
          paddingTop: 15,
        }}>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 8,
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center',
            shadowColor: '#000',
            backgroundColor: WHITE_BG,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
          }}>
          <Image
            style={{width: 130, height: 90, borderRadius: 7}}
            source={{uri: imgUri}}
            resizeMode="cover"
          />
          <View
            style={{
              flexDirection: 'column',
              gap: 7,
              width: 180,
              maxWidth: 400,
              padding: 5,
            }}>
            <View>
              <Text numberOfLines={2} style={{fontWeight: '800', fontSize: 13}}>
                Tesla self-driving Robotaxi shown in UK ahead of 2027 launch
              </Text>
            </View>
            <View style={{width: 40}}>
              <Text
                style={{
                  fontSize: 11,
                  paddingVertical: 1,
                  paddingHorizontal: 5,
                  backgroundColor: THEME_COLOR,
                  color: Half_WHITE,
                }}>
                News
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <Fontisto name="history" color={THEME_COLOR} size={11} />
                <Text style={{fontSize: 11}}>{new Date().toDateString()}</Text>
              </View>
              <View
                style={{flexDirection: 'row', gap: 14, alignItems: 'center'}}>
                <TouchableOpacity>
                  <Feather name="trash" size={14} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign name="sharealt" size={14} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          flexDirection: 'column',
          // backgroundColor: Half_WHITE,
          gap: 15,
          paddingLeft: 10,
          paddingTop: 15,
        }}>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 8,
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center',
            shadowColor: '#000',
            backgroundColor: WHITE_BG,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
          }}>
          <Image
            style={{width: 130, height: 90, borderRadius: 7}}
            source={{uri: imgUri}}
            resizeMode="cover"
          />
          <View
            style={{
              flexDirection: 'column',
              gap: 7,
              width: 180,
              maxWidth: 400,
              padding: 5,
            }}>
            <View>
              <Text numberOfLines={2} style={{fontWeight: '800', fontSize: 13}}>
                Tesla self-driving Robotaxi shown in UK ahead of 2027 launch
              </Text>
            </View>
            <View style={{width: 40}}>
              <Text
                style={{
                  fontSize: 11,
                  paddingVertical: 1,
                  paddingHorizontal: 5,
                  backgroundColor: THEME_COLOR,
                  color: Half_WHITE,
                }}>
                News
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <Fontisto name="history" color={THEME_COLOR} size={11} />
                <Text style={{fontSize: 11}}>{new Date().toDateString()}</Text>
              </View>
              <View
                style={{flexDirection: 'row', gap: 14, alignItems: 'center'}}>
                <TouchableOpacity>
                  <Feather name="trash" size={14} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign name="sharealt" size={14} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Favorites;
