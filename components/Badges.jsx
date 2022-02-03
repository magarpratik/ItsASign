import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";

const Badges = ({ totalXP }) => {
  const handlePress = () => {
    if (totalXP > 999) {
      Alert.alert("You're number 1'!");
    } else if (totalXP > 900) {
      Alert.alert("Yu have reached level 9!");
    } else if (totalXP > 800) {
      Alert.alert("Almost an expert!");
    } else if (totalXP > 600) {
      Alert.alert("You have reached level 6!");
    } else if (totalXP > 500) {
      Alert.alert("You're a star'!");
    } else if (totalXP > 400) {
      Alert.alert("You have reached level 4!");
    } else if (totalXP > 300) {
      Alert.alert("You are on a row!");
    } else if (totalXP > 100) {
      Alert.alert("You have reached level 1. Good job!");
    } else if (totalXP > 30) {
      Alert.alert("You have made a start!");
    }
  };

  return (
    <View style={styles.badgesContainer}>
      <Text style={{ fontSize: 32, textAlign: "center" }}>Badges</Text>

      <View style={styles.badges}>
        <Pressable onPress={handlePress}>
          <View>
            {totalXP > 30 ? (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/blueStar.png")}
              />
            ) : (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/hiddenBadge.png")}
              />
            )}
          </View>
        </Pressable>
        <Pressable onPress={handlePress}>
          <View>
            {totalXP > 100 ? (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/blue1.png")}
              />
            ) : (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/hiddenBadge.png")}
              />
            )}
          </View>
        </Pressable>
        <Pressable onPress={handlePress}>
          <View>
            {totalXP > 300 ? (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/blueThumb.png")}
              />
            ) : (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/hiddenBadge.png")}
              />
            )}
          </View>
        </Pressable>
        <Pressable onPress={handlePress}>
          <View>
            {totalXP > 400 ? (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/redThumb.png")}
              />
            ) : (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/hiddenBadge.png")}
              />
            )}
          </View>
        </Pressable>
        <Pressable onPress={handlePress}>
          <View>
            {totalXP > 500 ? (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/redStar.png")}
              />
            ) : (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/hiddenBadge.png")}
              />
            )}
          </View>
        </Pressable>
        <Pressable onPress={handlePress}>
          <View>
            {totalXP > 600 ? (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/purpleStar.png")}
              />
            ) : (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/hiddenBadge.png")}
              />
            )}
          </View>
        </Pressable>
        <Pressable onPress={handlePress}>
          <View>
            {totalXP > 800 ? (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/purpleThumb.png")}
              />
            ) : (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/hiddenBadge.png")}
              />
            )}
          </View>
        </Pressable>
        <Pressable onPress={handlePress}>
          <View>
            {totalXP > 900 ? (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/purple1.png")}
              />
            ) : (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/hiddenBadge.png")}
              />
            )}
          </View>
        </Pressable>
        <Pressable onPress={handlePress}>
          <View>
            {totalXP > 999 ? (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/red1.png")}
              />
            ) : (
              <Image
                style={styles.badgeItem}
                source={require("../assets/badges/hiddenBadge.png")}
              />
            )}
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  badgesContainer: {
    marginTop: 10,
    marginHorizontal: 5,
  },
  badges: {
    display: "flex",
    flexDirection: "row",
  },
  badgeItem: { width: 50, height: 50 },
});

export default Badges;
