import { Text } from "react-native"
import TaskList from "../list"


const TaskListContainer = ({ tasks, setTasks, filter }) => {
    const filterList = (list, condition) => {
        if (!list || !condition) return
        if(condition === 'none') return list
        if (condition === 'done') return list.filter(task => task.done === true)
        if (condition === 'nodone') return list.filter(task => task.done === false)
    }

    return <TaskList
        tasksToShow={filterList(tasks, filter)}
        setTasks={setTasks}
        tasks={tasks} />
}

export default TaskListContainer