import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Routes, Route } from "react-router-native";
import Login from "../pages/Login";
import createApolloClient from "../utils/apolloClient";
import { ApolloProvider } from "@apollo/client";

const client = createApolloClient();

const Main = () => {
    return (
        <ApolloProvider client={client}>
            <View style={styles.container}>
                <AppBar />
                <Routes>
                    <Route path="/" element={<RepositoryList />} />
                    <Route path="/signin" element={<Login />} />
                    <Route path="*" />
                </Routes>
            </View>
        </ApolloProvider>
    );
};
export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
    },
});
