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
      case 'home-tab':
        return isFocused ? <Icon name='home' /> : <Icon img='blurHome' />
      case 'course-tab':
        return isFocused ? <Icon name='course' /> : <Icon img='blurCourse' />
      case 'community':
        return isFocused ? <Icon name='community' /> : <Icon img='blurCommunity' />
      case 'setting-tab':
        return isFocused ? <Icon name='setting' /> : <Icon img='blurSetting' />
      default:
        return <View />
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

  const courseStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Tab.Screen name="course" component={Screens.CourseScreen} />
        <Tab.Screen name="course-detail" component={Screens.CourseDetailScreen} />
      </Stack.Navigator>
    );
  }

  const settingStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Tab.Screen name="setting" component={Screens.SettingScreen} />
        <Tab.Screen name="profile" component={Screens.ProfileScreen} />
        <Tab.Screen name="subscription" component={Screens.SubscriptionScreen} />
      </Stack.Navigator>
    );
  }

  const tabStack = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <MyTabBar {...props} />} >
        <Tab.Screen name="home-tab" component={homeStack} />
        <Tab.Screen name="course-tab" component={courseStack} />
        <Tab.Screen name="fake-screen" component={Screen} />
        <Tab.Screen name="community" component={Screens.CommunityScreen} />
        <Tab.Screen name="setting-tab" component={settingStack} />
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
        <Stack.Screen name="tab" component={tabStack} />
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
    bottom: -3,
    width: S_WIDTH
  },
  plusBtn: {
    position: 'absolute',
    top: -45,
    left: -31
  }


})
export default App;
