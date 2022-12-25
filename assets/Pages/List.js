import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from "react";
import { View,Text, StyleSheet } from "react-native";
import { Card } from "../Components/card";

export function List(){
    const [lista, setLista] = useState([])

    const attData = async (key) => {
        try {

            console.log(lista)
            if(lista[key].checked == true){
                lista[key].checked = false
            }else{
                lista[key].checked = true
            }
            console.log(lista)

            await AsyncStorage.setItem('@taskblock', JSON.stringify(lista))
            getData()
        } catch (e) {
          // saving error
        }
    }

    const getData = async () => {
        try {
            const json = await AsyncStorage.getItem('@taskblock')
            if(json.length > 0){
              setLista(JSON.parse(json))
            }
              
        } catch (e) {
          // saving error
        }
    }
    
    const remove = async (key) => { 
        try { 
          const listinha = [...lista]
    
          const newlistinha = listinha.slice(0, key).concat(listinha.slice(key+1))
          await AsyncStorage.setItem('@taskblock', JSON.stringify(newlistinha))
          getData()
        } catch (e) {
          // saving error
        }
      }
    
    useEffect(() => {
        getData()
    }, []) 

    return(
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.titulo1}>Agenda.IFRN</Text>
                <Text style={styles.titulo2}>Você tem 2 tarefas</Text>
            </View>
            <View style={styles.contentes}>
                {lista.map((item, index) => (
                    <Card titulo={item.titulo} index={index} remove={remove} checked={item.checked} attdata={attData} key={item.index}/>
                ))}
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
        paddingTop: 25,
    },
    menu:{
        width: '70%',
    },
    titulo1:{
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
    },

    titulo2: {
        color: '#FFFFFF',
        fontSize: 15,
    },
    titulo: {
        width: '100%',
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    contentes: {
        backgroundColor: "white",
        width: '100%',
        height: '100%',
        paddingTop: 20,
    }
});