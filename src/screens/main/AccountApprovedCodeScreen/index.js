import React, {useState} from 'react';
import {Modal, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '../../../components/Colors';
import FontsComponent from '../../../components/FontsComponent';
import CustomButton from '../../../components/CustomButton';

const AccountApprovedCodeScreen = ({route}) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const {selectedOption} = route.params; // Get the selected option from the previous screen
  const handleFocus = inputName => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        {/* ........................header.......................... */}
        <View style={styles.header}>
          <Image source={require('../../../assets/arrowLeft.png')} />
          <Text style={styles.title}>Account Approval</Text>
        </View>
        {/* ......................center vw............................ */}
        <View style={styles.centerVw}>
          <Text style={styles.textNormal}>
            Code has been sent to{' '}
            {selectedOption === 'sms' ? (
              <Text style={styles.textNumber}>+96 352 4672 984</Text>
            ) : (
              <Text style={styles.textNumber}>Shandontoliver@gmail.com</Text>
            )}
          </Text>
          {/* ...........codeVw........ */}
          <View style={styles.codeVw}>
            <View
              style={[
                styles.codeDigitVw,
                focusedInput === 'input1' && styles.focused,
              ]}>
              <TextInput
                style={styles.input}
                maxLength={1}
                keyboardType="numeric"
                onFocus={() => handleFocus('input1')}
                onBlur={handleBlur}
              />
            </View>

            <View
              style={[
                styles.codeDigitVw,
                focusedInput === 'input2' && styles.focused,
              ]}>
              <TextInput
                style={styles.input}
                maxLength={1}
                keyboardType="numeric"
                onFocus={() => handleFocus('input2')}
                onBlur={handleBlur}
              />
            </View>

            <View
              style={[
                styles.codeDigitVw,
                focusedInput === 'input3' && styles.focused,
              ]}>
              <TextInput
                style={styles.input}
                maxLength={1}
                keyboardType="numeric"
                onFocus={() => handleFocus('input3')}
                onBlur={handleBlur}
              />
            </View>

            <View
              style={[
                styles.codeDigitVw,
                focusedInput === 'input4' && styles.focused,
              ]}>
              <TextInput
                style={styles.input}
                maxLength={1}
                keyboardType="numeric"
                onFocus={() => handleFocus('input4')}
                onBlur={handleBlur}
              />
            </View>
          </View>
          {/* ..........textNormal......... */}
          <Text style={styles.textNormal}>
            Resend code in <Text style={styles.time}>55</Text> s
          </Text>
        </View>
        {/* ......................btn............................ */}
        <CustomButton title={'Verify'} onPress={() => setShowModal(true)} />
        {/* ..........................Modal........................ */}
        <Modal
          transparent={true}
          visible={showModal}
          animationType="slide"
          onRequestClose={() => {
            setShowModal(!showModal);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalVw}>
              <Image
                source={require('../../../assets/Images/modal.png')}
                style={styles.modelImage}
              />
              <Text style={styles.text1}>Congratulations!</Text>
              <Text style={styles.text2}>
                Your account is ready to use. You will be redirected to the Home
                page in a few seconds..!
              </Text>
            </View>
          </View>
        </Modal>
        {/* .................................................. */}
      </View>
    </View>
  );
};

export default AccountApprovedCodeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    margin: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: Colors.black,
    fontFamily: FontsComponent.bold,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  centerVw: {
    justifyContent: 'space-between',
    height: 230,
  },
  textNormal: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: FontsComponent.medium,
    color: Colors.black,
  },
  textNumber: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: FontsComponent.bold,
    color: Colors.black,
  },
  time: {
    color: Colors.orange,
  },
  codeVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codeDigitVw: {
    height: 60,
    width: 80,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#CCCCCC', // Default border color
  },
  focused: {
    borderColor: Colors.orange, // Change border color when focused
  },
  input: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: FontsComponent.bold,
  },
  text1: {
    color: Colors.orange,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: FontsComponent.bold,
    marginTop: 30,
  },
  text2: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: FontsComponent.regular,
    marginTop: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  modalVw: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 490,
    width: 340,
    alignSelf: 'center',
    borderWidth: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // To give a transparent background effect
  },
  modelImage: {
    marginHorizontal: 20,
  },
});
