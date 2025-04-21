import { Header } from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen">
      <Header />
      {children}
      <SanityLive />
    </section>
  );
}
