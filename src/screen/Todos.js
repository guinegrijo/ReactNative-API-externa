import { View, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import api from "../services/axios";
import CardTodo from "../components/CardTodo";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const [todosRes, usersRes] = await Promise.all([
        api.getTodos(),
        api.getUsers(),
      ]);

      const todos = todosRes.data;
      const users = usersRes.data;

      // Adiciona userName a cada todo
      const todosWithUserName = todos.map((todo) => {
        const user = users.find((u) => u.id === todo.userId);
        return {
          ...todo,
          userName: user ? user.name : "Desconhecido",
        };
      });

      setTodos(todosWithUserName);
    } catch (error) {
      console.log("Erro ao buscar dados:", error);
    }
  }

  const renderItem = ({ item }) => <CardTodo todo={item} />;

  return (
    <View>
      <Header />
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContent: {
    padding: 16,
    alignItems: "center",
  },
});