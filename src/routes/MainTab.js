import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CustomTab from "../components/customTab";

import Home from '../screens/Logged/Home'
import Search from '../screens/Logged/Search'
import License from '../screens/Logged/License'
import Vouchers from '../screens/Logged/Vouchers'
import Profile from '../screens/Logged/Profile'

const Tab = createBottomTabNavigator()

export default () => (
    <Tab.Navigator
        initialRouteName="Home" screenOptions={{headerShown: false}} tabBar={
            props => <CustomTab {...props} />
        }
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Vouchers" component={Vouchers} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
)