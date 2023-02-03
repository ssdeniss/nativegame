import { useEffect } from "react";
import * as Font from "expo-font";

export const FontStyle = () => {
  useEffect(() => {
    Font.loadAsync({
      Game: require("./Gameplay.ttf"),
    });
  }, []);
};
