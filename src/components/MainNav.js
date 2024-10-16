"use client";

import { usePathname } from "next/navigation";

export default () => {
  const pathname = usePathname();

  const navClasses = [
    "flex",
    "flex-col",
    "text-2xl",
    "font-bold",
    "justify-center",
    "items-center",
    "p-4",
    "md:flex-row",
    "md:space-x-4",
  ];

  if (pathname === "/") navClasses.push("hidden");

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Work",
      href: "/work",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  for (const link of links) {
    link.classes = ["hover:underline", "hover:decoration-dotted"];

    if (pathname === link.href) link.active = true;

    if (link.active) link.classes.push("underline");

    link.classes = link.classes.join(" ");
  }

  return (
    <>
      <nav className={navClasses.join(" ")}>
        {links.map(({ name, href, classes }) => (
          <a key={href} href={href} className={classes}>
            {name}
          </a>
        ))}
      </nav>
    </>
  );
};
