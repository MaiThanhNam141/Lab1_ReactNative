import { Button, Text, TouchableOpacity, View } from "react-native"
import React from "react"

const Lab2 = () => {
    return(
        <View>
            <TouchableOpacity
                onPress={()=>alert("You baited")}
                style={{
                    backgroundColor:'aqua',
                    padding:3,
                    alignItems:"center",
                    marginTop:10
                }}            
            >
                <Text style={{color:'gold', fontSize: 18}}>Bait Me!!</Text> 
            </TouchableOpacity>
        </View>
    )
}
export default Lab2