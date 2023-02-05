import Matter from "matter-js";
import React from "react";
import { Image, View } from "react-native";

const Bird = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;
  const requireImage = props.requireImage;
  const orientation = props.orientation;
  const color = props.color;

  return (
    <View
      style={{
        position: "absolute",
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    >
      <Image
        style={{
          height: heightBody,
          width: widthBody,
          transform: [{ scaleX: orientation }],
        }}
        source={requireImage}
      />
    </View>
  );
};

export default (
  world,
  color,
  pos,
  size,
  hp,
  requireImage,
  orientation = 0,
  team = 0
) => {
  const initialBird = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "Bird" }
  );
  initialBird.collisionFilter = {
    group: -1,
    category: 2,
    mask: 1,
  };
  Matter.World.add(world, initialBird);

  return {
    body: initialBird,
    color,
    pos,
    hp,
    requireImage,
    orientation,
    team,
    renderer: <Bird />,
  };
};
