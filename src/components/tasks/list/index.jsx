
import { useState } from "react";
import { Text, FlatList } from "react-native"
import TaskListItem from "../item"
import CustomModal from "../../modal";


const TaskList = ({ tasks, setTasks, tasksToShow }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null)

    const onHandlerEvent = (id) => {
        setModalVisible(!modalVisible);
        const selectedEvent = tasks.find(task => task.id === id);
        setSelectedEvent(selectedEvent);
    }

    const onHandlerCancelModal = () => {
        setModalVisible(!modalVisible);
        setSelectedEvent(null);
    }

    const onHandlerDeleteEvent = (id) => {
        const newTasks = tasks.filter(task => task.id !== id)
        setTasks(newTasks);
        setModalVisible(!modalVisible);
    }


    const doneToggle = (idTask) => {
        if (!idTask) return
        let newTasks = [...tasks]
        newTasks.map(task => {
            if (task.id === idTask) {
                task.done = !task.done
                return task
            }
        })
        setTasks(newTasks)
    }

    const idExtractor = (item => item.id)


    if (!tasksToShow || tasksToShow.length < 1) return <Text>no tasks</Text>
    return <>

        <FlatList
            data={tasksToShow}
            keyExtractor={idExtractor}
            renderItem={({ item }) => <TaskListItem task ={item} doneToggle={doneToggle} deleteHandler={onHandlerEvent}/>}

        />

        {/*         {
            tasks.map(task =>
                <TaskListItem
                    task={task}
                    key={task.id}
                    doneToggle={doneToggle}
                    deleteHandler={onHandlerEvent}
                />
            )
        } */}
        <CustomModal
            isVisible={modalVisible}
            animationType='slide'
            onCancel={onHandlerCancelModal}
            onDelete={onHandlerDeleteEvent}
            selectedEvent={selectedEvent}
        />
    </>
}

export default TaskList