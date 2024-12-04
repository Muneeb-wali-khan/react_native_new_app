import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ACCOUNT_IMG_URI} from '../strings/imagesUri';
import {DIM_GRAY, Half_GRAY, Medium_GRAY} from '../strings/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Account = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
          gap: 25,
          alignItems: 'center',
          paddingLeft: 20,
          padding: 16,
        }}>
        <Image
          source={{uri: ACCOUNT_IMG_URI}}
          style={{width: 70, height: 70, borderRadius: 50}}
        />
        <View>
          <Text style={{fontWeight: '900', fontSize: 21}}>
            random@gmail.com
          </Text>
          <Text style={{fontWeight: '400', fontSize: 13, color: Half_GRAY}}>
            edit your public profile and info
          </Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          borderColor: Medium_GRAY,
          borderWidth: 0.3,
          padding: 14,
          paddingRight: 20,
          paddingLeft:19,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <AntDesign name="home" size={25} />
          <Text style={{fontWeight: '700', fontSize: 15}}>Home screen</Text>
        </View>
        <View>
          <Text style={{color: DIM_GRAY, fontWeight: '500'}}>for you</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          borderColor: Medium_GRAY,
          borderWidth: 0.3,
          padding: 14,
          paddingRight: 20,
          gap:6,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <Entypo name="location-pin" size={33} />
        </View>
        <View>
          <Text style={{fontWeight: '700', fontSize: 15}}>Locations</Text>
          <Text style={{fontWeight: '400', fontSize: 13, color: Half_GRAY}}>
            edit your public profile and info
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          borderColor: Medium_GRAY,
          borderWidth: 0.3,
          padding: 14,
          gap:6,
          paddingRight: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <Entypo name="news" size={30} />
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",gap:44}}>
        <View>
          <Text style={{fontWeight: '700', fontSize: 15}}>News Topics</Text>
          <Text style={{fontWeight: '400', fontSize: 13, color: Half_GRAY}}>
            edit your public profile and info
          </Text>
        </View>
        <View>
          <Text style={{color:"rgba(237,35,66,0.7)",fontWeight:"500"}}>0 selected</Text>
        </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          borderColor: Medium_GRAY,
          borderWidth: 0.3,
          padding: 14,
          paddingRight: 20,
          paddingLeft:19,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap:10
          }}>
          <Entypo name="bell" size={25} />
          <Text style={{fontWeight: '700', fontSize: 15}}>Notification settings</Text>
        </View>
        <View>
          <Text style={{color: DIM_GRAY, fontWeight: '500'}}>for you</Text>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          borderColor: Medium_GRAY,
          borderWidth: 0.3,
          padding: 14,
          paddingRight: 20,
          gap:6,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <AntDesign name="playcircleo" size={33} />
        </View>
        <View>
          <Text style={{fontWeight: '700', fontSize: 15}}>Autoplay</Text>
          <Text style={{fontWeight: '400', fontSize: 13, color: Half_GRAY}}>
            edit your public profile and info
          </Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          borderColor: Medium_GRAY,
          borderWidth: 0.3,
          padding: 14,
          paddingRight: 20,
          gap:6,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <FontAwesome5 name="history" size={33} />
        </View>
        <View>
          <Text style={{fontWeight: '700', fontSize: 15}}>History</Text>
          <Text style={{fontWeight: '400', fontSize: 13, color: Half_GRAY}}>
            edit your public profile and info
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Account;
