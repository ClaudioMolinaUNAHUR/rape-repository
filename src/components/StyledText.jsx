import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorSecondary: {
        color: theme.colors.textSecondary,
    },
    bold: { fontWeight: theme.fontWeights.bold },
    subheading: { color: theme.fontSizes.subheading },
    textAlignCenter: {textAlign:'center'}
});
const StyledText = ({
    color,
    align,
    fontSize,
    fontWeight,
    style,
    children,
    ...restOfProps
}) => {
    const textStyle = [
        styles.text,
        align == 'center' && styles.textAlignCenter,
        color == 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontWeight === 'bold' && styles.bold,
        style
    ];
    return (
        <Text style={textStyle} {...restOfProps}>
            {children}
        </Text>
    );
};

export default StyledText;
