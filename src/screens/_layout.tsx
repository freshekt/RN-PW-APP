import { MD3LightTheme as DefaultTheme, PaperProvider} from "react-native-paper";
import {Slot} from "expo-router";
import { Provider } from 'react-redux'
import store from "../shared/store";
export const theme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        background: '#3c3c3c',
        primary: '#222222',
        secondary: '#cecece'

    },
    buttons: {
        borderRadius: 10
    }
};
export default function RootLayout() {
    return (<PaperProvider theme={theme}>
        <Provider store={store}>
            <Slot/>
        </Provider>
    </PaperProvider>)
}