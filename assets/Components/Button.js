import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";

export function Button({texto, onPress, color}){
    return(
        <TouchableOpacity style={[styles.container, {backgroundColor: color}]} onPress={onPress}>
            <Text style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 5,
    },  
    texto:{
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold'
    }
});