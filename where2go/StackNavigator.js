import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './pages/home';
import Menu from './pages/menu';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Menu" component={Menu}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default StackNavigator;