import React from "react";
import { Text, View } from "react-native";
import { Menu } from "../../components/Menu/Menu";
import styled from "styled-components/native";

export const Home = () => {
  return (
    <HomeContainer>
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
