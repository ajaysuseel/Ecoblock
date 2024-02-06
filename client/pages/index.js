import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/hero/Hero";
import FeatureNft from "@/components/cardComponent/FeatureNft";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureNft />
    </div>
  );

}
