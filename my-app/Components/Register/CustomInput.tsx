import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const CustomInput = (props: any) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  const getLabel = (): string => {
    let label = name;
    if (label === "name") {
      label = "Nome";
    }
    if (label === "password") {
      label = "Senha";
    }
    if (label === "confirmPassword") {
      label = "Confirmar senha";
    }
    return label;
  };

  return (
    <>
      <Text style={styles.inputLabel}>{getLabel()}</Text>
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
  inputLabel: {
    fontSize: SIZES.EXTRA_SMALL,
    color: COLORS.dark_gray,
    textTransform: "capitalize",
    marginTop: 10,
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
