import React, { useEffect, useState } from 'react';
import * as Screens from '@/screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import { BASE_COLOR, BLUR_COLOR } from '@/constants/color';
import { Pressable, StyleSheet, TouchableOpacity, TouchableOpacityBase, TouchableWithoutFeedback, View } from 'react-native';
import { Icon, Screen } from '@/components';
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


  const renderIcon = (label: string, isFocused: boolean, onPress: any) => {
    const size = 40
    switch (label) {
      case 'home':
        return isFocused ? <Icon name='home' size={size} /> : <Icon img = 'blurHome' size={size} />
      case 'course':
        return isFocused ? <Icon name='course' size={size} /> : <Icon img = 'blurCourse' size={size} />
      case 'community':
        return isFocused ? <Icon name='community' size={size} /> : <Icon img = 'blurCommunity' size={size} />
      case 'setting':
        return isFocused ? <Icon name='setting' size={size} /> : <Icon img = 'blurSetting' size={size} />
      default:
        return  <View/>
    }
  }

  const homeStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="homepage" component={Screens.HomeScreen} />
        <Tab.Screen name="new-habit" component={Screens.NewHabitScreen} />
      </Stack.Navigator>
    );
  }

  const tabStack = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <MyTabBar {...props} />} >
        <Tab.Screen name="home" component={homeStack} />
        <Tab.Screen name="course" component={Screens.CourseScreen} />
        <Tab.Screen name="fake-screen" component={Screen} />
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
        <Stack.Screen name="home-tab" component={tabStack} />
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
    position: 'absolute',
    bottom: 0,
    width: S_WIDTH,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: BASE_COLOR.transparent,
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
    position: 'absolute',
    top: -45,
    left: -31
  }


})
export default App;
