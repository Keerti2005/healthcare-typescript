import { Avatar } from "@/components/ui/avatar";
import { Link } from "@/components/ui/link";
import { Menu } from "@/components/ui/menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarRail,
  SidebarSection,
  SidebarSectionGroup,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  IconDashboard,
  IconSettings,
  IconHome,
  IconLogout,
  IconShield,
  IconHeadphones,
  IconChevronLgDown,
  IconHeartBeat,
  IconFileText,
  IconRobot,
} from "@intentui/icons";

import { useAuth } from "@/auth/auth-context";
import { twMerge } from "tailwind-merge";
import React from "react";

// ✅ FIXED: CustomMenuItem no longer wraps <button> inside Menu.Item
type CustomMenuItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const CustomMenuItem = ({ children, onClick }: CustomMenuItemProps) => {
  return (
    <Menu.Item>
      <div
        onClick={onClick}
        className="w-full cursor-pointer text-left flex items-center gap-2 px-2 py-1 hover:bg-muted rounded"
        role="menuitem"
        tabIndex={0}
      >
        {children}
      </div>
    </Menu.Item>
  );
};


export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const { user, logout } = useAuth();

  const userName = user?.displayName || user?.email?.split("@")[0] || "User";
  const userEmail = user?.email || "user@example.com";
  const userPhoto = user?.photoURL || "/images/avatar/default.jpg";

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link className="flex items-center gap-x-2" href="/">
          <span className="text-xl font-bold text-blue-600">M</span>
          <SidebarLabel className="font-medium">MedTrack</SidebarLabel>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarSectionGroup>
          <SidebarSection>
            <SidebarItem href="/" tooltip="Home">
              <IconHome />
              <SidebarLabel>Home</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="/dashboard" tooltip="Dashboard">
              <IconDashboard />
              <SidebarLabel>Dashboard</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="/symptom-checker" tooltip="Symptom Checker">
              <IconHeartBeat />
              <SidebarLabel>Symptom Checker</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="/doctor-connect" tooltip="Doctor Connect">
              <IconFileText />
              <SidebarLabel>Doctor Connect</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="/chatbot" tooltip="ChatBot">
              <IconRobot />
              <SidebarLabel>ChatBot</SidebarLabel>
            </SidebarItem>
          </SidebarSection>
        </SidebarSectionGroup>
      </SidebarContent>

      <SidebarFooter>
        <Menu>
          <Menu.Trigger className="group" aria-label="Profile">
            <Avatar shape="square" src={userPhoto} />
            <div className="text-sm">
              <SidebarLabel>{userName}</SidebarLabel>
            </div>
            <IconChevronLgDown
              className="absolute right-3 size-4 transition-transform group-pressed:rotate-180"
            />
          </Menu.Trigger>

          <Menu.Content
            placement="bottom right"
            className={twMerge(
              state === "expanded" ? "sm:min-w-(--trigger-width)" : "sm:min-w-60"
            )}
          >
            <Menu.Section>
              <Menu.Header separator>
                <span className="block">{userName}</span>
                <span className="block text-xs text-muted-foreground">
                  {userEmail}
                </span>
              </Menu.Header>
            </Menu.Section>

            <Menu.Item href="/">
              <IconDashboard />
              Home
            </Menu.Item>
            <Menu.Item href="/dashboard">
              <IconDashboard />
              Dashboard
            </Menu.Item>
            

            <Menu.Separator />
            <Menu.Item href="/support">
              <IconHeadphones />
              Customer Support
            </Menu.Item>
            <Menu.Separator />

            {/* ✅ Fixed: no nested <button> */}
            <CustomMenuItem onClick={logout}>
              <IconLogout />
              Log out
            </CustomMenuItem>
          </Menu.Content>
        </Menu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
