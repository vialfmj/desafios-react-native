
import { TaskList } from '../../../components'
import { useTaskContext } from '../../context'

const TaskListContainer = ({ filter }) => {
    const { tasks } = useTaskContext()
    const filterList = (list, condition) => {
        if (!list || !condition) return
        if (condition === 'none') return list
        if (condition === 'done') return list.filter(task => task.done === true)
        if (condition === 'nodone') return list.filter(task => task.done === false)
    }

    return <TaskList
        tasksToShow={filterList(tasks, filter)} />
}

export default TaskListContainer