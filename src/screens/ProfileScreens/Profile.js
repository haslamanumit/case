import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getFolders} from '../../store/slices/getSlice';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const productData = useSelector(state => state.folderGet.getData);

  useEffect(() => {
    dispatch(getFolders());
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        {productData?.products?.map(item => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', {id: item.id})}
            style={{
              flexDirection: 'row',
              width: '90%',
              backgroundColor: 'grey',
              borderRadius: 10,
              marginBottom: '3%',
              marginHorizontal: '5%',
              padding: 10,
              borderWidth: 1,
            }}>
            <View style={{flex: 1}}>
              <Image
                source={{uri: item.images[0]}}
                style={{width: 50, height: 50, borderRadius: 10}}
              />
            </View>
            <View style={{flex: 3, justifyContent: 'center'}}>
              <Text style={{color: 'white', fontWeight: '600'}}>
                {item?.title}
              </Text>
              <Text numberOfLines={1} style={{color: 'white', opacity: 0.5}}>
                {item?.description}
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text>
                {(item?.price - item?.price / item?.discountPercentage).toFixed(
                  2,
                ) + ' TL'}
              </Text>
              <Text style={{textDecorationLine: 'line-through'}}>
                {item?.price + ' TL'}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
