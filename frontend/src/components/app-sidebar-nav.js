"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar } from "@/components/ui/avatar";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Menu } from "@/components/ui/menu";
import { Separator } from "@/components/ui/separator";
import { SidebarNav, SidebarTrigger } from "@/components/ui/sidebar";
import { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { IconCommandRegular, IconDashboard, IconLogout, IconMoon, IconSun, } from "@intentui/icons";
import { useTheme } from "next-themes";
import { useAuth } from "@/auth/auth-context"; // your auth hook
export default function AppSidebarNav() {
    const location = useLocation();
    const crumbs = useMemo(() => {
        const pathParts = location.pathname.split("/").filter(Boolean);
        return pathParts.map((part, index) => {
            const to = "/" + pathParts.slice(0, index + 1).join("/");
            return {
                label: part.charAt(0).toUpperCase() + part.slice(1),
                to,
            };
        });
    }, [location.pathname]);
    return (_jsxs(SidebarNav, { className: "border-b flex items-center justify-between px-4 py-2", children: [_jsxs("div", { className: "flex items-center gap-x-4", children: [_jsx(SidebarTrigger, { className: "-mx-2" }), _jsx(Separator, { className: "h-6", orientation: "vertical" }), _jsx(Breadcrumbs, { children: crumbs.map((crumb, idx) => (_jsx(Breadcrumbs.Item, { children: _jsx(Link, { to: crumb.to, className: "text-md text-muted-foreground hover:underline", children: crumb.label }) }, idx))) })] }), _jsxs("div", { className: "flex items-center gap-x-4 ml-auto", children: [_jsx(UserMenu, {}), _jsx(Link, { to: "/signin", className: "ml-2", children: _jsx("button", { className: "px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition", children: "Sign In" }) })] })] }));
}
function UserMenu() {
    const { user } = useAuth();
    const { theme, setTheme } = useTheme();
    const userEmail = user?.email || "user@example.com";
    const userPhoto = user?.photoURL || "/images/avatar/default.jpg";
    return (_jsxs(Menu, { children: [_jsx(Menu.Trigger, { className: "ml-auto md:hidden", "aria-label": "Open Menu", children: _jsx(Avatar, { alt: userEmail, src: userPhoto }) }), _jsxs(Menu.Content, { placement: "bottom", showArrow: true, className: "sm:min-w-64", children: [_jsx(Menu.Section, { children: _jsx(Menu.Header, { separator: true, children: _jsx("span", { className: "block", children: userEmail }) }) }), _jsxs(Menu.Item, { href: "#dashboard", children: [_jsx(IconDashboard, {}), _jsx(Menu.Label, { children: "Dashboard" })] }), _jsx(Menu.Separator, {}), _jsxs(Menu.Item, { children: [_jsx(IconCommandRegular, {}), _jsx(Menu.Label, { children: "Command Menu" })] }), _jsxs(Menu.Item, { children: [theme === "dark" ? _jsx(IconMoon, {}) : _jsx(IconSun, {}), _jsx(Menu.Label, { children: "Theme" }), _jsx("span", { "data-slot": "icon", children: _jsx(Switch, { className: "ml-auto", isSelected: theme === "dark", onChange: () => setTheme(theme === "dark" ? "light" : "dark"), "aria-label": "Toggle theme" }) })] }), _jsx(Menu.Separator, {}), _jsxs(Menu.Item, { children: [_jsx(IconLogout, {}), _jsx(Menu.Label, { children: "Log out" })] })] })] }));
}
