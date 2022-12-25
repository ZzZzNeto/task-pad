import Checkbox from 'expo-checkbox';
import React, { useEffect, useState } from "react";
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";

export function Card({titulo, remove, index, checked, attdata}){
    const [ischecked, setIschecked] = useState(checked)

    const att = async () => {
        try {
            if(ischecked){
                setIschecked(false)
            }else{
                setIschecked(true)
            }
            
            attdata(index)

        } catch (e) {
          // saving error
        }
    }

    const verify = async () => {
        try {
            if(checked){
                if(ischecked){

                }else{
                    setIschecked
                }
            }
              
        } catch (e) {
          // saving error
        }
    }

    useEffect(() => {
        verify()
    }, [])

    return(
        <View style={styles.card}>
            <Checkbox
                style={styles.checkbox}
                value={ischecked}
                onValueChange={att}
                color={ischecked ? '#1DB863' : undefined}
            />
            <Text style={[styles.paragraph, ischecked && {color: "#1DB863", textDecorationLine: "line-through"}]}>{titulo}</Text>
            <TouchableOpacity onPress={() => remove(index)}>
                <Image source={require('../Images/lixo.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#fdfdfd',
    },
    paragraph:{
        color: 'gray',
        fontSize: 16,
        width: '75%',
    }
});