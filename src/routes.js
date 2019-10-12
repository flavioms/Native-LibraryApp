import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Loja from '~/pages/Loja';
import Details from '~/pages/Details';
import Inicio from '~/pages/Inicio';
import Favoritos from '~/pages/Favoritos';
import Download from '~/pages/Download';

const LojaStack = createStackNavigator(
  {
    Loja: {
      screen: Loja,
      navigationOptions: {
        title: 'Loja',
      },
    },
    Details: {
      screen: Details,
      navigationOptions: {
        title: 'Detalhes',
      },
    },
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontFamily: 'Rubik',
      },
    },
  },
);

const Route = createAppContainer(
  createBottomTabNavigator(
    {
      Inicio: {
        screen: Inicio,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="home" size={22} color={tintColor} />
          ),
          tabBarLabel: 'Inicio',
        },
      },
      Favoritos: {
        screen: Favoritos,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="like2" size={22} color={tintColor} />
          ),
          tabBarLabel: 'Favoritos',
        },
      },
      Loja: {
        screen: LojaStack,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="isv" size={22} color={tintColor} />
          ),
          tabBarLabel: 'Loja',
        },
      },
      Download: {
        screen: Download,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="download" size={22} color={tintColor} />
          ),
          tabBarLabel: 'Download',
        },
      },
    },
    {
      initialRouteName: 'Loja',
      tabBarOptions: {
        inactiveTintColor: '#fff',
        activeTintColor: '#f7ab21',
        showIcon: true,
        showLabel: true,
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 14,
          paddingTop: 12,
        },
        style: {
          backgroundColor: '#000',
          height: 'auto',
          paddingTop: 18,
        },
      },
    },
  ),
);

export default Route;
