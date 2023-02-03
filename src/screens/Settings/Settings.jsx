import styled from "styled-components/native";
import { BackBtn } from "../../components/BackBtn";
import { FontStyle } from "../../assets/fonts/Font";
import { useState } from "react";
import { View } from "react-native";
// import { sprite } from "../../assets/icons/sprite.svg";

export const Settings = () => {
  const [sound, setSound] = useState(true);
  const [music, setMusic] = useState(true);
  FontStyle();
  return (
    <Container>
      <BackBtn />
      <SettingsContainer>
        <SettingTitles>Settings</SettingTitles>
        <View>
          <SettingItems>Sound</SettingItems>
          <SettingsImage />
        </View>
        <View>
          <SettingItems>Music</SettingItems>
        </View>
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
`;

const SettingsImage = styled.Image`
  margin-right: 10px;
`;
