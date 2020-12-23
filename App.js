import * as React from "react";
import {useState} from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']  
  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")

  function calcular(){
    
  }

  return (
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.temaBotao}>
          <Entypo name={darkMode ? "light-up" : "moon"} size={24} color={darkMode ? "white" : 'black'} onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)} /> 
        </TouchableOpacity>
        <Text style={styles.historiaTexto}>{lastNumber}</Text>
        <Text style={styles.resulTexto}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        
      </View>
    </View>
  );
}
