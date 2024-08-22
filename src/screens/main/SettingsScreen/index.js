import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../../components/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  return (
    <View style={styles.screenVw}>
      <View style={styles.contentVw}>
        {/* ............header................ */}
        <View style={styles.header}>
          <Image
            source={require('../../../assets/arrowLeft.png')}
            style={styles.picIcon}
          />
          <Text style={styles.heading}>Settings</Text>
        </View>
        {/* ......................menu............................... */}
        <View style={styles.menuVw}>
          {/* ........Personal............ */}
          <TouchableOpacity
            style={styles.touchBar}
            onPress={() => props.navigation.navigate('SettingsScreen')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/person.png')}
                style={styles.ImageIcon}
              />
              <Text style={styles.barText}>Personal Information</Text>
            </View>
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              color="black"
            />
          </TouchableOpacity>

          {/* ........Discovery Settings........ */}
          <TouchableOpacity
            style={styles.touchBar}
            onPress={() => props.navigation.navigate('SettingsScreen')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/discovery.png')}
                style={styles.ImageIcon}
              />
              <Text style={styles.barText}>Discovery Settings</Text>
            </View>
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              color="black"
            />
          </TouchableOpacity>
          {/* ...........Privacy & Permissions........ */}
          <TouchableOpacity
            style={styles.touchBar}
            onPress={() => props.navigation.navigate('SettingsScreen')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/privacy.png')}
                style={styles.ImageIcon}
              />
              <Text style={styles.barText}>Privacy & Permissions</Text>
            </View>
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              color="black"
            />
          </TouchableOpacity>
          {/* ...........Notification........ */}

          <TouchableOpacity
            style={styles.touchBar}
            onPress={() => props.navigation.navigate('SettingsScreen')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/notification.png')}
                style={styles.ImageIcon}
              />
              <Text style={styles.barText}>Notification</Text>
            </View>
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              color="black"
            />
          </TouchableOpacity>
          {/* ...........security........ */}
          <TouchableOpacity
            style={styles.touchBar}
            onPress={() => props.navigation.navigate('SettingsScreen')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/security.png')}
                style={styles.ImageIcon}
              />
              <Text style={styles.barText}>Security</Text>
            </View>
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              color="black"
            />
          </TouchableOpacity>
          {/* ...........Data........ */}
          <TouchableOpacity
            style={styles.touchBar}
            onPress={() => props.navigation.navigate('SettingsScreen')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/data.png')}
                style={styles.ImageIcon}
              />
              <Text style={styles.barText}>Data & Storage</Text>
            </View>
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              color="black"
            />
          </TouchableOpacity>
          {/* ...........Feedback........ */}
          <TouchableOpacity
            style={styles.touchBar}
            onPress={() => props.navigation.navigate('SettingsScreen')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/feedback.png')}
                style={styles.ImageIcon}
              />
              <Text style={styles.barText}>Feedback</Text>
            </View>
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              color="black"
            />
          </TouchableOpacity>
          {/* ...........Language........ */}
          <TouchableOpacity
            style={styles.touchBar}
            onPress={() => props.navigation.navigate('SettingsScreen')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/language.png')}
                style={styles.ImageIcon}
              />
              <Text style={styles.barText}>Language</Text>
            </View>
            <Text style={styles.barText}>English (US)</Text>
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              color="black"
            />
          </TouchableOpacity>
          {/* ...........About........ */}
          <TouchableOpacity
            style={styles.touchBar}
            onPress={() => props.navigation.navigate('SettingsScreen')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/about.png')}
                style={styles.ImageIcon}
              />
              <Text style={styles.barText}>About MentorConnect</Text>
            </View>
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              color="black"
            />
          </TouchableOpacity>
          {/* ...........Dark........ */}
        </View>
        {/* ..................................................... */}
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  screenVw: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentVw: {
    marginVertical: 20,
    marginHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
  },
  menuVw: {
    justifyContent: 'space-between',
    marginTop: 10,
    height: 625,
  },
  touchBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  ImageIcon: {
    width: 48,
    height: 48,
    padding: 12,
    resizeMode: 'contain',
  },
  barText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
});
