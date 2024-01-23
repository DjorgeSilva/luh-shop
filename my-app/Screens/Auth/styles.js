import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  imageWrapper: {
    marginBottom: 30,
  },
  title: {
    width: "100%",
    fontWeight: "900",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: SIZES.LARGE,
    color: COLORS.green,
    paddingVertical: 10,
    marginTop: 20,
  },
  formWrapper: {
    flex: 1,
  },
  inputLabel: {
    fontSize: SIZES.EXTRA_SMALL,
    color: COLORS.dark_gray,
  },
  textInput: {
    width: "100%",
    height: 40,
    backgroundColor: COLORS.white,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: BORDER_RADIUS,
    paddingLeft: 10,
  },
  link: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 18,
    color: COLORS.green,
  },
});
