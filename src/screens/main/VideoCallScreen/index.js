import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';

const VideoCallScreen = props => {
  return (
    <View style={styles.screenVw}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require('../../../assets/Brian2.png')}
        style={styles.image}>
        <View style={styles.contentVw}>
          {/* .................arrow Left................... */}
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MessageScreen')}>
            <Image
              source={require('../../../assets/arrowLeft2.png')}
              style={styles.image2}
            />
          </TouchableOpacity>
          {/* .................................... */}
          <View>
            <View style={styles.callerVw}>
              <Image source={require('../../../assets/Image2.png')} />
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/camera2.png')}
                  style={styles.cameraIcon}
                />
              </TouchableOpacity>
            </View>
            {/* .................................... */}
            <View style={styles.bottomVw}>
              <TouchableOpacity style={styles.bottomIcon}>
                <Image
                  source={require('../../../assets/Volume.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomIcon}>
                <Image
                  source={require('../../../assets/Video2.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomIcon}>
                <Image
                  source={require('../../../assets/mic.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.bottomIcon, {backgroundColor: '#F75555'}]}>
                <Image
                  source={require('../../../assets/endCall.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            {/* .................................... */}
          </View>
          {/* .................................... */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default VideoCallScreen;

const styles = StyleSheet.create({
  screenVw: {
    flex: 1,
  },
  contentVw: {
    marginVertical: 40,
    marginHorizontal: 24,
    justifyContent: 'space-between',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomVw: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  bottomIcon: {
    width: 68,
    height: 68,
    backgroundColor: '#F0F0F052',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 28,
    height: 28,
  },
  image2: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  callerVw: {
    alignItems: 'flex-end',
    marginBottom: 20,
    marginRight: 10,
    position: 'relative',
  },
  cameraIcon: {
    position: 'absolute', // Positioning the camera icon absolutely
    bottom: 10, // Adjust based on where you want the icon
    right: 10, // Adjust for horizontal positioning
    width: 24, // Adjust size of the camera icon
    height: 24,
  },
});
