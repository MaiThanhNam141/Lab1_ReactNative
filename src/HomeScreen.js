import { Button, Text } from "react-native-paper"
import {View, StyleSheet} from "react-native"
const Homescreen= ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:35, paddingLeft:10}}>Home Screen </Text>
            <Button style={{margin:35}} mode="contained" onPress={() => navigation.navigate('Detail')} >Go to detail</Button>             
        </View>
    )
}
export default Homescreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})


