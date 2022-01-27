import { Image, StyleSheet, Text, View } from "react-native";
import { Bar } from "react-native-progress";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://api.multiavatar.com/helloworld.png",
        }}
        style={styles.image}
      />
      <View style={styles.bar}>
        <Bar progress={0.3} width={250} height={20} />
        <Text>Level 1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: { width: 300, height: 300 },
  bar: {
    marginHorizontal: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Profile;
