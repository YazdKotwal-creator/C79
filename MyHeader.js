import React,{Component}from 'react';
import { Icon, Header } from 'react-native-elements';
import { Text, View, StyleSheet } from 'react-native';

const MyHeader = props=>{
    return(
        <Header centerComponent = {{text:props.title,style:{color:'red',fontSize:20,fontWeight:"bold"}}}></Header>
    )
}

export default MyHeader;