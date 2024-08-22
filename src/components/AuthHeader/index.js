import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../Colors';

const AuthHeader = ({onPress}) => {
  return (
    <View style={styles.screenView}>
      <TouchableOpacity onPress={onPress} style={{height: 30, width: '50%'}}>
        <Image
          source={require('../../assets/arrowLeft.png')}
          style={styles.image1}
        />
      </TouchableOpacity>
      <View style={styles.logoView}>
        <Image source={require('../../assets/logo.png')} />
      </View>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  screenView: {
    backgroundColor: Colors.white,
  },
  logoView: {
    alignItems: 'center',
    marginTop: 20,
  },

  image1: {
    Width: 28,
    Height: 28,
  },
});
