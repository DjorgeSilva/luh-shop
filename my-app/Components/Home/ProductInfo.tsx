import { Ionicons } from "@expo/vector-icons";
import React, { ReactElement } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BORDER_RADIUS, COLORS } from "../../constants";
import { ProductType } from "../../types";

const ProductInfo = ({ title, price, image }: ProductType): ReactElement => {
  const onCartAdd = (): void => {
    //
  };

  return (
    <TouchableOpacity style={styles.productBox}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.label}>{title}</Text>
      </View>
      <View
        style={{
          ...styles.textWrapper,
          flex: 1,
          borderBottomLeftRadius: BORDER_RADIUS,
          borderBottomRightRadius: BORDER_RADIUS,
        }}
      >
        <Text style={styles.label}>
          {Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </Text>
        <TouchableOpacity onPress={onCartAdd}>
          <Ionicons name="add-circle" size={20} color={COLORS.green} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  productBox: {
    width: "48%",
    height: 150,
    borderRadius: BORDER_RADIUS,
    marginVertical: 20,
  },
  imageWrapper: {
    flex: 3,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
  tinyLogo: {
    flex: 1,
    resizeMode: "contain",
  },
  textWrapper: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "left",
    paddingTop: 10,
    paddingHorizontal: 5,
    backgroundColor: COLORS.gray_background,
  },
  label: {
    fontSize: 12,
  },
});
