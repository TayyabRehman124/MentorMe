import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../components/Colors';
import CustomTextInput from '../../../components/CustomTextInput';
import FontsComponent from '../../../components/FontsComponent';

const HelpCenterScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const dropHandler = index => {
    // If the same question is clicked, collapse it. Otherwise, expand the clicked question.
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <View style={styles.screenVw}>
      <View style={styles.contentVw}>
        {/* .............................heading........................ */}
        <View style={styles.headerVw}>
          <View style={styles.headerLeftVw}>
            <Image
              source={require('../../../assets/arrowLeft.png')}
              style={styles.picIcon}
            />
            <Text style={styles.heading}>Help Center</Text>
          </View>
          <View style={styles.headerRightVw}>
            <Feather name={'search'} size={28} />
            <Ionicons name={'ellipsis-horizontal-circle-outline'} size={28} />
          </View>
        </View>
        {/* .............................FAQ+Support........................ */}
        <View style={styles.faqBar}>
          <View style={styles.faqVw}>
            <Text style={styles.faqText}>FAQ</Text>
            <View style={styles.faqLine}></View>
          </View>
          <TouchableOpacity style={styles.supportVw}>
            <Text style={styles.supportText}>Support</Text>
            <View style={styles.supportLine} />
          </TouchableOpacity>
        </View>
        {/* .............................CustomTextInput........................ */}
        <CustomTextInput
          placeholder={'Search'}
          icon={require('../../../assets/search.png')}
          inputContainerStyle={{backgroundColor: '#F5F5F5'}}
        />
        <View style={styles.quesVw}>
          {/* .............................How to swipe & match?........................ */}
          <View style={styles.ansVw}>
            <TouchableOpacity onPress={() => dropHandler(0)}>
              <View style={styles.questionBar}>
                <Text style={styles.questionText}>How to swipe & match?</Text>

                <Image
                  source={require('../../../assets/drop.png')}
                  style={styles.drop}
                />
              </View>
            </TouchableOpacity>
            {/* .........line............ */}
            <View style={styles.line}></View>
            {expandedIndex === 0 && (
              <Text style={styles.ansText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            )}
          </View>
          {/* .............................How do I edit my profile?........................ */}
          <View style={styles.ansVw}>
            <TouchableOpacity onPress={() => dropHandler(1)}>
              <View style={styles.questionBar}>
                <Text style={styles.questionText}>
                  How do I edit my profile?
                </Text>

                <Image
                  source={require('../../../assets/drop.png')}
                  style={styles.drop}
                />
              </View>
            </TouchableOpacity>
            {/* .........line............ */}
            <View style={styles.line}></View>
            {expandedIndex === 1 && (
              <Text style={styles.ansText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            )}
          </View>
          {/* .............................How to get more likes?........................ */}
          <View style={styles.ansVw}>
            <TouchableOpacity onPress={() => dropHandler(2)}>
              <View style={styles.questionBar}>
                <Text style={styles.questionText}>How to get more likes?</Text>

                <Image
                  source={require('../../../assets/drop.png')}
                  style={styles.drop}
                />
              </View>
            </TouchableOpacity>
            {/* .........line............ */}
            <View style={styles.line}></View>
            {expandedIndex === 2 && (
              <Text style={styles.ansText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            )}
          </View>
          {/* .............................How to get more matches?........................ */}
          <View style={styles.ansVw}>
            <TouchableOpacity onPress={() => dropHandler(3)}>
              <View style={styles.questionBar}>
                <Text style={styles.questionText}>
                  How to get more matches?
                </Text>

                <Image
                  source={require('../../../assets/drop.png')}
                  style={styles.drop}
                />
              </View>
            </TouchableOpacity>
            {/* .........line............ */}
            <View style={styles.line}></View>
            {expandedIndex === 3 && (
              <Text style={styles.ansText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            )}
          </View>
          {/* .............I’m out of profiles to swipe through?........................ */}
          <View style={styles.ansVw}>
            <TouchableOpacity onPress={() => dropHandler(4)}>
              <View style={styles.questionBar}>
                <Text style={styles.questionText}>
                  I’m out of profiles to swipe through?
                </Text>

                <Image
                  source={require('../../../assets/drop.png')}
                  style={styles.drop}
                />
              </View>
            </TouchableOpacity>
            {/* .........line............ */}
            <View style={styles.line}></View>
            {expandedIndex === 4 && (
              <Text style={styles.ansText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            )}
          </View>
          {/* ..........................How not to miss new message?........................ */}
          <View style={styles.ansVw}>
            <TouchableOpacity onPress={() => dropHandler(5)}>
              <View style={styles.questionBar}>
                <Text style={styles.questionText}>
                  How not to miss new message?
                </Text>

                <Image
                  source={require('../../../assets/drop.png')}
                  style={styles.drop}
                />
              </View>
            </TouchableOpacity>
            {/* .........line............ */}
            <View style={styles.line}></View>
            {expandedIndex === 5 && (
              <Text style={styles.ansText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            )}
          </View>
        </View>
        {/* .............................title........................ */}
      </View>
    </View>
  );
};

export default HelpCenterScreen;

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
    width: 70,
    justifyContent: 'space-between',
  },
  headerLeftVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    justifyContent: 'center',
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
  faqBar: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  faqVw: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  faqText: {
    color: Colors.orange,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: FontsComponent.semiBold,
  },
  faqLine: {
    borderWidth: 2,
    borderColor: Colors.orange,
    width: '100%',
    marginTop: 15,
  },
  supportVw: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  supportText: {
    color: '#9E9E9E',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: FontsComponent.semiBold,
  },
  supportLine: {
    borderWidth: 1,
    borderColor: '#9E9E9E',
    width: '100%',
    marginTop: 15,
  },
  ansVw: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 10,
    padding: 20,
    fontFamily: 'Urbanist-Medium',
  },
  drop: {
    height: 10,
    width: 12,
  },
  questionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.black,
    fontFamily: FontsComponent.bold,
  },
  line: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginTop: 10,
  },
  ansText: {
    color: '#424242',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
    fontFamily: FontsComponent.medium,
  },
  quesVw: {
    justifyContent: 'space-evenly',
  },
});
