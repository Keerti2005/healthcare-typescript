"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage, } from "@toolpad/core/SignInPage";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, signInWithGitHub, signInWithEmailPassword, } from "../auth/authHandlers";
const providers = [
    { id: "google", name: "Google" },
    { id: "github", name: "GitHub" },
    { id: "credentials", name: "Email and Password" },
];
const theme = createTheme({ palette: { mode: "dark" } });
export default function SignInForm() {
    const navigate = useNavigate();
    const signIn = async (provider, data) => {
        let result;
        if (provider.id === "google") {
            result = await signInWithGoogle();
        }
        else if (provider.id === "github") {
            result = await signInWithGitHub();
        }
        else if (provider.id === "credentials" && data) {
            result = await signInWithEmailPassword(data.email, data.password);
        }
        else {
            return { error: "Unsupported provider" };
        }
        if (result?.user) {
            navigate("/dashboard");
            return { user: result.user };
        }
        return { error: result?.error || "Login failed" };
    };
    return (_jsx(AppProvider, { theme: theme, children: _jsx(SignInPage, { signIn: signIn, providers: providers, slotProps: { form: { noValidate: true } }, sx: {
                "& form > .MuiStack-root": {
                    marginTop: "2rem",
                    rowGap: "0.5rem",
                },
            } }) }));
}
