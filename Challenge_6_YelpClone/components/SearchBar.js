import React, {useState, useEffect} from 'react';
import  {SafeAreaView, Text,View, StyleSheet, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar =(props)=>{
    return (
<View style={styles.container}>
    <TextInput 
    placeholder={props.placeholder}
    onChangeText={value => props.onSearch(value)}
    />
</View>
    )
}
export {SearchBar};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e0e0e0',
        margin:5,
        padding:10,
        borderRadius:5
    }
})