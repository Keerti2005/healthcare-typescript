
"use client"

import { IconRobot } from "@intentui/icons"
import { useLocation, useNavigate } from "react-router-dom"
import { Tooltip } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export default function ChatBotIcon() {
  const location = useLocation()
  const navigate = useNavigate()

  if (location.pathname === "/chatbot") return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Tooltip>
  <Tooltip.Trigger>
    <Button
      className="rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 w-14 h-14"
      onClick={() => navigate("/chatbot")}
    >
<IconRobot className="w-6 h-6 text-white drop-shadow-md brightness-125" />
</Button>
  </Tooltip.Trigger>
  <Tooltip.Content>
    Hi! How can I help you?
  </Tooltip.Content>
</Tooltip>

    </div>
  )
}
