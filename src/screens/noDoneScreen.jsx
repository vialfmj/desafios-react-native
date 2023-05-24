
import { View, Text } from 'react-native'
import { styles } from '../styles/styles';
import { useTaskContext } from '../components/context';
import { NavBar, TaskListContainer } from '../components'


const NoDoneScreen = ({ navigation }) => {
  const { tasks, setTasks } = useTaskContext()

  return (
    <View style={styles.container}>
      <View style={styles.tasksListContainer}>
        <TaskListContainer
          tasks={tasks}
          setTasks={setTasks}
          filter={'nodone'}
        />
      </View>

    </View>
  );

}

export default NoDoneScreen