import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import SelectDropdown from 'react-native-select-dropdown'
import { TextImp } from "../Components/TextInput";
import { Button } from "../Components/Button";
import DateTimePicker from '@react-native-community/datetimepicker';

export function Register(){
    const [titulo, setTitulo] = useState("")
    const [descripton, setDescripton] = useState("")
    const tipo = ["Evento", "Dia-a-dia", "Feriado", "Trabalho"]
    const [option, setOption] = useState(false)
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)
    const [textdate, setTextdate] = useState("Data")
    const [lista, setLista] = useState([])
    const checked = false

    const storeData = async () => {
        try {
          const listinha = [...lista]
          const task = {
            titulo, descripton, option, date, checked
        }
    
        listinha.push(task)
        await AsyncStorage.setItem('@taskblock', JSON.stringify(listinha))
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

    useEffect(() => {
        getData()
    }, [])

    const onChange = (event, selectedDate) => {
        if(event.type == 'set'){
            const actual = selectedDate || date
            setDate(actual)
            setShow(false)

            let textdat = actual.getDate() + "/" + (actual.getMonth() + 1) + "/" + actual.getFullYear()
            setTextdate(textdat)
        }else{
            setShow(false)
        }
    }

    const exib = () => {
        setShow(true)
    }

    return(
        <View style={styles.container}>
            <View style={styles.contents}>
                <Text style={styles.tittle}>Cadastro de Tarefa</Text>
                <TextImp border placeholder="Titulo" onChange={(value) => setTitulo(value)}/>
                <TextImp border placeholder="Descrição:" onChange={(value) => setDescripton(value)}/>
                <SelectDropdown
	                data={tipo}
                    defaultButtonText="Categorias"
                    buttonStyle={styles.select}
                    buttonTextStyle={styles.textSelect}
                    dropdownStyle={{marginTop: -31,}}
                    renderDropdownIcon={() => {
                        return(
                            <Image source={require('../Images/Vectorseta.png')}/>
                        )
                    }}
	                onSelect={(selectedItem, index) => {
		                setOption(selectedItem)
	                }}
	                buttonTextAfterSelection={(selectedItem, index) => {
		                return selectedItem
	                }}
	                rowTextForSelection={(item, index) => {
		                return item
	                }}
                />
                <TouchableOpacity style={styles.select} onPress={exib}>
                    <Text style={styles.textdate}>{textdate}</Text>
                </TouchableOpacity>
                {show && (<DateTimePicker value={new Date()} onChange={onChange}/>)}
                
                <Button color={"#1DB863"} texto={"Cadastrar"} onPress={() => storeData()}/>
            </View>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#1DB863',
        paddingTop: 25,
    },
    contents: {
        marginTop: 20,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: '12%',
    },
    tittle: {
        color: "#1DB863",
        fontSize: 30,
        marginTop: 100,
        marginBottom: 30,
        fontWeight: 'bold',
    },
    select: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        borderRadius: 5,
        padding: 5,
        paddingHorizontal: 20,
        marginBottom: 20,
        borderColor: '#B2B2B2', 
        borderWidth: 2,
        paddingRight: 15,
    },
    textSelect: {
        textAlign: 'left',
        marginLeft: 0,
        fontSize: 15,
    },
    textdate: {
        marginTop: 7,
    }
});