import React, { useEffect } from "react";
import { Menu } from "../../components/Menu/Menu";
import styled from "styled-components/native";
import { FontStyle } from "../../assets/fonts/Font";

export const Home = () => {
  FontStyle();

  return (
    <HomeContainer>
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
  gap: 20px;
  height: 100%;
  width: 100%;
`;
const HomeTitle = styled.Text`
  font-size: 48px;
  font-family: "Game";
  margin-bottom: 30px;
`;
