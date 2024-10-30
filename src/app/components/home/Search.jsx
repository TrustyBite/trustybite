import React from "react";
import mapsvg from "@/app/assets/mapsvg.svg";
import calendar from "@/app/assets/calendar.svg";
import clock from "@/app/assets/clock.svg";
import usersvg from "@/app/assets/usersvg.svg";
import { SatoshiFont } from "@/app/fonts/SatoshiFont";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Search() {
  return (
    <div className="py-[3vw] px-[5vw] drop-shadow-xl">
      <div className="border border-[#DDDDDD] flex items-center justify-between p-[1vw] bg-white rounded-full">
        <div className="rounded-full border border-[#DDDDDD] bg-white flex items-center p-[1vw] w-[22vw]">
          <Image
            className="mr-[1vw] w-[1.5vw]"
            src={mapsvg}
            height={0}
            width={0}
            alt="mapsvg"
          />
          <p
            className={`${SatoshiFont.className} text-[1.2vw] text-black font-medium`}
          >
            USA
          </p>
        </div>
        <div className="rounded-full border border-[#DDDDDD] bg-white flex items-center p-[1vw] w-[18vw]">
          <Image
            className="mr-[1vw] w-[1.5vw]"
            src={calendar}
            height={0}
            width={0}
            alt="calendar"
          />
          <p
            className={`${SatoshiFont.className} text-[1.2vw] text-black font-medium`}
          >
            03 Nov 24
          </p>
        </div>
        <div className="rounded-full border border-[#DDDDDD] bg-white flex items-center justify-between p-[1vw] w-[11vw]">
          <Image
            className="mr-[1vw] w-[1.5vw]"
            src={clock}
            height={0}
            width={0}
            alt="clock"
          />
          <p
            className={`${SatoshiFont.className} text-[1.2vw] text-black font-medium`}
          >
            10 pm
          </p>
          <ChevronDownIcon className="w-4 ml-[1vw]" />
        </div>
        <div className="rounded-full border border-[#DDDDDD] bg-white flex justify-between items-center p-[1vw] w-[12vw]">
          <Image
            className="mr-[1vw] w-[1.5vw]"
            src={usersvg}
            height={0}
            width={0}
            alt="usersvg"
          />
          <p
            className={`${SatoshiFont.className} text-[1.2vw] text-black font-medium`}
          >
            2 People
          </p>
          <ChevronDownIcon className="w-4 ml-[1vw]" />
        </div>
        <div className="rounded-full bg-[#01B7E6] flex justify-center items-center p-[1vw] w-[4vw] h-[4vw]">
          <MagnifyingGlassIcon className="w-[1.6vw]" color="white" />
        </div>
      </div>
    </div>
  );
}
