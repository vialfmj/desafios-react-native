
import {View, Text} from 'react-native'
import { styles } from '../styles/styles';
import { useTaskContext } from '../components/context';
import NavBar from '../components/navbar';
import TaskListContainer from '../components/tasks/container';


const NoDoneScreen = ({navigation}) => {
    const {tasks, setTasks} = useTaskContext()

    return (
        <View style={styles.container}>
          <NavBar navigation={navigation} />
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