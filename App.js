import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leaderboard";
import Settings from "./components/Settings";
import CustomDrawer from "./components/CustomDrawer";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "#1d5e1e",
        drawerActiveTintColor: "yellow",
        drawerLabelStyle: { fontFamily: "Roboto-Medium", fontSize: 20 },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Leaderboard" component={Leaderboard} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: "Sign in Screen" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Sign up Screen" }}
        />
        <Stack.Screen
          name="HomePage"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
