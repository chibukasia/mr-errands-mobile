import { ScrollView, Text, StyleSheet, View } from "react-native";

export default function AboutUs() {
  return (
    <ScrollView>
      <Text>About Us</Text>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>About Page</Text>
          <Text style={styles.subtitle}>About Us Page</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
