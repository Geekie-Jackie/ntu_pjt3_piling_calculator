import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { BottomNavigation, BottomNavigationTab, Layout, Text } from 'react-native-paper';
import CalculatorScreen from "../screen/CalculatorScreen";
import CameraScreen from "../screen/CameraScreen";
import AboutScreen from "../screen/AboutScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#6200ee",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Pile Drilling Calculator"
        component={CalculatorScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="calculator" color={color} size={size} />
          ),
          tabBarLabel: "", // Set tabBarLabel to an empty string
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="camera" color={color} size={size} />
          ),
          tabBarLabel: "", // Set tabBarLabel to an empty string
        }}
      />
      <Tab.Screen
        name="About the App"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="information" color={color} size={size} />
          ),
          tabBarLabel: "", // Set tabBarLabel to an empty string
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
