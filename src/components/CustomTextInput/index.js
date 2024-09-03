import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const CustomTextInput = ({
  onChangeText,
  value,
  placeholder,
  icon,
  rightIcon,
  secureTextEntry,
  errorMessage,
  errorMessageStyle,
  inputStyle,
  imageStyle,
  inputContainerStyle,
  textInputProps,
  onFocus,
  maxLength,
  onBlur,
  keyboardType = 'default',
  placeholderTextColor = '#212121',
  onRightIconPress,
  iconStyle,
  rightIconStyle,
}) => {
  return (
    <View>
      <View style={[styles.inputContainer, inputContainerStyle]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {icon && (
            <Image source={icon} style={[styles.inputImage, imageStyle]} />
            // <View style={[styles.iconStyle, iconStyle]}>{icon}</View>
          )}
          <TextInput
            placeholder={placeholder}
            style={[
              styles.textInput,
              inputStyle,
              {width: rightIcon ? '60%' : '100%'},
            ]}
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            {...textInputProps}
            onFocus={onFocus}
            onBlur={onBlur}
            maxLength={maxLength}
            placeholderTextColor={placeholderTextColor}
          />
        </View>
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            <View style={[rightIconStyle, styles.iconStyle]}>{rightIcon}</View>
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && (
        <Text style={[styles.errorMessage, errorMessageStyle]}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    width: '100%',
    height: 60,
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  inputLabal: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 7,
    fontFamily: 'Urbanist-VariableFont',
  },
  textInput: {
    marginLeft: 10,
    height: 60,
    fontFamily: 'Urbanist-VariableFont',
  },
  inputImage: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
    fontFamily: 'Urbanist-VariableFont',
  },
  errorMessage: {
    color: 'red',
    textAlign: 'right',
    fontFamily: 'Urbanist-VariableFont',
  },
  iconStyle: {
    paddingRight: 15,
  },
});
