import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    box: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center"
    },
});

const Square = ({ text, bgColor = "#7ce0f9" }) => (
    <View style={[styles.box, { backgroundColor: bgColor }]}>
        <Text>{text}</Text>
    </View>
);

export default () => {
    return (
        <View style={styles.container}>
            <Square text="Box 1" />
            <Square text="Box 2" bgColor="#FFFFFF" />
            <Square text="Box 3" bgColor="#000000" />
        </View>
    );
};
