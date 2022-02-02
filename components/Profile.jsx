import { useEffect, useState, useContext } from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Button,
    Pressable,
} from "react-native";
import { Bar } from "react-native-progress";
import { UserContext, LoadingContext } from "../utils/userContext";
import Badges from "./Badges";
import React from "react";
import {
    allAvatars,
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
} from "../assets/avatars/avatars-export";
import { getUser, patchUserDetails } from "../utils/api";

const Profile = ({ setAvatarIndex }) => {
    const { username } = React.useContext(UserContext);
    const { isLoading, setIsLoading } = React.useContext(LoadingContext);
    const [level, setLevel] = useState(0);
    const [progress, setProgress] = useState(0);
    const [totalXP, setTotalXP] = useState(0);
    const [user, setUser] = useState({});
    const [avatarX, setAvatarX] = useState(1);
    useEffect(() => {
        setAvatarIndex(avatarX);
    }, [avatarX]);
    useEffect(() => {
        setIsLoading(true);
        setTotalXP(153);
        setLevel(Math.floor(totalXP / 100));
        setProgress((totalXP % 100) / 100);
        getUser(username).then((res) => {
            console.log(res.picture);
            setUser(res);
            const index = res.picture[6];
            setAvatarX(index - 1);
            console.log(avatarX);
            setIsLoading(false);
        });
    }, [totalXP]);

    const showNext = () => {
        if (avatarX < 6) {
            setAvatarX((curAvatarX) => {
                return curAvatarX + 1;
            });
        } else {
            setAvatarX(0);
        }
    };

    const patchAvatar = () => {
        patchUserDetails(
            username,
            null,
            null,
            null,
            `avatar${avatarX + 1}`
        ).then((res) => {
            console.log(res);
        });
    };

  const patchAvatar = () => {
    patchUserDetails(username, null, null, null, `avatar${avatarX + 1}`).then(
      (res) => {
        console.log(res);
      }
    );
  };

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View style={styles.container}>
          <Image source={allAvatars[avatarX]} style={styles.image} />
          <View style={styles.container}>
            <Pressable
              style={styles.button}
              onPress={() => {
                showNext();
              }}
            >
              <Text style={styles.buttonText}>Next Avatar</Text>
            </Pressable>
            <Pressable onPress={patchAvatar} style={styles.button}>
              <Text style={styles.buttonText}>select avatar</Text>
            </Pressable>
          </View>
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
  image: { width: 200, height: 300, marginTop: 30, marginBottom: 20 },
  bar: {
    marginHorizontal: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#004346",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
  },

});

export default Profile;
