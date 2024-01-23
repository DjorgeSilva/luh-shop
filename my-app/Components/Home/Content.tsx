import { CONTENT_URI } from "@env";
import { Ionicons } from "@expo/vector-icons";
import React, { ReactElement, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { COLORS, DEFAULT_MARGIN_VERTICAL, SIZES } from "../../constants";
import getProducts from "../../controllers/ProductsController";
import { ProductType } from "../../types";
import ProductInfo from "./ProductInfo";

const Content = (): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect((): void => {
    const onLoadProducts = async (): Promise<void> => {
      getProducts<ProductType[]>(CONTENT_URI)
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    onLoadProducts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Novidades</Text>
        <Ionicons name="grid-sharp" size={20} color={COLORS.green} />
      </View>
      <View style={products.length ? styles.contentWrapper : { height: 290 }}>
        {products.length ? (
          products.map((data: ProductType, index: number) => {
            const { id, title, description, price, categoria, image } = data;
            return (
              <ProductInfo
                id={id}
                key={index}
                title={title}
                description={description}
                price={price}
                image={image}
                categoria={categoria}
              />
            );
          })
        ) : (
          <View style={styles.loadingWrapper}>
            <ActivityIndicator size="large" color={COLORS.green} />
          </View>
        )}
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginVertical: DEFAULT_MARGIN_VERTICAL,
  },
  title: {
    fontSize: SIZES.SMALL,
    fontWeight: "700",
    color: COLORS.green,
    textTransform: "uppercase",
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
  },
  loadingWrapper: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
