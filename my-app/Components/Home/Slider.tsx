import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BORDER_RADIUS } from "../../constants";

const Slider = () => {
  return (
    <View style={styles.slider}>
      <Text>Slider</Text>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  slider: {
    alignSelf: "stretch",
    height: 160,
    backgroundColor: "#D4D9D3",
    borderRadius: BORDER_RADIUS,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
