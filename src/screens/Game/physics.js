import Matter from "matter-js";
import { Dimensions } from "react-native";
import PLAYER from "./global";
import { Audio } from "expo-av";

const center = Dimensions.get("window").width / 2;
const firstHalfCenter = center / 2;
const secondHalfCenter = center + firstHalfCenter;

const weapons = [
  require("../../assets/weapons/catana.png"),
  require("../../assets/weapons/iceSword.png"),
  require("../../assets/weapons/axe.png"),
  require("../../assets/weapons/hammer.png"),
];

const worm = require("../../assets/worm/worm.png");
const wormJump = require("../../assets/worm/wormJump.png");
const bird = require("../../assets/chicken/bird.png");
const birdJump = require("../../assets/chicken/birdJump.png");

async function playEffect() {
  const { sound } = await Audio?.Sound?.createAsync(
    require("../../sounds/effects/jump.mp3")
  );
  await sound?.playAsync();
}
async function stopEffect() {
  const { sound } = await Audio?.Sound?.createAsync(
    require("../../sounds/effects/jump.mp3")
  );
  await sound?.stopAsync;
}
const runSoundEffect = () => {
  playEffect();
  setTimeout(() => {
    stopEffect();
  }, 500);
};
const checkHp = (entities) => {
  if (entities["Bird1"].hp <= 0) {
    entities["Bird1"].color = "rgba(0, 0, 0, 0)";
    entities["Bird1"].requireImage = null;
  }

  if (entities["Worm1"].hp <= 0) {
    entities["Worm1"].color = "rgba(0, 0, 0, 0)";
    entities["Worm1"].requireImage = null;
  }
  return entities;
};

const checkColides = (entity, sword) => {
  if (Matter.Collision.collides(entity.body, sword.body) !== null) {
    entity.hp -= sword.damage;
  }
  return entity;
};

const weaponOrientationWorm = (worm) => {
  if (worm.orientation === 1) {
    return { x: worm.body.position.x - 60, y: worm.body.position.y - 60 };
  } else {
    return { x: worm.body.position.x + 60, y: worm.body.position.y - 60 };
  }
};

const bodyColidesWals = (body, entities) => {
  return (
    Matter.Collision.collides(body, entities.Floor.body) == null ||
    Matter.Collision.collides(body, entities.FloorBottom1.body) == null ||
    Matter.Collision.collides(body, entities.FloorBottom2.body) == null ||
    Matter.Collision.collides(body, entities.FloorBottom3.body) == null
  );
};

const Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;
  const player = PLAYER.player;

  if (entities[player].hp <= 0) {
    dispatch({ type: "next_player" });
  }

  entities["Sword2"].requiredImage = weapons[PLAYER.birdweapon - 1];
  entities["Sword"].requiredImage = weapons[PLAYER.wormweapon - 1];


  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      const pressInFirsQuater = firstHalfCenter > t.event.locationX;
      const pressInSecondQuater =
        t.event.locationX > firstHalfCenter && t.event.locationX < center;
      const pressInThirdQuater =
        t.event.locationX > center && t.event.locationX < secondHalfCenter;
      const pressInFourthQuater = t.event.locationX > secondHalfCenter;
      const birdColideWals = bodyColidesWals(entities.Bird1.body, entities);
      const wormColideWals = bodyColidesWals(entities.Worm1.body, entities);

      if (pressInFirsQuater && birdColideWals) {
        Matter.Body.setVelocity(entities.Bird1.body, {
          x: -2,
          y: -10,
        });
      } else if (pressInSecondQuater && birdColideWals) {
        Matter.Body.setVelocity(entities.Bird1.body, {
          x: 2,
          y: -10,
        });
      }
      if (pressInThirdQuater && wormColideWals) {
        Matter.Body.setVelocity(entities.Worm1.body, {
          x: -2,
          y: -10,
        });
      } else if (pressInFourthQuater && wormColideWals) {
        Matter.Body.setVelocity(entities.Worm1.body, {
          x: 2,
          y: -10,
        });
      }

      if (pressInFirsQuater) {
        entities.Bird1.orientation = 1;
        entities.Sword2.orientation = -1;
      }
      if (pressInSecondQuater) {
        entities.Bird1.orientation = -1;
        entities.Sword2.orientation = 1;
      }
      if (pressInThirdQuater) {
        entities.Worm1.orientation = 1;
        entities.Sword.orientation = -1;
      }
      if (pressInFourthQuater) {
        entities.Worm1.orientation = -1;
        entities.Sword.orientation = 1;
      }
    });
  Matter.Body.setPosition(
    entities.Sword.body,
    weaponOrientationWorm(entities["Worm1"])
  );

  Matter.Body.setPosition(
    entities.Sword2.body,
    weaponOrientationWorm(entities["Bird1"])
  );

  entities.Bird1 = checkColides(entities.Bird1, entities.Sword);
  entities.Worm1 = checkColides(entities.Worm1, entities.Sword2);


  entities = checkHp(entities);
  // entities = checkColides(entities);

  Matter.Engine.update(engine, time.delta);



  if (entities["Bird1"].hp <= 0) {
    dispatch({ type: "Worm" });
  }

  if (entities["Worm1"].hp <= 0) {
    dispatch({ type: "Bird" });
  }
  // Matter.Events.on(engine, "dblclick", (event) => {
  //   console.log("event");
  // });
  return entities;
};
export default Physics;
