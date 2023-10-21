import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addBasket} from '../../store/slices/basketSlice';
const Home = () => {
  const favoriteData = useSelector(state => state.favoriteData.favoriteData);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Favoriler</Text>
      </View>
      {favoriteData?.map(item => (
        <View style={styles.view}>
          <View>
            <Text>{item.title}</Text>
            <Text>{item.price + ' TL'}</Text>
          </View>
          <TouchableOpacity
            style={{backgroundColor: 'red', padding: 10}}
            onPress={() => dispatch(addBasket(item))}>
            <Text>Sepete Ekle</Text>
          </TouchableOpacity>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'grey',
    marginBottom: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
