import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../components/Colors';
import FontsComponent from '../../../components/FontsComponent';

const SurveyScreen = () => {
  const [checked, setChecked] = useState(null);
  const checkHandler = optionId => {
    setChecked(optionId);
  };
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
          <View style={styles.quesVw}>
            <Text style={styles.ques}>
              Why do you want to delete your account?
            </Text>
            <View style={styles.line}></View>

            {/* .................................................... */}
            <TouchableOpacity
              style={styles.option}
              onPress={() => checkHandler(1)}>
              <View
                style={[
                  styles.circle,
                  {backgroundColor: checked === 1 ? Colors.orange : null},
                ]}></View>
              <Text style={styles.optionTxt}>
                The app is not functioning properly.
              </Text>
            </TouchableOpacity>
            {/* .................................................... */}
            <TouchableOpacity
              style={styles.option}
              onPress={() => checkHandler(2)}>
              <View
                style={[
                  styles.circle,
                  {backgroundColor: checked === 2 ? Colors.orange : null},
                ]}></View>
              <Text style={styles.optionTxt}>
                I am unhappy with my experience of this app.
              </Text>
            </TouchableOpacity>
            {/* .................................................... */}
            <TouchableOpacity
              style={styles.option}
              onPress={() => checkHandler(3)}>
              <View
                style={[
                  styles.circle,
                  {backgroundColor: checked === 3 ? Colors.orange : null},
                ]}></View>
              <Text style={styles.optionTxt}>
                I want to start over a new account.
              </Text>
            </TouchableOpacity>
            {/* .................................................... */}
            <TouchableOpacity
              style={styles.option}
              onPress={() => checkHandler(4)}>
              <View
                style={[
                  styles.circle,
                  {backgroundColor: checked === 4 ? Colors.orange : null},
                ]}></View>
              <Text style={styles.optionTxt}>My account was hacked.</Text>
            </TouchableOpacity>
            {/* .................................................... */}
            <TouchableOpacity
              style={styles.option}
              onPress={() => checkHandler(5)}>
              <View
                style={[
                  styles.circle,
                  {backgroundColor: checked === 5 ? Colors.orange : null},
                ]}></View>
              <Text style={styles.optionTxt}>I prefer more privacy.</Text>
            </TouchableOpacity>
            {/* .................................................... */}
            <TouchableOpacity
              style={styles.option}
              onPress={() => checkHandler(6)}>
              <View
                style={[
                  styles.circle,
                  {backgroundColor: checked === 6 ? Colors.orange : null},
                ]}></View>
              <Text style={styles.optionTxt}>I just want to take a break.</Text>
            </TouchableOpacity>

            {/* ................ques end.................................... */}
          </View>
          {/* .................................................... */}
          <View style={styles.quesVw}>
            <Text style={styles.ques}>Write any message for us:</Text>
            <View style={styles.line}></View>
            <TextInput style={styles.input} />
            {/* .................................................... */}
          </View>
        </View>
        {/* .................................................... */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTxt}>Skip</Text>
        </TouchableOpacity>
        {/* .................................................... */}
      </View>
    </View>
  );
};

export default SurveyScreen;

const styles = StyleSheet.create({
  screenVw: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentVw: {
    margin: 20,
    paddingBottom: 20,
    flex: 1,
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
  quesVw: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 20,
    padding: 20,
  },
  ques: {
    fontFamily: FontsComponent.bold,
    fontSize: 18,
    fontWeight: '700',
    color: Colors.black,
  },
  line: {
    borderWidth: 1,
    marginVertical: 10,
    width: '100%',
    borderColor: '#EEEEEE',
  },
  circle: {
    borderColor: Colors.orange,
    borderWidth: 2,
    borderRadius: 100,
    height: 15,
    width: 15,
    marginRight: 10,
    padding: 5,
  },
  option: {
    flexDirection: 'row',
    marginVertical: 5,
  },

  optionTxt: {
    fontFamily: FontsComponent.medium,
    fontWeight: '500',
    color: '#424242',
    fontSize: 14,
  },
  input: {
    height: 100,
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
  buttonTxt: {
    justifyContent: 'center',
    fontFamily: FontsComponent.bold,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.orange,
  },
});
