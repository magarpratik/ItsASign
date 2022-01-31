import React, { useEffect, useState, useContext } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { getLessons, getLessonsCompleted } from "../utils/api";
import { UserContext } from "../utils/userContext";
import Badges from "./Badges";

const Home = ({ navigation: { navigate } }) => {
  const { username } = React.useContext(UserContext);
  console.log(username);

  const [testLessons, setTestLessons] = useState([{ course_topic: "test" }]);
  const [completedLessons, setCompletedLessons] = useState([1]);

  useEffect(() => {
    getLessons().then((lessons) => setTestLessons(lessons));
    getLessonsCompleted(username).then((response) => {
      // setCompletedLessons(response.completed_lessons);
    });
  }, [testLessons[0].course_topic, completedLessons.length]);

  const Item = ({ title, id, locked }) => (
    <Pressable
      onPress={() => {
        console.log(title);
        console.log(id);
        navigate("Lesson");
      }}
      disabled={locked}
    >
      <View
        style={{
          backgroundColor: locked ? "grey" : "#5cb85c",
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
          borderRadius: 15,
        }}
      >
        <Text style={styles.lessonText}>{title}</Text>
      </View>
    </Pressable>
  );

  const renderItem = ({ item }) => (
    <Item
      title={`Lesson ${item.lesson_number}`}
      
      id={item._id}
      locked={!completedLessons.includes(item.lesson_number)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available lessons</Text>
      <FlatList
        data={testLessons}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{
          height: "60%",
          backgroundColor: "eggshell",
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
    textAlign: "center",
    marginBottom: 0,
  },
});

export default Home;
