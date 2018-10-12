import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Home from './Home';
import Search from './Search'
import { WHITE, PRIMARY_COLOR } from '../style/style';

export default createStackNavigator({
    Home: {
        screen: Home
    },
    Search: {
        screen: Search
    }
},
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: PRIMARY_COLOR,
            },
            headerTitleStyle: {
                color: WHITE,
                fontWeight: 'bold'
            },
        }
    })