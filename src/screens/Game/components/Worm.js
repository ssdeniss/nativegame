import Matter from "matter-js";
import React from "react";
import { Image, View } from "react-native";
import styled from "styled-components";

const Worm = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;
  const requireImage = props.requireImage;
  const orientation = props.orientation;

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
  orientation = 1,
  team = 1
) => {
  const initialWorm = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: "Worm",
    }
  );
  initialWorm.collisionFilter = {
    group: -1,
    category: 2,
    mask: 1,
  };
  Matter.World.add(world, initialWorm);

  return {
    body: initialWorm,
    color,
    pos,
    hp,
    requireImage,
    orientation,
    team,
    renderer: <Worm />,
  };
};

const WormName = styled.Text`
  color: blue;
  text-align: center;
`;
