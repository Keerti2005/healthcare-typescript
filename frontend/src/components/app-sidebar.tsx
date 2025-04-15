"use client"

import { Avatar } from "@/components/ui/avatar"
import { Link } from "@/components/ui/link"
import { Menu } from "@/components/ui/menu"
import {
  Sidebar,
  SidebarContent,
  SidebarDisclosure,
  SidebarDisclosureGroup,
  SidebarDisclosurePanel,
  SidebarDisclosureTrigger,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarRail,
  SidebarSection,
  SidebarSectionGroup,
  useSidebar,
} from "@/components/ui/sidebar"

import {
  IconDashboard,
  IconSettings,
  IconHome,
  IconLogout,
  IconShield,
  IconHeadphones,
  IconFileText,
  IconHeartBeat,
  IconRobot,
  IconChevronLgDown,
} from "@intentui/icons"

import MonitorHeartIcon from "@mui/icons-material/MonitorHeart"
import MedicationIcon from "@mui/icons-material/Medication"
import { ChatBotIcon } from "hugeicons-react"
import { MedicalFileIcon } from "hugeicons-react"
import { HealthIcon } from "hugeicons-react"
import { twMerge } from "tailwind-merge"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar()

  return (
    <Sidebar {...props}>
      <SidebarHeader>
      <Link
  className="flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center"
  href="/"
>
  <span className="text-xl font-bold text-blue-600">M</span>
  <SidebarLabel className="font-medium group-data-[collapsible=dock]:hidden">
    MedTrack
  </SidebarLabel>
</Link>

      </SidebarHeader>

      <SidebarContent>
        <SidebarSectionGroup>
          <SidebarSection>
            <SidebarItem href="/" tooltip="Home">
              <IconHome />
              <SidebarLabel className="group-data-[collapsible=dock]:hidden">Home</SidebarLabel>
            </SidebarItem>

            <SidebarItem href="/dashboard" tooltip="Dashboard">
              <IconDashboard />
              <SidebarLabel className="group-data-[collapsible=dock]:hidden">Dashboard</SidebarLabel>
            </SidebarItem>

            <SidebarItem href="/symptom-checker" tooltip="Symptom Checker">
            <IconHeartBeat />
              <SidebarLabel className="group-data-[collapsible=dock]:hidden">Symptom Checker</SidebarLabel>
            </SidebarItem>

            <SidebarItem href="/doctor-connect" tooltip="Doctor Connect">
            <IconFileText />
              <SidebarLabel className="group-data-[collapsible=dock]:hidden">Doctor Connect</SidebarLabel>
            </SidebarItem>

            <SidebarItem href="/chatbot" tooltip="ChatBot">
            <IconRobot />
              <SidebarLabel className="group-data-[collapsible=dock]:hidden">ChatBot</SidebarLabel>
            </SidebarItem>

            <SidebarItem href="/settings" tooltip="Settings">
              <IconSettings />
              <SidebarLabel className="group-data-[collapsible=dock]:hidden">Settings</SidebarLabel>
            </SidebarItem>
          </SidebarSection>
        </SidebarSectionGroup>
      </SidebarContent>

      <SidebarFooter>
        <Menu>
          <Menu.Trigger className="group" aria-label="Profile">
            <Avatar shape="square" src="/images/avatar/cobain.jpg" />
            <div className="in-data-[sidebar-collapsible=dock]:hidden text-sm">
              <SidebarLabel>Kurt Cobain</SidebarLabel>
              <span className="-mt-0.5 block text-muted-fg">kurt@cobain.com</span>
            </div>
            <IconChevronLgDown
              data-slot="chevron"
              className="absolute right-3 size-4 transition-transform group-pressed:rotate-180"
            />
          </Menu.Trigger>
          <Menu.Content
            placement="bottom right"
            className={twMerge(state === "expanded" ? "sm:min-w-(--trigger-width)" : "sm:min-w-60")}
          >
            <Menu.Section>
              <Menu.Header separator>
                <span className="block">Kurt Cobain</span>
                <span className="font-normal text-muted-fg">@cobain</span>
              </Menu.Header>
            </Menu.Section>

            <Menu.Item href="#dashboard">
              <IconDashboard />
              Dashboard
            </Menu.Item>
            <Menu.Item href="#settings">
              <IconSettings />
              Settings
            </Menu.Item>
            <Menu.Item href="#security">
              <IconShield />
              Security
            </Menu.Item>
            <Menu.Separator />

            <Menu.Item href="#contact">
              <IconHeadphones />
              Customer Support
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item href="#logout">
              <IconLogout />
              Log out
            </Menu.Item>
          </Menu.Content>
        </Menu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
