import React from "react";
import { View,Text, StyleSheet, Image, TextInput } from "react-native";
import { Button } from "../Components/Button";
import { TextImp } from "../Components/TextInput";

export function Home({ navigation }){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../Images/Rectangle6.png')}/>
            <Text style={styles.titulo}>Agenda IFRN</Text>
            <View style={styles.menu}>
                <TextImp placeholder="Login"/>
                <TextImp placeholder="Senha"/>
                <Button color={"#666666"} texto={"Entrar"} onPress={() => navigation.navigate('teste')}/>
            </View>
        </View>
    )   
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#1DB863',
        paddingTop: 100,
    },
    menu:{
        width: '70%',
    },
    titulo:{
        color: '#FFFFFF',
        fontSize: 40,
        width: 150,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    image: {
        marginBottom: 30,
    },
});