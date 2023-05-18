
import { useState } from "react";
import { Text, FlatList } from "react-native"
import { CustomModal, TaskListItem } from '../../../components'
import { useTaskContext } from "../../context";


const TaskList = ({ tasksToShow }) => {

    const { tasks, setTasks } = useTaskContext()

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

    const idExtractor = (item => item.id)


    if (!tasksToShow || tasksToShow.length < 1) return <Text>no tasks</Text>
    return <>

        <FlatList
            data={tasksToShow}
            keyExtractor={idExtractor}
            renderItem={({ item }) => <TaskListItem task={item} deleteHandler={onHandlerEvent} />}

        />
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