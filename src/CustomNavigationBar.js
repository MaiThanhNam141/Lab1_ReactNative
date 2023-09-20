import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const CustomNavigationBar = (props) => {
  const {titleNavigation} = props
  return (
    <View>
      <Text style={styles.titleText}>{titleNavigation}</Text>
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
