import { EMPTY_STRING } from "../constants";
import { ApiResponseType, LoginFormType } from "../types";

export default async function loginUser(
  data: LoginFormType
): Promise<ApiResponseType> {
  try {
    const response = await fetch("http://192.168.3.26:8080/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
    return response;
  } catch (error) {
    return {
      code: 500,
      msg: "error when logging",
      data: {
        name: data.email,
        email: EMPTY_STRING,
      },
    };
  }
}
