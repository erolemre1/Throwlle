import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Listing from '../screens/Listing';
import PostScreen from '../screens/Post';
import ForgetPassword from '../screens/ForgetPassword';
import SignUp from '../screens/SignUp';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next'; 

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  const { t } = useTranslation(); 

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0a6c3e',
      }}
    >
      <Tab.Screen
        name={t("myapp")} 
        component={Listing}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"} 
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={t("Throwlla")}
        component={PostScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "add-circle" : "add-circle-outline"} 
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={t("Mesajlar")} 
        component={SignUp}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
            name={focused ? "chatbubble" : "chatbubble-outline"} 
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={t("Bildirimler")}
        component={SignUp}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "notifications" : "notifications-outline"} 
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={t("settings")} 
        component={ForgetPassword}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "settings" : "settings-outline"} 
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
