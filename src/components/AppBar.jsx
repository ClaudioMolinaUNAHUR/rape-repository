import React from "react";
import StyledText from "./StyledText";
import { ScrollView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        flexDirection: "row",
        paddingTop: Constants.statusBarHeight,
    },
    text: {
        color: theme.appBar.textPrimary,
    },
    scroll: {
        paddingBottom: 15,
    },
    appBarTab: {
        color: theme.colors.white,
        marginHorizontal: 5,
    },
    active: {
        color: theme.appBar.textSecondary,
    },
});

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation();
    const active = pathname === to;

    const textActive = [styles.appBarTab, active && styles.active];

    return (
        <Link
            to={to}
            style={styles.appBarTab}
            underlayColor={styles.container.backgroundColor}
        >
            <StyledText fontWeight="bold" style={textActive}>
                {children}
            </StyledText>
        </Link>
    );
};

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                style={styles.scroll}
            >
                <View>
                    <AppBarTab active to="/">
                        Repositories
                    </AppBarTab>
                </View>
                <View>
                    <AppBarTab to="/signin">Sign In</AppBarTab>
                </View>
            </ScrollView>
        </View>
    );
};

export default AppBar;
