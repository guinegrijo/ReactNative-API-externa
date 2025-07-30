import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';

export default function CardTodo({ todo }) {
  const [isChecked, setChecked] = useState(todo.completed);

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}> {todo.title}</Text>
        <Text style={styles.user}> {todo.userName}</Text>
      </View>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  user: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  checkbox: {
    marginLeft: 12,
  },
});
