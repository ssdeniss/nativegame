import React, { useEffect, useState } from "react";
import { Menu } from "../../components/Menu/Menu";
import styled from "styled-components/native";
import { FontStyle } from "../../assets/fonts/Font";
import { useNavigation } from "@react-navigation/native";
import { Button, StatusBar } from "react-native";
import { Audio } from "expo-av";

export const Home = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  FontStyle();
  const [sound, setSound] = useState();
  const [playMusic, setPlayMusic] = useState(true);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../sounds/music/music.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }
  async function stopSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../sounds/music/music.mp3")
    );
    setSound(sound);
    await sound.stopAsync;
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  useEffect(() => {
    if (playMusic) {
      playSound();
    } else {
      stopSound();
    }
  }, [playMusic]);
  return (
    <HomeContainer>
      <StatusBar hidden />
      <HomeTitle>WORMS</HomeTitle>
      <Menu setPlayMusic={setPlayMusic} playMusic={playMusic} />
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
