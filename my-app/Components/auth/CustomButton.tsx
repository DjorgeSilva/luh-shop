import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constants";
import { CustomButtonType } from "../../types";

export default function CustomButton(props: CustomButtonType) {
  const { onPress, title, style, disabled: disabled, isLoading } = props;
  const backgroundColor = style ? style.backgroundColor : COLORS.green;
  const textColor = style ? style.color : COLORS.white;

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: backgroundColor,
        opacity: disabled ? 0.5 : 1,
      }}
      onPress={onPress}
      disabled={disabled}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={COLORS.success_color} />
      ) : (
        <Text
          style={{
            ...styles.text,
            color: textColor,
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    textTransform: "uppercase",
  },
});
