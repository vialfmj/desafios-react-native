import { Button, Text, View } from "react-native"
import { taskListItemStyle } from "./styles"
import { theme } from "../../../constants"


const TaskListItem = ({ task, doneToggle, deleteHandler }) => {


    if (task.done)

        return <>
            <View style={taskListItemStyle.container}>
                <View style={taskListItemStyle.textContainer}>
                    <Text style={taskListItemStyle.text}>{task.activity}</Text>
                </View>
                <Button
                    onPress={() => doneToggle(task.id)}
                    title="UNDO"
                    color={theme.secondary}
                />
                <Button
                    onPress={() => deleteHandler(task.id)}
                    title="delete"
                    color={theme.secondary}
                />
            </View>
        </>
    return <>
        <View style={taskListItemStyle.container}>
            <View style={taskListItemStyle.textContainer}>
                <Text style={taskListItemStyle.text}>{task.activity}</Text>
            </View>
            <Button
                onPress={() => doneToggle(task.id)}
                title="DONE"
                color={theme.secondary}
            />
            <Button
                onPress={() => deleteHandler(task.id)}
                title="delete"
                color={theme.secondary}
            />
        </View>
    </>
}

export default TaskListItem