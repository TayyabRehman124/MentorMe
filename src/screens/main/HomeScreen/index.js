import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useCallback, useState, useMemo, useRef} from 'react';
import {GestureHandlerRootView, TextInput} from 'react-native-gesture-handler';
import FontsComponent from '../../../components/FontsComponent';
import Colors from '../../../components/Colors';
import LinearGradient from 'react-native-linear-gradient';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  TouchableOpacity,
} from '@gorhom/bottom-sheet';
import DoubleSlider from '../../../components/DoubleSlider';
import {useSelector} from 'react-redux'; //........to receive redux data...........

const HomeScreen = () => {
  const user = useSelector(state => state.user.user); //....to receive redux data.......
  console.log('User data in HomeScreen:', user); // Should show the user data

  const [bottomSheetIndex, setBottomSheetIndex] = useState(-1);
  const toggleBottomSheet = () => {
    setBottomSheetIndex(prevIndex => (prevIndex === -1 ? 2 : -1)); // Toggle between closed (-1) and open (2)
  };
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
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedEndButton, setSelectedEndButton] = useState(null);
  const MIN_DEFAULT = 10;
  const MAX_DEFAULT = 100;
  const [minValue, setMinValue] = useState(MIN_DEFAULT);
  const [maxValue, setMaxValue] = useState(MAX_DEFAULT);
  // ....................bottom sheet ................
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
  //...........................................
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={2}
      />
    ),
    [],
  );
  return (
    <GestureHandlerRootView style={styles.screenVw}>
      <View style={styles.contentVw}>
        {/* ..............................header.................... */}
        <View style={styles.headerVw}>
          <View style={styles.headerLeftVw}>
            <Image
              source={
                user.photo
                  ? {uri: user.photo}
                  : require('../../../assets/userDumy.png')
              }
              style={styles.profilePic}
            />
            <View style={styles.headerTextVw}>
              <Text style={styles.headerText1}>Good Morning 👋</Text>
              <Text style={styles.headerText2}>{user?.name}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.headerRightVw}
            onPress={toggleBottomSheet}>
            <Image source={require('../../../assets/Filter.png')} />
          </TouchableOpacity>
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

        {/* ..............BottomSheet.................. */}

        {bottomSheetIndex >= 0 && (
          <BottomSheet
            index={2} // Start at the first snap point, which is 50%
            snapPoints={snapPoints} // Pass the array with one snap point
            // onChange={() => setBottomSheetVisible(false)} // Close when dragging
            enablePanDownToClose={true}
            backdropComponent={renderBackdrop}
            onChange={index => setBottomSheetIndex(index)} // Track changes to the BottomSheet index
            // onChange={handleSheetChanges}
            backgroundStyle={{borderRadius: 35}}>
            <BottomSheetView style={styles.bottomSheetContainer}>
              <Text style={styles.title}>Filter</Text>
              <View style={styles.line}></View>
              <View style={styles.genderVw}>
                {/* ...........Gender................... */}
                <Text style={styles.subTitle}>Gender</Text>
                <View style={styles.buttonsVw}>
                  {['Male', 'Female', 'Random'].map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={
                        selectedGender === index
                          ? styles.buttonActive
                          : styles.buttonInactive
                      }
                      onPress={() => setSelectedGender(index)}>
                      <Text
                        style={
                          selectedGender === index
                            ? styles.buttonTextActive
                            : styles.buttonTextInactive
                        }>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              {/* ..............Role.............. */}
              <View style={styles.genderVw}>
                <Text style={styles.subTitle}>Role</Text>
                <View style={styles.buttonsVw}>
                  {['Mentor', 'Mentee', 'Random'].map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={
                        selectedRole === index
                          ? styles.buttonActive
                          : styles.buttonInactive
                      }
                      onPress={() => setSelectedRole(index)}>
                      <Text
                        style={
                          selectedRole === index
                            ? styles.buttonTextActive
                            : styles.buttonTextInactive
                        }>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              {/* Age */}
              <View style={styles.genderVw}>
                <Text style={[styles.subTitle, {marginBottom: 10}]}>Age</Text>
                {/* .................RangeSlider.......................... */}
                <DoubleSlider
                  sliderWidth={350}
                  min={MIN_DEFAULT}
                  max={MAX_DEFAULT}
                  step={1}
                  onValueChange={range => {
                    setMinValue(range.min);
                    setMaxValue(range.max);
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <Text>Min Value: ${minValue}</Text>

                  <Text>Max Value: ${maxValue}</Text>
                </View>
                {/* .............RangeSlider end........... */}
              </View>
              {/* ............Location................ */}
              <View style={styles.genderVw}>
                <Text style={styles.subTitle}>Location</Text>
                <View style={styles.inputVw}>
                  <TextInput
                    style={styles.input}
                    placeholder="United States"
                    placeholderTextColor="#666"
                  />
                  <Image
                    source={require('../../../assets/Location.png')}
                    style={styles.locationIcon}
                  />
                </View>
              </View>
              <View style={styles.line}></View>
              {/* ..............buttons.............. */}
              <View style={styles.endButtonsVw}>
                {['Reset', 'Apply'].map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={
                      selectedEndButton === index
                        ? styles.endButtonSelected
                        : styles.endButtonNonSelected
                    }
                    onPress={() => setSelectedEndButton(index)}>
                    <Text
                      style={
                        selectedEndButton === index
                          ? styles.buttonTextActive
                          : styles.buttonTextInactive
                      }>
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              {/* ............................ */}
            </BottomSheetView>
          </BottomSheet>
        )}
        {/* ................................ */}
      </View>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenVw: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentVw: {
    // marginTop: 20,
  },
  headerVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
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
    borderRadius: 50,
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
  bottomSheetContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 25,
    marginHorizontal: 10,
    borderRadius: 35,
  },
  title: {
    fontFamily: FontsComponent.bold,
    fontSize: 24,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 10,
  },
  genderVw: {
    width: '90%',
    marginVertical: 10,
  },
  subTitle: {
    fontFamily: FontsComponent.bold,
    fontSize: 20,
    fontWeight: '700',
    color: Colors.black,
  },
  buttonsVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonActive: {
    height: 45,
    width: 110,
    borderRadius: 100,
    backgroundColor: Colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextActive: {
    fontFamily: FontsComponent.bold,
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  buttonInactive: {
    height: 45,
    width: 110,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextInactive: {
    fontFamily: FontsComponent.bold,
    fontSize: 18,
    fontWeight: '700',
    color: Colors.orange,
  },
  line: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    width: '80%',
  },
  endButtonSelected: {
    width: 180,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.orange,
  },
  endButtonNonSelected: {
    width: 180,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#EEEEEE',
  },
  endButtonsVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  inputVw: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 16,
    height: 55,
    padding: 10,
  },
  input: {
    width: 200,
    height: 50,
    paddingLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    justifyContent: 'flex-end', // Position BottomSheet at the bottom
  },
});
