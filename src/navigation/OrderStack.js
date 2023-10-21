import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Order from '../screens/OrderScreens/Order';

const Stack = createNativeStackNavigator();

export default function OrderStack() {
  return (
    <Stack.Navigator
      screenOptions={{ animation: 'slide_from_right' }}
    >
      <Stack.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}