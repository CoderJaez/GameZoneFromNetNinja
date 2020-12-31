import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Global Styles
import {globalStyles} from '../styles/global';

export default function About({navigation}) {
    return(
        <View style = {globalStyles.container}>
            <Text style= {globalStyles.titleText}>About Screen</Text>
        </View>
    );
}

