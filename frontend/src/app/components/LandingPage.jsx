import React from "react";
import HeroSection from "./HeroSection";
import { SatoshiFont } from "../fonts/SatoshiFont";
import Image from "next/image";
import dining from "@/app/assets/dining.png";

import Cards from "./Cards";
import Tablette from "./Tablette";
import BotConversation from "./BotConversation";
import OwnerIpad from "./OwnerIpad";
import Testimonials from "./Testimonials";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <div className="mx-[6.5%]">
        <div className="flex justify-center">
          <p
            className={`${SatoshiFont.className} my-[3vw] leading-[110%] font-bold text-center text-[5vw] text-black`}
          >
            Are You Really{" "}
            <span className="text-[#01B7E6]">
              Dining
              <br /> Safely?
            </span>
          </p>
        </div>
        <Image
          className="w-full drop-shadow-2xl"
          src={dining}
          width={0}
          height={0}
          alt="dining"
        />
        <Cards />
      </div>
      <Tablette />
      <BotConversation />
      <OwnerIpad />
      <Testimonials/>
    </>
  );
}
