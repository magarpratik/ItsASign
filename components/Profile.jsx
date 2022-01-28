import { useEffect, useState, useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Bar } from "react-native-progress";
import { UserContext } from "../App";
import Badges from "./Badges";

const Profile = () => {
    const username = useContext(UserContext);

    const [level, setLevel] = useState(0);
    const [progress, setProgress] = useState(0);
    const [totalXP, setTotalXP] = useState(0);
    useEffect(() => {
        setTotalXP(153);
    }, []);
    useEffect(() => {
        setLevel(Math.floor(totalXP / 100));
        setProgress((totalXP % 100) / 100);
    }, [totalXP]);

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://api.multiavatar.com/helloworld.png",
                }}
                style={styles.image}
            />
            <Text>{username}</Text>
            <View style={styles.bar}>
                <Bar progress={progress} width={250} height={20} />
                <Text>Level {level}</Text>
            </View>
            <Badges></Badges>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    image: { width: 300, height: 300, marginTop: 30, marginBottom: 100 },
    bar: {
        marginHorizontal: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,
    },
});

export default Profile;
