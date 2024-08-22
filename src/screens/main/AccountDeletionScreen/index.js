import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../../components/Colors';
import FontsComponent from '../../../components/FontsComponent';
const AccountDeletionScreen = props => {
  return (
    <View style={styles.screenVw}>
      <View style={styles.contentVw}>
        <View>
          {/* ...............header..................... */}
          <View style={styles.header}>
            <Image
              source={require('../../../assets/arrowLeft.png')}
              style={styles.picIcon}
            />
            <Text style={styles.heading}>Account Deletion</Text>
          </View>
          {/* .................................................... */}
          <View style={styles.textVw}>
            <Text style={styles.bodyText}>
              Having issues with you account? {'\n'}Tap Support and let us asset
              your.
              {'\n'}
              {'\n'}
              Want to take a break without losing all you data? Tap logout and
              Log back in whenever you’re ready.
            </Text>
          </View>
          {/* .................................................... */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTxt}>Support</Text>
          </TouchableOpacity>
          {/* .................................................... */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTxt}>Logout</Text>
          </TouchableOpacity>
          {/* .................................................... */}
        </View>
        {/* .................................................... */}
        <TouchableOpacity
          style={styles.button2}
          onPress={() => props.navigation.navigate('SurveyScreen')}>
          <Text style={[styles.buttonTxt, {color: '#FFFFFF'}]}>
            Delete Account
          </Text>
        </TouchableOpacity>
        {/* .................................................... */}
      </View>
    </View>
  );
};

export default AccountDeletionScreen;

const styles = StyleSheet.create({
  screenVw: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentVw: {
    flex: 1,
    margin: 20,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
    fontFamily: FontsComponent.bold,
  },
  picIcon: {
    width: 25,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  bodyText: {
    fontFamily: FontsComponent.medium,
    fontWeight: '500',
    fontSize: 18,
    color: Colors.black,
    margin: 10,
  },
  textVw: {
    Width: 324,
    Height: 150,
    alignItems: 'center',
  },
  button: {
    borderRadius: 50,
    borderColor: Colors.orange,
    borderWidth: 2,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button2: {
    borderRadius: 50,
    backgroundColor: Colors.orange,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTxt: {
    justifyContent: 'center',
    fontFamily: FontsComponent.bold,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.orange,
  },
});
