import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

export const MenuPopup = ({
  setRunning,
  gameEngine,
  navigation,
  setMenuComponent,
  entities,
}) => {
  return (
    <MapPopup style={{ flexDirection: "row", marginTop: 40 }}>
      <ClosePopupContainer
        onPress={() => {
          setMenuComponent(false);
        }}
      >
        <ClosePopup source={require("../../assets/icons/close.png")} />
      </ClosePopupContainer>

      <PopupContainer>
        <MenuTitle>Menu</MenuTitle>
        <PopupItem
          onPress={() => {
            setRunning(true);
            gameEngine.swap(entities());
          }}
        >
          <Image
            style={{
              fontWeight: "bold",
              color: "white",
              width: 40,
              height: 40,
            }}
            source={require("../../assets/icons/restart.png")}
          />
        </PopupItem>
        <PopupItem
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            style={{
              fontWeight: "bold",
              color: "white",
              width: 40,
              height: 40,
            }}
            source={require("../../assets/icons/home.png")}
          />
        </PopupItem>
        <PopupItem
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            style={{
              fontWeight: "bold",
              color: "white",
              width: 40,
              height: 40,
            }}
            source={require("../../assets/icons/musicWhite.png")}
          />
        </PopupItem>
        <PopupItem
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            style={{
              fontWeight: "bold",
              color: "white",
              width: 40,
              height: 40,
            }}
            source={require("../../assets/icons/soundWhite.png")}
          />
        </PopupItem>
      </PopupContainer>
    </MapPopup>
  );
};

const MapPopup = styled.View`
  width: 400px;
  height: 300px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;
const PopupContainer = styled.View`
  width: 200px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const PopupItem = styled.TouchableOpacity`
  background-color: black;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 0 20px 20px 0;
`;
const MenuTitle = styled.Text`
  font-family: "Game";
  font-size: 30px;
  margin-bottom: 20px;
`;
const ClosePopup = styled.Image`
  width: 20px;
  height: 20px;
`;
const ClosePopupContainer = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
`;
