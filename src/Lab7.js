import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const style = StyleSheet.create({
    container:{padding:20},
    label:{ fontWeight:"bold", fontSize:18},
    input:{
        marginTop:10,
        backgroundColor:"rgba(0,0,0,0.1)",
        padding:10,
        borderRadius:5
    }
});

export default () => {
    const [name, setName] = useState("");
    const handleHelloButtonPress = () => {
        alert(`Hello ${name} !`);
        setName("");
    }
    return (
        <View style={style.container}>
            <Text style={style.label}>What is your name?</Text>
            <TextInput 
                style={style.input}
                placeholder="Your Name"
                onChangeText={(text) =>setName(text)}
                value={name}>
            </TextInput>
            <Button
                title="Hello"
                onPress={handleHelloButtonPress}
            ></Button>
        </View>
    )
}