import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import HeaderCustom from '../components/HeaderCustom';
import {
  BLACK,
  DIM_BLACK,
  Half_GRAY,
  Half_WHITE,
  MEDIUM_BLACK,
  Medium_GRAY,
} from '../strings/Colors';
import {TextInput} from 'react-native';

const NewsDetails = () => {
  const navigation = useNavigation();
  const item = useRoute();
  const data = item.params?.item;

  return (
    <View style={{flex: 1,backgroundColor:Half_WHITE}}>
      {/* header */}
      <HeaderCustom />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'column', gap: 10}}>
          <View>
            <Image
              style={{width: '100%', height: 200}}
              resizeMode="cover"
              source={{uri: data?.urlToImage}}
            />
          </View>
          <View style={{flexDirection: 'column', gap: 20, padding: 18}}>
            <Text style={{fontWeight: '900', fontSize: 18}}>{data?.title}</Text>

            <View style={{flexDirection: 'column', gap: 2}}>
              <View style={{flexDirection: 'row', gap: 7}}>
                <Text style={{fontWeight: '500', fontSize: 12}}>Author : </Text>
                <Text
                  style={{fontWeight: '400', fontSize: 12, color: Half_GRAY}}>
                  {data?.author}
                </Text>
              </View>

              <View style={{flexDirection: 'row', gap: 7}}>
                <Text style={{fontWeight: '500', fontSize: 12}}>
                  PublishedAt :{' '}
                </Text>
                <Text
                  style={{fontWeight: '400', fontSize: 12, color: Half_GRAY}}>
                  {new Date(data?.publishedAt).toDateString()}
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 15,
                color: MEDIUM_BLACK,
                lineHeight: 24,
              }}>
              {data?.content}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          backgroundColor: Half_WHITE,
          elevation:1,
          shadowColor:BLACK,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 2,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 14,
          paddingHorizontal: 17,
        }}>
        <TextInput
          style={{
            flex: 1,
            backgroundColor: Medium_GRAY,
            borderWidth: 0.2,
            borderRadius: 5,
            borderColor: Half_GRAY,
          }}
          multiline={true}
        />
        <View style={{flexDirection: 'row', gap: 15}}>
          <TouchableOpacity>
            <MaterialIcons name="add-circle" size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="thumbs-up" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewsDetails;
