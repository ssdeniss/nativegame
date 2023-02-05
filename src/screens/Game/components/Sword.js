import Matter from "matter-js";
import React from "react";
import { Image, View } from "react-native";

const Sword = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;
  const orientation = props.orientation;
  const requiredImage = props.requiredImage;

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
        style={{ width: 50, height: 120, transform: [{ scaleX: orientation }] }}
        source={requiredImage}
      />
    </View>
  );
};

export default (
  world,
  color,
  pos,
  size,
  damage,
  orientation = 1,
  requiredImage
) => {
  const initialRocket = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "Sword" }
  );
  initialRocket.collisionFilter = {
    group: 3,
    category: 4,
    mask: -1,
  };
  Matter.World.add(world, initialRocket);

  return {
    body: initialRocket,
    color,
    pos,
    damage,
    orientation,
    requiredImage,
    renderer: <Sword />,
  };
};
