import { StyleSheet } from "react-native";
import { COLORS, DEFAULT_MARGIN_VERTICAL, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.background_grey,
    paddingHorizontal: 5,
  },
  mainWrapper: {
    flex: 1,
  },
  titleWrapper: {
    marginVertical: DEFAULT_MARGIN_VERTICAL,
  },
  title: {
    fontSize: SIZES.EXTRA_LARGE,
    fontWeight: "900",
  },
});

export default styles;
