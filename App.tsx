/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Signin from "./src/pages/Signin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AudioRecord from "./src/pages/Record";
import Home from "./src/pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Signin"}>
        <Stack.Screen options={{ headerShown: false }} name="Signin" component={Signin} />
        <Stack.Screen options={{ headerShown: false }} name="AudioRecord" component={AudioRecord} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
