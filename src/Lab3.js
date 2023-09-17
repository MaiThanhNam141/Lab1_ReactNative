import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

const Lab3 = (props) => {
    return(  
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                backgroundColor:'#ff637c',
                padding:10,
                alignItems:"center",
                margin:10,
                ...props.ButtonStyle,
            }}
        >
            <Text style={{color:'#fff', fontSize: 18}}>{props.Text}</Text>
        </TouchableOpacity>
    )
}

export default function App() {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          {/* Sử dụng Lab3 component */}
          <Lab3
            Text="Hello"
            onPress={() => alert("Hello back!")} // Sử dụng hàm anon để tránh alert ngay khi render
          />
          <Lab3
            Text="Goodbye"
            ButtonStyle={{ backgroundColor: "#4dc2c2" }}
            onPress={() => alert("Bye back!")} // Sử dụng hàm anon để tránh alert ngay khi render
          />
        </View>
      );
}