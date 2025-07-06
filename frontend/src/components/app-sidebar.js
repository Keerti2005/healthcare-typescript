import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar } from "@/components/ui/avatar";
import { Link } from "@/components/ui/link";
import { Menu } from "@/components/ui/menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarItem, SidebarLabel, SidebarRail, SidebarSection, SidebarSectionGroup, useSidebar, } from "@/components/ui/sidebar";
import { IconDashboard, IconSettings, IconHome, IconLogout, IconHeadphones, IconChevronLgDown, IconHeartBeat, IconFileText, IconRobot, } from "@intentui/icons";
import { useAuth } from "@/auth/auth-context";
import { twMerge } from "tailwind-merge";
const CustomMenuItem = ({ children, onClick }) => {
    return (_jsx(Menu.Item, { children: _jsx("div", { onClick: onClick, className: "w-full cursor-pointer text-left flex items-center gap-2 px-2 py-1 hover:bg-muted rounded", role: "menuitem", tabIndex: 0, children: children }) }));
};
export default function AppSidebar(props) {
    const { state } = useSidebar();
    const { user, logout } = useAuth();
    const userName = user?.displayName || user?.email?.split("@")[0] || "User";
    const userEmail = user?.email || "user@example.com";
    const userPhoto = user?.photoURL || "/images/avatar/default.jpg";
    return (_jsxs(Sidebar, { ...props, children: [_jsx(SidebarHeader, { children: _jsxs(Link, { className: "flex items-center gap-x-2", href: "/", children: [_jsx("span", { className: "text-xl font-bold text-blue-600", children: "M" }), _jsx(SidebarLabel, { className: "font-medium", children: "MedTrack" })] }) }), _jsx(SidebarContent, { children: _jsx(SidebarSectionGroup, { children: _jsxs(SidebarSection, { children: [_jsxs(SidebarItem, { href: "/", tooltip: "Home", children: [_jsx(IconHome, {}), _jsx(SidebarLabel, { children: "Home" })] }), _jsxs(SidebarItem, { href: "/dashboard", tooltip: "Dashboard", children: [_jsx(IconDashboard, {}), _jsx(SidebarLabel, { children: "Dashboard" })] }), _jsxs(SidebarItem, { href: "/symptom-checker", tooltip: "Symptom Checker", children: [_jsx(IconHeartBeat, {}), _jsx(SidebarLabel, { children: "Symptom Checker" })] }), _jsxs(SidebarItem, { href: "/doctor-connect", tooltip: "Doctor Connect", children: [_jsx(IconFileText, {}), _jsx(SidebarLabel, { children: "Doctor Connect" })] }), _jsxs(SidebarItem, { href: "/chatbot", tooltip: "ChatBot", children: [_jsx(IconRobot, {}), _jsx(SidebarLabel, { children: "ChatBot" })] })] }) }) }), _jsx(SidebarFooter, { children: _jsxs(Menu, { children: [_jsxs(Menu.Trigger, { className: "group", "aria-label": "Profile", children: [_jsx(Avatar, { shape: "square", src: userPhoto }), _jsx("div", { className: "text-sm", children: _jsx(SidebarLabel, { children: userName }) }), _jsx(IconChevronLgDown, { className: "absolute right-3 size-4 transition-transform group-pressed:rotate-180" })] }), _jsxs(Menu.Content, { placement: "bottom right", className: twMerge(state === "expanded" ? "sm:min-w-(--trigger-width)" : "sm:min-w-60"), children: [_jsx(Menu.Section, { children: _jsxs(Menu.Header, { separator: true, children: [_jsx("span", { className: "block", children: userName }), _jsx("span", { className: "block text-xs text-muted-foreground", children: userEmail })] }) }), _jsxs(Menu.Item, { href: "/", children: [_jsx(IconDashboard, {}), "Home"] }), _jsxs(Menu.Item, { href: "/dashboard", children: [_jsx(IconDashboard, {}), "Dashboard"] }), _jsxs(Menu.Item, { href: "/settings", children: [_jsx(IconSettings, {}), "Settings"] }), _jsx(Menu.Separator, {}), _jsxs(Menu.Item, { href: "/support", children: [_jsx(IconHeadphones, {}), "Customer Support"] }), _jsx(Menu.Separator, {}), _jsxs(CustomMenuItem, { onClick: logout, children: [_jsx(IconLogout, {}), "Log out"] })] })] }) }), _jsx(SidebarRail, {})] }));
}
