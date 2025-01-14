import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@material-tailwind/react";
import { StickyNavbar } from "@/components/nav/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <p className="min-h-screen">hello</p>
      <p className="min-h-screen">hello</p>
    </div>
  );
}
