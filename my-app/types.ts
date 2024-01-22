import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type ApiResponseType = {
  code: Number;
  msg: string;
  data?: {
    name: string;
    email: string;
  };
};

export type BottomTabNavigationType = {
  Home: undefined;
  Profile: undefined;
  Search: undefined;
};

export type BottomTabNavigationProp =
  BottomTabScreenProps<BottomTabNavigationType>;

export type StackNavigationType = {
  BottomNavigationTab: undefined;
  Register: undefined;
  Search: undefined;
  Login: undefined;
};

export type StackNavigationProp = NativeStackScreenProps<StackNavigationType>;

export type RegisterFormType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginFormType = {
  email: string;
  password: string;
};

export type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  categoria: string;
};
