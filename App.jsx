import { useState } from "react";
import { Navigation } from "./src/router/Router";
import * as Font from "expo-font";
import { Loader } from "./src/components/Loader/Loader";
import { useEffect } from "react/cjs/react.production.min";

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const fetchFonts = async () => {
    await Font.loadAsync({
      Game: require("./src/assets/fonts/Gameplay.ttf"),
    });
    setTimeout(() => {
      SetIsReady(true);
    }, 1000);
  };

  fetchFonts();

  if (!IsReady) {
    return <Loader />;
  }
  return <Navigation />;
}
