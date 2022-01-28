import React from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../utils/userContext";

const CustomDrawer = (props) => {
    const { username } = React.useContext(UserContext);
    const { setUsername } = React.useContext(UserContext);
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: "#1d5e1e" }}
            >
                <ImageBackground
                    source={require("../assets/drawer-bg.jpg")}
                    style={{ padding: 20, opacity: 1 }}
                >
                    <Image
                        source={{
                            uri: "https://api.multiavatar.com/helloworld.png",
                        }}
                        style={{
                            height: 80,
                            width: 80,
                            borderRadius: 40,
                            marginBottom: 10,
                            marginLeft: 5,
                        }}
                    />
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 18,
                            fontFamily: "Roboto-Medium",
                            marginLeft: 25,
                        }}
                    >
                        {username}
                    </Text>
                </ImageBackground>
                <View
                    style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}
                >
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("SignIn");
                    setUsername("");
                }}
            >
                <View
                    style={{
                        padding: 20,
                        borderTopWidth: 1,
                        borderTopColor: "#ccc",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: "Roboto-Medium",
                            marginLeft: 5,
                        }}
                    >
                        Sign Out
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
export default CustomDrawer;
