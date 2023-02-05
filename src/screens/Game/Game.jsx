import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "./entities";
import Physics from "./physics";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { WeaponPopup } from "./WeaponPopup";
import { VinerPopup } from "./VinerPopup";
import { MapPopupComponent } from "./MapPopupComponent";
import { MenuPopup } from "./MenuPopup";

PLAYER = require("./global");

const maps = [
  require("../../assets/images/background1.jpg"),
  require("../../assets/images/background2.jpg"),
  require("../../assets/images/background3.jpg"),
];

export const Game = () => {
  PLAYER.player = "Bird1";
  PLAYER.team = 0;
  const team1 = [{ id: 0, name: "Bird1" }];
  const team2 = [{ id: 0, name: "Worm1" }];

  const [running, setRunning] = useState(false);
  const [team1Won, setTeam1Won] = useState(true);
  const [gameEngine, setGameEngine] = useState(null);
  const [selectedMap, setSelectedMap] = useState(1);
  const [mapPopup, setMapPopup] = useState(true);
  const [weaponPopup, setWeaponPopup] = useState(false);
  const [wormWeapon, setWormWeapon] = useState(null);
  const [birdWeapon, setBirdWeapon] = useState(null);
  const [overlay, setOverlay] = useState(true);
  const [menuComponent, setMenuComponent] = useState(false);
  const navigation = useNavigation();

  const handleToWeapon = () => {
    setMapPopup(false);
    setWeaponPopup(true);
  };
  const handleToMap = () => {
    setMapPopup(true);
    setWeaponPopup(false);
  };
  const closeAllPopups = () => {
    setMapPopup(false);
    setWeaponPopup(false);
    setOverlay(false);
  };

  useEffect(() => {
    setRunning(true);
  }, []);

  useEffect(() => {
    PLAYER.birdweapon = birdWeapon;
    PLAYER.wormweapon = wormWeapon;
  }, [wormWeapon, birdWeapon]);

  const getNextPlayer = (playerName, team) => {
    const playerCode = playerName.match(/\d+/)[0] - 1;
    if (team === 0) {
      if (playerCode < team1.length - 1) {
        return team1[playerCode + 1].name;
      }
      return team1[0].name;
    } else {
      if (playerCode < team1.length - 1) {
        return team2[playerCode + 1].name;
      }
      return team2[0].name;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {overlay ? (
        <PopupOverlay>
          {mapPopup ? (
            <MapPopupComponent
              setSelectedMap={setSelectedMap}
              selectedMap={selectedMap}
              navigation={navigation}
              handleToWeapon={handleToWeapon}
            />
          ) : (
            ""
          )}
          {weaponPopup ? (
            <WeaponPopup
              closeAllPopups={closeAllPopups}
              handleToMap={handleToMap}
              wormWeapon={wormWeapon}
              setWormWeapon={setWormWeapon}
              birdWeapon={birdWeapon}
              setBirdWeapon={setBirdWeapon}
            />
          ) : (
            ""
          )}
        </PopupOverlay>
      ) : (
        ""
      )}

      <Image
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        source={maps[selectedMap - 1]}
      />
      <GameEngine
        ref={(ref) => {
          setGameEngine(ref);
        }}
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={(e) => {
          switch (e.type) {
            case "next_player":
              PLAYER.player = getNextPlayer(PLAYER.player, PLAYER.team);
              break;
            case "Bird":
              setRunning(false);
              setTeam1Won(true);
              break;
            case "Worm":
              setRunning(false);
              setTeam1Won(false);
              break;
          }
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Menu
            onPress={() => {
              setMenuComponent((prev) => !prev);
            }}
          >
            <MenuIcom source={require("../../assets/icons/menu.png")} />
          </Menu>
        </View>

        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Score>0</Score>
          <Score> : </Score>
          <Score>0</Score>
        </View>
      </GameEngine>

      {menuComponent ? (
        <PopupOverlay>
          <MenuPopup
            entities={entities}
            setMenuComponent={setMenuComponent}
            setRunning={setRunning}
            gameEngine={gameEngine}
            navigation={navigation}
          />
        </PopupOverlay>
      ) : (
        ""
      )}

      {!running ? (
        <PopupOverlay>
          <VinerPopup
          entities={entities}
            setRunning={setRunning}
            gameEngine={gameEngine}
            navigation={navigation}
            team1Won={team1Won}
          />
        </PopupOverlay>
      ) : (
        ""
      )}
    </View>
  );
};

const Menu = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  margin: 20px 10px;
  position: absolute;
  z-index: 9999999;
`;

const MenuIcom = styled.Image`
  width: 40px;
  height: 40px;
`;

const Score = styled.Text`
  font-size: 24px;
  font-family: "Game";
`;

const PopupOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;
