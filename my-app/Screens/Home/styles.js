import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.background_grey,
    paddingHorizontal: 5,
    paddingVertical: 0,
  },
  mainWrapper: {
    flex: 1,
  },
  title: {
    fontSize: SIZES.EXTRA_LARGE,
    fontWeight: "900",
    marginTop: -5,
  },
});

export default styles;
