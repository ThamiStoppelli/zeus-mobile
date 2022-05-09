import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

const { Navigator, Screen } = createStackNavigator();

import Home from './screens/Home.js';
import Cadastrar from './screens/Cadastrar';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const NavBar = createBottomTabNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <NavBar.Navigator
            inicialRouteName={Home}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let icon;
                    if (route.name === Home) {
                        icon = focused ? 'home' : 'home-outline'
                        //if the icon is focused the icon will be wheter home of home-outline
                    } else if (route.name === Cadastrar) {
                        icon = focused ? 'settings' : 'settings-outline'
                    }

                    return <Ionicons name={icon} size={size} color={color}/>
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10},
                style: {paddin: 40, height: 80}
            }}
            >
            <NavBar.Screen name="Rações" component={Home}/>
            <NavBar.Screen name="Cadastrar" component={Cadastrar}/>

        </NavBar.Navigator>
    </NavigationContainer>
)    

export default AppNavigator;