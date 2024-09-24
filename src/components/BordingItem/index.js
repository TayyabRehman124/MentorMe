import {Image, StyleSheet, Text, Dimensions, Animated} from 'react-native';
import React from 'react';
import Colors from '../Colors';
const {height, width} = Dimensions.get('window');
const BordingItem = ({item}) => {
  return (
    <Animated.View style={styles.screenView}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.discription}>{item.discription}</Text>
    </Animated.View>
  );
};
export default BordingItem;

const styles = StyleSheet.create({
  screenView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 150,
    width: width,
  },
  image: {
    justifyContent: 'center',
    Width: 14,
    Height: 82,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 50,
    fontFamily: 'Urbanist-Bold',
  },
  discription: {
    fontWeight: '400',
    fontSize: 14,
    color: '#9E9E9E',
    textAlign: 'center',
    marginHorizontal: 35,
    marginTop: 10,
    fontFamily: 'Urbanist-Regular',
    lineHeight: 19.6,
    width: 362,
  },
});
