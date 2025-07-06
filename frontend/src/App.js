import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SidebarProvider, SidebarInset } from './components/ui/sidebar';
import AppSidebar from './components/app-sidebar';
import AppSidebarNav from './components/app-sidebar-nav';
import ChatBotIcon from './components/ChatBotIcon';
import Dashboard from './pages/Dashboard';
import ChatBot from './pages/GptChatPage';
import DoctorAppointmentForm from './pages/doctor-connect';
import SymptomPrediction from './pages/symptom-checker';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProtectedRoute from './auth/ProtectedRoute';
const App = () => {
    return (_jsx(Router, { children: _jsxs(SidebarProvider, { children: [_jsx(AppSidebar, { collapsible: "dock" }), _jsxs(SidebarInset, { children: [_jsx(AppSidebarNav, {}), _jsx("div", { className: "p-4 lg:p-6", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/signin", element: _jsx(SignIn, {}) }), _jsx(Route, { path: "/signup", element: _jsx(SignUp, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(ProtectedRoute, { children: _jsx(Dashboard, {}) }) }), _jsx(Route, { path: "/chatbot", element: _jsx(ProtectedRoute, { children: _jsx(ChatBot, {}) }) }), _jsx(Route, { path: "/doctor-connect", element: _jsx(ProtectedRoute, { children: _jsx(DoctorAppointmentForm, {}) }) }), _jsx(Route, { path: "/symptom-checker", element: _jsx(ProtectedRoute, { children: _jsx(SymptomPrediction, {}) }) })] }) }), _jsx(ChatBotIcon, {})] })] }) }));
};
export default App;
