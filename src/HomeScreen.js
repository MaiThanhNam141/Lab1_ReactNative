import { Button, Text } from "react-native-paper"
import {View, StyleSheet} from "react-native"
const Homescreen= ({ navigation }) => {
    return (
        <View style={styles.container}>
            <h1>Home Screen </h1>
            <Button mode="contained" onPress={() => navigation.navigate('Detail')} >Go to detail</Button>             
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


