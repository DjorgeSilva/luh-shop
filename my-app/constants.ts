import { LoginFormType, RegisterFormType } from "./types";

export const EMPTY_STRING = "";
export const BORDER_RADIUS = 10;
export const DEFAULT_MARGIN_VERTICAL = 8;
export const SIZES = {
  EXTRA_SMALL: 15,
  SMALL: 20,
  MEDIUM: 25,
  LARGE: 30,
  EXTRA_LARGE: 35,
};

export const COLORS = {
  background_grey: "#ECECEC",
  light_green: "#D8EAF7",
  green: "#2D4D52",
  white: "#fff",
  gray_background: "#F7F7F7",
  dark_gray: "#7E8893",
  red: "#ff0000",
  purple: "#6C63FF",
  light_purple: "#3F3D56",
  success_color: "#2AD265",
  alert_color: "##F78400",
};

export const INITIAL_REGISTER_FORM_VALUES: RegisterFormType = {
  name: EMPTY_STRING,
  email: EMPTY_STRING,
  password: EMPTY_STRING,
  confirmPassword: EMPTY_STRING,
};

export const INITIAL_LOGIN_FORM_VALUES: LoginFormType = {
  email: EMPTY_STRING,
  password: EMPTY_STRING,
};
