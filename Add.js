import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import datasource from "./Data.js";
import { Picker } from "@react-native-picker/picker";

const Add = ({navigation}) => {
    // State for the letter (TextInput)
    const [letter, setLetter] = useState("");

    // State for the type (Picker)
    const [type, setType] = useState("Vowels"); // default value

    return (
        <View style={styles.container}>

            {/* LABEL */}
            <Text style={styles.label}>Letter:</Text>

            {/* TEXT INPUT */}
            <TextInput
                style={styles.input}
                maxLength={1}
                value={letter}
                onChangeText={(value) => setLetter(value)}
            />

            {/* PICKER */}
            <Picker
                selectedValue={type}
                onValueChange={(value) => setType(value)}
                style={styles.picker}
            >
                <Picker.Item label="Vowels" value="Vowels" />
                <Picker.Item label="Consonants" value="Consonants" />
            </Picker>

            {/* BUTTON */}
            <Button
                title='Submit'
                onPress={() => {
                    let item = { key: letter };
                    let indexnum = 1;
                    if (type == "Vowels") {
                        indexnum = 0;
                    }
                    datasource[indexnum].data.push(item);
                    navigation.navigate("Home");
                }
            }
            />
        </View>
    );
};

export default Add;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 30,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    picker: {
        marginBottom: 20,
    },
});
