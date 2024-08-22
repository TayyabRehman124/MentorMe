import {StyleSheet, Animated, View, Dimensions} from 'react-native';
import React, {useState, useRef} from 'react';
import BordingItem from '../../../components/BordingItem';
import Colors from '../../../components/Colors';
import CustomButton from '../../../components/CustomButton';

const BordingScreen = props => {
  const Slides = [
    {
      id: '1',
      title: 'Unlock Your Potential',
      discription:
        "Welcome to Mentor Me, where meaningful connections pave the way for professional growth. Whether you're seeking guidance from experienced mentors or exploring exciting business opportunities, we're here to empower your journey.",
      image: require('../../../assets/bording1.png'),
    },
    {
      id: '2',
      title: 'Your Journey, Your Way',
      discription:
        'Mentor Me believes in the power of unique connections. Customize your profile to highlight your skills, aspirations, and the expertise you seek. Our matching algorithm ensures you find the perfect mentor or business opportunity aligned with your goals.',
      image: require('../../../assets/bording2.png'),
    },
    {
      id: '3',
      title: 'Swipe Towards Success',
      discription:
        'Get ready to swipe into a world of possibilities. Our intuitive swiping feature allows you to effortlessly discover mentors and business opportunities that resonate with your ambitions.',
      image: require('../../../assets/bording3.png'),
    },
  ];

  const {height, width} = Dimensions.get('window');
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < Slides.length) {
      ref.current.scrollToIndex({
        animated: true,
        index: nextIndex,
      });
      setCurrentIndex(nextIndex);
    } else {
      props.navigation.navigate('LoginScreen');
    }
  };

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  return (
    <View style={styles.screenView}>
      <View style={[styles.flatListContainer, {height: height / 1.25}]}>
        <Animated.FlatList
          ref={ref}
          data={Slides}
          renderItem={({item}) => <BordingItem item={item} />}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfig}
          useNativeDriver={false}
          scrollEventThrottle={32}
        />
      </View>
      <View style={styles.map}>
        {Slides.map((_, index) => (
          <View
            key={index}
            style={{
              height: 8,
              width: currentIndex === index ? 30 : 8,
              borderRadius: 5,
              backgroundColor:
                currentIndex === index ? Colors.orange : '#E0E0E0',
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
      <CustomButton
        title={'Next'}
        style={{marginHorizontal: 10, marginBottom: 10, width: '90%'}}
        onPress={handleNext}
      />
    </View>
  );
};

export default BordingScreen;

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  flatListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
});
