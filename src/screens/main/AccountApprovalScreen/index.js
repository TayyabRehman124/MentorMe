import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../../components/Colors';
import FontsComponent from '../../../components/FontsComponent';
import CustomButton from '../../../components/CustomButton';

const AccountApprovalScreen = props => {
  const [selectedOption, setSelectedOption] = useState(null);

  const selectionHandler = option => {
    setSelectedOption(option);
  };
  const handleContinue = () => {
    if (selectedOption) {
      props.navigation.navigate('AccountApprovedCodeScreen', {
        selectedOption: selectedOption,
      });
    } else {
      alert('Please select an option!');
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        {/* ..................Image................... */}
        <Image
          source={require('../../../assets/Images/approved.png')}
          style={styles.image}
        />
        {/* ...........................Text.................... */}
        <Text style={styles.text}>
          Select which contact details should we use to verify your account
        </Text>
        {/* .....................sms Wrapper.......................... */}
        <TouchableOpacity
          style={[
            selectedOption === 'sms' ? styles.selected : styles.nonSelected,
            styles.smsWrapper,
          ]}
          onPress={() => selectionHandler('sms')}>
          <View style={styles.smsIconWrapper}>
            <Image
              source={require('../../../assets/sms.png')}
              style={styles.smsIcon}
            />
          </View>
          <View style={styles.viaSmsWrapper}>
            <Text style={styles.viaSmsText}>via SMS:</Text>
            <Text style={styles.phoneNo}>+96 352 4672 984</Text>
          </View>
        </TouchableOpacity>
        {/* .......................email Wrapper........................ */}
        <TouchableOpacity
          style={[
            selectedOption === 'email' ? styles.selected : styles.nonSelected,
            styles.emailWrapper,
          ]}
          onPress={() => selectionHandler('email')}>
          <View style={styles.smsIconWrapper}>
            <Image
              source={require('../../../assets/sms.png')}
              style={styles.smsIcon}
            />
          </View>
          <View style={styles.viaSmsWrapper}>
            <Text style={styles.viaSmsText}>via Email:</Text>
            <Text style={styles.phoneNo}>Shandontoliver@gmail.com</Text>
          </View>
        </TouchableOpacity>
        {/* ......................btn......................... */}
        <CustomButton title={'Continue'} onPress={handleContinue} />
        {/* ......................end......................... */}
      </View>
    </View>
  );
};

export default AccountApprovalScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  image: {
    width: 270,
    height: 270,
    marginTop: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: FontsComponent.medium,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 30,
  },
  smsWrapper: {
    height: 120,
    width: '100%',
    borderRadius: 36,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 10,
  },
  emailWrapper: {
    height: 120,
    width: '100%',
    borderRadius: 36,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  selected: {
    borderWidth: 3,
    borderColor: Colors.orange,
  },
  nonSelected: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  smsIconWrapper: {
    height: 80,
    width: 80,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9610FF14',
  },
  smsIcon: {
    height: 26,
    width: 26,
  },
  viaSmsWrapper: {
    marginLeft: 10,
    height: 50,
    justifyContent: 'space-between',
  },
  viaSmsText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: FontsComponent.medium,
    color: '#757575',
  },
  phoneNo: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: FontsComponent.bold,
    color: '#000000',
  },
});
