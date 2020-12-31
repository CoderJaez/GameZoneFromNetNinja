import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native';
//Global Styles
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
export default function Home({navigation}) {
    const [reviews, setReviews] = useState([
        {title:'Zelda, Breath of Fresh Air',rating:5,body:'Lorem ipsum',key:1},
        {title:'Gotta Catch Them All (again)',rating:4,body:'Lorem ipsum',key:2},
        {title:'Not so "Final" Fantasy',rating:3,body:'Lorem ipsum',key:3},
    ]);
    return(
        <View style = {globalStyles.container}>
            <FlatList
            data = {reviews}
            renderItem = {({item}) => (
                <TouchableOpacity onPress = {()=> navigation.navigate('ReviewDetails',item)}>
                  <Card> 
                    <Text style = {globalStyles.titleText}>{item.title}</Text>
                  </Card>
                </TouchableOpacity>
            )} 
            />

        </View>
    );
}

