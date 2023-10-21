import {
  Image,
  SafeAreaView,
  Text,
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import Header from '../../components/Header';
import {addFavorites} from '../../store/slices/favoriteSlice';
import {addBasket} from '../../store/slices/basketSlice';

const Detail = props => {
  const dispatch = useDispatch();
  const {width: screenWidth, height} = Dimensions.get('window');
  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 0.5;
  const productData = useSelector(state => state.folderGet.getData?.products);
  const thisProduct = productData?.find(i => i.id === props.route.params?.id);
  const math =
    (
      thisProduct?.price -
      thisProduct?.price / thisProduct?.discountPercentage
    ).toFixed(2) + ' TL';

  const renderItem = ({item}) => (
    <View
      style={{
        ...styles.itemContainer,
        height: height * 0.4,
        backgroundColor: 'red',
      }}>
      <Image
        style={{...styles.itemImg, width: itemWidth, height: height * 0.4}}
        source={{uri: item}}
      />
    </View>
  );

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Header
        title={thisProduct?.title}
        onPress={() => dispatch(addFavorites(thisProduct))}
      />
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <View style={styles.view}>
          <Text style={{fontSize: 20}}>
            Muhteşem İndirim Fırsatı : %{thisProduct?.discountPercentage}
          </Text>
        </View>
        <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
          <Text style={{textDecorationLine: 'line-through'}}>
            {thisProduct?.price + ' TL'}
          </Text>
          <Text style={{marginHorizontal: 5, fontSize: 15, fontWeight: '600'}}>
            {math}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 17, fontWeight: '900'}}>
            {thisProduct?.title}
          </Text>
          <Text style={{fontSize: 14, marginVertical: 10}}>
            {thisProduct?.description}
          </Text>
        </View>
      </View>
      <Carousel
        layout="default"
        data={thisProduct?.images}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        firstItem={1}
        loop={true}
      />
      <TouchableOpacity
        onPress={() => dispatch(addBasket(thisProduct))}
        style={styles.button}>
        <Text>Sepete Ekle</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 25,
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImg: {
    borderRadius: 16,
  },
  button: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 20,
    padding: 10,
  },
  view: {
    backgroundColor: 'red',
    marginVertical: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
