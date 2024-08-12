import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText";
import { loginSchema } from "../validationSchemas/login";

const styles = StyleSheet.create({
    form: {
        margin: 20,
    },
    error: {
        color: "red",
        fontSize: 10,
        marginBottom: 10,
        marginTop: -5,
    },
});

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);

    return (
        <>
            <StyledTextInput
                error={meta.error}
                placeholder="E-mail"
                value={field.value}
                onChangeText={(value) => helpers.setValue(value)}
                {...props}
            />
            {meta.touched && meta.error && (
                <StyledText style={styles.error}>{meta.error}</StyledText>
            )}
        </>
    );
};
const initialValues = {
    email: "",
    password: "",
};
const Login = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values) => console.log(values)}
        >
            {({ handleSubmit }) => {
                return (
                    <View style={styles.form}>
                        <FormikInputValue 
                            placeholder="E-mail" 
                            name="email"
                        />
                        <FormikInputValue
                            placeholder="Password"
                            name="password"
                            secureTextEntry //simil type='password'
                        />
                        <Button onPress={handleSubmit} title="Login" />
                    </View>
                );
            }}
        </Formik>
    );
};

export default Login;
