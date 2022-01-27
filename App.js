import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View } from "react-native";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leaderboard";
import Settings from "./components/Settings";
import CustomDrawer from "./components/CustomDrawer";
import { LessonThenQuiz } from './components/Lesson-then-quiz';

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
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => (
            <Image
              source={{ uri: "https://api.multiavatar.com/helloworld.png" }}
              style={styles.image}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => (
            <Image
              source={{ uri: "https://api.multiavatar.com/helloworld.png" }}
              style={styles.image}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          headerRight: () => (
            <Image
              source={{ uri: "https://api.multiavatar.com/helloworld.png" }}
              style={styles.image}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          headerRight: () => (
            <Image
              source={{ uri: "https://api.multiavatar.com/helloworld.png" }}
              style={styles.image}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <View>
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


  {/* <LessonThenQuiz /> */}
  </View>

  );
}

const styles = StyleSheet.create({
  image: { width: 50, height: 50, marginRight: 10 },
});
