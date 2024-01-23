import * as yup from "yup";

export const userRegisterValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/(\w.+\s).+/, "Nome deve conter sobrenome")
    .required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Senha deve conter letra minúscula")
    .matches(/\w*[A-Z]\w*/, "Senha deve conter letra maiúscula")
    .matches(/\d/, "Senha deve conter número")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Senha deve conter caractere especial"
    )
    .min(8, ({ min }) => `Senha deve conter no mínimo ${min} caracteres`)
    .required("Senha é obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas devem ser iguais")
    .required("Confirmar senha é obrigatório"),
});

export const userLoginValidationSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Senha deve conter letra minúscula")
    .matches(/\w*[A-Z]\w*/, "Senha deve conter letra maiúscula")
    .matches(/\d/, "Senha deve conter número")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Senha deve conter caractere especial"
    )
    .min(8, ({ min }) => `Senha deve conter no mínimo ${min} caracteres`)
    .required("Senha é obrigatório"),
});
