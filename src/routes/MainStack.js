import React from "react";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"

import Preload from '../screens/Preload'
import Login from '../screens/Login'
import Register from '../screens/Register'
import MainTab from "./MainTab";

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
)