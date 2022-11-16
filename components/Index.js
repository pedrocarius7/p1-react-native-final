import React, {Component} from "react";
import {createAppContainer, createStackNavigator } from 'react-navigation';
import Login from '../App';
import Home from "./Home";


const MainNav = createStackNavigator (
{
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },

    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Overwatch'
        }
    },
}

)

export default createAppContainer (MainNav);