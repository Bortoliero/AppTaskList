import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskList from './screens/TaskList';
import AddTask from './screens/AddTask';
import TaskDetail from './screens/TaskDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TaskList"
          component={TaskList}
          options={{ title: 'Lista de Tarefas' }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTask}
          options={{ title: 'Adicionar Tarefa' }}
        />
        <Stack.Screen
          name="TaskDetail"
          component={TaskDetail}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
