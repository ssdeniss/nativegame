import React, { useEffect, useState } from "react";
import { Menu } from "../../components/Menu/Menu";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Audio } from "expo-av";

export const Home = () => {
  const [musicTest, setMusicTest] = useState(2);
  const musicArray = [
    require("../../sounds/music/music0.mp3"),
    require("../../sounds/music/music1.mp3"),
    require("../../sounds/music/music2.mp3"),
    require("../../sounds/music/music3.mp3"),
    require("../../sounds/music/music4.mp3"),
  ];
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const [sound, setSound] = useState();
  const [playMusic, setPlayMusic] = useState(true);
  const [clickEffect, setClickEffect] = useState(true);

  async function playSound() {
    const { sound } = await Audio?.Sound?.createAsync(musicArray[musicTest]);
    setSound(sound);
    await sound?.playAsync();
  }

  async function stopSound() {
    const { sound } = await Audio?.Sound?.createAsync(musicArray[musicTest]);
    setSound(sound);
    await sound?.stopAsync;
  }
  async function playEffect() {
    const { sound } = await Audio?.Sound?.createAsync(
      require("../../sounds/effects/click.mp3")
    );
    await sound?.playAsync();
  }
  async function stopEffect() {
    const { sound } = await Audio?.Sound?.createAsync(
      require("../../sounds/effects/click.mp3")
    );
    await sound?.stopAsync;
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
  }, [playMusic, musicTest]);

  const clickSimulate = () => {
    if (clickEffect) {
      playEffect();
    } else {
      setTimeout(() => {
        stopEffect();
      }, 500);
    }
  };

  return (
    <HomeContainer>
      <MenuBackground
        source={require("../../assets/images/backgroundMenu.png")}
      />
      <StatusBar hidden />
      <HomeTitle>WORMS vs Chicken</HomeTitle>
      <Menu
        setPlayMusic={setPlayMusic}
        playMusic={playMusic}
        setMusicTest={setMusicTest}
        setClickEffect={setClickEffect}
        clickEffect={clickEffect}
        clickSimulate={clickSimulate}
      />
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

const MenuBackground = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 10px;
  top: 0;
`;
