import styled from "styled-components/native";
import { BackBtn } from "../../components/BackBtn";
import { ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";

export const Music = (props) => {
  const clickSimulate = props.route.params.clickSimulate;
  const musicLength = [];
  const [musicbtn, setMusic] = useState(props?.route?.params?.playMusic);
  for (let i = 0; i < 5; i++) {
    musicLength.push(i);
  }
  const HandleMusic = (music) => {
    props?.route?.params.setMusicTest(music);
    clickSimulate();

    props?.route?.params?.setPlayMusic(true);
    setMusic(true);
  };

  return (
    <ScrollView>
      <Container>
        <BackBtn clickSimulate={clickSimulate} />
        {musicLength.map((music) => (
          <TouchableOpacity key={music} onPress={() => HandleMusic(music)}>
            <MusicItem>Song number {music + 1}</MusicItem>
          </TouchableOpacity>
        ))}
      </Container>
    </ScrollView>
  );
};

const Container = styled.View`
  padding: 20px 10px 10px 10px;
`;

const MusicList = styled.View``;
const MusicItem = styled.Text`
  width: 100%;
  padding: 20px 10px;
  border-width: 1px;
  border-color: #616164;
  font-size: 24px;
  font-family: "Game";
`;
