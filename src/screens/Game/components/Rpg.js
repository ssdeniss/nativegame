import Matter from "matter-js";
import React from "react";
import { Image, View } from "react-native";

const Rpg = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;

  return (
    <View
      style={{
        borderStyle: "solid",
        position: "absolute",
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    >
      <Image
        style={{ width: 50, height: 40 }}
        source={require("../../../assets/weapons/rpg.png")}
      />
    </View>
  );
};

export default (world, color, pos, size, damage) => {
  const initialRocket = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "Rocket" }
  );
  initialRocket.collisionFilter = {
    group: 1,
    category: 1,
    mask: 2,
  };
  Matter.World.add(world, initialRocket);

  return {
    body: initialRocket,
    color,
    pos,
    damage,
    renderer: <Rpg />,
  };
};
