import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import { Chat } from "@/components/Chat";
import { Toaster } from "@/components/ui/toaster";
import { ThemeToggle } from "@/components/ThemeToggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <ThemeToggle />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <Toaster />
      <Chat />
    </main>
  );
};

export default Layout;
