import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScreenOrientation } from "expo";

export default function App() {
  useEffect(() => {
    (async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    })();

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text>Menu nahui</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
