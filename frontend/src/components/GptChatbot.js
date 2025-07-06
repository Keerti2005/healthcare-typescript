import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import { Heading } from "@/components/ui/heading";
import ReactMarkdown from "react-markdown";
const HuggingChatbot = ({ fullPage = false, }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef(null);
    const navigate = useNavigate();
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const sendMessage = async () => {
        if (!input.trim())
            return;
        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);
        let responseContent = "Let me think...";
        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            role: "user",
                            parts: [{ text: input }],
                        },
                    ],
                }),
            });
            const data = await res.json();
            console.log("Gemini Response:", data);
            if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
                responseContent = data.candidates[0].content.parts[0].text;
            }
            else {
                responseContent = "Sorry, I didn't get that.";
            }
        }
        catch (error) {
            responseContent = `Something went wrong: ${error.message}`;
            console.error("Gemini Error:", error);
        }
        const botMessage = {
            role: "assistant",
            content: responseContent,
        };
        setMessages((prev) => [...prev, botMessage]);
        setLoading(false);
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter")
            sendMessage();
    };
    // Auto-scroll to bottom on new messages
    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);
    if (!fullPage) {
        return (_jsx("button", { onClick: () => navigate("/chatbot"), className: "fixed bottom-4 right-4 p-3 text-white rounded-full bg-blue-600 hover:bg-blue-700 transition", children: _jsx(FaRobot, { size: 24 }) }));
    }
    return (_jsxs("div", { className: "flex flex-col h-screen ", children: [_jsx(Heading, { className: "mb-4", children: "Ask Me Anything" }), _jsxs("div", { className: "flex-1 overflow-y-auto bg-gray-800 rounded-xl scrollbar-thin p-4", children: [messages.map((msg, i) => (_jsx("div", { className: `p-3 rounded-lg text-sm mb-2 ${msg.role === "user"
                            ? "bg-blue-700 text-white text-right self-end"
                            : "bg-gray-700 text-left text-white"}`, children: _jsx(ReactMarkdown, { children: msg.content }) }, i))), loading && (_jsx("div", { className: "text-gray-400 text-sm italic mb-2", children: "Typing..." })), _jsx("div", { ref: bottomRef })] }), _jsxs("div", { className: "flex mt-4", children: [_jsx("input", { className: "flex-1 bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white", value: input, onChange: (e) => setInput(e.target.value), onKeyDown: handleKeyDown, placeholder: "Ask me anything..." }), _jsx("button", { className: "ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition", onClick: sendMessage, children: "Send" })] })] }));
};
export default HuggingChatbot;
