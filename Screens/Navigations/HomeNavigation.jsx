import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import HospitalDoctorsList from "../HospitalDoctorsList";

const HomeNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home}></Stack.Screen>
      <Stack.Screen
        name="hospital-doctors-list"
        component={HospitalDoctorsList}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeNavigation;
