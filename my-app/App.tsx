import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { RootSiblingParent } from "react-native-root-siblings";
import Register from "./Screens/Register";
import BottomNavigationTab from "./navigation";

const Stack = createStackNavigator();
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
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
