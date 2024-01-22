import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { COLORS } from "../../constants";

export const CustomInput = (props: any) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
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
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: "100%",
    marginTop: 10,
    backgroundColor: COLORS.white,
    borderColor: COLORS.dark_gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    paddingLeft: 10,
  },
  errorText: {
    fontSize: 10,
    color: COLORS.red,
    marginTop: 5,
    marginBottom: 10,
  },
  errorInput: {
    borderColor: COLORS.red,
  },
});
