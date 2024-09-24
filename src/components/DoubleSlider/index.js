import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Colors from '../Colors';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useAnimatedProps,
  runOnJS,
} from 'react-native-reanimated';
const DoubleSlider = ({sliderWidth, min, max, step, onValueChange}) => {
  const position = useSharedValue(0);
  const position2 = useSharedValue(sliderWidth);
  const zIndex = useSharedValue(0);
  const zIndex2 = useSharedValue(0);
  const opacity = useSharedValue(0);
  const opacity2 = useSharedValue(0);
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = position.value;
    },
    onActive: (e, ctx) => {
      opacity.value = 1;
      if (ctx.startX + e.translationX < 0) {
        position.value = 0;
      } else if (ctx.startX + e.translationX > position2.value) {
        position.value = position2.value;
        zIndex.value = 1;
        zIndex2.value = 0;
      } else {
        position.value = ctx.startX + e.translationX;
      }
    },
    onEnd: () => {
      opacity.value = 0;
      runOnJS(onValueChange)({
        min:
          min +
          Math.floor(position.value / (sliderWidth / ((max - min) / step))) *
            step,
        max:
          min +
          Math.floor(position2.value / (sliderWidth / ((max - min) / step))) *
            step,
      });
    },
  });
  // ................................
  const gestureHandler2 = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = position2.value;
    },
    onActive: (e, ctx) => {
      opacity2.value = 1;
      if (ctx.startX + e.translationX > sliderWidth) {
        position2.value = sliderWidth;
      } else if (ctx.startX + e.translationX < position.value) {
        position2.value = position.value;
        zIndex.value = 0;
        zIndex2.value = 1;
      } else {
        position2.value = ctx.startX + e.translationX;
      }
    },
    onEnd: () => {
      opacity2.value = 0;
      runOnJS(onValueChange)({
        min:
          min +
          Math.floor(position.value / (sliderWidth / ((max - min) / step))) *
            step,
        max:
          min +
          Math.floor(position2.value / (sliderWidth / ((max - min) / step))) *
            step,
      });
    },
  });
  //   ............................................
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: position.value}],
    zIndex: zIndex.value,
  }));
  //   .................................
  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{translateX: position2.value}],
    zIndex: zIndex2.value,
  }));
  const opacityStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));
  const opacityStyle2 = useAnimatedStyle(() => ({
    opacity: opacity2.value,
  }));
  const sliderStyle = useAnimatedStyle(() => ({
    transform: [{translateX: position.value}],
    width: position2.value - position.value,
  }));
  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

  //   const minLabalText = useAnimatedProps(() => {
  //     return {
  //       text: `$${
  //         min +
  //         Math.floor(position.value / (sliderWidth / ((max - min) / step))) * step
  //       }`,
  //     };
  //   });
  //   const maxLabalText = useAnimatedProps(() => {
  //     return {
  //       text: `$${
  //         min +
  //         Math.floor(position2.value / (sliderWidth / ((max - min) / step))) *
  //           step
  //       }`,
  //     };
  //   });

  const minLabel = `$${
    min +
    Math.floor(position.value / (sliderWidth / ((max - min) / step))) * step
  }`;

  const maxLabel = `$${
    min +
    Math.floor(position2.value / (sliderWidth / ((max - min) / step))) * step
  }`;
  return (
    <View style={[styles.sliderVw, {width: sliderWidth}]}>
      <View style={[styles.sliderBack, {width: sliderWidth}]} />
      <Animated.View style={[styles.sliderFront, sliderStyle]} />
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.thumb, animatedStyle]}>
          <Animated.View style={[styles.lable, opacityStyle]}>
            {/* <AnimatedTextInput
              style={styles.lableText}
              defaultValue="0"
              animatedProps={minLabalText}
              editable={false}
            /> */}
            <Text style={styles.lableText}>{minLabel}</Text>
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
      <PanGestureHandler onGestureEvent={gestureHandler2}>
        <Animated.View style={[styles.thumb, animatedStyle2]}>
          <Animated.View style={[styles.lable, opacityStyle2]}>
            {/* <AnimatedTextInput
              style={styles.lableText}
              defaultValue="0"
              animatedProps={maxLabalText}
              editable={false}
            /> */}
            <Text style={styles.lableText}>{maxLabel}</Text>
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default DoubleSlider;

const styles = StyleSheet.create({
  sliderVw: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  sliderBack: {
    height: 6,
    backgroundColor: '#EEEEEE',
    borderRadius: 100,
  },
  sliderFront: {
    height: 6,
    backgroundColor: Colors.orange,
    borderRadius: 100,
    position: 'absolute',
  },
  thumb: {
    position: 'absolute',
    left: -10,
    height: 20,
    width: 20,
    borderWidth: 4,
    borderRadius: 100,
    borderColor: Colors.orange,
    backgroundColor: '#FFFFFF',
  },
  lable: {
    position: 'absolute',
    top: -40,
    bottom: 20,
    backgroundColor: Colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  lableText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    width: '100%',
    padding: 5,
  },
});
