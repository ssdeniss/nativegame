import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export const Menu = ({
  setPlayMusic,
  playMusic,
  setMusicTest,
  clickSimulate,
  clickEffect,
  setClickEffect,
}) => {
  const navigation = useNavigation();
  const ButtonPress = (nav) => {
    clickSimulate();
    navigation.navigate(nav, {
      setPlayMusic: setPlayMusic,
      playMusic: playMusic,
      clickSimulate: clickSimulate,
      setMusicTest: setMusicTest,
      clickEffect: clickEffect,
      setClickEffect: setClickEffect,
    });
  };
  return (
    <MenuList>
      <TouchableOpacity>
        <MenuItem onPress={() => ButtonPress("Game")}>Play</MenuItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <MenuItem onPress={() => ButtonPress("Settings")}>Settings</MenuItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <MenuItem onPress={() => ButtonPress("Music")}>Music</MenuItem>
      </TouchableOpacity>
    </MenuList>
  );
};
const MenuList = styled.View``;
const MenuItem = styled.Text`
  font-family: "Game";
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;
