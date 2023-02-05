import Matter from "matter-js";
import React from "react";
import { Image, View } from "react-native";
import styled from "styled-components/native";

const LifeBar = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;
  return (
    <LifeBarContainer
      style={{
        position: "absolute",
        left: xBody,
        top: yBody,
        width: 300,
        height: 21,
      }}
    >
      <LifeBarContainerLevel
        style={{
          width: widthBody,
        }}
      />
    </LifeBarContainer>
  );
};

export default (world, color, pos, size, damage) => {
  const initialRocket = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: "Floor",
      isStatic: true,
    }
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
    renderer: <LifeBar />,
  };
};

const LifeBarContainer = styled.View`
  border-width: 1px;
  border-color: #000;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LifeBarContainerLevel = styled.View`
  height: 20px;
  background-color: #08d50f;
`;
