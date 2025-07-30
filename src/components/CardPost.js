import { View, Text, StyleSheet } from "react-native";

export default function CardPost({ title, body, userName }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text style={styles.user}>Autor: {userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    marginTop: 8,
    fontSize: 14,
  },
  user: {
    marginTop: 12,
    fontStyle: "italic",
    color: "gray",
  },
});
