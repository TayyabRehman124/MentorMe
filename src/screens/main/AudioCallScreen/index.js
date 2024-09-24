import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import Colors from '../../../components/Colors';
import FontsComponent from '../../../components/FontsComponent';

const AudioCallScreen = props => {
  return (
    <View style={styles.screenVw}>
      <StatusBar hidden={false} backgroundColor="#EE6E17" />

      <View style={styles.contentVw}>
        {/* .................................... */}
        <TouchableOpacity
          onPress={() => props.navigation.navigate('MessageScreen')}>
          <Image
            source={require('../../../assets/arrowLeft2.png')}
            style={styles.Image}
          />
        </TouchableOpacity>
        {/* .................................... */}
        <View style={styles.centerVw}>
          <Image
            source={require('../../../assets/Brian.png')}
            style={styles.Image2}
          />
          <Text style={styles.name}>Brian Chesky</Text>
          <Text style={styles.time}>04:35 minutes</Text>
        </View>
        {/* .................................... */}
        <View style={styles.bottomVw}>
          <TouchableOpacity style={styles.bottomIcon}>
            <Image
              source={require('../../../assets/Volume.png')}
              style={styles.Image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomIcon}>
            <Image
              source={require('../../../assets/mic.png')}
              style={styles.Image}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.bottomIcon, {backgroundColor: '#F75555'}]}>
            <Image
              source={require('../../../assets/endCall.png')}
              style={styles.Image}
            />
          </TouchableOpacity>
        </View>
        {/* .................................... */}
      </View>
    </View>
  );
};

export default AudioCallScreen;

const styles = StyleSheet.create({
  screenVw: {
    flex: 1,
    backgroundColor: Colors.orange,
  },
  contentVw: {
    marginVertical: 20,
    marginHorizontal: 24,
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 20,
  },
  Image: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  Image2: {
    width: 200,
    height: 200,
  },
  name: {
    fontFamily: FontsComponent.bold,
    fontWeight: '700',
    fontSize: 32,
    color: '#FFFFFF',
  },
  time: {
    fontFamily: FontsComponent.medium,
    fontWeight: '500',
    fontSize: 18,
    color: '#FFFFFF',
  },
  centerVw: {
    alignItems: 'center',
    height: 311,
    justifyContent: 'space-between',
  },
  bottomVw: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginHorizontal: 40,
  },
  bottomIcon: {
    width: 68,
    height: 68,
    backgroundColor: '#F0F0F052',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
