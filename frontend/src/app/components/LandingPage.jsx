import React from "react";
import { SatoshiFont } from "../fonts/SatoshiFont";
import Header from "./Header";
import Image from "next/image";
import Faces from "@/app/assets/Happy-family-faces.png";
import Logocertified from "@/app/assets/logo-certified.png";
import { ArrowTurnDownRightIcon } from "@heroicons/react/24/outline";

export default function LandingPage() {
  return (
    <div className="container">
      
      <Header />
      <div className="flex justify-between mx-8 mt-20">
        <div>
          <p
            className={`${SatoshiFont.className} mt-10 leading-tight font-bold text-[4rem] text-white`}
          >
            Trusty Bite:
            <br /> Where{" "}
            <span className="text-[#6BE1FF]">
              Freshness
              <br /> Meets Hygiene.
            </span>
          </p>
          <p className={`${SatoshiFont.className} mt-10 text-white font-[400] text-[2rem]`}>
            Find and book clean, safe restaurant <br /> swith real-time
            freshness and hygiene scores.
          </p>
          <div className="mt-10">
            <button
              className={`w-48 h-16 text-2xl text-[#4C4C4C] ${SatoshiFont.className} font-bold flex items-center gap-2 bg-[#6BE1FF] py-1 pl-1 pr-2 rounded-2xl shadow-inner`}
              style={{
                boxShadow:
                  "inset 0 0px 2px white, inset 0 0px 0px white, inset 0 -1px 1.5px #003542, inset 0 0px 0px white",
              }}
            >
              <span
                className="bg-white flex justify-center items-center w-14 h-14 p-1 rounded-xl"
                style={{
                  boxShadow:
                    "inset 0 0.3px 2px white, inset 0 0px 0px white, inset 0 -1px 1.5px #003542, inset 0 0px 0px white",
                }}
              >
                <ArrowTurnDownRightIcon className="w-10" color="#4C4C4C" />
              </span>
              Book Now
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            className="border-4 border-white rounded-[3rem]"
            src={Faces}
            width={0}
            height={0}
            alt="faces"
          />
          <Image
            className="absolute -bottom-20 -left-20"
            src={Logocertified}
            width={0}
            height={0}
            alt="logo-certified"
          />
        </div>
      </div>
    </div>
  );
}
