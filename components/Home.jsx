import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import { Navigate } from "react-router";
import Badges from "./Badges";

const Home = ({ navigation: { navigate } }) => {
    const lessons = [
        {
            id: "1",
            text: "Lesson 1",
            locked: false,
        },
        {
            id: "2",
            text: "Lesson 2",
            locked: false,
        },
        {
            id: "3",
            text: "Lesson 3",
            locked: true,
        },
        {
            id: "4",
            text: "Lesson 4",
            locked: true,
        },
        {
            id: "5",
            text: "Lesson 5",
            locked: true,
        },
    ];

    const Item = ({ title, id, locked }) => (
        <Pressable
            onPress={() => {
                console.log(title);
                console.log(id);
                navigate("Lesson");
            }}
            disabled={locked}
            style={({ pressed }) => [
                {
                    id: "1",
                    text: "Lesson 1",
                    locked: false,
                },
                styles.wrapperCustom,
            ]}
        >
            <View
                style={{
                    backgroundColor: locked ? "grey" : "#5cb85c",
                    padding: 20,
                    marginVertical: 8,
                    marginHorizontal: 16,
                }}
            >
                <Text style={styles.lessonText}>{title}</Text>
            </View>
        </Pressable>
    );

    const renderItem = ({ item }) => (
        <Item title={item.text} id={item.id} locked={item.locked} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Available lessons</Text>
            <FlatList
                data={lessons}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={{
                    height: "60%",
                    backgroundColor: "red",
                    flexGrow: 0,
                }}
            />
            <Badges></Badges>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    lessonText: {
        fontSize: 24,
    },
    header: {
        fontSize: 32,
        paddingTop: 15,
        paddingBottom: 15,
    },
});

export default Home;
