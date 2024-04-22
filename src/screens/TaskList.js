import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TaskList = () => {
  const [tasks, setTasks] = useState([]); 
  const navigation = useNavigation(); 

  const fetchTasks = async () => {
    const data = [
      { id: 1, title: 'Tarefa 1', description: 'Descrição da tarefa 1', status: false },
      { id: 2, title: 'Tarefa 2', description: 'Descrição da tarefa 2', status: true },
      { id: 3, title: 'Tarefa 3', description: 'Descrição da tarefa 3', status: false },
    ];
    setTasks(data);
  };

  const toggleTaskStatus = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    Alert.alert(
      'Confirmar exclusão',
      'Deseja realmente excluir esta tarefa?',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            const updatedTasks = tasks.filter((task) => task.id !== id);
            setTasks(updatedTasks);
          },
        },
      ]
    );
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('TaskDetail', { id: item.id, title: item.title })}
    >
      <View style={styles.taskRow}>
        <CheckBox
          checked={item.status}
          onValueChange={() => toggleTaskStatus(item.id)}
        />
        <Text style={styles.taskTitle}>{item.title}</Text>
      </View>
      <Text style={styles.taskDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
      />

      <Button title="Adicionar Tarefa" onPress={() => navigation.navigate('AddTask')} style={styles.addButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskList: {
    flex: 1,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CheckBox: {
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskDescription: {
    fontSize: 16,
  },
  addButton: {
    padding: 10,
    backgroundColor: '#007bff',
    color: '#fff',
    marginTop: 2
  }
});

export default TaskList;