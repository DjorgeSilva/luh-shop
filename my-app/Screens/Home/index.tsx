import { ReactElement } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../Components/Home/Header";
import Search from "../../Components/Home/Search";
import Slider from "../../Components/Home/Slider";
import { COLORS } from "../../constants";
import { BottomTabNavigationProp } from "../../types";
import styles from "./styles";

const Home = ({ navigation, route }: BottomTabNavigationProp): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.mainWrapper}>
        <View>
          <Text style={styles.title}>Find the Most</Text>
          <Text style={{ ...styles.title, color: COLORS.green }}>
            Luxurious Furniture
          </Text>
        </View>
        <Search navigation={navigation} route={route} />
        <Slider />
      </View>
    </SafeAreaView>
  );
};

export default Home;
