import React from 'react';
import {
  KeyboardAvoidingView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
} from 'react-native';
import Colors from '../../../components/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontsComponent from '../../../components/FontsComponent';

const MessageScreen = props => {
  const msgData = [
    {
      key: '1',
      msg: 'Hi, good evening Brain Chesky ... 😁😁',
      time: '20.00',
      isTo: true,
      isFrom: false,
    },
    {
      key: '2',
      msg: 'Hey there! Excited to start this mentoring journey with you.',
      time: '20.00',
      isTo: true,
      isFrom: false,
    },
    {
      key: '3',
      msg: 'Hello, evening too Shandontoliver',
      time: '20.01',
      isTo: false,
      isFrom: true,
    },
    {
      key: '4',
      msg: 'Hi! Thanks for connecting. What are your primary goals? 🤗🤗',
      time: '20.01',
      isTo: false,
      isFrom: true,
    },
  ];

  return (
    <View style={styles.screenVw}>
      <View style={styles.contentVw}>
        {/* .............................heading........................ */}
        <View style={styles.headerVw}>
          <View style={styles.headerLeftVw}>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/arrowLeft.png')}
                style={styles.iconImage}
              />
            </TouchableOpacity>
            <Text style={styles.heading}>Brian Chesky</Text>
          </View>
          <View style={styles.headerRightVw}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('AudioCallScreen')}>
              <Image
                source={require('../../../assets/phone.png')}
                style={styles.iconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('VideoCallScreen')}>
              <Image
                source={require('../../../assets/Video.png')}
                style={styles.iconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name={'ellipsis-horizontal-circle-outline'}
                size={28}
                color={'black'}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* ..........................FlatList........................ */}
        <FlatList
          data={msgData}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <View style={item.isTo ? styles.msg1 : styles.msg2}>
              <View style={styles.msgContent}>
                <Text style={item.isTo ? styles.msg1Txt : styles.msg2Txt}>
                  {item.msg}
                </Text>
              </View>
              <View style={styles.msgTimeContainer}>
                <Text style={styles.msgTime}>{item.time}</Text>
              </View>
            </View>
          )}
          ListHeaderComponent={
            <View style={styles.msgDate}>
              <Text style={styles.date}>Today</Text>
            </View>
          }
          contentContainerStyle={styles.flatListContent}
        />

        {/* ..........................bottomVw........................ */}
        <View style={styles.bottomVw}>
          <View style={styles.bottomLeftVw}>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/smile.png')}
                style={styles.iconImage2}
              />
            </TouchableOpacity>
            <TextInput placeholder="Type a message ..." style={styles.input} />
            <TouchableOpacity>
              <Image
                source={require('../../../assets/attach.png')}
                style={styles.iconImage2}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/Camera.png')}
                style={styles.iconImage2}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.bottomRightVw}>
            <Image
              source={require('../../../assets/mic.png')}
              style={styles.iconImage2}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  screenVw: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentVw: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 24,
    justifyContent: 'space-between',
    // marginBottom: 20,
  },
  headerVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRightVw: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
  },
  headerLeftVw: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    width: 150,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: FontsComponent.bold,
    color: Colors.black,
    marginLeft: 10,
  },
  iconImage: {
    height: 28,
    width: 28,
    resizeMode: 'contain',
  },
  iconImage2: {
    height: 25,
    width: 25,
  },
  msgDate: {
    borderRadius: 6,
    width: 50,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#7575751F',
    marginTop: 10,
  },
  date: {
    fontWeight: '600',
    color: '#757575',
    fontSize: 10,
    fontFamily: FontsComponent.semiBold,
    lineHeight: 12,
  },
  msg1: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 20,
    backgroundColor: Colors.orange,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    width: '70%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  msg2: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  msg1Txt: {
    color: '#FFFFFF',
    fontFamily: FontsComponent.medium,
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 25.2,
  },
  msg2Txt: {
    color: Colors.black,
    fontFamily: FontsComponent.medium,
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 25.2,
  },
  msgTime: {
    fontFamily: FontsComponent.medium,
    fontSize: 12,
    fontWeight: '500',
    color: '#E0E0E0',
  },
  bottomVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingTop: 5,
  },
  bottomLeftVw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '85%',
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    marginRight: 5,
  },
  bottomRightVw: {
    borderRadius: 100,
    backgroundColor: Colors.orange,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 180,
    height: 40,
    padding: 10,
  },
  msgContent: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  msgTimeContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  flatListContent: {
    paddingBottom: 20,
  },
});
