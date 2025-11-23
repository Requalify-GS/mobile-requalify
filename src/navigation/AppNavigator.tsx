import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CheckpointDetailScreen from "../screen/CheckpointDetailScreen";
import LoginScreen from "../screen/LoginScreen";
import RoadmapDetailScreen from "../screen/RoadmapDetailScreen";
import SignUpScreen from "../screen/SignUpScreen";
import { Checkpoint, RoadmapNavigationParams } from "../types/roadmap.type";
import TabNavigator from "./TabNavigator";
import About from "../screen/AboutUs";
import AboutApp from "../screen/AboutApp";
import WelcomeScreen from "../screen/WelcomeScreen";
import OnboardingScreen from "../screen/OnboardingScreen";
import OnboardingFinal from "../screen/OnboardingFinal";

export type RootStackParamList = {
  Welcome: undefined;
  OnboardingScreen: undefined;
  OnboardingFinal: undefined;
  Login: undefined;
  SignUp: undefined;
  Tabs: undefined;
  RoadmapDetail: RoadmapNavigationParams;
  CheckpointDetail: { checkpoint: Checkpoint };
  About: undefined;
  AboutApp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="OnboardingFinal" component={OnboardingFinal} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="RoadmapDetail" component={RoadmapDetailScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="AboutApp" component={AboutApp} />
        <Stack.Screen
          name="CheckpointDetail"
          component={CheckpointDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
