import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../../components/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontsComponent from '../../../components/FontsComponent';

const ChatsScreen = props => {
  return (
    <View style={styles.screenVw}>
      <View style={styles.contentVw}>
        {/* .............................heading........................ */}
        <View style={styles.headerVw}>
          <View style={styles.headerLeftVw}>
            <Text style={styles.heading}>Chats</Text>
          </View>
          <View style={styles.headerRightVw}>
            <Feather name={'search'} size={28} />
            <Ionicons name={'ellipsis-horizontal-circle-outline'} size={28} />
          </View>
        </View>
        {/* ...................profile Pic.................................. */}
        <View style={styles.heading2Vw}>
          <Text style={styles.nowActive}>Now Active</Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontFamily: FontsComponent.bold,
                color: Colors.orange,
                fontWeight: '700',
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        {/* ...................image scroll.................................. */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: 15,
          }}>
          <Image
            source={require('../../../assets/Tim.png')}
            style={styles.activeImage}
          />
          <Image
            source={require('../../../assets/Brian.png')}
            style={styles.activeImage}
          />
          <Image
            source={require('../../../assets/Mary.png')}
            style={styles.activeImage}
          />
          <Image
            source={require('../../../assets/Warren.png')}
            style={styles.activeImage}
          />
          <Image
            source={require('../../../assets/Maryland.png')}
            style={styles.activeImage}
          />
          <Image
            source={require('../../../assets/Sanjuanita.png')}
            style={styles.activeImage}
          />
        </ScrollView>
        {/* ...................line.................................. */}
        <View style={styles.line}></View>
        <View style={styles.mentors}>
          {/* ...................mentor 1.................................. */}
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MessageScreen')}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-between',
              }}>
              <Image
                source={require('../../../assets/Brian.png')}
                style={styles.mentor}
              />
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text style={styles.name}>Brian Chesky</Text>
                <Text style={styles.discription}>
                  What are your primary goals?
                </Text>
              </View>
            </View>

            <View style={{justifyContent: 'space-between'}}>
              <View style={styles.circle}>
                <Text style={{color: '#FFFFFF', fontSize: 10}}>2</Text>
              </View>
              <Text>20.00</Text>
            </View>
          </TouchableOpacity>

          {/* ...................mentor 2.................................. */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-between',
              }}>
              <Image
                source={require('../../../assets/Warren.png')}
                style={styles.mentor}
              />
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text style={styles.name}>Warren Buffett</Text>
                <Text style={styles.discription}>
                  Wow, this is really epic 👍
                </Text>
              </View>
            </View>

            <View style={{justifyContent: 'space-between'}}>
              <View style={styles.circle}>
                <Text style={{color: '#FFFFFF', fontSize: 10}}>3</Text>
              </View>
              <Text>18:39</Text>
            </View>
          </View>

          {/* ...................mento 3.................................. */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/Mary.png')}
                style={styles.mentor}
              />
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text style={styles.name}>Mary Barra</Text>
                <Text style={styles.discription}>
                  Thank you so much andrew 🔥
                </Text>
              </View>
            </View>

            <View style={{justifyContent: 'flex-end', marginBottom: 5}}>
              {/* <View style={styles.circle}>
              <Text style={{color: '#FFFFFF', fontSize: 10}}>3</Text>
            </View> */}
              <Text>12:26</Text>
            </View>
          </View>

          {/* ...................mento 4.................................. */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/Sanjuanita.png')}
                style={styles.mentor}
              />
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text style={styles.name}>Sanjuanita Ordonez</Text>
                <Text style={styles.discription}>
                  Hi! Thanks for connecting.
                </Text>
              </View>
            </View>

            <View style={{justifyContent: 'flex-end', marginBottom: 5}}>
              {/* <View style={styles.circle}>
              <Text style={{color: '#FFFFFF', fontSize: 10}}>3</Text>
            </View> */}
              <Text>12:26</Text>
            </View>
          </View>
          {/* ...................mento 5.................................. */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/Tim.png')}
                style={styles.mentor}
              />
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text style={styles.name}>Tim Cook</Text>
                <Text style={styles.discription}>
                  I know... I’m trying to get the ...
                </Text>
              </View>
            </View>

            <View style={{justifyContent: 'flex-end', marginBottom: 5}}>
              {/* <View style={styles.circle}>
              <Text style={{color: '#FFFFFF', fontSize: 10}}>3</Text>
            </View> */}
              <Text>Dec 20, 2023</Text>
            </View>
          </View>

          {/* ...................mentor 6.................................. */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-between',
              }}>
              <Image
                source={require('../../../assets/Maryland.png')}
                style={styles.mentor}
              />
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text style={styles.name}>Maryland Winkles</Text>
                <Text style={styles.discription}>
                  I appreciate your guidance.
                </Text>
              </View>
            </View>

            <View style={{justifyContent: 'space-between'}}>
              <View style={styles.circle}>
                <Text style={{color: '#FFFFFF', fontSize: 10}}>2</Text>
              </View>
              <Text>Yesterday</Text>
            </View>
          </View>
        </View>
        {/* ...................end.................................. */}
      </View>
    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  screenVw: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentVw: {
    marginVertical: 20,
  },
  headerVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
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
    fontWeight: 'bold',
    fontFamily: FontsComponent.bold,
    color: Colors.black,
  },
  nowActive: {
    fontFamily: FontsComponent.bold,
    fontWeight: '700',
    fontSize: 20,
    color: Colors.black,
  },
  heading2Vw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 24,
  },
  activeImage: {
    width: 80,
    height: 80,
    margin: 5,
  },
  mentor: {
    width: 60,
    height: 60,
  },
  name: {
    fontFamily: FontsComponent.bold,
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  discription: {
    fontFamily: FontsComponent.medium,
    fontSize: 14,
    color: '#616161',
    fontWeight: '500',
  },
  circle: {
    height: 25,
    width: 25,
    backgroundColor: Colors.orange,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  mentors: {
    marginHorizontal: 24,
  },
});
