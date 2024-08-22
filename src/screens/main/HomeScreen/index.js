import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import FontsComponent from '../../../components/FontsComponent';
import Colors from '../../../components/Colors';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  const Slides = [
    {
      id: '1',
      image: require('../../../assets/mentor.png'),
    },
    {
      id: '2',

      image: require('../../../assets/brian-feature.png'),
    },
    {
      id: '3',

      image: require('../../../assets/mentor.png'),
    },
    {
      id: '4',

      image: require('../../../assets/brian-feature.png'),
    },
    {
      id: '5',

      image: require('../../../assets/mentor.png'),
    },
  ];
  const {height, width} = Dimensions.get('window');
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={styles.screenVw}>
      <View style={styles.contentVw}>
        {/* ..............................header.................... */}
        <View style={styles.headerVw}>
          <View style={styles.headerLeftVw}>
            <Image
              source={require('../../../assets/profilePic.png')}
              style={styles.profilePic}
            />
            <View style={styles.headerTextVw}>
              <Text style={styles.headerText1}>Good Morning 👋</Text>
              <Text style={styles.headerText2}>Shandontoliver</Text>
            </View>
          </View>
          <View style={styles.headerRightVw}>
            <Image source={require('../../../assets/Filter.png')} />
          </View>
        </View>

        {/* ...........Slider........... */}
        <View style={[styles.flatListContainer]}>
          <FlatList
            data={Slides}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={e => {
              const x = e.nativeEvent.contentOffset.x;
              setCurrentIndex(Math.round(x / width));
            }}
            renderItem={({item}) => {
              return (
                <View
                  style={[
                    styles.slidesVw,
                    {height: height / 1.2, width: width},
                  ]}>
                  <ImageBackground source={item.image} style={styles.image}>
                    {/* ........................map..................... */}
                    <View style={styles.map}>
                      {Slides.map((_, index) => (
                        <View
                          key={index}
                          style={{
                            height: 8,
                            width: currentIndex === index ? 30 : 8,
                            borderRadius: 5,
                            backgroundColor:
                              currentIndex === index
                                ? Colors.orange
                                : '#E0E0E0',
                            marginHorizontal: 5,
                          }}
                        />
                      ))}
                    </View>
                    {/* Gradient overlay */}
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
                  </ImageBackground>
                </View>
              );
            }}
          />
        </View>

        {/* ................................ */}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenVw: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentVw: {
    marginTop: 20,
  },
  headerVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  headerRightVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeftVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profilePic: {
    height: 48,
    width: 48,
  },
  headerTextVw: {
    marginLeft: 10,
  },
  headerText1: {
    fontFamily: FontsComponent.regular,
    fontSize: 16,
    fontWeight: '400',
    color: '#757575',
  },
  headerText2: {
    fontFamily: FontsComponent.bold,
    fontSize: 20,
    fontWeight: '700',
    color: Colors.black,
  },
  flatListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slidesVw: {
    paddingHorizontal: 20,
  },
  image: {
    height: 625,
    justifyContent: 'space-between', // This keeps the gradient at the bottom of the image
    borderRadius: 50,
    overflow: 'hidden',
  },
  gradientContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%', // Adjust to how much gradient you want
  },
  map: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
});
