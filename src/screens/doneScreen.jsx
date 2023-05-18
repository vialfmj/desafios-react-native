import { View, Text } from "react-native";
import { styles } from "../styles/styles";

import { useTaskContext } from "../components/context";

import {NavBar, TaskListContainer} from '../components'

const DoneScreen = ({navigation}) => {
    const {tasks, setTasks} = useTaskContext()
    return (
        <View style={styles.container}>
          <NavBar navigation={navigation} />
          <View style={styles.tasksListContainer}>
            <TaskListContainer
              tasks={tasks}
              setTasks={setTasks}
              filter={'done'}
            />
          </View>
    
        </View>
      );
}

export default DoneScreen