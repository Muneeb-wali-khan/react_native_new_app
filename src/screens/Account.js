import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React from 'react';
import {ACCOUNT_IMG_URI} from '../strings/imagesUri';
import {DIM_GRAY, Half_GRAY, Half_WHITE, Medium_GRAY} from '../strings/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Account = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{backgroundColor: Half_WHITE}}>
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
          paddingLeft: 19,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{marginRight: 10}}>
            <AntDesign name="home" size={25} />
          </View>
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
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{marginRight: 10}}>
          <Entypo name="location-pin" size={30} />
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
          paddingRight: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{marginRight: 10}}>
          <Entypo name="news" size={30} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 44,
          }}>
          <View>
            <Text style={{fontWeight: '700', fontSize: 15}}>News Topics</Text>
            <Text style={{fontWeight: '400', fontSize: 13, color: Half_GRAY}}>
              edit your public profile and info
            </Text>
          </View>
          <View>
            <Text style={{color: 'rgba(237,35,66,0.7)', fontWeight: '500'}}>
              0 selected
            </Text>
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
          paddingLeft: 19,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{marginRight: 10}}>
            <Entypo name="bell" size={25} />
          </View>
          <Text style={{fontWeight: '700', fontSize: 15}}>
            Notification settings
          </Text>
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
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{marginRight: 10}}>
          <AntDesign name="playcircleo" size={30} />
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
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{marginRight: 10}}>
          <FontAwesome5 name="history" size={30} />
        </View>
        <View>
          <Text style={{fontWeight: '700', fontSize: 15}}>History</Text>
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
          paddingLeft: 19,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // gap: 10,
          }}>
          <View style={{marginRight: 10}}>
            <Ionicons name="moon-outline" size={25} />
          </View>
          <Text style={{fontWeight: '700', fontSize: 15}}>Dark mode</Text>
        </View>
        <View>
          <Switch value={true} thumbColor={'#2AA5F8'} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          borderColor: Medium_GRAY,
          borderWidth: 0.3,
          padding: 14,
          paddingRight: 20,
          paddingLeft: 19,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{marginRight: 10}}>
            <Feather name="globe" size={25} />
          </View>
          <Text style={{fontWeight: '700', fontSize: 15}}>Language</Text>
        </View>
        <View>
          <Text style={{color: DIM_GRAY, fontWeight: '500'}}>English</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          borderColor: Medium_GRAY,
          borderWidth: 0.3,
          padding: 14,
          paddingRight: 20,
          paddingLeft: 19,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{marginRight: 10}}>
            <MaterialIcons name="text-fields" size={25} />
          </View>
          <Text style={{fontWeight: '700', fontSize: 15}}>Text size</Text>
        </View>
        <View>
          <Text style={{color: DIM_GRAY, fontWeight: '500'}}></Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Account;
