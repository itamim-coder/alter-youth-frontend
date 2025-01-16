import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@material-tailwind/react";
import { StickyNavbar } from "@/components/nav/NavBar";
import AppScholarShips from "@/components/section/AppScholarShips";
import CommunityCarousel from "@/components/ui/CommunityCarousel";
import SchoolCarousel from "@/components/ui/SchoolCarousel";

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
      <AppScholarShips></AppScholarShips>
      <CommunityCarousel></CommunityCarousel>
      <SchoolCarousel></SchoolCarousel>
    </div>
  );
}
