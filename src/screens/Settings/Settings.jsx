import styled from "styled-components/native";
import { BackBtn } from "../../components/BackBtn";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

export const Settings = (props) => {
  const [sound, setSound] = useState(props?.route?.params?.clickEffect);
  const [music, setMusic] = useState(props?.route?.params?.playMusic);
  const clickSimulate = props.route.params.clickSimulate;
  const handleSound = () => {
    if (sound) {
      props?.route?.params?.setClickEffect(false);
      setSound(false);
    } else {
      props?.route?.params?.setClickEffect(true);
      setSound(true);
      clickSimulate();
    }
  };
  const handleMusic = () => {
    if (music) {
      props?.route?.params?.setPlayMusic(false);
      setMusic(false);
    } else {
      props?.route?.params?.setPlayMusic(true);
      setMusic(true);
    }
    if (sound) {
      clickSimulate();
    }
  };

  return (
    <SettingsContainerComponent>
      <MenuBackground
        source={require("../../assets/images/backgroundMenu.png")}
      />
      <Container>
        <BackBtn clickSimulate={clickSimulate} />
        <SettingsContainer>
          <SettingTitles>Settings</SettingTitles>
          <TouchableOpacity
            style={{ flexDirection: "row", position: "relative" }}
            onPress={() => handleSound()}
          >
            <SettingItems>Sound</SettingItems>

            <SettingsImage source={require("../../assets/icons/sound.png")} />
            {!sound && <SettingsImageAfter />}
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", position: "relative" }}
            onPress={() => handleMusic()}
          >
            <SettingItems>Music</SettingItems>
            <SettingsImage source={require("../../assets/icons/music.png")} />
            {!music && <SettingsImageAfterMusic />}
          </TouchableOpacity>
        </SettingsContainer>
      </Container>
    </SettingsContainerComponent>
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
const MenuBackground = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 10px;
  top: 0;
`;

const SettingsContainerComponent = styled.View`
  width: 100%;
  height: 100%;
`;
