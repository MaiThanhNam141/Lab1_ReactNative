import React, {useState} from "react";
import { Button, Text, View } from "react-native";

export default ()=>{
    const[pressCount, setpressCount] = useState(0)

    return(
        <View style={{ alignItems: "center", margin: 20}}>
            <Text>You're the button: {pressCount} times</Text>
            <Button
                title={`Press ${pressCount} times`}
                onPress={()=>setpressCount(pressCount+1)}
            >
            </Button>
        </View>
    )
}