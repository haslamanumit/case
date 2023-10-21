import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as React from 'react';
import {useSelector} from 'react-redux';

const Order = () => {
  const basketData = useSelector(state => state.basketData.basketData);

  return (
    <SafeAreaView>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Sepet</Text>
      </View>
      {basketData?.map(item => (
        <View style={styles.view}>
          <View>
            <Text>{item.title}</Text>
            <Text>{item.price + ' TL'}</Text>
          </View>
          <Text>1</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default Order;

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
