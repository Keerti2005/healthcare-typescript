import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import { Heading } from "@/components/ui/heading";

type Message = {
  role: "user" | "assistant";
  content: string;
};

interface HuggingChatbotProps {
  fullPage?: boolean;
}

const HuggingChatbot: React.FC<HuggingChatbotProps> = ({ fullPage = false }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    let responseContent = "Hello! How can I assist you today?";

    try {
      const res = await fetch(
        "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: `Instruction: You are a helpful assistant. User: ${input}\nAssistant:`,
          }),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      if (data?.error) {
        throw new Error(`Hugging Face Error: ${data.error}`);
      }

      responseContent =
        data?.[0]?.generated_text
          ?.replace(
            `Instruction: You are a helpful assistant. User: ${input}\nAssistant:`,
            ""
          )
          ?.trim() || "Sorry, I didn’t understand that.";
    } catch (error: any) {
      responseContent = `Something went wrong: ${error.message}`;
      console.error("Error:", error);
    }

    const botMessage: Message = {
      role: "assistant",
      content: responseContent,
    };

    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  if (!fullPage) {
    return (
      <button onClick={() => navigate("/chatbot")} className="fixed bottom-4 right-4 p-3 text-white rounded-full">
        <FaRobot />
      </button>
    );
  }

  return (
    <div >
      <div>
        <Heading className="mb-6">Ask Me Anything</Heading>

        <div className=" flex-1 h-[480px] overflow-y-auto bg-gray-800 rounded-xl  scrollbar-thin scrollbar-thumb-">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg text-sm ${
                msg.role === "user" ? "mt-3 mb-3 bg-blue-700 text-white text-right max-w-[95%] self-end mx-auto" : "bg-gray-700 text-left max-w-[95%] mx-auto"
              }`}
            >
              {msg.content}
            </div>
          ))}
         {loading && <div className="ml-6 text-gray-400 text-sm italic">Typing...</div>}

        </div>

        <div className="flex mt-4">
          <input
            className="flex-1 bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white"
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
          />
          <button
            className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default HuggingChatbot;
