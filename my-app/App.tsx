import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { RootSiblingParent } from "react-native-root-siblings";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
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
          initialRouteName="Register"
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
