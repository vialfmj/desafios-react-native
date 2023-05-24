import { View } from "react-native";


import { styles } from "../styles/styles";
import { useTaskContext } from "../components/context";
import { NavBar, TaskInput , TaskListContainer} from "../components";



const HomeScreen = ({ navigation }) => {
  const { tasks, setTasks } = useTaskContext()
  return (

    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TaskInput
          tasks={tasks}
          setTasks={setTasks} />
      </View>
      <View style={styles.tasksListContainer}>
        <TaskListContainer
          tasks={tasks}
          setTasks={setTasks}
          filter={'none'}
        />
      </View>

    </View>
  );
}

export default HomeScreen