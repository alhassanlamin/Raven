import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import SignInScreen from "./screens/SignInScreen";
import MapScreen from "./screens/MapScreen";
import InsuranceInput from "./screens/InsuranceInput";
//import ActualClinicMapScreen from "./screens/ActualClinicMapScreen";
import ReportFeature from "./screens/ReportFeature";
import NewScreen from "./screens/NewsScreen";
import ButterScoc from "./screens/ButterScocch";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{animation: 'none'}}>
          <Stack.Screen
            name="Sign"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Insurance"
            component={InsuranceInput}
            options={{ headerShown: false, headerTransparent: true }}
          />
          <Stack.Screen
            name="BS"
            component={ButterScoc}
            options={{ headerShown: false, headerTransparent: true }}
          />
          {/* <Stack.Screen name="Clinic" component={ActualClinicMapScreen} /> */}
          <Stack.Screen
            name="Report"
            component={ReportFeature}
            options={{ headerShown: false, headerTransparent: true }}
          />
          <Stack.Screen
            name="News"
            component={NewScreen}
            options={{ headerShown: false, headerTransparent: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
