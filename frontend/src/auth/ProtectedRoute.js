import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth-context';
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth(); // Access both user and loading from context
    if (loading)
        return _jsx("p", { children: "Loading..." }); // Show loading message while fetching user
    if (!user)
        return _jsx(Navigate, { to: "/signin", replace: true }); // Redirect to sign-in page if no user
    return _jsx(_Fragment, { children: children }); // Render children if user is authenticated
};
export default ProtectedRoute;
