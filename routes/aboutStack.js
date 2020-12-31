import {createStackNavigator} from 'react-navigation-stack';

import AboutGameZone from '../screens/about';
import Header from '../shared/header';
import React from 'react';
const screens = {
    About : {
        screen: AboutGameZone,
        navigationOptions: ({navigation}) =>{
            return {
                headerTitle: () => <Header navigation = {navigation} title ='About GameZone' />
            }
         }
    }
}

const AboutStack = createStackNavigator(screens);

export default AboutStack;