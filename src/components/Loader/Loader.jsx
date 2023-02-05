import React from "react";
import { Animated, Easing } from "react-native";
import styled from "styled-components";

export const Loader = () => {
  const spinValue = new Animated.Value(0);

  Animated.timing(spinValue, {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();
  return (
    <LoaderContainer>
      <Animated.Image
        style={{ transform: [{ rotate: spin }], width: 150, height: 150 }}
        source={require("../../assets/icons/loader.png")}
      />
    </LoaderContainer>
  );
};

const LoaderContainer = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LoaderImage = styled.Image`
  width: 150px;
  height: 150px;
`;
