import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import RoadMapScreen from "../screen/RoadMapScreen";
import RoadmapDetailScreen from "../screen/RoadmapDetailScreen";
import { RoadmapNavigationParams } from "../types/roadmap.type";

export type TabParamList = {
  RoadMap: undefined;
  RoadmapDetail: RoadmapNavigationParams;
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
      <Tab.Screen
        name="RoadmapDetail"
        component={RoadmapDetailScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
}
