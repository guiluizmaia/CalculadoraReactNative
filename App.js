import * as React from "react";
import {StatusBar} from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Button, View, Text, TouchableOpacity } from "react-native";
import { Entypo, FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [redMode, setRedMode] = useState(false)
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']  
  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")

  function calcular(){
    const splitNumb = currentNumber.split(' ')
    const firstNumb = parseFloat(splitNumb[0])
    const lastNumb = parseFloat(splitNumb[2])
    const operator = splitNumb[1]


    switch(operator){
      case '+':
        setCurrentNumber((firstNumb + lastNumb).toString())
        return
      case '-':
        setCurrentNumber((firstNumb - lastNumb).toString())
        return
      case '/':
        setCurrentNumber((firstNumb / lastNumb).toString())
        return
      case '*':
        setCurrentNumber((firstNumb * lastNumb).toString())
        return
    }
  }

  function handleInput(buttonPressed){
    console.log(buttonPressed)
    if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "/" | buttonPressed === "*" ){
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    }
    switch(buttonPressed){
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length-1)))
        return
      case 'AC':
        setLastNumber("")
        setCurrentNumber("")
        return
      case '=':
        setLastNumber(currentNumber + " = ")
        calcular()
        return
      case '+/-':
        return
      }

      setCurrentNumber(currentNumber + buttonPressed)
  }


  const styles = StyleSheet.create({
    results: {
      backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
      width: '100%',
      minHeight: 280,
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    resulTexto: {
      color: darkMode ? "#f5f5f5" : "#282f3b",
      margin: 10,
      fontSize: 40
    },
    historiaTexto:{
      color: darkMode ? "#85b7bb" : "#7c7c7c",
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end'
    },
    temaBotao: {
      alignSelf: 'flex-start',
      bottom: 120,
      margin: 10,
      backgroundColor: darkMode ? "#7b8084" :"#e5e5e5",
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
      
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      borderColor: darkMode ? '#3f4d5b' : "#e5e5e5",
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 90, 
      minHeight: 90,
      flex: 2,
    },
    textButton: {
      color: darkMode ? "#b5b7bb" : "#7c7c7c",
      fontSize: 20,
    }, 
  })
  return (
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.temaBotao}>
          <Entypo name={darkMode ? "light-up" : "moon"} size={24} color={darkMode ? "white" : 'black'} onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)} /> 
          <FontAwesome name="registered" size={24} color="red" />
        </TouchableOpacity>
        <Text style={styles.historiaTexto}>{lastNumber}</Text>
        <Text style={styles.resulTexto}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === '=' ?
          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: '#9dbc7b'}]}>
            <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>{button}</Text>
          </TouchableOpacity>
           :
           <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, 
           {backgroundColor: typeof(button) === 'number' ? darkMode === true ? '#303946' : '#fff': darkMode === true ? '#414853' : '#ededed'}]}>
             <Text style={styles.textButton}>{button}</Text>
           </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
