import styled from "styled-components/native";
import { BackBtn } from "../../components/BackBtn";
import { FontStyle } from "../../assets/fonts/Font";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

export const Settings = () => {
  const [sound, setSound] = useState(true);
  const [music, setMusic] = useState(true);

  const handleSound = () => {
    setSound(!sound);
  };
  const handleMusic = () => {
    setMusic(!music);
  };
  FontStyle();
  return (
    <Container>
      <BackBtn />
      <SettingsContainer>
        <SettingTitles>Settings</SettingTitles>
        <TouchableOpacity
          style={{ flexDirection: "row", position: "relative" }}
          onPress={() => handleSound()}
        >
          <SettingItems>Sound</SettingItems>

          <SettingsImage source={require("../../assets/icons/sound.png")} />
          {sound && <SettingsImageAfter />}
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row", position: "relative" }}
          onPress={() => handleMusic()}
        >
          <SettingItems>Music</SettingItems>
          <SettingsImage source={require("../../assets/icons/music.png")} />
          {music && <SettingsImageAfterMusic />}
        </TouchableOpacity>
      </SettingsContainer>
    </Container>
  );
};

const Container = styled.View`
  padding: 20px 10px 10px 10px;
`;
const SettingTitles = styled.Text`
  font-size: 36px;
  font-family: "Game";
  margin-bottom: 30px;
`;
const SettingsContainer = styled.View`
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  margin-top: 80px;
`;
const SettingItems = styled.Text`
  font-family: "Game";
  margin-bottom: 15px;
  font-size: 18px;
  text-align: center;
  margin-right: 10px;
`;

const SettingsImage = styled.Image`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;
const SettingsImageAfter = styled.Image`
  width: 2px;
  height: 25px;
  background-color: #000;
  transform: rotate(45deg);
  position: absolute;
  right: 19px;
  top: -2px;
`;
const SettingsImageAfterMusic = styled.Image`
  width: 2px;
  height: 30px;
  background-color: #000;
  transform: rotate(45deg);
  position: absolute;
  right: 18px;
  top: -4px;
`;
