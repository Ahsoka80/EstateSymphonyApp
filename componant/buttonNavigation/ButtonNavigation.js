import * as React from 'react';
import { useState } from "react";
import { BottomNavigation, icon } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import Accueil  from "./../template/Accueil/Accueil";
import Estimation  from "./../template/Estimation/Estimation";
import Contact  from "./../template/Contact/Contact"; 
import Profil  from "./../template/Profil/Profil";
import ConnexionEstimation from '../template/Estimation/ConnexionEstimation';
import Dashboard from '../template/Dashboard/Dashboard'
import DashboardNavigator from '../NavigationComponent/DashboardNavigator';

const ButtonNavigation = () => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home',      title: 'Accueil',     icon: 'home' },
    { key: 'sell',      title: 'Estimation',  icon: 'plus-circle' },
    { key: 'contact',   title: 'Contact',     icon: 'plus-circle' },
    { key: 'profile',   title: 'Profil',      icon: 'account-circle' },
    { key: 'dashboard', title: 'Dashboard',   icon: 'account-circle' },
  ]);

  const getTitle = (routeKey) => {
    const route = routes.find(r => r.key === routeKey);
    return route ? route.title : '';
  };
    
  
  return (
    <>
      <Appbar.Header style={styles.Appbar}>
            <Appbar.Content title={getTitle(routes[index].key)} titleStyle={{color: 'white'}} />
      </Appbar.Header>
      
      <BottomNavigation
        navigationState={{ index, routes}}
        onIndexChange={setIndex}
        renderScene={({ route }) => {
          switch (route.key) {
            case 'home':
              return <Accueil />;
            case 'sell':
              return <ConnexionEstimation/>;
            case 'contact':
              return <Contact />;
            case 'profile':
              return <Profil />;
            case 'dashboard':
              return <DashboardNavigator/>;
          }
        }}
        barStyle={{ backgroundColor: '#555', borderTopColor: '#ff0', borderTopWidth: 5 }}
        activeColor='#ff0'
        inactiveColor='#ff0'
        shifting={false} 
        labeled={true} 
        sceneAnimationEnabled={false} 
        style={styles.select} // Style du `BottomNavigation`
      />
    </>
  )
}
export default ButtonNavigation;

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
