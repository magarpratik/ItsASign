import {
  FlatList,
  Image,
  Pressable,
  SectionList,
  StatusBar,
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
    },
    {
      id: "2",
      text: "Lesson 2",
    },
    {
      id: "3",
      text: "Lesson 3",
    },
    {
      id: "4",
      text: "Lesson 4",
    },
    {
      id: "5",
      text: "Lesson 5",
    },
    {
      id: "6",
      text: "Lesson 6",
    },
    {
      id: "7",
      text: "Lesson 7",
    },
    {
      id: "8",
      text: "Lesson 8",
    },
    {
      id: "9",
      text: "Lesson 9",
    },
  ];

  const Item = ({ title, id }) => (
    <Pressable
      onPress={() => {
        console.log(title);
        console.log(id);
      }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
        },
        styles.wrapperCustom,
      ]}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );

  const renderItem = ({ item }) => <Item title={item.text} id={item.id} />;

  return (
    <View>
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
        <Text style={{ fontSize: 40 }}>Badges</Text>

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
  item: {
    backgroundColor: "#559955",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 28,
  },
  header: {
    fontSize: 40,
    paddingTop: 15,
    paddingBottom: 15,
  },
  badgesContainer: {
    backgroundColor: "yellow",
    margin: 10,
  },
  badgeItem: { width: 50, height: 50 },
  badges: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Home;
