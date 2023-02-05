import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const MapPopupComponent = ({
  setSelectedMap,
  selectedMap,
  navigation,
  handleToWeapon,
}) => {
  return (
    <MapPopup>
      <MapContainers>
        <TouchableOpacity onPress={() => setSelectedMap(1)}>
          <MapImage
            source={require("../../assets/images/background1.jpg")}
            style={
              selectedMap === 1
                ? { borderWidth: 2, borderColor: "#000" }
                : { borderWidth: 0, borderColor: "transparent" }
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedMap(2)}>
          <MapImage
            source={require("../../assets/images/background2.jpg")}
            style={
              selectedMap === 2
                ? { borderWidth: 2, borderColor: "#000" }
                : { borderWidth: 0, borderColor: "transparent" }
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedMap(3)}>
          <MapImage
            source={require("../../assets/images/background3.jpg")}
            style={
              selectedMap === 3
                ? { borderWidth: 2, borderColor: "#000" }
                : { borderWidth: 0, borderColor: "transparent" }
            }
          />
        </TouchableOpacity>
      </MapContainers>
      {selectedMap ? (
        <NextBtn onPress={() => handleToWeapon()}>
          <TextBtn>Next</TextBtn>
        </NextBtn>
      ) : (
        <NextDisabled disabled={!selectedMap}>
          <TextBtn>Next</TextBtn>
        </NextDisabled>
      )}

      <BacktBtn
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Image
          style={{
            fontWeight: "bold",
            color: "white",
            width: 20,
            height: 20,
          }}
          source={require("../../assets/icons/home.png")}
        />
      </BacktBtn>
    </MapPopup>
  );
};

const NextBtn = styled.TouchableOpacity`
  width: 100px;
  background-color: #000;
  color: #fff;
  height: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
const NextDisabled = styled.TouchableOpacity`
  width: 100px;
  background-color: #000;
  color: #fff;
  height: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: 10px;
  opacity: 0.5;
`;

const BacktBtn = styled.TouchableOpacity`
  width: 100px;
  background-color: #000;
  color: #fff;
  height: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10px;
  bottom: 10px;
`;

const MapContainers = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 500px;
  flex-wrap: wrap;
  margin: 30px auto;
  gap: 20px;
`;

const MapImage = styled.Image`
  width: 200px;
  height: 100px;
  margin-bottom: 20px;
  margin-right: 20px;
`;
const MapPopup = styled.View`
  width: 600px;
  height: 300px;
  background-color: #fff;
`;
const TextBtn = styled.Text`
  color: #fff;
  font-family: "Game";
  font-size: 12px;
`;
