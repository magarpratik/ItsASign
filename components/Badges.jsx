import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";

const Badges = ({ totalXP }) => {
  const handlePress = () => {
    return Alert.alert("You have reached level 1. Good job!");
  };

  return (
    <View style={styles.badgesContainer}>
      <Text style={{ fontSize: 32, textAlign: "center" }}>Badges</Text>

      <View style={styles.badges}>
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
        <View>
          {totalXP > 200 ? (
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
        <View>
          {totalXP > 300 ? (
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
