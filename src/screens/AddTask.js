import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const AddTask = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSaveTask = () => {
    if (title.trim() === '' || description.trim() === '') {
      alert('Preencha todos os campos para salvar a tarefa!');
      return;
    }

    console.log('Tarefa salva:', { title, description });

    setTitle('');
    setDescription('');

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Tarefa</Text>

      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline
        numberOfLines={4}
      />

      <Button title="Salvar" onPress={handleSaveTask} style={styles.button} />
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
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    color: '#fff',
  },
});

export default AddTask;
