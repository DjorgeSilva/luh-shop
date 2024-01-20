import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background_grey,
    paddingHorizontal: 5,
    paddingVertical: 0,
  },
  headerWrapper: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  locationIcon: { flex: 1, alignItems: "flex-start" },
  locationLabel: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
  bagIcon: { flex: 1, alignItems: "flex-end" },
  searchWrapper: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: SIZES.EXTRA_LARGE,
    fontWeight: "900",
    marginTop: -5,
  },
  inputWrapper: {
    width: "95%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.light_green,
    marginVertical: 15,
    borderRadius: 10,
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
    borderRadius: 10,
    backgroundColor: COLORS.green,
  },
});

export default styles;
