import React from "react";
import HeroSection from "./HeroSection";
import { SatoshiFont } from "../fonts/SatoshiFont";
import Image from "next/image";
import dining from "@/app/assets/dining.png";
import freshness from "@/app/assets/freshness.svg";

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
        <div className="mt-[3vw] grid grid-cols-2">
          <p className={`${SatoshiFont.className}  font-bold text-black text-[3vw]`}>
            How <span className="text-[#01B7E6]">TrustyBite</span><br/> Solves It:
          </p>
          <div id="cards" className="">
            <div className="p-3 my-2 z-[1] bg-gradient-to-b drop-shadow-2xl from-white to-[#DCEEFF] rounded-2xl">
              <div className="flex items-center gap-10">
                <Image src={freshness} width={0} height={0}/>
                <p className={`${SatoshiFont.className} text-black font-bold text-4xl`}>Freshness Monitoring</p>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati exercitationem ut delectus accusantium voluptates
                nesciunt molestiae expedita! Fuga, placeat incidunt corrupti hic
                cupiditate mollitia a magni laborum sed nihil dignissimos?
              </div>
            </div>
            <div className="p-3 my-2 z-[2] bg-gradient-to-b drop-shadow-2xl from-white to-[#DCEEFF] rounded-2xl">
              <div className="flex items-center gap-10">
                <Image src={freshness} width={0} height={0}/>
                <p className={`${SatoshiFont.className} text-black font-bold text-4xl`}>Freshness Monitoring</p>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati exercitationem ut delectus accusantium voluptates
                nesciunt molestiae expedita! Fuga, placeat incidunt corrupti hic
                cupiditate mollitia a magni laborum sed nihil dignissimos?
              </div>
            </div>
            <div className="p-3 top-0 z-[2] bg-gradient-to-b drop-shadow-2xl from-white to-[#DCEEFF] rounded-2xl">
              <div className="flex items-center gap-10">
                <Image src={freshness} width={0} height={0}/>
                <p className={`${SatoshiFont.className} text-black font-bold text-4xl`}>Freshness Monitoring</p>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati exercitationem ut delectus accusantium voluptates
                nesciunt molestiae expedita! Fuga, placeat incidunt corrupti hic
                cupiditate mollitia a magni laborum sed nihil dignissimos?
              </div>
            </div>
            <div className="p-3 my-2 z-[2] bg-gradient-to-b drop-shadow-2xl from-white to-[#DCEEFF] rounded-2xl">
              <div className="flex items-center gap-10">
                <Image src={freshness} width={0} height={0}/>
                <p className={`${SatoshiFont.className} text-black font-bold text-4xl`}>Freshness Monitoring</p>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati exercitationem ut delectus accusantium voluptates
                nesciunt molestiae expedita! Fuga, placeat incidunt corrupti hic
                cupiditate mollitia a magni laborum sed nihil dignissimos?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
