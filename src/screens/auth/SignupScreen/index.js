import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import Colors from '../../../components/Colors';
import AuthHeader from '../../../components/AuthHeader';
import CustomInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useState} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId:
    '743868485620-fhnrut2ee0ng5k5nt8b0ij613o4in3ff.apps.googleusercontent.com',
});
//Google login........................................
async function onGoogleButtonPress() {
  try {
    // Sign out any previously signed-in user to prompt account selection again
    await GoogleSignin.signOut();
    // Check if the device supports Google Play services
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    // Sign in the user and retrieve userInfo
    const userInfo = await GoogleSignin.signIn();

    // Log userInfo to inspect the structure
    console.log('User Info: ', userInfo);

    // Retrieve idToken from the correct property
    const idToken = userInfo.idToken || userInfo.data.idToken;

    // Log the idToken to verify it's being retrieved correctly
    console.log('ID Token: ', idToken);

    if (!idToken) {
      throw new Error('Google Sign-In failed: No ID token received.');
    }

    // Create credential using idToken
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign in to Firebase with Google credential
    await auth().signInWithCredential(googleCredential);
    //Alert.alert('Success', 'Google Sign-In Successful!');
  } catch (error) {
    console.error(error);
    Alert.alert('Google Sign-In Error', error.message);
  }
}

//......................................
const SignupScreen = props => {
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
    referralCode: '',
  });
  const [errors, setErrors] = React.useState({
    email: '',
    password: '',
    referralCode: '',
  });
  const handleOnChange = (text, CustomTextInput) => {
    setInputs(prevState => ({...prevState, [CustomTextInput]: text}));
  };
  const handleError = (errorMessage, CustomTextInput) => {
    setErrors(prevState => ({
      ...prevState,
      [CustomTextInput]: errorMessage,
    }));
  };
  const validater = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError('Enter the Email', 'email');
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Enter the valid Email', 'email');
      valid = false;
    }
    if (!inputs.referralCode) {
      handleError('Enter the referralCode', 'referralCode');
      valid = false;
    }

    if (!inputs.password) {
      handleError('Enter the Password', 'password');
      valid = false;
    } else if (inputs.password.length < 8) {
      handleError('Password must have atleast 8 charectors', 'password');
      valid = false;
    }
    if (valid) {
      // Authentication process
      auth()
        .createUserWithEmailAndPassword(inputs.email, inputs.password)
        .then(() => {
          console.log('User account created & signed in!');
          props.navigation.navigate('BottomTab');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            //console.log('That email address is already in use!');
            Alert.alert('Already signedUp.Plz logIn');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    }
  };
  const [check, setCheck] = useState(null);
  const handleCheck = () => {
    setCheck(!check);
  };
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.screenView}>
      <View style={styles.content}>
        <AuthHeader onPress={() => props.navigation.navigate('LoginScreen')} />
        <Text style={styles.heading}>Create Your Account</Text>
        <CustomInput
          placeholder={'Email Address'}
          icon={require('../../../assets/email.png')}
          keyboardType="email-address"
          onChangeText={text => handleOnChange(text, 'email')}
          errorMessage={errors.email}
          onFocus={() => {
            handleError(null, 'email');
          }}
        />
        <CustomInput
          placeholder={'Referral Code'}
          icon={require('../../../assets/referral.png')}
          onChangeText={text => handleOnChange(text, 'referralCode')}
          errorMessage={errors.referralCode}
          onFocus={() => {
            handleError(null, 'referralCode');
          }}
        />
        <CustomInput
          placeholder={'Password'}
          icon={require('../../../assets/lock.png')}
          secureTextEntry={isSecureTextEntry}
          onChangeText={text => handleOnChange(text, 'password')}
          errorMessage={errors.password}
          onFocus={() => {
            handleError(null, 'password');
          }}
          rightIcon={
            isSecureTextEntry ? (
              <FontAwesome6 name="eye-slash" size={20} color="#212121" />
            ) : (
              <FontAwesome6 name="eye" size={20} color="#212121" />
            )
          }
          onRightIconPress={() => {
            setIsSecureTextEntry(prev => !prev);
          }}
        />

        {/* ..............................................checkbox................ */}
        <TouchableOpacity style={styles.checkboxView} onPress={handleCheck}>
          <View style={styles.checkbox}>
            {check && (
              <Image
                source={require('../../../assets/check.png')}
                style={styles.check}
              />
            )}
          </View>
          <Text>Remember me</Text>
        </TouchableOpacity>

        {/* ....................................................... */}

        <CustomButton title={'Sign up'} onPress={validater} />

        {/* ......................................................... */}
        <View style={styles.lineView}>
          <View style={styles.line} />
          <View>
            <Text style={styles.text3}>Or continue with</Text>
          </View>
          <View style={styles.line} />
        </View>
        {/* ....................................... */}
        <View style={styles.ImageContainer}>
          <View style={styles.ImageView}>
            <Image
              source={require('../../../assets/facebook.png')}
              style={styles.loginImage}
            />
          </View>
          <TouchableOpacity
            style={styles.ImageView}
            onPress={() => onGoogleButtonPress()}>
            <Image
              source={require('../../../assets/google.png')}
              style={styles.loginImage}
            />
          </TouchableOpacity>
          <View style={styles.ImageView}>
            <Image
              source={require('../../../assets/apple.png')}
              style={styles.loginImage}
            />
          </View>
        </View>
        {/* ........................................................... */}
        <TouchableOpacity
          style={{alignSelf: 'center', marginTop: 25}}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={{fontWeight: '400', fontSize: 14, color: '#9E9E9E'}}>
            Already have an account?{' '}
            <Text
              style={{fontWeight: '600', fontSize: 14, color: Colors.orange}}>
              Sign in
            </Text>{' '}
          </Text>
        </TouchableOpacity>
        {/* ............................................................ */}
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

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
