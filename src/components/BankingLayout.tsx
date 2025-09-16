import { SidebarProvider } from "@/components/ui/sidebar";
import { BankingSidebar } from "./BankingSidebar";
import { TopNavigation } from "./TopNavigation";

interface BankingLayoutProps {
  children: React.ReactNode;
}

export function BankingLayout({ children }: BankingLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <BankingSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopNavigation />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}