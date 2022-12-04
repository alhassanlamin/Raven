import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import SignInScreen from "./screens/SignInScreen";
import MapScreen from "./screens/MapScreen";
import InsuranceInput from "./screens/InsuranceInput";
//import ActualClinicMapScreen from "./screens/ActualClinicMapScreen";
import ReportFeature from "./screens/ReportFeature";
import NewScreen from "./screens/NewsScreen";
import ButterScoc from "./screens/ButterScocch";

const Stack = createNativeStackNavigator()
export default function App() {
return (
  <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Sign" component={SignInScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Insurance" component={InsuranceInput} />
          <Stack.Screen name="BS" component={ButterScoc}/>
          {/* <Stack.Screen name="Clinic" component={ActualClinicMapScreen} /> */}
          <Stack.Screen name="Report" component={ReportFeature} />
          <Stack.Screen name="News" component={NewScreen} /> 
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
)
};