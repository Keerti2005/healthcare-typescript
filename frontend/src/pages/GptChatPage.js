import { jsx as _jsx } from "react/jsx-runtime";
import HuggingChatbot from "../components/GptChatbot";
const GptChatPage = () => {
    return (_jsx("div", { children: _jsx(HuggingChatbot, { fullPage: true }) }));
};
export default GptChatPage;
