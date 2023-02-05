import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

export const WeaponPopup = ({
  handleToMap,
  wormWeapon,
  setWormWeapon,
  birdWeapon,
  setBirdWeapon,
  closeAllPopups,
}) => {
  return (
    <MapPopup>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <WeaponsContainer>
          <WeaponTitle>Gaina</WeaponTitle>
          <WeaponsSelect>
            <Weapon
              onPress={() => setBirdWeapon(1)}
              style={
                birdWeapon === 1
                  ? { borderWidth: 1, borderColor: "green" }
                  : { borderWidth: 1, borderColor: "#000" }
              }
            >
              <SwordImage source={require("../../assets/weapons/catana.png")} />
            </Weapon>
            <Weapon
              onPress={() => setBirdWeapon(2)}
              style={
                birdWeapon === 2
                  ? { borderWidth: 1, borderColor: "green" }
                  : { borderWidth: 1, borderColor: "#000" }
              }
            >
              <IceImage source={require("../../assets/weapons/iceSword.png")} />
            </Weapon>
            <Weapon
              onPress={() => setBirdWeapon(3)}
              style={
                birdWeapon === 3
                  ? { borderWidth: 1, borderColor: "green" }
                  : { borderWidth: 1, borderColor: "#000" }
              }
            >
              <WeaponImage source={require("../../assets/weapons/axe.png")} />
            </Weapon>
            <Weapon
              onPress={() => setBirdWeapon(4)}
              style={
                birdWeapon === 4
                  ? { borderWidth: 1, borderColor: "green" }
                  : { borderWidth: 1, borderColor: "#000" }
              }
            >
              <WeaponImage
                source={require("../../assets/weapons/hammer.png")}
              />
            </Weapon>
          </WeaponsSelect>
        </WeaponsContainer>
        <WeaponsContainer>
          <WeaponTitle>Viermele</WeaponTitle>
          <WeaponsSelect>
            <Weapon
              onPress={() => setWormWeapon(1)}
              style={
                wormWeapon === 1
                  ? { borderWidth: 1, borderColor: "green" }
                  : { borderWidth: 1, borderColor: "#000" }
              }
            >
              <SwordImage source={require("../../assets/weapons/catana.png")} />
            </Weapon>
            <Weapon
              onPress={() => setWormWeapon(2)}
              style={
                wormWeapon === 2
                  ? { borderWidth: 1, borderColor: "green" }
                  : { borderWidth: 1, borderColor: "#000" }
              }
            >
              <IceImage source={require("../../assets/weapons/iceSword.png")} />
            </Weapon>
            <Weapon
              onPress={() => setWormWeapon(3)}
              style={
                wormWeapon === 3
                  ? { borderWidth: 1, borderColor: "green" }
                  : { borderWidth: 1, borderColor: "#000" }
              }
            >
              <WeaponImage source={require("../../assets/weapons/axe.png")} />
            </Weapon>
            <Weapon
              onPress={() => setWormWeapon(4)}
              style={
                wormWeapon === 4
                  ? { borderWidth: 1, borderColor: "green" }
                  : { borderWidth: 1, borderColor: "#000" }
              }
            >
              <WeaponImage
                source={require("../../assets/weapons/hammer.png")}
              />
            </Weapon>
          </WeaponsSelect>
        </WeaponsContainer>
      </View>
      {wormWeapon && birdWeapon ? (
        <NextBtn onPress={() => closeAllPopups()}>
          <TextBtn>Start</TextBtn>
        </NextBtn>
      ) : (
        <NextDisabled disabled={!wormWeapon && !birdWeapon}>
          <TextBtn>Start</TextBtn>
        </NextDisabled>
      )}
      <BacktBtn onPress={() => handleToMap()}>
        <TextBtn>Back</TextBtn>
      </BacktBtn>
    </MapPopup>
  );
};
const MapPopup = styled.View`
  width: 600px;
  height: 300px;
  background-color: #fff;
`;
const WeaponsContainer = styled.View``;
const WeaponsSelect = styled.View`
  flex-direction: row;
  width: 200px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 40px;
`;
const WeaponTitle = styled.Text`
  font-family: "Game";
  font-size: 14px;
  text-align: center;
  margin: 20px 0 20px 0;
`;
const Weapon = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-width: 1px;
  border-color: #000;
  margin-right: 10px;
  margin-bottom: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WeaponImage = styled.Image`
  width: 60px;
  height: 60px;
`;
const IceImage = styled.Image`
  width: 25px;
  height: 60px;
`;
const SwordImage = styled.Image`
  width: 15px;
  height: 70px;
`;
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

const TextBtn = styled.Text`
  color: #fff;
  font-family: "Game";
  font-size: 12px;
`;
