import { Field, Formik } from "formik";
import { ReactElement } from "react";
import { Button, Text, View } from "react-native";
import Toast from "react-native-root-toast";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomInput } from "../../Components/Register/CustomInput";
import { registerValidationSchema } from "../../Schemas/registerValidationSchema";
import { COLORS, EMPTY_STRING } from "../../constants";
import registerUserPost from "../../controllers/RegisterController";
import { RegisterFormType } from "../../types";
import { styles } from "./styles";

const Register = (): ReactElement => {
  const onSubmit = async (values: RegisterFormType) => {
    const resp = await registerUserPost(values);
    if (resp.code !== 200) {
      return Toast.show(resp.msg, {
        duration: Toast.durations.LONG,
        backgroundColor: COLORS.red,
        position: -65,
      });
    }
    Toast.show(resp.msg, {
      duration: Toast.durations.LONG,
      backgroundColor: COLORS.red,
      position: -65,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Text style={styles.title}>Cadastrar</Text>
      </View>
      <Formik
        validationSchema={registerValidationSchema}
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
            <Text style={styles.inputLabel}>Nome</Text>
            <Field component={CustomInput} name={"name"} />
            <Text style={styles.inputLabel}>Email</Text>
            <Field component={CustomInput} name={"email"} />
            <Text style={styles.inputLabel}>Senha</Text>
            <Field component={CustomInput} name={"password"} secureTextEntry />
            <Text style={styles.inputLabel}>confirmar Senha</Text>
            <Field
              component={CustomInput}
              name={"confirmPassword"}
              secureTextEntry
            />
            <View
              style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}
            >
              <Button
                color={COLORS.green}
                onPress={() => handleSubmit()}
                title="Cadastrar"
                disabled={!isValid}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Register;
