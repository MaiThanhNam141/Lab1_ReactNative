import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomNavigationBar = (props) => {
  return (
    <View>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    titleText: {
      fontSize: 35,
      color: 'black',
    },
  });
export default CustomNavigationBar;
