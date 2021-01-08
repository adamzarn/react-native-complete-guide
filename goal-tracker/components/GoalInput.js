import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState("");
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(true);

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
        setIsAddButtonDisabled(enteredText == "")
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal("");
        setIsAddButtonDisabled(true)
    }

    const cancelGoalAdditionHandler = () => {
        props.onCancel()
        setEnteredGoal("");
        setIsAddButtonDisabled(true)
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button} backgroundColor="red">
                        <Button
                            title = "CANCEL"
                            color = "white"
                            onPress={cancelGoalAdditionHandler} />
                    </View>
                    <View style={styles.button} backgroundColor="blue">
                        <Button
                            title="ADD"
                            color = "white"
                            disabled = {isAddButtonDisabled}
                            onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        borderColor: "black",
        borderWidth: 1, padding: 10,
        width: "80%",
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%"
    },
    button: {
        width: "40%",
        borderRadius: 4
    }
});

export default GoalInput;