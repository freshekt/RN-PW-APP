import * as React from 'react';
import {Button, MD3LightTheme as DefaultTheme, PaperProvider, TextInput} from "react-native-paper";
import { View} from "react-native";
import {Formik, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {theme} from "../_layout";

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
});


export default function Dashboard(): React.JSX.Element {
    return (

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

                <Form style={{width: 300}}>

                    <View style={{paddingHorizontal: 32, marginBottom: 16, width: '100%'}}>
                        <TextInput
                            label="Email"
                            value={values.email}
                            onChangeText={handleChange('email')}
                        />
                        <ErrorMessage name="email"/>
                    </View>
                    <View style={{paddingHorizontal: 32, marginBottom: 16, width: '100%'}}>
                        <TextInput
                            label="Password"
                            value={values.password}
                            onChangeText={handleChange('password')}
                            secureTextEntry={true}
                        />
                        <ErrorMessage name="password"/>
                    </View>
                    <View style={{paddingHorizontal: 32, marginBottom: 16, width: '100%'}}>
                        <Button mode="contained" onPress={()=>handleSubmit()}>
                            Login
                        </Button>
                    </View>

                </Form>
            )}
            </Formik>
        </View>
    );
}