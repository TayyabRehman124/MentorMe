import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../../components/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SubscriptionScreen = () => {
  return (
    <View style={styles.screenVw}>
      <View style={styles.contentVw}>
        {/* .............................heading........................ */}
        <View style={styles.headerVw}>
          <View style={styles.headerLeftVw}>
            <Text style={styles.heading}>Subscription</Text>
          </View>
          <View style={styles.headerRightVw}>
            <Feather name={'search'} size={28} />
            <Ionicons name={'ellipsis-horizontal-circle-outline'} size={28} />
          </View>
        </View>
        {/* .............................title........................ */}
        <Text style={styles.title}>Mentor Me</Text>
        <Text style={styles.text2}>
          Enjoy unlimited swiping & like, without restrictions, & without ads
        </Text>
        {/* .............................Free........................ */}
        <View style={styles.freeVw}>
          <View style={[styles.freeBar, {marginBottom: 25}]}>
            <Image source={require('../../../assets/happy.png')} />
            <Text style={{fontSize: 25, paddingLeft: 15}}>Free</Text>
          </View>
          {/* ................. */}
          <View style={styles.freeBar}>
            <Image
              source={require('../../../assets/check2.png')}
              style={styles.imageIcon}
            />
            <Text style={{fontSize: 16, paddingLeft: 15}}>
              limited Swiping & Likes
            </Text>
          </View>
          {/* .............................. */}

          <View style={styles.freeBar}>
            <Image
              source={require('../../../assets/check2.png')}
              style={styles.imageIcon}
            />
            <Text style={{fontSize: 16, paddingLeft: 15}}>
              Zero Super Likes a Day
            </Text>
          </View>
          {/* .............................. */}

          <View style={styles.freeBar}>
            <Image
              source={require('../../../assets/check2.png')}
              style={styles.imageIcon}
            />
            <Text style={{fontSize: 16, paddingLeft: 15}}>
              No Rewinds, No AI Matching
            </Text>
          </View>
          {/* .............................. */}

          <View style={styles.freeBar}>
            <Image
              source={require('../../../assets/check2.png')}
              style={styles.imageIcon}
            />
            <Text style={{fontSize: 16, paddingLeft: 15}}>
              Restrictions & Ads
            </Text>
          </View>
        </View>
        {/* .............................. */}
        <View style={styles.view2}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../../assets/crown.png')}
              style={styles.imageIcon}
            />
            <Text
              style={{
                fontSize: 25,
                paddingLeft: 15,
                fontWeight: 'bold',
                color: Colors.black,
              }}>
              Standard
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.orange,
              borderRadius: 25,
              height: 39,
              width: 124,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                color: Colors.white,
              }}>
              Upgrade in $25
            </Text>
          </TouchableOpacity>
        </View>

        {/* ..................................................... */}
        <View style={styles.view2}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../../assets/flash.png')}
              style={styles.imageIcon}
            />
            <Text
              style={{
                fontSize: 25,
                paddingLeft: 15,
                fontWeight: 'bold',
                color: Colors.black,
              }}>
              Premium
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.orange,
              borderRadius: 25,
              height: 39,
              width: 124,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                color: Colors.white,
              }}>
              Upgrade in $45
            </Text>
          </TouchableOpacity>
        </View>

        {/* .............................heading........................ */}
      </View>
    </View>
  );
};

export default SubscriptionScreen;

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
    color: Colors.black,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.orange,
    textAlign: 'center',
    marginTop: 20,
  },
  text2: {
    fontSize: 18,
    fontWeight: '500',
    color: '#424242',
    textAlign: 'center',
    marginTop: 20,
  },
  freeVw: {
    borderWidth: 3,
    borderColor: Colors.orange,
    height: 250,
    borderRadius: 25,
    padding: 30,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  freeBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  imageIcon: {
    height: 15,
    width: 20,
  },
  view2: {
    borderWidth: 3,
    borderColor: Colors.orange,
    height: 90,
    borderRadius: 25,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
});
