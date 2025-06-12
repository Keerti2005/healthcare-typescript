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

import { useAuth } from "@/auth/auth-context"; // custom hook for auth
import { twMerge } from "tailwind-merge";

// Custom MenuItem component to handle onClick
type CustomMenuItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
};

const CustomMenuItem = ({ children, onClick }: CustomMenuItemProps) => {
  return (
    <Menu.Item>
      <button onClick={onClick} className="w-full text-left">
        {children}
      </button>
    </Menu.Item>
  );
};

export default function AppSidebar(props) {
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
            <Menu.Item href="/settings">
              <IconSettings />
              Settings
            </Menu.Item>
            
            <Menu.Separator />
            <Menu.Item href="/support">
              <IconHeadphones />
              Customer Support
            </Menu.Item>
            <Menu.Separator />
            
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
