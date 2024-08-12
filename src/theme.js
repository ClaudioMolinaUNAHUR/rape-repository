import { Platform } from "react-native";
const theme = {
    colors: {
        textPrimary: "#24292e",
        textSecondary: "#586069",
        primary: "#0F17BA",
        white: "#fff",
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            ios: "Arial",
            android: "Roboto",
            default: "System",
        }),
    },
    fontWeights: {
        normal: "400",
        bold: "700",
    },
    appBar: {
        primary: "#24292e",
        textSecondary: "#ebd834",
        textPrimary: "#fff",
    },
};
export default theme;
