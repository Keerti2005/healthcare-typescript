"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/auth/firebaseConfig";
const AuthContext = createContext({
    user: null,
    loading: true,
    logout: () => { },
});
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);
    const logout = () => {
        signOut(auth)
            .then(() => {
            console.log("User logged out successfully");
            setUser(null);
        })
            .catch((error) => {
            console.error("Error during logout:", error);
        });
    };
    return (_jsx(AuthContext.Provider, { value: { user, loading, logout }, children: children }));
};
