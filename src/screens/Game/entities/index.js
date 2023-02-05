//import useState from "react";
import Matter from "matter-js";
import Bird from "../components/Bird";
import Worm from "../components/Worm";
import Floor from "../components/Floor";

import { Dimensions } from "react-native";
import Sword from "../components/Sword";
import LifeBar from "../components/LifeBar";
import { PLAYER } from "../global";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const weapons = [
  require("../../../assets/weapons/axe.png"),
  require("../../../assets/weapons/catana.png"),
  require("../../../assets/weapons/hammer.png"),
  require("../../../assets/weapons/iceSword.png"),
];

export default (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0.4;
  const wormImage = require("../../../assets/worm/worm.png");
  const birdImage = require("../../../assets/chicken/bird.png");
  return {
    physics: { engine, world },

    Bird1: Bird(
      world,
      "red",
      { x: 50, y: 300 },
      { height: 110, width: 60 },
      100,
      birdImage,
      -1,
      1
    ),

    Sword2: Sword(
      world,
      "red",
      { x: 50, y: 300 },
      { height: 30, width: 60 },
      10,
      1
    ),

    Worm1: Worm(
      world,
      "blue",
      { x: 800, y: 300 },
      { height: 100, width: 100 },
      100,
      wormImage,
      1,
      0
    ),

    Sword: Sword(
      world,
      "red",
      { x: 800, y: 300 },
      { height: 120, width: 50 },
      10,
      -1
    ),

    // Rocket: Rocket(
    //   world,
    //   "red",
    //   { x: 400, y: 200 },
    //   { height: 30, width: 60 },
    //   100
    // ),

    Floor: Floor(
      world,
      "green",
      { x: (windowWidth + 500) / 2, y: windowHeight },
      { height: 50, width: windowWidth + 1000 }
    ),

    FloorLeft: Floor(
      world,
      "green",
      { x: -10, y: windowHeight - 310 },
      { height: windowHeight + 500, width: 10 }
    ),
    FloorRight: Floor(
      world,
      "green",
      { x: windowWidth + 55, y: windowHeight - 300 },
      { height: windowHeight + 500, width: 10 }
    ),
    FloorTop: Floor(
      world,
      "green",
      { x: (windowWidth + 500) / 2, y: windowHeight - 600 },
      { height: 50, width: windowWidth + 1000 }
    ),
    FloorBottom1: Floor(
      world,
      "green",
      { x: windowWidth / 2, y: windowHeight - 100 },
      { height: 10, width: 200 }
    ),
    FloorBottom2: Floor(
      world,
      "green",
      { x: 600, y: windowHeight - 50 },
      { height: 10, width: 200 }
    ),
    FloorBottom3: Floor(
      world,
      "green",
      { x: 200, y: windowHeight - 50 },
      { height: 10, width: 200 }
    ),

    LifeBar1: LifeBar(
      world,
      "red",
      { x: (windowWidth + 630) / 2, y: windowHeight - 405 },
      { height: 20, width: 300 },
      100
    ),
    LifeBar2: LifeBar(
      world,
      "red",
      { x: (windowWidth - 540) / 2, y: windowHeight - 405 },
      { height: 20, width: 300 },
      100
    ),
  };
};
