import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { getInputIcon, getInputLabel } from "../../utils/InputUtils";

export const CustomInput = (props: any) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <Text style={styles.inputLabel}>{getInputLabel(name)}</Text>
      <View style={styles.inputWrapper}>
        <Ionicons
          name={getInputIcon(name)}
          size={20}
          style={styles.icon}
          color={hasError ? COLORS.red : COLORS.dark_gray}
        />
        <TextInput
          style={[styles.textInput, hasError && styles.errorInput]}
          value={value}
          onChangeText={(text) => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          {...inputProps}
        />
      </View>
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: SIZES.EXTRA_SMALL,
    color: COLORS.dark_gray,
    textTransform: "capitalize",
    marginTop: 10,
  },
  inputWrapper: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    right: 8,
    top: 25,
    zIndex: 1000,
    position: "absolute",
  },
  textInput: {
    height: 40,
    width: "100%",
    marginTop: 10,
    backgroundColor: COLORS.white,
    borderColor: COLORS.dark_gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 32,
  },
  errorText: {
    fontSize: 10,
    color: COLORS.red,
    marginTop: 5,
  },
  errorInput: {
    borderColor: COLORS.red,
  },
});
