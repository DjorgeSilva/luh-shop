import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type BottomTabScreenType = {
  Home: undefined;
  Profile: undefined;
  Search: undefined;
};

export type BottomTabNavigationProp = BottomTabScreenProps<BottomTabScreenType>;
