import {  TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { useState } from "react"
import { theme } from "../../constants"
import { AntDesign } from '@expo/vector-icons';
import { useTaskContext } from "../context"
const TaskInput = () => {

    const { tasks, setTasks } = useTaskContext()

    const [text, setText] = useState('')

    const generateId = () => Date.parse(new Date())
    const addTask = (activity) => {

        if (!activity) return

        const newTask = {
            activity: activity,
            done: false,
            id: generateId()
        }
        setText('')
        setTasks([...tasks, newTask])
    }

    return <>
        <View style={styles.container}>

            <TextInput
                style={styles.textInput}
                onChangeText={text => setText(text)}
                placeholder={"add a task"}
                value={text}
            />

            <TouchableOpacity
                onPress={() => addTask(text)}>
                <AntDesign name="plussquare" size={40} color={theme.tertiary} />
            </TouchableOpacity>
        </View>
    </>
}

export default TaskInput