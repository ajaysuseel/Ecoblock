import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );

}
