"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconRobot } from "@intentui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Tooltip } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
export default function ChatBotIcon() {
    const location = useLocation();
    const navigate = useNavigate();
    if (location.pathname === "/chatbot")
        return null;
    return (_jsx("div", { className: "fixed bottom-6 right-6 z-50", children: _jsxs(Tooltip, { children: [_jsx(Tooltip.Trigger, { children: _jsx(Button, { className: "rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 w-14 h-14", onClick: () => navigate("/chatbot"), children: _jsx(IconRobot, { className: "w-6 h-6 text-white drop-shadow-md brightness-125" }) }) }), _jsx(Tooltip.Content, { children: "Hi! How can I help you?" })] }) }));
}
