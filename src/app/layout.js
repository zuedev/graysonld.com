import "./globals.css";

import { DM_Sans } from "next/font/google";

import MainNav from "../components/MainNav.js";

const dm_sans = DM_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Grayson - Lighting Artist",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default ({ children }) => {
  return (
    <html lang="en" className={`${dm_sans.className} bg-black text-white`}>
      <body>
        <header>
          <MainNav />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
};
