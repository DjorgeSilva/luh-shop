import { Link } from "@react-navigation/native";
import { Field, Formik } from "formik";
import { ReactElement } from "react";
import { Button, Text, View } from "react-native";
import Toast from "react-native-root-toast";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomInput } from "../../Components/Register/CustomInput";
import { userFormValidationSchema } from "../../Schemas/userFormValidationSchema";
import { COLORS, EMPTY_STRING } from "../../constants";
import loginUser from "../../controllers/LoginController";
import {
  RegisterFormType as LoginFormType,
  StackNavigationProp,
} from "../../types";
import { styles } from "../Register/styles";

const Login = ({ navigation }: StackNavigationProp): ReactElement => {
  const onSubmit = async (values: LoginFormType) => {
    const resp = await loginUser(values);
    if (resp.code !== 200) {
      return Toast.show(resp.msg, {
        duration: Toast.durations.LONG,
        backgroundColor: COLORS.red,
        position: -65,
      });
    }
    Toast.show(resp.msg, {
      duration: Toast.durations.LONG,
      backgroundColor: COLORS.green,
      position: -65,
    });
    /*     navigation.navigate("Login"); */
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Text style={styles.title}>Login</Text>
      </View>
      <Formik
        validationSchema={userFormValidationSchema}
        initialValues={{
          name: EMPTY_STRING,
          email: EMPTY_STRING,
          password: EMPTY_STRING,
          confirmPassword: EMPTY_STRING,
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, isValid }) => (
          <View style={styles.formWrapper}>
            <Field component={CustomInput} name={"email"} />
            <Field component={CustomInput} name={"password"} secureTextEntry />
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <Button
                color={COLORS.green}
                onPress={() => handleSubmit()}
                title="Cadastrar"
                disabled={!isValid}
              />
            </View>
            <Link to={{ screen: "Register" }} style={styles.link}>
              Não é cadastrado? Cadastra-se
            </Link>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
