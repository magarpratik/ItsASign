import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MenuBar from "./MenuBar";

const Home = () => {
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
      }}
      disabled={locked}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
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
      <MenuBar />
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

export default Home;
