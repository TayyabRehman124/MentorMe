import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Colors from '../../../components/Colors';
import FontsComponent from '../../../components/FontsComponent';
import LinearGradient from 'react-native-linear-gradient'; // Ensure LinearGradient is imported
import MatchScreen2 from '../MatchScreen2';

const MatchScreen = props => {
  const newMatch = [
    {
      id: '1',
      image: require('../../../assets/Images/BrianChesky.png'),
      name: 'Brian Chesky',
      status: 'Co-founder and CEO of Airbnb',
    },
    {
      id: '2',
      image: require('../../../assets/Images/MarryBarra.png'),
      name: 'Marry Barra',
      status: 'CEO of General Motors.',
    },
    {
      id: '3',
      image: require('../../../assets/Images/WarrenBuffett.png'),
      name: 'Warren Buffett',
      status: 'CEO of General Tyres.',
    },
  ];
  const yourMatch = [
    {
      id: '1',
      image: require('../../../assets/Images/TimCook.png'),
      name: 'Tim Cook',
      status: 'Mentor',
    },

    {
      id: '2',
      image: require('../../../assets/Riana.png'),
      name: 'Riana',
      status: 'Mentor',
    },
    {
      id: '3',
      image: require('../../../assets/Images/TimCook.png'),
      name: 'Tim Cook',
      status: 'Mentor',
    },

    {
      id: '4',
      image: require('../../../assets/Riana.png'),
      name: 'Riana',
      status: 'Mentor',
    },
  ];
  return (
    <View style={styles.screenVw}>
      <View style={styles.contentVw}>
        {/* .............................heading........................ */}
        <View style={styles.headerVw}>
          <View style={styles.headerLeftVw}>
            <Text style={styles.heading}>Match</Text>
          </View>
          <View style={styles.headerRightVw}>
            <Feather name={'search'} size={28} />
            <Ionicons name={'ellipsis-horizontal-circle-outline'} size={28} />
          </View>
        </View>
        {/* ...................New Match.................................. */}
        <View style={styles.heading2Vw}>
          <Text style={styles.nowActive}>New Match</Text>
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
        {/* ................New Match...image scroll.................................. */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContentStyle}>
          {newMatch.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.newMatchContainer}
              onPress={() => props.navigation.navigate(MatchScreen2)}>
              <Image source={item.image} style={styles.newMatchImage} />
              <View style={styles.gradientOverlay}>
                <LinearGradient
                  colors={[
                    'rgba(238, 110, 23, 0)', // Transparent color at the top
                    'rgba(238, 110, 23, 0.55)', // Semi-transparent
                    '#EE6E17', // Solid orange at the bottom
                  ]}
                  start={{x: 0.5, y: 0}} // Start from the top center
                  end={{x: 0.5, y: 1}} // End at the bottom center
                  style={styles.gradientContainer}
                />
                <Text style={styles.newMatchName}>{item.name}</Text>
                <Text style={styles.newMatchStatus}>{item.status}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* ...................Your Match.................................. */}
        <View style={styles.heading2Vw}>
          <Text style={styles.nowActive}>Your Match</Text>
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
        {/* ...............Your Match....image scroll.................................. */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContentStyle}>
          {yourMatch.map(item => (
            <TouchableOpacity style={styles.yourMatchVw}>
              <Image source={item.image} style={styles.yourMatchImage} />
              <Text style={styles.yourMatchName}>{item.name}</Text>
              <Text style={styles.yourMatchStatus}>{item.status}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default MatchScreen;

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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: FontsComponent.bold,
    color: Colors.black,
  },
  headerLeftVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 130,
  },
  heading2Vw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 24,
  },
  nowActive: {
    fontFamily: FontsComponent.bold,
    fontWeight: '700',
    fontSize: 20,
    color: Colors.black,
  },
  scrollContentStyle: {
    flexDirection: 'row', // Ensures the content inside the ScrollView aligns horizontally
  },
  newMatchImage: {
    width: 230,
    height: 300,
    borderRadius: 35,
  },
  newMatchName: {
    fontFamily: FontsComponent.bold,
    fontWeight: '700',
    fontSize: 18,
    color: Colors.white,
    marginBottom: 5,
  },
  newMatchStatus: {
    fontFamily: FontsComponent.semiBold,
    fontWeight: '600',
    fontSize: 14,
    color: '#C1C1C1',
  },
  yourMatchImage: {
    width: 140,
    height: 180,
    margin: 5,
    borderRadius: 24,
  },
  yourMatchName: {
    fontFamily: FontsComponent.bold,
    fontWeight: '700',
    fontSize: 18,
    color: Colors.black,
  },
  yourMatchStatus: {
    fontFamily: FontsComponent.semiBold,
    fontWeight: '600',
    fontSize: 14,
    color: '#C1C1C1',
  },
  yourMatchVw: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%', // This ensures the gradient covers the image height
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  gradientContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%', // Adjust to how much gradient you want
  },
  newMatchContainer: {
    margin: 5,
    borderRadius: 35,
    overflow: 'hidden', // Ensure the gradient stays within the border radius
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
