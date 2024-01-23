import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { RootSiblingParent } from "react-native-root-siblings";
import Login from "./Screens/Auth/Login";
import Register from "./Screens/Auth/Register";
import BottomNavigationTab from "./navigation";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login"
        >
          <Stack.Screen
            name="BottomNavigationTab"
            component={BottomNavigationTab}
          />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
