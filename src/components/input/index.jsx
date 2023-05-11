import { Button, Text, TextInput, View } from "react-native"
import styles from "./styles"
import { useState } from "react"
import { theme } from "../../constants"
const TaskInput = ({ tasks, setTasks }) => {

    const [text, setText] = useState('')
    const addTask = (activity) => {

        if (!activity) return

        const newTask = {
            activity: activity,
            done: false,
            id: tasks.length + 1
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
            <Button
                onPress={() => addTask(text)}
                title="add"
                color={theme.primary}
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    </>
}

export default TaskInput