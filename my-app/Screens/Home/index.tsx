import { ReactElement } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomTabNavigationProp } from "../../types";
import styles from "./styles";

const Home = ({ navigation }: BottomTabNavigationProp): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
