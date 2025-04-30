"use client";

import { Avatar } from "@/components/ui/avatar";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Menu } from "@/components/ui/menu";
import { Separator } from "@/components/ui/separator";
import { SidebarNav, SidebarTrigger } from "@/components/ui/sidebar";
import { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import {
  IconCommandRegular,
  IconDashboard,
  IconLogout,
  IconMoon,
  IconSettings,
  IconSun,
} from "@intentui/icons";
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

  return (
    <SidebarNav className="border-b flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-x-4">
        <SidebarTrigger className="-mx-2" />
        <Separator className="h-6" orientation="vertical" />
        <Breadcrumbs>
          {crumbs.map((crumb, idx) => (
            <Breadcrumbs.Item key={idx}>
              <Link to={crumb.to} className="text-md text-muted-foreground hover:underline">
                {crumb.label}
              </Link>
            </Breadcrumbs.Item>
          ))}
        </Breadcrumbs>
      </div>

      <div className="flex items-center gap-x-4 ml-auto">
        <UserMenu />
        <Link to="/signin" className="ml-2">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
            Sign In
          </button>
        </Link>
      </div>
    </SidebarNav>
  );
}

function UserMenu() {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  const userEmail = user?.email || "user@example.com";
  const userPhoto = user?.photoURL || "/images/avatar/default.jpg";

  return (
    <Menu>
      <Menu.Trigger className="ml-auto md:hidden" aria-label="Open Menu">
        <Avatar alt={userEmail} src={userPhoto} />
      </Menu.Trigger>
      <Menu.Content placement="bottom" showArrow className="sm:min-w-64">
        <Menu.Section>
          <Menu.Header separator>
            <span className="block">{userEmail}</span>
          </Menu.Header>
        </Menu.Section>
        <Menu.Item href="#dashboard">
          <IconDashboard />
          <Menu.Label>Dashboard</Menu.Label>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item>
          <IconCommandRegular />
          <Menu.Label>Command Menu</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          {theme === "dark" ? <IconMoon /> : <IconSun />}
          <Menu.Label>Theme</Menu.Label>
          <span data-slot="icon">
            <Switch
              className="ml-auto"
              isSelected={theme === "dark"}
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            />
          </span>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item >
          <IconLogout />
          <Menu.Label>Log out</Menu.Label>
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
}
