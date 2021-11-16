import React, { useEffect, useState } from 'react';
import * as Screens from '@/screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import { BASE_COLOR, BLUR_COLOR } from '@/constants/color';
import { Pressable, StyleSheet, TouchableOpacity, TouchableOpacityBase, TouchableWithoutFeedback, View } from 'react-native';
import { Icon } from '@/components';
import { S_WIDTH } from '@/constants/layout';
const App = () => {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator()

  function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    return (
      <View style={styles.tabContainerView}>
        <Icon name='tab' style={styles.tabBg} width={S_WIDTH} />
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, key: '', merge: true });
            }
          };
          return (
            <TouchableWithoutFeedback key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
            >
              <View style={[styles.tabView, isFocused && styles.tabViewFocus]}>
                {renderIcon(label.toString(), isFocused, onPress)}
              </View>

            </TouchableWithoutFeedback>
          );
        })}
      </View>
    );
  }

  const renderIcon = (label: string, isFocused: boolean,onPress: any) => {
    const size = 40
    switch (label) {
      case 'homepage':
        return <Icon name={'home'} size={size} />
      case 'course':
        return <Icon name={'course'} size={size} />
      case 'community':
        return <Icon name={'community'} size={size} />
        case 'setting':
          return <Icon name={'setting'} size={size} />
      default:
        return <Icon name='add' style={styles.plusBtn} onPress={onPress}/>
    }
  }

  const HomeStack = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <MyTabBar {...props} />} >
        <Tab.Screen name="homepage" component={Screens.HomeScreen} />
        <Tab.Screen name="course" component={Screens.CourseScreen} />
        <Tab.Screen name="new-habit" component={Screens.NewHabitScreen} />
        <Tab.Screen name="community" component={Screens.CommunityScreen} />
        <Tab.Screen name="setting" component={Screens.SettingScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="spash" component={Screens.SpashScreen} />
        <Stack.Screen name="intro" component={Screens.IntroScreen} />
        <Stack.Screen name="sign-in" component={Screens.SignInScreen} />
        <Stack.Screen name="sign-up" component={Screens.SignUpScreen} />
        <Stack.Screen name="reset-password" component={Screens.ResetPasswordScreen} />
        <Stack.Screen name="home-tab" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  tabContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    backgroundColor: BLUR_COLOR.yellowTab,
    paddingBottom: 20,
  },
  tabViewFocus: {

  },
  textTabFocus: {
  },
  tabBg: {
    position: 'absolute',
    left: 0,
    width: S_WIDTH
  },
  plusBtn: {
    position:'absolute',
    top: -45,
    left: -31
  }


})
export default App;
