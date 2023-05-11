import { Text } from "react-native"
import TaskList from "../list"


const TaskListContainer = ({ tasks, setTasks }) => {


    return <TaskList
        setTasks={setTasks}
        tasks={tasks} />
}

export default TaskListContainer