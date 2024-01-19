import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ReactElement } from "react";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Search from "../Screens/Search";
import { BottomTabScreenType } from "../types";

const Tab = createBottomTabNavigator<BottomTabScreenType>();

const BottomNavigationTab = (): ReactElement => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={() => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"search"} color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome
              name={focused ? "user-circle" : "user-circle-o"}
              color={color}
              size={size}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigationTab;
