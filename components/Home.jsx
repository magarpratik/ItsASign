import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { LoadingContext, UserContext } from "../utils/userContext";
import Badges from "./Badges";
import { getLessons, getLessonsCompleted, getUser } from "../utils/api";

const Home = ({ navigation: { navigate }, setAvatarIndex }) => {
  const { username } = React.useContext(UserContext);

  const { isLoading, setIsLoading } = React.useContext(LoadingContext);

  const [lessons, setLessons] = useState([{ course_topic: "test" }]);
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    getUser(username).then((user) => {
      setAvatarIndex(Number(user.picture.at(-1)) - 1);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getLessons().then((lessonsArray) => {
      setLessons(lessonsArray);
    });
    getLessonsCompleted(username).then((response) => {
      setCompletedLessons(response.completed_lessons);

      setIsLoading(false);
    });
  }, [lessons[0].course_topic, completedLessons.length]);

  const Item = ({ title, id, locked }) => (
    <Pressable
      onPress={() => {
        navigate("Lesson");
      }}
      disabled={locked}
    >
      <View
        style={{
          backgroundColor: locked ? "grey" : "#004346",
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
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View style={styles.container}>
          <Text style={styles.header}>Available lessons</Text>
          <FlatList
            data={lessons}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={{
              height: "60%",
              backgroundColor: "eggshell",
              flexGrow: 0,
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#F0F7F4",
  },
  lessonText: {
    fontSize: 24,
    color: "white",
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
