import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

export const Menu = () => {
  const navigation = useNavigation();
  return (
    <MenuList>
      <MenuItem onPress={() => navigation.navigate("Game")}>Play</MenuItem>
      <MenuItem onPress={() => navigation.navigate("Settings")}>
        Settings
      </MenuItem>
      <MenuItem onPress={() => navigation.navigate("Music")}>Music</MenuItem>
    </MenuList>
  );
};
const MenuList = styled.View``;
const MenuItem = styled.Text`
  margin-bottom: 10px;
  font-size: 18px;
`;
