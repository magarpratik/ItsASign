import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leaderboard";
import Settings from "./components/Settings";
import CustomDrawer from "./components/CustomDrawer";
import { LessonThenQuiz } from "./components/Lesson-then-quiz";
import {FinishedLesson} from "./components/Finished-lesson";
import { Answer } from "./components/Answer-options";
import { UserContext, LoadingContext } from "./utils/userContext";
import { allAvatars } from "./assets/avatars/avatars-export";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator({ navigation: { navigate } }) {
    const [avatarIndex, setAvatarIndex] = React.useState(null);

    React.useEffect(() => {}, [avatarIndex]);
    const profileImgLink = (
        <TouchableOpacity onPress={() => navigate("Profile")}>
            <Image
                source={{
                    uri: avatarIndex
                        ? `${allAvatars[avatarIndex]}`
                        : "https://api.multiavatar.com/helloworld.png",
                }}
                style={styles.image}
            />
        </TouchableOpacity>
    );
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => (
          <CustomDrawer {...props} avatarIndex={avatarIndex} />
        )}
        screenOptions={{
          drawerActiveBackgroundColor: "#004346",
          drawerActiveTintColor: "white",
          drawerLabelStyle: {
            // fontFamily: "Roboto-Medium",
            fontSize: 20,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            headerRight: () => profileImgLink,
          }}
        >
          {(props) => <Home {...props} setAvatarIndex={setAvatarIndex} />}
        </Drawer.Screen>
        <Drawer.Screen
          name="Profile"
          options={{
            headerRight: () => profileImgLink,
          }}
        >
          {(props) => <Profile {...props} setAvatarIndex={setAvatarIndex} />}
        </Drawer.Screen>
        <Drawer.Screen
          name="Leaderboard"
          component={Leaderboard}
          options={{
            headerRight: () => profileImgLink,
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            headerRight: () => profileImgLink,
          }}
        />
        <Drawer.Screen
          name="FinishedLesson"
          component={FinishedLesson}
          options={{
            headerRight: () => profileImgLink,
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null,
          }}
        />
      </Drawer.Navigator>
    );
}

export default function App() {
    const [username, setUsername] = React.useState("John Smith");
    const [isLoading, setIsLoading] = React.useState(false);

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            cardStyle: { backgroundColor: "#78ba97" },
                        }}
                    >
                        <Stack.Screen
                            name="SignIn"
                            component={SignIn}
                            options={{
                                title: "Sign In ",
                                headerStyle: { backgroundColor: "#3d9891" },
                                headerTitleStyle: {
                                    color: "#fff",
                                },
                            }}
                        />
                        <Stack.Screen
                            name="SignUp"
                            component={SignUp}
                            options={{
                                title: "Sign Up",
                                headerStyle: { backgroundColor: "#3d9891" },
                                headerTitleStyle: {
                                    color: "#fff",
                                },
                            }}
                        />
                        <Stack.Screen
                            name="HomePage"
                            component={DrawerNavigator}
                            options={{
                                headerShown: false,
                                backgroundColor: "#78ba97",
                            }}
                        />
                        <Stack.Screen
                            name="Lesson"
                            component={LessonThenQuiz}
                            options={{
                                headerShown: false,
                                backgroundColor: "#78ba97",
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </LoadingContext.Provider>
        </UserContext.Provider>
    );
}

const styles = StyleSheet.create({
    image: { width: 50, height: 50, marginRight: 10 },
});
