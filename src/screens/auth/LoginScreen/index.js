import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import React from 'react';
import Colors from '../../../components/Colors';
import AuthHeader from '../../../components/AuthHeader';
import CustomInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useState} from 'react';
const LoginScreen = props => {
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({
    email: '',
    password: '',
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
    if (!inputs.password) {
      handleError('Enter the Password', 'password');
      valid = false;
    } else if (inputs.password.length < 8) {
      handleError('Password must have atleast 8 charectors', 'password');
      valid = false;
    }
    if (valid) {
      props.navigation.navigate('BottomTab');
    }
  };
  const [check, setCheck] = useState(null);
  const handleCheck = () => {
    setCheck(!check);
  };
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  return (
    <ScrollView style={styles.screenView}>
      <View style={styles.content}>
        <AuthHeader
          onPress={() => props.navigation.navigate('BordingScreen')}
        />

        <Text style={styles.heading}>Log In Your Account</Text>
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

        <Text style={styles.text2}>Forgot the password?</Text>
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
        <CustomButton title={'Sign in'} onPress={validater} />
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
          <View style={styles.ImageView}>
            <Image
              source={require('../../../assets/google.png')}
              style={styles.loginImage}
            />
          </View>
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
          onPress={() => props.navigation.navigate('SignupScreen')}>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 14,
              color: '#9E9E9E',
              fontFamily: 'Urbanist-VariableFont',
            }}>
            Don’t have an account?{' '}
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                color: Colors.orange,
                fontFamily: 'Urbanist-VariableFont',
              }}>
              Sign up
            </Text>{' '}
          </Text>
        </TouchableOpacity>
        {/* ............................................................ */}
      </View>
    </ScrollView>
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
    fontFamily: 'Urbanist-VariableFont',
  },

  text2: {
    textAlign: 'right',
    color: Colors.orange,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
    fontFamily: 'Urbanist-VariableFont',
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
    fontFamily: 'Urbanist-VariableFont',
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

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  checkbox: {
    marginRight: 8,
    borderRadius: 8,
    borderWidth: 3,
    Width: 24,
    Height: 24,
    borderColor: '#FFFFFF',
    backgroundColor: Colors.orange,
  },
  checkboxlabel: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: 'Urbanist-VariableFont',
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
