import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { FontStyle } from "../../assets/fonts/Font";
import { TouchableOpacity } from "react-native";

export const Menu = () => {
  FontStyle();
  const navigation = useNavigation();
  return (
    <MenuList>
      <TouchableOpacity>
        <MenuItem onPress={() => navigation.navigate("Game")}>Play</MenuItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <MenuItem onPress={() => navigation.navigate("Settings")}>
          Settings
        </MenuItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <MenuItem onPress={() => navigation.navigate("Music")}>Music</MenuItem>
      </TouchableOpacity>
    </MenuList>
  );
};
const MenuList = styled.View``;
const MenuItem = styled.Text`
  font-family: "Game";
  margin-bottom: 15px;
  font-size: 18px;
  text-align: center;
`;
