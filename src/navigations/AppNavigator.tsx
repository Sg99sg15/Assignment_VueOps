import React from 'react';
import Home from '../screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './RouteData';
import TicketDetails from '../screens/TicketDetails';
const Stack = createNativeStackNavigator<RootStackParamList>();
const AppNavigator = () => {
    return (
        <>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="TicketDetails" component={TicketDetails} />
            </Stack.Navigator>
        </>
    );
};

export default AppNavigator;
