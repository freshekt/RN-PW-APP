import * as React from 'react';
import {Button, MD3LightTheme as DefaultTheme, PaperProvider, TextInput} from "react-native-paper";
import {View} from "react-native";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
});

const theme = {
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
export default function Login(): React.JSX.Element {
    return (
        <PaperProvider theme={theme}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.colors.background
            }}>

                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (
                    <View style={{width: 300}}>

                            <View style={{paddingHorizontal: 32, marginBottom: 16, width: '100%'}}>
                                <TextInput
                                    label="Email"
                                    value={values.email}
                                />
                                <ErrorMessage name="email"/>
                            </View>
                            <View style={{paddingHorizontal: 32, marginBottom: 16, width: '100%'}}>
                        <TextInput
                            label="Password"
                            value={values.password}
                            secureTextEntry={true}
                        />
                        <ErrorMessage name="password"/>
                </View>
                <View style={{paddingHorizontal: 32, marginBottom: 16, width: '100%'}}>
                    <Button mode="contained" onPress={(e)=>handleSubmit(e.)}>
                        Login
                    </Button>
                </View>

        </View>
            )}
        </Formik>
</View>
</PaperProvider>
)
    ;
}