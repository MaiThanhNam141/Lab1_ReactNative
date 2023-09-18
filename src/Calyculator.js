import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Vibration, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function App(){
    const [darkMode, setdarkMode] = useState(false)
    const [currentNumber, setcurrentNumber] = useState('')
    const [lastNumber, setlastNumber] = useState('')

    const button = ['C', 'DEL', '/', 7, 8, 9,'*',4,5,6,'-',1,2,3,'+',0,'.','=']

    function Caculator(){
        let lastArr = currentNumber[currentNumber.length -1]

        if (lastArr =='/' || lastArr =='*' || lastArr =='+' || lastArr == '-'){
            setcurrentNumber(currentNumber)
            return
        }
        // else {
        //     let rusult = eval(currentNumber).toString()
        //     setcurrentNumber( rusult )
        //     return
        // }
        else {
            let rusult = new RegExp('([0-9]+)([-+/*])([0-9]+)', 'g').exec(currentNumber)
            if (rusult) {
                let operand1 = parseInt(rusult[1])
                let operator = rusult[2]
                let operand2 = parseInt(rusult[3])

                let newResult = operand1 + operator + operand2
                setcurrentNumber(newResult.toString())
            }
        }
    }

    function handleInput(buttonPress){
        if(buttonPress =='/' || buttonPress =='*' || buttonPress =='+' || buttonPress == '-'){
            Vibration.vibrate(35)
            setcurrentNumber(currentNumber+buttonPress)
            return
        }
        else if (buttonPress == 1 || buttonPress == 2 || buttonPress == 3 || buttonPress == 4 || buttonPress == 5 || buttonPress == 6 || buttonPress == 7 || buttonPress == 8 || buttonPress == 9 ||  buttonPress == 0 || buttonPress == '.'){
            Vibration.vibrate(35)
        }
        switch(buttonPress){
            case 'DEL': 
                Vibration.vibrate(35)
                setcurrentNumber(currentNumber.substring(0, currentNumber.length -1))
                return
            case 'C':
                Vibration.vibrate(35)
                setlastNumber('')
                setcurrentNumber('')
                return
            case '=':
                Vibration.vibrate(35)
                setlastNumber(currentNumber + '=')
                Caculator()
                return
        }
    }

    const style = StyleSheet.create({
        result: {
            backgroundColor: darkMode ? '#FFFFFF' : '#000000',
            maxWidth:'100%',
            minHeight: '50%',
            alignItems: "flex-end",
            justifyContent: "flex-end"
        },

        resultText: {
            maxHeight: 45,
            color : '#00b9d6',
            margin: 15,
            fontSize: 35
        },

        historyText: {
            color: darkMode ? '#B5B7BB' : '#7c7c7c',
            fontSize: 20,
            marginRight: 10,
            alignSelf: "flex-end"
        },

        themeButton: {
            alignSelf: "flex-end",
            bottom: '5%',
            margin :15,
            backgroundColor: darkMode? '#7b8084' : "e5e5e5",
            alignItems: 'center',
            justifyContent: "center",
            width:50,
            height:50,
            borderRadius:25
        },

        buttons: {
            width:'100%',
            height:'35%',
            flexDirection: "row",
            flexWrap: "wrap"
        },

        button: {
            borderColor: darkMode? '#3f4d5b' : '#e5e5e5',
            alignItems: "center",
            justifyContent: "center",
            minWidth: '24%',
            minHeight: '54%',
            flex:2
        },

        textButton: {
            color: darkMode ? '#b5b7bb' : '7c7c7c',
            fontSize:28
        }
    })

    return(
        <View>
            <View style={style.result}>
                <TouchableOpacity style={style.themeButton}>
                    <Entypo name ={darkMode ? 'light up': 'moon'} size={24} color={darkMode ? 'white' : 'black'} onPress={()=> darkMode ? setdarkMode(false) : setdarkMode(true)} ></Entypo>
                </TouchableOpacity>
                <Text style={style.historyText}>{lastNumber}</Text>
                <Text style={style.resultText}>{currentNumber}</Text>
            </View>
            <View style={style.buttons}>
                {buttons.map((button) => 
                    button ==='/' || button ==='*' || button ==='+' || button === '-' || button ==='=' ?
                    <TouchableOpacity key ={button} style={[style.button,{backgroundColor: '#00b9d6'}]} onPress={()=>handleInput(button)}>
                    <Text style={[style.textButton, {color:'white', fontSize:28}] } >{button}</Text>
                    </TouchableOpacity>
                    :
                    button ==='.' || button ==='DEL' ?
                    <TouchableOpacity key ={button} style={[style.button,{backgroundColor:button ==='.' ? 
                        darkMode ? '#303946' : '#fff':darkMode === true?'#414853':'#ededed', minWidth:'37%'}]} onPress={()=>handleInput(button)}>
                    <Text style={[style.textButton, {color:'white', fontSize:28}] } >{button}</Text>
                    </TouchableOpacity>
                    :
                    button === 'C' ?
                    <TouchableOpacity key ={button} style={[style.button,{backgroundColor:typeof button === 'number' ?
                        darkMode ? '#303946' : '#fff':darkMode === true?'#414853':'#ededed', minWidth:'36%'}]} onPress={()=>handleInput(button)}>
                    <Text style={[style.textButton, {color:'white', fontSize:28}] } >{button}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity key ={button} style={[style.button,{backgroundColor:typeof button === 'number' ?
                        darkMode ? '#303946' : '#fff':darkMode === true?'#414853':'#ededed'}]} onPress={()=>handleInput(button)}>
                    <Text style={[style.textButton, {color:'white', fontSize:28}] } >{button}</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}