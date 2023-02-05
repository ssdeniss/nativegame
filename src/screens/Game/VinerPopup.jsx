import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

export const VinerPopup = ({
  setRunning,
  gameEngine,
  navigation,
  team1Won,
  entities,
}) => {
  return (
    <MapPopup>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 999,
        }}
      >
        <WinText>
          {team1Won ? "Gainile au castigat" : "Viermii au castigat"}
        </WinText>
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              paddingHorizontal: 30,
              paddingVertical: 10,
              marginRight: 40,
            }}
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
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
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
          </TouchableOpacity>
        </View>
      </View>
    </MapPopup>
  );
};

const MapPopup = styled.View`
  width: 600px;
  height: 300px;
  background-color: #fff;
`;

const WinText = styled.Text`
  font-family: "Game";
  font-size: 30;
`;
