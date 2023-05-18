import { View, Text } from "react-native";
import { styles } from "../styles/styles";
import NavBar from "../components/navbar";
import TaskListContainer from "../components/tasks/container";
import { useTaskContext } from "../components/context";

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