import { View, Text, StyleSheet } from "react-native";

export default function CardUser({ user }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Nome: <Text style={styles.value}>{user.name}</Text></Text>
      <Text style={styles.label}>E-mail: <Text style={styles.value}>{user.email}</Text></Text>
      <Text style={styles.label}>Company: <Text style={styles.value}>{user.company.name}</Text></Text>
      <Text style={styles.label}>Zipcode: <Text style={styles.value}>{user.address.zipcode}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F2F2F2",
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // para Android
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    fontSize: 14,
    color: "#333",
  },
  value: {
    fontWeight: "normal",
    color: "#555",
  },
});
