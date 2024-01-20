import { Ionicons } from "@expo/vector-icons";
import { ReactElement } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../constants";
import { BottomTabNavigationProp } from "../../types";
import styles from "./styles";

const Home = ({ navigation }: BottomTabNavigationProp): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity style={styles.locationIcon}>
          <Ionicons name="location-outline" size={SIZES.LARGE} />
        </TouchableOpacity>
        <Text style={styles.locationLabel}>São Luis</Text>
        <TouchableOpacity style={styles.bagIcon}>
          <Ionicons name="bag" size={SIZES.LARGE} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchWrapper}>
        <View>
          <Text style={styles.title}>Find the Most</Text>
          <Text style={{ ...styles.title, color: COLORS.green }}>
            Luxurious Furniture
          </Text>
        </View>
        <View style={styles.inputWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Search")}
            style={styles.searchIcon}
          >
            <Ionicons
              name="search"
              size={SIZES.SMALL}
              color={COLORS.dark_gray}
            />
          </TouchableOpacity>
          <TextInput
            showSoftInputOnFocus={false}
            placeholder="What are you looking for?"
            onFocus={() => navigation.navigate("Search")}
            style={styles.input}
          />
          <TouchableOpacity style={styles.cameraIcon}>
            <Ionicons
              name="camera-outline"
              size={SIZES.SMALL}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
