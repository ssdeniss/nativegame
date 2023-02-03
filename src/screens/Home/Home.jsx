import React, { useEffect } from "react";
import { Menu } from "../../components/Menu/Menu";
import styled from "styled-components/native";
import { FontStyle } from "../../assets/fonts/Font";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

export const Home = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  FontStyle();
  return (
    <HomeContainer>
      <StatusBar hidden />
      <HomeTitle>WORMS</HomeTitle>
      <Menu />
    </HomeContainer>
  );
};

const HomeContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`;
const HomeTitle = styled.Text`
  font-size: 48px;
  font-family: "Game";
  margin-bottom: 30px;
`;
