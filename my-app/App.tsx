import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import BottomNavigationTab from "./navigation";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigationTab"
          component={BottomNavigationTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
