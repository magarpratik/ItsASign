import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { allUsers } from "../utils/api";

const Leaderboard = () => {
  const [usersArr, setUsersArr] = useState([]);

  useEffect(() => {
    allUsers().then((data) => {
      setUsersArr(data.users);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={usersArr}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.name}>{item.name}</Text>

            <Text style={styles.xp}>{item.progress.total_xp}xp</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  name: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: "#004346",
    color: "white",
    margin: 12,
    textAlign: "center",
  },
  xp: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: "grey",
    color: "white",
    margin: 12,
    textAlign: "center",
  },
});

export default Leaderboard;
