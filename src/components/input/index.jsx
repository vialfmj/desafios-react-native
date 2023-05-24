import { TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { theme } from "../../constants"
import { AntDesign } from '@expo/vector-icons';

import { useTextInput } from "../hooks";
import { useTaskContext } from "../context"
const TaskInput = () => {

    const { tasks, setTasks } = useTaskContext()

    const { text, textHandler, cleanText, validateText } = useTextInput()

    const generateId = () => Date.parse(new Date())
    const addTask = (activity) => {

        if (!activity) return

        const newTask = {
            activity: activity,
            done: false,
            id: generateId()
        }
        cleanText()
        setTasks([...tasks, newTask])
    }

    onChangeHandler = (text) => {
        textHandler(text)
    }

    return <>
        <View style={styles.container}>

            <TextInput
                style={styles.textInput}
                onChangeText={onChangeHandler}
                placeholder={"add a task"}
                value={text}
            />

            {
                (text === '') ? <></>
                    : <TouchableOpacity
                        onPress={() => addTask(text)}>
                        <AntDesign name="plussquare" size={40} color={theme.tertiary} />
                    </TouchableOpacity>

            }


        </View>
    </>
}

export default TaskInput