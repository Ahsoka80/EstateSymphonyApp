import * as React from 'react';
import { useState } from "react";
import { BottomNavigation, icon } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import Accueil  from "../template/Accueil/Accueil";
import Estimation  from "../template/Estimation/Estimation";
import Contact  from "../template/Contact/Contact";
import ConnexionEstimation from '../template/Estimation/ConnexionEstimation';
import DashboardNavigator from '../NavigationComponent/DashboardNavigator';
import ProfilNavigator from '../NavigationComponent/ProfilNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator(); 

const BottomNavigationApp = () => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Accueil',      title: 'Accueil',     icon: 'home' },
    { key: 'Estimation',      title: 'Estimation',  icon: 'plus-circle' },
    { key: 'contact',   title: 'Contact',     icon: 'plus-circle' },
    { key: 'profile',   title: 'Profil',      icon: 'account-circle' },
    { key: 'dashboard', title: 'Dashboard',   icon: 'account-circle' },
  ]);

  const getTitle = (routeKey) => {
    const route = routes.find(r => r.key === routeKey);
    return route ? route.title : '';
  };
    
  
  return (

      <Tab.Navigator>
        <Tab.Screen name='Accueil' component={Accueil}/>
        <Tab.Screen name='Estimation' component={ConnexionEstimation}/>
        <Tab.Screen name='Contact' component={Contact}/>
        <Tab.Screen name='Profil' component={ProfilNavigator}/>
        <Tab.Screen name='Dashboard' component={DashboardNavigator}/>
      </Tab.Navigator>
    
  )
}
export default BottomNavigationApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  Appbar:{
    backgroundColor: '#555',
  },
  select : {
    backgroundColor: '#f0f0f0'
  }
});
