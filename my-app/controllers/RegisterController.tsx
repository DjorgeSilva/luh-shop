import { HOST, PORT } from "@env";
import { EMPTY_STRING } from "../constants";
import { ApiResponseType, RegisterFormType } from "../types";

export default async function registerUserPost(
  data: RegisterFormType
): Promise<ApiResponseType> {
  try {
    const response = await fetch(`${HOST}:${PORT}/auth/register`, {
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
      msg: "error when saving new user",
      data: {
        name: data.email,
        email: EMPTY_STRING,
      },
    };
  }
}
