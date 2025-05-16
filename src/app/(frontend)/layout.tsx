import { Header } from "@/components/Menu/Header";
import { SanityLive } from "@/sanity/lib/live";
import {
  SidebarProvider,
  // SidebarTrigger,
  // useSidebar,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Menu/AppSidebar";
import { GlobalStateProvider } from "@/contexts/GlobalStateContext";
import { MenuItem } from "@/lib/types";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems: MenuItem[] = [
    { name: "Home", path: "/" },
    { name: "Recipes", path: "/recipes" },
    { name: "Tips", path: "/tips" },
    { name: "Blogs", path: "/posts" },
  ];
  return (
    <SidebarProvider defaultOpen={false}>
      <section className="min-h-screen w-full">
        <GlobalStateProvider>
          <Header menuItems={menuItems} />
          {children}
          <SanityLive />
          <AppSidebar menuItems={menuItems} />
        </GlobalStateProvider>
      </section>
    </SidebarProvider>
  );
}
