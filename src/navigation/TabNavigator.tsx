import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import JobsScreen from "../screen/JobsScreen";
import RoadMapScreen from "../screen/RoadMapScreen";

export type TabParamList = {
  Jobs: undefined;
  RoadMap: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#F2A70D",
        tabBarInactiveTintColor: "#999",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#191919",
          borderTopColor: "#191919",
        },
      }}
    >
      <Tab.Screen
        name="Jobs"
        component={JobsScreen}
        options={{
          title: "Vagas",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="briefcase" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="RoadMap"
        component={RoadMapScreen}
        options={{
          title: "RoadMap",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="map-marker-path"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
