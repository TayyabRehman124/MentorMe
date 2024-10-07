import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Colors from '../../../components/Colors';
import AuthHeader from '../../../components/AuthHeader';
import CustomInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
//.............redux...................
import {useDispatch} from 'react-redux';
import {setUserData} from '../../../components/redux/Action';
// .............................Configure Google Sign-In
GoogleSignin.configure({
  webClientId:
    '743868485620-fhnrut2ee0ng5k5nt8b0ij613o4in3ff.apps.googleusercontent.com',
});
//............................main func....................
const LoginScreen = props => {
  const dispatch = useDispatch(); //....for redux..............

  // ............................
  const [inputs, setInputs] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({email: '', password: ''});

  //..................loader................
  const [showLoader, setshowLoader] = useState(false);
  //...............check......................
  const [rememberMe, setRememberMe] = useState(false);
  const handleCheck = () => {
    setRememberMe(!rememberMe);
  };
  //...........................................
  const handleOnChange = (text, CustomTextInput) => {
    setInputs(prevState => ({...prevState, [CustomTextInput]: text}));
  };
  const handleError = (errorMessage, CustomTextInput) => {
    setErrors(prevState => ({
      ...prevState,
      [CustomTextInput]: errorMessage,
    }));
  };
  //.............................email logIn.........
  const emailLogin = () => {
    setshowLoader(true);
    auth()
      .signInWithEmailAndPassword(inputs.email, inputs.password)
      .then(() => {
        setshowLoader(false);
        props.navigation.navigate('BottomTab');
      })
      .catch(error => {
        Alert.alert('Account not found');
      });
    console.log('email user', auth().currentUser);
    const emailUserData = auth().currentUser;
    //console.log('emailUser Info name: ', emailUserData.email); // Log the entire userInfo
    if (emailUserData) {
      const userData = {
        name: emailUserData.displayName || 'Email User', // Fallback if no displayName
        email: emailUserData.email,
        photo: emailUserData.photoURL || null, // Fallback if no photoURL
        uid: emailUserData.uid,
      };
      dispatch(setUserData(userData)); // Dispatch user data to Redux store
    }
    AsyncStorage.setItem('check-status', rememberMe ? 'true' : 'false'); //....store to local storage
  };

  //..................validater....................
  const validater = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError('Enter the Email', 'email');
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Enter a valid Email', 'email');
      valid = false;
    }
    if (!inputs.password) {
      handleError('Enter the Password', 'password');
      valid = false;
    } else if (inputs.password.length < 8) {
      handleError('Password must have at least 8 characters', 'password');
      valid = false;
    }
    if (valid) {
      emailLogin();
    }
  };
  //..........................................google sign in code.....................
  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const userInfo = await GoogleSignin.signIn();
      //console.log('User Info: ', userInfo); // Log the entire userInfo object
      // console.log('User Info name: ', userInfo.data.user.name); // Log the entire userInfo object
      // Check where the ID token is located
      const idToken =
        userInfo.idToken ||
        userInfo.data.idToken ||
        userInfo.authentication.idToken; // Adjust based on the structure
      console.log('ID Token: ', idToken); // Log the ID token

      if (!idToken) {
        throw new Error('Google Sign-In failed: No ID token received.');
      }
      setshowLoader(true); // Show loader when signing in with Google
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);

      // Extract useful user information
      const userData = {
        name: userInfo.data.user.name,
        email: userInfo.data.user.email,
        photo: userInfo.data.user.photo,
        id: userInfo.data.user.id,
      };
      // setUserInfo(userData);
      //console.log('Success', 'Google Sign-In Successful!');

      dispatch(setUserData(userData)); // Dispatch user data to Redux store
      await AsyncStorage.setItem('check-status', rememberMe ? 'true' : 'false'); //....store to local storage
      //await AsyncStorage.setItem('asm', 'tayyab');
      setshowLoader(false); // hide loader when go to home
      props.navigation.navigate('BottomTab');
      //...............storeData on AsyncStorage....
    } catch (error) {
      console.error(error);
      Alert.alert('Google Sign-In Error', error.message);
    }
  };

  //................................
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.screenView}>
        <View style={styles.content}>
          <AuthHeader
            onPress={() => props.navigation.navigate('BordingScreen')}
          />
          <Text style={styles.heading}>Log In Your Account</Text>
          {/* ...................Email............................................ */}
          <CustomInput
            placeholder={'Email Address'}
            icon={require('../../../assets/email.png')}
            keyboardType="email-address"
            onChangeText={text => handleOnChange(text, 'email')}
            errorMessage={errors.email}
            onFocus={() => handleError(null, 'email')}
          />
          {/* ...................Password............................................ */}
          <CustomInput
            placeholder={'Password'}
            icon={require('../../../assets/lock.png')}
            secureTextEntry={true}
            onChangeText={text => handleOnChange(text, 'password')}
            errorMessage={errors.password}
            keyboardType="numeric"
            onFocus={() => handleError(null, 'password')}
            rightIcon={<FontAwesome6 name="eye" size={20} color="#212121" />}
          />

          <TouchableOpacity>
            <Text style={styles.text2}>Forgot the password?</Text>
          </TouchableOpacity>
          {/* ......................checkbox................ */}
          <TouchableOpacity style={styles.checkboxView} onPress={handleCheck}>
            <View style={styles.checkbox}>
              {rememberMe && (
                <Image
                  source={require('../../../assets/check.png')}
                  style={styles.check}
                />
              )}
            </View>
            <Text>Remember me</Text>
          </TouchableOpacity>

          {/* ....................................................... */}

          <CustomButton title={'Sign in'} onPress={validater} />

          <View style={styles.lineView}>
            <View style={styles.line} />
            <Text style={styles.text3}>Or continue with</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.ImageContainer}>
            <TouchableOpacity style={styles.ImageView}>
              <Image
                source={require('../../../assets/facebook.png')}
                style={styles.loginImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ImageView}
              onPress={() => {
                onGoogleButtonPress();
              }}>
              <Image
                source={require('../../../assets/google.png')}
                style={styles.loginImage}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.ImageView}>
              <Image
                source={require('../../../assets/apple.png')}
                style={styles.loginImage}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{alignSelf: 'center', marginTop: 25}}
            onPress={() => props.navigation.navigate('SignupScreen')}>
            <Text style={{fontWeight: '400', fontSize: 14, color: '#9E9E9E'}}>
              Don’t have an account?{' '}
              <Text style={{fontWeight: '600', color: Colors.orange}}>
                Sign up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* Loader Overlay */}
      {showLoader && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Colors.orange} />
        </View>
      )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    marginHorizontal: 26,
    marginVertical: 30,
  },
  heading: {
    color: Colors.black,
    fontSize: 25,
    marginTop: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text2: {
    textAlign: 'right',
    color: Colors.orange,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  ImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
  },
  loginImage: {
    resizeMode: 'contain',
    width: 100,
    height: 35,
  },
  text3: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: 18,
  },
  line: {
    height: 1,
    backgroundColor: '#EEEEEE',
    width: 93,
    marginHorizontal: 5,
  },
  lineView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },
  ImageView: {
    borderWidth: 1,
    borderRadius: 16,
    width: 88,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
  },

  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
    zIndex: 10, // Ensure it's on top
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  checkbox: {
    marginRight: 8,
    borderRadius: 8,
    borderWidth: 3,
    width: 24,
    height: 24,
    borderColor: '#FFFFFF',
    backgroundColor: Colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    resizeMode: 'contain',
    height: 6,
    width: 9,
  },
});
