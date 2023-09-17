import { StyleSheet, Text, View } from "react-native"
import React from "react"

const Lab1 = () => {
    return(
        <View style={ MyStyle.ViewStyle}>
            <Text style={MyStyle.TextStyle}>Hello World</Text>
        </View>
    )
}

var MyStyle = StyleSheet.create(
    {
        ViewStyle:{
            width:100,
            height:100,
            backgroundColor:'aqua',
            alignItems:"center",
            justifyContent:"center",
        },
        TextStyle:{
            color:'black'
        }
    }
)

export default Lab1