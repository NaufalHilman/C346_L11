import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import datasource from "./Data.js";
import { Alert } from "react-native";

const Edit = ({ navigation, route }) => {
    const [letter, setLetter] = useState(route.params.key);

    return (
        <View style={styles.container}>

            <Text style={styles.label}>Letter:</Text>

            <TextInput
                style={styles.input}
                maxLength={1}
                value={letter}
                onChangeText={(value) => setLetter(value)}
            />

            <View style={styles.row}>

                <View style={styles.button}>
                    <Button
                        title='Save'
                        onPress={() => {
                            let indexnum = route.params.type === "Vowels" ? 0 : 1;

                            datasource[indexnum].data[route.params.index].key = letter;
                            navigation.navigate("Home");
                        }}
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        title='Delete'
                        onPress={() => {
                            let indexnum = route.params.type === "Vowels" ? 0 : 1;

                            Alert.alert(
                                "Are you sure?",
                                "This is permanent",
                                [
                                    {
                                        text: "Yes",
                                        onPress: () => {
                                            datasource[indexnum].data.splice(route.params.index, 1);
                                            navigation.navigate("Home");
                                        }
                                    },
                                    { text: "No" }
                                ]
                            );
                        }}
                    />
                </View>

            </View>

        </View>
    );
};


export default Edit;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 30
    },
    label: {
        fontSize: 16,
        marginBottom: 5
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 20
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        flex: 1,
        marginRight: 10
    }
});
