import { useEffect } from "react";
import { FontStyle } from "./src/assets/fonts/Font";
import { Navigation } from "./src/router/Router";
import SystemNavigationBar from "react-native-system-navigation-bar";
import FullScreenChz from "react-native-fullscreen-chz";

export default function App() {
  useEffect(() => {
    // FullScreenChz.enable();
    // SystemNavigationBar.navigationHide();
  }, []);
  FontStyle();
  return <Navigation />;
}
