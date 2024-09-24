import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import FontsComponent from '../../../components/FontsComponent';
import Colors from '../../../components/Colors';
const RewindScreen = () => {
  const [Boost, setBoost] = useState(false);
  return (
    <View style={styles.screenVw}>
      <View style={styles.contentVw}>
        {/* .............................heading........................ */}
        <View style={styles.headerVw}>
          <View style={styles.headerLeftVw}>
            <Text style={styles.heading}>Rewind & Boost</Text>
          </View>
          <View style={styles.headerRightVw}>
            <Feather name={'search'} size={28} />
            <Ionicons name={'ellipsis-horizontal-circle-outline'} size={28} />
          </View>
        </View>
        {/* ...................state.................................. */}
        {Boost ? (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.tab}
                onPress={() => setBoost(false)}>
                <Text style={styles.inactive}>Rewind</Text>
                <View style={styles.line}></View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.tab}
                // onPress={() => setUsePhone(false)}
              >
                <Text style={styles.active}>Boost</Text>
                <View style={styles.line}></View>
                <View style={styles.activeIndecater}></View>
              </TouchableOpacity>
            </View>

            <View style={styles.starVw}>
              <Image
                source={require('../../../assets/star.png')}
                style={styles.star}
              />
            </View>
            {/* ......................... */}
            <View style={styles.offersVw}>
              {/* ..........offer 1............... */}

              <View style={styles.offer}>
                <Text style={styles.heading}>6 Months</Text>
                <View style={styles.line2}></View>
                <Text style={styles.offerTwxt1}>Unlimited Supermatches</Text>
                <View style={styles.rateVw}>
                  <Text style={{color: '#FFFFFF'}}>For $05</Text>
                </View>
                <Text style={[styles.offerTwxt1, {fontSize: 10}]}>
                  per month
                </Text>
              </View>
              {/* ..........offer 2............... */}
              <View style={styles.offer}>
                <Text style={styles.heading}>6 Months</Text>
                <View style={styles.line2}></View>
                <Text style={styles.offerTwxt1}>Unlimited Supermatches</Text>
                <View style={styles.rateVw}>
                  <Text style={{color: '#FFFFFF'}}>For $10</Text>
                </View>
                <Text style={[styles.offerTwxt1, {fontSize: 10}]}>
                  per month
                </Text>
              </View>
              {/* ..........offer 3............... */}
              <View style={styles.offer}>
                <Text style={styles.heading}>6 Months</Text>
                <View style={styles.line2}></View>
                <Text style={styles.offerTwxt1}>Unlimited Supermatches</Text>
                <View style={styles.rateVw}>
                  <Text style={{color: '#FFFFFF'}}>For $3</Text>
                </View>
                <Text style={[styles.offerTwxt1, {fontSize: 10}]}>
                  per month
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.tab}>
                <Text style={styles.active}>Rewind</Text>
                <View style={styles.line}></View>
                <View style={styles.activeIndecater}></View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.tab}
                onPress={() => setBoost(true)}>
                <Text style={styles.inactive}>Boost</Text>
                <View style={styles.line}></View>
              </TouchableOpacity>
            </View>
            <View style={styles.starVw}>
              <Image
                source={require('../../../assets/Swap.png')}
                style={styles.star}
              />
            </View>
            <View style={styles.offersVw}>
              {/* ..........offer 1............... */}

              <View style={styles.offer}>
                <Text style={styles.heading}>6 Months</Text>
                <View style={styles.line2}></View>
                <Text style={styles.offerTwxt1}>Unlimited Rewinds</Text>
                <View style={styles.rateVw}>
                  <Text style={{color: '#FFFFFF'}}>For $05</Text>
                </View>
                <Text style={[styles.offerTwxt1, {fontSize: 10}]}>
                  per month
                </Text>
              </View>
              {/* ..........offer 2............... */}
              <View style={styles.offer}>
                <Text style={styles.heading}>6 Months</Text>
                <View style={styles.line2}></View>
                <Text style={styles.offerTwxt1}>Unlimited Rewinds</Text>
                <View style={styles.rateVw}>
                  <Text style={{color: '#FFFFFF'}}>For $10</Text>
                </View>
                <Text style={[styles.offerTwxt1, {fontSize: 10}]}>
                  per month
                </Text>
              </View>
              {/* ..........offer 3............... */}
              <View style={styles.offer}>
                <Text style={styles.heading}>6 Months</Text>
                <View style={styles.line2}></View>
                <Text style={styles.offerTwxt1}>Unlimited Rewinds</Text>
                <View style={styles.rateVw}>
                  <Text style={{color: '#FFFFFF'}}>For $3</Text>
                </View>
                <Text style={[styles.offerTwxt1, {fontSize: 10}]}>
                  per month
                </Text>
              </View>
            </View>
          </View>
        )}

        {/* ...................end text.................................. */}
        <Text style={styles.endText}>
          This is recurring subscription that you can cancel anytime.
        </Text>
        {/* ...................end .................................. */}
      </View>
    </View>
  );
};

export default RewindScreen;

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
    width: '20%',
    justifyContent: 'space-between',
  },
  headerLeftVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: FontsComponent.bold,
    color: Colors.black,
    textAlign: 'center',
  },
  active: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: FontsComponent.semiBold,
    color: Colors.orange,
    paddingBottom: 10,
  },
  inactive: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: FontsComponent.semiBold,
    color: '#616161',
    paddingBottom: 10,
  },
  line: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  line2: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    width: '100%',
  },
  activeIndecater: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: Colors.orange,
    alignSelf: 'center',
    width: '50%',
    bottom: 0,
  },
  tab: {
    // marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  starVw: {
    height: 64,
    width: 64,
    backgroundColor: Colors.orange,
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  star: {
    width: 28,
    height: 28,
  },
  offersVw: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 30,
  },
  offer: {
    width: 110,
    height: 208,
    borderWidth: 2,
    borderColor: Colors.orange,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  rateVw: {
    backgroundColor: Colors.orange,
    borderRadius: 50,
    width: 90,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  offerTwxt1: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: FontsComponent.medium,
    color: '#424242',
    textAlign: 'center',
  },
  endText: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: FontsComponent.regular,
    color: Colors.black,
    textAlign: 'center',
    marginHorizontal: 70,
    lineHeight: 22.4,
  },
});
