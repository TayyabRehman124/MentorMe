import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

const SearchComponent = ({onPress, onChangeText, value}) => {
  return (
    <View>
      <View style={styles.searchBar}>
        <Feather name={'search'} size={28} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={value}
          onChangeText={onChangeText}
        />
        {value.length > 0 && (
          <TouchableOpacity onPress={onPress}>
            <Feather name={'x'} size={20} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderRadius: 20,
    height: 60,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  input: {
    width: '80%',
    height: 55,
    padding: 10,
  },
});
