import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";

export const BackBtn = ({ clickSimulate }) => {
  const navigation = useNavigation();
  const homeClick = (val) => {
    clickSimulate();
    navigation.navigate(val);
  };
  return (
    <BackContainer>
      <ArrowImage source={require("../assets/icons/arrow.png")} />
      <Text
        style={{ fontFamily: "Game", marginBottom: 20 }}
        onPress={() => homeClick("Home")}
      >
        BACK
      </Text>
    </BackContainer>
  );
};

const BackContainer = styled.View`
  flex-direction: row;
`;

const ArrowImage = styled.Image`
  transform: rotate(180deg);
  width: 15px;
  height: 15px;
  margin-right: 10px;
  margin-top: 2px;
`;
