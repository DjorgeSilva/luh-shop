import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type BottomTabScreenType = {
  Home: undefined;
  Profile: undefined;
  Search: undefined;
};

export type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  categoria: string;
};

export type BottomTabNavigationProp = BottomTabScreenProps<BottomTabScreenType>;
