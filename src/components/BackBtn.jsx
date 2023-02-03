import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const BackBtn = () => {
  const navigation = useNavigation();

  return <Text onPress={() => navigation.navigate("Home")}>{"<- BACK"}</Text>;
};
