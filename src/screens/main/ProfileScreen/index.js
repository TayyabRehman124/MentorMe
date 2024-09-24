import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../components/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RewindScreen from '../RewindScreen';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const ProfileScreen = props => {
  const [user, setUser] = useState(null);
  const signOut = () =>
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  const googleSignOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUser(null); // Set user to null after signing out
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.screenVw}>
      <View style={styles.contentVw}>
        {/* .............................heading........................ */}
        <View style={styles.headerVw}>
          <View style={styles.headerLeftVw}>
            <Text style={styles.heading}>Profile</Text>
          </View>
          <View style={styles.headerRightVw}>
            <Feather name={'search'} size={28} />
            <Ionicons name={'ellipsis-horizontal-circle-outline'} size={28} />
          </View>
        </View>
        {/* ...................profile Pic.................................. */}
        <View style={styles.profilePicVw}>
          <Image source={require('../../../assets/profilePic.png')} />
        </View>
        {/* ......................Enjoy All Benefits!............................... */}
        <View style={styles.benefitsVW}>
          <View style={styles.benefitsText}>
            <Text style={{color: '#FFFFFF', fontSize: 24, fontWeight: 'bold'}}>
              Enjoy All Benefits!
            </Text>
            <Text style={{color: '#FFFFFF', fontSize: 12}}>
              Enjoy unlimited swiping, like, without restrictions, & without ads
            </Text>
            <TouchableOpacity
              style={styles.PremiumBtn}
              onPress={() => props.navigation.navigate(RewindScreen)}>
              <Text
                style={{color: Colors.orange, fontSize: 14, fontWeight: '600'}}>
                Get Premium
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gradient}>
            <Image source={require('../../../assets/gradient.png')} />
          </View>
        </View>

        {/* ......................menu............................... */}
        <View style={styles.menuVw}>
          {/* ........Settings............ */}
          <TouchableOpacity
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 5,
            }}
            onPress={() => props.navigation.navigate('SettingsScreen')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name={'settings-outline'} size={30} color="black" />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: Colors.black,
                }}>
                Settings
              </Text>
            </View>
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              color="black"
            />
          </TouchableOpacity>
          {/* ...........Dark........ */}
          <TouchableOpacity
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 5,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Feather name={'eye'} size={30} color="black" />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: Colors.black,
                }}>
                Dark Mode
              </Text>
            </View>
          </TouchableOpacity>
          {/* ...........Help Center.......... */}
          <TouchableOpacity
            onPress={() => props.navigation.navigate('HelpCentercreen')}
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 5,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Feather name={'info'} size={30} color="black" />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: Colors.black,
                }}>
                Help Center
              </Text>
            </View>
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              color="black"
            />
          </TouchableOpacity>
          {/* ..........Invite Friends............ */}
          <TouchableOpacity
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 5,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome5 name={'users'} size={25} color="black" />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: Colors.black,
                }}>
                Invite Friends
              </Text>
            </View>
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              color="black"
            />
          </TouchableOpacity>
          {/* ............Logout........... */}
          <TouchableOpacity
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 5,
            }}
            onPress={() => {
              googleSignOut();
              signOut();
              props.navigation.navigate('LoginScreen');
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name={'log-out-outline'} size={30} color="black" />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: Colors.black,
                }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
          {/* ................ */}
        </View>
        {/* ..................................................... */}
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  screenVw: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentVw: {
    marginVertical: 20,
    marginHorizontal: 24,
  },
  headerVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRightVw: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
  },
  headerLeftVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 130,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
  },
  profilePicVw: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  benefitsVW: {
    height: 180,
    marginTop: 10,
    backgroundColor: '#EE6E17',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  gradient: {
    width: 77,
    height: 105,
  },
  benefitsText: {
    width: 199,
    height: 113,
    justifyContent: 'space-between',
  },
  PremiumBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    alignItems: 'center',
    width: 116,
    height: 32,
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  menuVw: {
    justifyContent: 'space-between',
    marginTop: 10,
    height: 235,
  },
});
