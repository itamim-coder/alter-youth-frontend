import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@material-tailwind/react";
import { StickyNavbar } from "@/components/nav/NavBar";
import AppScholarShips from "@/components/section/AppScholarShips";
import CommunityCarousel from "@/components/ui/CommunityCarousel";
import SchoolCarousel from "@/components/ui/SchoolCarousel";
import CommunityImpact from "@/components/section/CommunityImpact";
import School from "@/components/section/School";
import ScholarshipLeaderboard from "@/components/section/ScholarshipLeaderboard";
import Eligibility from "@/components/section/Eligibility";
import Advertise from "@/components/section/Advertise";

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
      <ScholarshipLeaderboard></ScholarshipLeaderboard>
      <CommunityImpact></CommunityImpact>
      <School></School>
      <Eligibility />
      <Advertise />
    </div>
  );
}
