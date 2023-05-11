
import { useState } from 'react';
import { Text, View } from 'react-native';

import { styles } from './src/styles/styles'

import TaskListContainer from './src/components/tasks/container';
import TaskInput from './src/components/input';

export default function App() {


  const [tasks, setTasks] = useState([])




  return (


    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>TaskListApp</Text>
      </View>
      <View style={styles.inputContainer}>
        <TaskInput 
        tasks={tasks}
        setTasks={setTasks} />
      </View>
      <View style={styles.tasksListContainer}>
        <TaskListContainer 
        tasks={tasks} 
        setTasks={setTasks}
        />
      </View>

    </View>
  );
}


