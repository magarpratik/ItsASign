import { useEffect, useState, useContext } from "react";
import { Image, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Bar } from "react-native-progress";
import { UserContext, LoadingContext } from "../utils/userContext";
import Badges from "./Badges";
import React from "react";

const Profile = () => {
  const { username } = React.useContext(UserContext);
  const { isLoading, setIsLoading } = React.useContext(LoadingContext);
  const [level, setLevel] = useState(0);
  const [progress, setProgress] = useState(0);
  const [totalXP, setTotalXP] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setTotalXP(153);
    setIsLoading(false);
  }, []);
  useEffect(() => {
    setLevel(Math.floor(totalXP / 100));
    setProgress((totalXP % 100) / 100);
  }, [totalXP]);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
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
            <Text>
              Level {level} - {progress * 100}/100
            </Text>
          </View>
          <Badges totalXP={totalXP} />
        </View>
      )}
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
