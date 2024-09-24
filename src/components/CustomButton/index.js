import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../Colors';

const CustomButton = ({
  style,
  title,
  onPress,
  textStyle,
  disabled,
  activeOpacity,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={disabled}>
      <Text style={[styles.buttonText, textStyle, disabled]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.orange,
    borderRadius: 100,
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Urbanist-VariableFont',
  },
});
