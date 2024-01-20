import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SIZES } from "../../constants";

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity style={styles.locationIcon}>
        <Ionicons name="location-outline" size={SIZES.LARGE} />
      </TouchableOpacity>
      <Text style={styles.locationLabel}>São Luis</Text>
      <TouchableOpacity style={styles.bagIcon}>
        <Ionicons name="bag" size={SIZES.LARGE} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginHorizontal: 10,
  },
  locationIcon: { flex: 1, alignItems: "flex-start" },
  locationLabel: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
  bagIcon: { flex: 1, alignItems: "flex-end" },
});
