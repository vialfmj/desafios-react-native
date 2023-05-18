import {useContext , createContext, useState} from 'react'

const taskContext = createContext(null)

export const useTaskContext = () => useContext(taskContext)

const TaskContextProvider = ({children}) => {
    const [tasks, setTasks] = useState([])
    return <taskContext.Provider value ={{
        tasks,
        setTasks
    }} >
        {children}
    </taskContext.Provider>
}

export default TaskContextProvider

