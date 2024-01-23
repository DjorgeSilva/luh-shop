import { Link } from "@react-navigation/native";
import { Field, Formik, FormikProps } from "formik";
import { ReactElement, useEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import Toast from "react-native-root-toast";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../Components/auth/CustomButton";
import { CustomInput } from "../../Components/auth/CustomInput";
import { userLoginValidationSchema } from "../../Schemas/userFormValidationSchema";
import { COLORS, INITIAL_LOGIN_FORM_VALUES } from "../../constants";
import loginUser from "../../controllers/LoginController";
import { LoginFormType, StackNavigationProp } from "../../types";
import { styles } from "./styles";

const Login = ({ navigation }: StackNavigationProp): ReactElement => {
  const ref = useRef<FormikProps<LoginFormType>>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // reset fields
    navigation.addListener("focus", () => {
      if (ref?.current) {
        ref.current.values = INITIAL_LOGIN_FORM_VALUES;
        ref.current.setErrors({});
        ref.current.handleReset();
      }
    });
  }, [navigation]);

  const onSubmit = async (values: LoginFormType) => {
    setIsLoading(true);
    const resp = await loginUser(values);
    if (resp.code !== 200) {
      setIsLoading(false);
      return Toast.show(resp.msg, {
        duration: Toast.durations.SHORT,
        backgroundColor: COLORS.red,
        position: -145,
      });
    }
    setIsLoading(false);
    Toast.show(resp.msg, {
      duration: Toast.durations.SHORT,
      backgroundColor: COLORS.success_color,
      position: -145,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageWrapper}>
          <Text style={styles.title}>Login</Text>
        </View>
        <Formik
          innerRef={ref}
          validationSchema={userLoginValidationSchema}
          initialValues={INITIAL_LOGIN_FORM_VALUES}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, isValid }) => (
            <View
              style={{
                ...styles.formWrapper,
                height: Dimensions.get("window").height - 120,
              }}
            >
              <Field component={CustomInput} name={"email"} />
              <Field
                component={CustomInput}
                name={"password"}
                secureTextEntry
              />
              <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <CustomButton
                  style={{ backgroundColor: COLORS.green, color: COLORS.white }}
                  onPress={() => handleSubmit()}
                  title="Login"
                  disabled={!isValid}
                  isLoading={isLoading}
                />
              </View>
              <Link to={{ screen: "Register" }} style={styles.link}>
                Não é cadastrado? Cadastra-se
              </Link>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
