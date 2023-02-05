import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { BackBtn } from "../../components/BackBtn";

export const BtDevices = (props) => {
  const clickSimulate = props.route.params.clickSimulate;
  return (
    <Container>
      <BackBtn clickSimulate={clickSimulate} />
      <Text>BtDevices</Text>
    </Container>
  );
};

const Container = styled.View`
  padding: 20px 10px 10px 10px;
`;
