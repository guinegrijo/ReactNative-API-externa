import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Bem vindo ao HOME</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Posts")}
          style={styles.button1}
        >
          <Text style={styles.buttonText}>Posts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Todos")}
          style={styles.button2}
        >
          <Text style={styles.buttonText}>Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Users")}
          style={styles.button3}
        >
          <Text style={styles.buttonText}>Users</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
  },
  button1: {
    backgroundColor: "#8B0000",
    padding: 12,
    borderRadius: 8,
    width: "60%",
    alignItems: "center",
    marginBottom: 16,
  },
  button2: {
    backgroundColor: "#00008B",
    padding: 12,
    borderRadius: 8,
    width: "60%",
    alignItems: "center",
    marginBottom: 16,
  },
  button3: {
    backgroundColor: "#006400",
    padding: 12,
    borderRadius: 8,
    width: "60%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});
