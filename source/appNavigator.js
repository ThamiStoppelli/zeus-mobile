import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const { Navigator, Screen } = createStackNavigator();

import Home from "./screens/Home.js";
import Cadastrar from "./screens/Cadastrar";

import dogpaw from "./../assets/dogpaw.png";
import dogpawColored from "./../assets/dogpaw-colored.png";
import petfood from "./../assets/petfood.png";
import petfoodColored from "./../assets/petfood-colored.png";

const NavBar = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <NavBar.Navigator style={styles.navbar}
      inicialRouteName={Home}
      screenOptions={({ route }) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === 'Rações') {
            icon = focused ? icon = dogpawColored : icon = dogpaw
          } else if (route.name === 'Cadastrar') {
            icon = focused ? icon = petfoodColored : icon = petfood
          }
          return <Image style={styles.icone} source={icon}/>
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "grey",
        labelStyle: { paddingBottom: 1, fontSize: 10 },
        style: { padding: 40, height: 80 },
      }}
    >
      <NavBar.Screen name="Rações" component={Home} />
      <NavBar.Screen name="Cadastrar" component={Cadastrar} />
    </NavBar.Navigator>
  </NavigationContainer>
);

export default AppNavigator;

const styles = StyleSheet.create({
  icone: { 
    width: 25,
    height: 25, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 10
  },
  navbar: {
    height: 50
  }
})