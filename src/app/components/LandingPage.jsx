import React from "react";
import HeroSection from "./HeroSection";
import { SatoshiFont } from "../fonts/SatoshiFont";
import Image from "next/image";
import dining from "@/app/assets/dining.png";
import earth from "@/app/assets/earth.svg";

import Cards from "./Cards";
import Tablette from "./Tablette";
import BotConversation from "./BotConversation";
import OwnerIpad from "./OwnerIpad";
import Testimonials from "./Testimonials";
import { ArrowTurnDownRightIcon } from "@heroicons/react/24/outline";


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
        <p
          className={`${SatoshiFont.className} text-center text-[2vw] text-[#626262] my-[2vw]`}
        >
          Hidden risks in restaurant hygiene and freshness affect millions each
          year.
        </p>
        <Cards />
      </div>
      <Tablette />
      <BotConversation />
      <OwnerIpad />
      <Testimonials />
      <div className="bg-[#F8F8F8] mt-10">
        <div className="mx-[6.5%]">
          <div>
            <p
              className={`${SatoshiFont.className} text-center text-black pt-[2vw] font-bold text-[4vw]`}
            >
              A Fresh and Safe Dining{" "}
              <span className="text-[#01B7E6]">Experience</span>
            </p>
            <p
              className={`${SatoshiFont.className} text-black text-center text-[2vw]`}
            >
              Join the growing network of transparent restaurants.
            </p>
          </div>
          <div className="mt-[2vw] flex justify-center">
            <button
              className={`w-[13vw] h-[4vw] text-[1.5vw] p-[0.3vw] text-[#4C4C4C] ${SatoshiFont.className} font-bold flex items-center gap-2 bg-[#6BE1FF] rounded-[1vw] shadow-inner`}
              style={{
                boxShadow:
                  "inset 0 0px 2px white, inset 0 0px 0px white, inset 0 -1px 1.5px #003542, inset 0 0px 0px white",
              }}
            >
              <span
                className="bg-white flex justify-center items-center w-[3.5vw] h-[3.5vw] p-1 rounded-[1vw]"
                style={{
                  boxShadow:
                    "inset 0 0.3px 2px white, inset 0 0px 0px white, inset 0 -1px 1.5px #003542, inset 0 0px 0px white",
                }}
              >
                <ArrowTurnDownRightIcon className="w-[3vw]" color="#4C4C4C" />
              </span>
              Join Now
            </button>
          </div>
          <div className="mt-[2vw] flex justify-center">
            <Image
              className="object-cover object-[0_-7vw] h-[38vw]"
              src={earth}
              width={0}
              height={0}
              alt="earth"
            />
          </div>
        </div>
      </div>
      <div className="mx-[6.5%]">
        <p
          className={`${SatoshiFont.className} mt-[2vw] text-[1vw] text-black`}
        >
          © <span className="font-bold">TrustyBite</span> 2024 I All rights
          reserved
        </p>
      </div>
    </>
  );
}
