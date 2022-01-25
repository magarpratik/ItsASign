import { FlatList, SectionList, StatusBar, StyleSheet, Text, View } from "react-native";

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
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.text} />;

  return (
    <View styles={styles.container}>
      <FlatList
        data={lessons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#559955",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Home;
