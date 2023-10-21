import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet, Dimensions, Text, Image} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import OrderStack from './OrderStack';
import ProfileStack from './ProfileStack';
import HomeStack from './HomeStack';

import foodA from '../assets/tabIcon/foodA.png';
import food from '../assets/tabIcon/food.png';
import questionA from '../assets/tabIcon/questionA.png';
import question from '../assets/tabIcon/question.png';
import userA from '../assets/tabIcon/userA.png';
import user from '../assets/tabIcon/user.png';

const MainTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const options = {
    headerShown: false,
    gestureEnabled: false,
  };

  return (
    <Tab.Navigator
      lazy={false}
      initialRouteName="ProfileStack"
      screenOptions={({route}) => ({
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarView,
        tabBarLabelStyle: styles.tabBarText,
        tabBarIcon: ({focused}) => {
          let iconName;
          switch (route.name) {
            case 'ProfileStack':
              iconName = focused ? (
                <Image source={foodA} />
              ) : (
                <Image source={food} />
              );
              break;
            case 'HomeStack':
              iconName = focused ? (
                <Image source={questionA} />
              ) : (
                <Image source={question} />
              );
              break;
            case 'OrderStack':
              iconName = focused ? (
                <Image source={userA} />
              ) : (
                <Image source={user} />
              );
              break;
            default:
              break;
          }
          return iconName;
        },
        tabBarLabel: ({focused}) => {
          let label;
          let labelColor;
          switch (route.name) {
            case 'ProfileStack':
              label = 'Profile';
              labelColor = 'red';
              break;
            case 'HomeStack':
              label = 'NeVardı?';
              labelColor = 'red';
              break;
            case 'OrderStack':
              label = 'Sipariş';
              labelColor = 'red';
              break;
            default:
              break;
          }
          return (
            <Text
              style={{
                color: focused ? labelColor : 'red',
                fontWeight: focused ? 'bold' : 'normal',
                ...styles.tabBarText,
              }}>
              {label}
            </Text>
          );
        },
      })}
      backBehavior="initialRoute"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={options}
      />
      <Tab.Screen name="HomeStack" component={HomeStack} options={options} />
      <Tab.Screen name="OrderStack" component={OrderStack} options={options} />
    </Tab.Navigator>
  );
};
export default MainTabNavigator;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  tabBarView: {
    height: Platform.OS === 'ios' ? hp(12) : hp(10),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: 'pink',
  },
  tabBarText: {
    fontSize: 12,
    letterSpacing: -0.5,
    marginTop: -hp(1.3),
    marginBottom:
      Platform.OS === 'android'
        ? hp(2)
        : Platform.OS === 'ios' && windowHeight >= 811
        ? hp(1)
        : hp(2.5),
  },
});
