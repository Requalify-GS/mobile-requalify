import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CheckpointDetailScreen from "../screen/CheckpointDetailScreen";
import LoginScreen from "../screen/LoginScreen";
import RoadmapDetailScreen from "../screen/RoadmapDetailScreen";
import SignUpScreen from "../screen/SignUpScreen";
import { Checkpoint, RoadmapNavigationParams } from "../types/roadmap.type";
import TabNavigator from "./TabNavigator";

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Tabs: undefined;
  RoadmapDetail: RoadmapNavigationParams;
  CheckpointDetail: { checkpoint: Checkpoint };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="RoadmapDetail" component={RoadmapDetailScreen} />
        <Stack.Screen
          name="CheckpointDetail"
          component={CheckpointDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
