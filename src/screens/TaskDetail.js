import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const TaskDetail = () => {
  const [task, setTask] = useState({});
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const taskId = route.params.id;
    const data = {
      id: 1,
      title: 'Tarefa 1',
      description: 'Descrição da tarefa 1',
      status: false,
    };
    setTask(data);
  }, []);

  const handleSaveTask = () => {
    console.log('Tarefa atualizada:', task);

    navigation.goBack();
  };

  const deleteTask = () => {
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
            console.log('Tarefa excluída:', task.id);

            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>

      <TextInput
        style={styles.input}
        value={task.description}
        onChangeText={(text) => setTask({ ...task, description: text })}
        multiline
        numberOfLines={4}
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={task.status}
          onValueChange={() => setTask({ ...task, status: !task.status })}
        />
        <Text style={styles.checkboxLabel}>Concluída</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Salvar" onPress={handleSaveTask} style={styles.button} />
        <Button title="Excluir" onPress={deleteTask} style={styles.button} color="red" />
      </View>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
  },
});

export default TaskDetail;
