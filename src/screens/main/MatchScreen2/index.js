import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../../components/Colors';
import FontsComponent from '../../../components/FontsComponent';
import CustomButton from '../../../components/CustomButton';

const MatchScreen2 = () => {
  return (
    <View style={styles.screenVw}>
      <View style={styles.contentVw}>
        {/* ...............header................. */}
        <View style={styles.header}>
          <Image source={require('../../../assets/arrowLeft.png')} />
        </View>
        {/* .........................image Vw................................ */}
        <View style={styles.imageVw}>
          <Image
            source={require('../../../assets/Images/BrianChesky.png')}
            style={[styles.image, styles.image1]}
          />
          <View style={[styles.imageCircle, styles.imageM]}>
            <Text style={styles.circleText}>M</Text>
          </View>
          <Image
            source={require('../../../assets/Images/Shandontoliver.png')}
            style={[styles.image, styles.image2]}
          />
        </View>
        {/* .............................text Vw............................ */}
        <View style={styles.textVw}>
          <Text style={styles.boldText}>It’s a Match</Text>
          <Text style={styles.normalText}>
            Don't keep her waiting, say hello now!
          </Text>
        </View>
        {/* .........................CustomButton................................ */}
        <CustomButton title={'Say Hello'} />
        {/* ...........................button 2.............................. */}
        <TouchableOpacity style={styles.btn2Vw}>
          <Text style={styles.btn2Text}>Keep Swiping</Text>
        </TouchableOpacity>
        {/* ......................................................... */}
      </View>
    </View>
  );
};

export default MatchScreen2;

const styles = StyleSheet.create({
  screenVw: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentVw: {
    marginVertical: 20,
    marginHorizontal: 24,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 60,
    color: Colors.orange,
    marginVertical: 5,
  },
  normalText: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '500',
    fontFamily: FontsComponent.medium,
    marginVertical: 5,
  },
  textVw: {
    alignItems: 'center',
  },
  btn2Vw: {
    height: 58,
    width: '100%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    marginVertical: 20,
  },
  btn2Text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.orange,
  },
  image: {
    width: 185,
    height: 185,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
  },
  imageCircle: {
    height: 51,
    width: 51,
    backgroundColor: Colors.orange,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageVw: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    fontSize: 24,
    color: Colors.white,
    fontWeight: 'bold',
    fontFamily: FontsComponent.bold,
  },
  image1: {
    position: 'absolute',
    left: 33,
  },
  image2: {
    position: 'absolute',
    left: 160,
  },
  imageM: {
    position: 'absolute',
    left: 150,
  },
});
