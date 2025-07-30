import { View, ScrollView } from "react-native";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import CardPost from "../components/CardPost";
import api from "../services/axios";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      // Faz as duas requisições simultaneamente
      const [postsResponse, usersResponse] = await Promise.all([
        api.getPosts(),
        api.getUsers(),
      ]);

      const posts = postsResponse.data;
      const users = usersResponse.data;

      // Associa o nome do usuário a cada post
      const postsComUserName = posts.map((post) => {
        const user = users.find((u) => u.id === post.userId);
        return {
          ...post,
          userName: user ? user.name : "Usuário desconhecido",
        };
      });

      setPosts(postsComUserName);
    } catch (error) {
      console.log("Erro ao buscar dados:", error);
    }
  }

  return (
    <View>
      <Header />
      <ScrollView>
        {posts.map((post) => (
          <CardPost
            key={post.id}
            title={post.title}
            body={post.body}
            userName={post.userName}
          />
        ))}
      </ScrollView>
    </View>
  );
}