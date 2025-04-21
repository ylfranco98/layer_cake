"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [active, setActive] = useState("Home");
  //   console.log(currentPath);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Posts", path: "/posts" },
    { name: "New Post", path: "/posts/create" },
    { name: "Categories", path: "/categories" },
  ];

  const handdleClick =
    (item: string) => (event: React.MouseEvent<HTMLElement>) => {
      console.log(item);
      event.preventDefault();
      setActive(item);
    };
  useEffect(() => {
    const matchingItem = menuItems.find((item) => item.path === pathname);
    if (matchingItem) {
      setActive(matchingItem.name);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <div className="from-pink-50 to-white bg-gradient-to-b p-6">
    <header
      className={`header transition-all duration-500 ${scrolled ? "scrolled" : ""}`}
    >
      <Link className="flex items-center gap-8" href="/">
        <Image
          className="rounded-full shadow-2xl border-4 border-primary-border"
          src="/bakepointlogo.png"
          alt="BakePoint logo"
          width="100"
          height="100"
        />
        <h1 className="logo">BakePoint</h1>
      </Link>

      <ul
        className={`flex items-center gap-12 font-semibold ${scrolled ? "text-primary" : "text-black/60"} text-xl`}
      >
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              className={`menuItems ${item.name === active ? "active" : ""}`}
              href={item.path}
              onClick={(event) => setActive(item.name)}
            >
              {item.name}
            </Link>
          </li>
        ))}

        <li>
          <Link className="menuItems" href="/posts">
            <Image
              className="rounded-full"
              src="/logo.png"
              alt="BakePoint logo"
              width="50"
              height="50"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}
