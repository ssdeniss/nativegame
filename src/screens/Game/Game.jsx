import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { BackBtn } from "../../components/BackBtn";

export const Game = () => {
  return (
    <Container>
      <BackBtn />
    </Container>
  );
};

const Container = styled.View`
  padding: 20px 10px 10px 10px;
`;
