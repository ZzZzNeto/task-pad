import React from "react";
import {StyleSheet, TextInput} from "react-native";

export function TextImp({placeholder, border = false, onChange}){
    return(
        <TextInput style={[styles.textinput, border && {borderColor: '#B2B2B2', borderWidth: 2,}]} onChangeText={onChange} placeholder={placeholder}/>
    )
}

const styles = StyleSheet.create({
    textinput: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        borderRadius: 5,
        padding: 5,
        paddingHorizontal: 20,
        marginBottom: 20,
    }
});