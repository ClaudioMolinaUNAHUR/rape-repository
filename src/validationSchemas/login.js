import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required("E-mail is required"),
    password: Yup.string()
        .min(5, "Too short")
        .max(20, "Too long")
        .required("Password is required"),
});
