import * as React from 'react';
import {PaperProvider, TextInput} from "react-native-paper";
import { View} from "react-native";
import {useState} from "react";
export default function Login(): React.JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    return (
        <PaperProvider>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: 300}}>
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </View>
            </View>
        </PaperProvider>
    );
}