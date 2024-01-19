import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ReactElement } from "react";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Search from "../Screens/Search";
import Welcome from "../Screens/Welcome";

const Tab = createBottomTabNavigator();

const BottomNavigationTab = (): ReactElement => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Welcome" component={Welcome} />
    </Tab.Navigator>
  );
};

export default BottomNavigationTab;
