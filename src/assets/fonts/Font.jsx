import { useEffect } from "react";
import * as Font from "expo-font";

export const FontStyle = () => {
  const loadFonts = async () => {
    await Font.loadAsync({
      Game: require("./Gameplay.ttf"),
    });
  };

  useEffect(() => {
    loadFonts();
  }, []);
};
