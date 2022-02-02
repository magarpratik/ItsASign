import { useEffect, useState, useContext } from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { Bar } from "react-native-progress";
import { UserContext } from "../utils/userContext";
import Badges from "./Badges";
import React from "react";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
} from "../assets/avatars/avatars-export";
import { getUser } from "../utils/api";

const Profile = () => {
  const { username } = useContext(UserContext);

  const [avatarX, setAvatarX] = useState("");
  console.log(avatarX);
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser(username).then((res) => {
      setUser(res);
      setAvatarX(res.picture);
    });
  }, []);

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

  let counter = 1;
  const nextAvatar = () => {
    if (counter < 8) {
      counter += 1;
      setAvatarX(`avatar${counter}`);
    } else {
      counter = 1;
      setAvatarX(`avatar${counter}`);
    }
  };
  console.log(user);
  return (
    <View style={styles.container}>
      <Image source={avatarX} style={styles.image} />
      <Button title=">>" onPress={nextAvatar} />
      <Text>{username}</Text>
      <View style={styles.bar}>
        <Bar progress={progress} width={250} height={20} />
        <Text>
          Level {level} - {progress * 100}/100
        </Text>
      </View>
      <Badges totalXP={totalXP} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: { width: 200, height: 300, marginTop: 30, marginBottom: 100 },
  bar: {
    marginHorizontal: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
});

export default Profile;
