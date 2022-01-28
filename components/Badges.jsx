import { Image, StyleSheet, Text, View } from "react-native";

const Badges = () => {
    return (
        <View style={styles.badgesContainer}>
            <Text style={{ fontSize: 32 }}>Badges</Text>

            <View style={styles.badges}>
                <Image
                    style={styles.badgeItem}
                    source={require("../assets/badge.png")}
                />
                <Image
                    style={styles.badgeItem}
                    source={require("../assets/badge.png")}
                />
                <Image
                    style={styles.badgeItem}
                    source={require("../assets/badge.png")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    badgesContainer: {
        backgroundColor: "#5bc0de",
        marginTop: 10,
        marginHorizontal: 5,
    },
    badges: {
        display: "flex",
        flexDirection: "row",
    },
    badgeItem: { width: 50, height: 50 },
});

export default Badges;
