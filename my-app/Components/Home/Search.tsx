import { Ionicons } from "@expo/vector-icons";
import React, { ReactElement } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { BORDER_RADIUS, COLORS, SIZES } from "../../constants";
import { BottomTabNavigationProp } from "../../types";

const Search = ({ navigation }: BottomTabNavigationProp): ReactElement => {
  return (
    <View style={styles.inputWrapper}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        style={styles.searchIcon}
      >
        <Ionicons name="search" size={SIZES.SMALL} color={COLORS.dark_gray} />
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
  );
};

export const styles = StyleSheet.create({
  inputWrapper: {
    width: "95%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.light_green,
    marginVertical: 15,
    borderRadius: BORDER_RADIUS,
  },
  searchIcon: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  input: {
    flex: 5,
  },
  cameraIcon: {
    flex: 1,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLORS.green,
  },
});

export default Search;
