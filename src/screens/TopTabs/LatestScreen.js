import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {
  DIM_WHITE,
  GHOST_WHITE,
  Half_GRAY,
  Half_WHITE,
  THEME_COLOR,
  WHITE_BG,
} from '../../strings/Colors';

const LatestScreen = () => {
  const bgcover =
    'https://media.istockphoto.com/id/1767183261/photo/firefighter-concept-fireman-using-water-and-extinguisher-to-fighting-with-fire-flame.webp?a=1&b=1&s=612x612&w=0&k=20&c=1mEuoRWgLfnA4maF2haOxHYsQxgvjSZrzWxLenNx-Ks=';
  // 'https://plus.unsplash.com/premium_photo-1661490162121-41df314e1ef1?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <View>
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
      <ImageBackground
        imageStyle={{opacity: 0.8, backgroundColor: '#000'}}
        source={{uri: bgcover}}
        style={{width: '100%', height: 230}}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
            flexDirection: 'column',
            gap: 8,
          }}>
          <Text style={{fontSize: 13, fontWeight: '500', color: GHOST_WHITE}}>
            {new Date().toDateString()}
          </Text>
          <View style={{maxWidth: 180}}>
            <Text style={{fontSize: 25, fontWeight: '900', color: WHITE_BG}}>
              Immediate step needed to stop fire{' '}{' '}
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
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LatestScreen;
