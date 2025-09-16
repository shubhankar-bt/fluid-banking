import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  CreditCard,
  TrendingUp,
  PiggyBank,
  Send,
  Receipt,
  Settings,
  HelpCircle,
  ChevronLeft,
  Landmark,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const mainNavItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Accounts", url: "/accounts", icon: CreditCard },
  { title: "Investments", url: "/investments", icon: TrendingUp },
  { title: "Savings", url: "/savings", icon: PiggyBank },
  { title: "Transfer", url: "/transfer", icon: Send },
  { title: "Transactions", url: "/transactions", icon: Receipt },
];

const supportItems = [
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Help Center", url: "/help", icon: HelpCircle },
];

export function BankingSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const getNavClass = (path: string) =>
    `sidebar-item flex items-center gap-3 px-3 py-2 ${
      isActive(path)
        ? "bg-primary text-primary-foreground font-medium shadow-sm"
        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    }`;

  return (
    <Sidebar
      className={`${
        state === "collapsed" ? "w-16" : "w-64"
      } transition-all duration-300 border-r bg-sidebar`}
      collapsible="icon"
    >
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-lg">
            <Landmark className="h-6 w-6 text-primary-foreground" />
          </div>
          {state !== "collapsed" && (
            <div className="animate-fade-in">
              <h2 className="text-lg font-bold text-sidebar-foreground">SecureBank</h2>
              <p className="text-xs text-sidebar-foreground/70">Personal Banking</p>
            </div>
          )}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="absolute -right-3 top-6 h-6 w-6 rounded-full border bg-background shadow-md hover:bg-accent"
        >
          <ChevronLeft
            className={`h-4 w-4 transition-transform duration-200 ${
              state === "collapsed" ? "rotate-180" : ""
            }`}
          />
        </Button>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/70 mb-2">
            {state !== "collapsed" ? "Banking Services" : "•••"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className="h-5 w-5 shrink-0" />
                      {state !== "collapsed" && (
                        <span className="animate-fade-in">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/70 mb-2">
            {state !== "collapsed" ? "Support" : "•••"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className="h-5 w-5 shrink-0" />
                      {state !== "collapsed" && (
                        <span className="animate-fade-in">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-xs font-medium text-primary-foreground">JD</span>
          </div>
          {state !== "collapsed" && (
            <div className="animate-fade-in">
              <p className="text-sm font-medium text-sidebar-foreground">John Doe</p>
              <p className="text-xs text-sidebar-foreground/70">Premium Member</p>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}