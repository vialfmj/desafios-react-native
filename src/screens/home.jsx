import { View, Text } from "react-native";


import { styles } from "../styles/styles";
import NavBar from "../components/navbar";

import TaskListContainer from "../components/tasks/container";
import TaskInput from "../components/input";
import { useTaskContext } from "../components/context";


const HomeScreen = ({ navigation }) => {
  const { tasks, setTasks } = useTaskContext()
  return (

    <View style={styles.container}>
      <NavBar navigation={navigation} />
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