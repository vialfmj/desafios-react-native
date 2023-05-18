import { Text, View, TouchableOpacity } from "react-native"
import { style } from "./styles"
import { theme } from "../../../constants"
import { AntDesign } from '@expo/vector-icons';
import { useTaskContext } from "../../context";


const TaskListItem = ({ task, deleteHandler }) => {

    const { tasks, setTasks } = useTaskContext()

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


    if (task.done) return (
        <>
            <View style={style.container}>
                <View style={style.textContainer}>
                    <Text style={style.text}>{task.activity}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => doneToggle(task.id)}
                    style={style.button}>
                    <AntDesign name="checkcircle" size={40} color={theme.secondary} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => deleteHandler(task.id)}
                    style={style.button}>
                    <AntDesign name="delete" size={40} color={theme.secondary} />
                </TouchableOpacity>
            </View>
        </>
    )
    return (

        <>
            <View style={style.container}>
                <View style={style.textContainer}>
                    <Text style={style.text}>{task.activity}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => doneToggle(task.id)}
                    style={style.button}>
                    <AntDesign name="checkcircleo" size={40} color={theme.secondary} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => deleteHandler(task.id)}
                    style={style.button}>
                    <AntDesign name="delete" size={40} color={theme.secondary} />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default TaskListItem