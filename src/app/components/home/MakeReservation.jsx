import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import calendar from "@/app/assets/calendar.svg";
import clock from "@/app/assets/clock.svg";
import usersvg from "@/app/assets/usersvg.svg";
import Image from "next/image";
import { SatoshiFont } from "@/app/fonts/SatoshiFont";

export default function MakeReservation() {
  return (
    <div className="bg-white mt-[2vw] drop-shadow-xl border border-[#DDDDDD] px-[2.5vw] py-[2vw] rounded-[1vw]">
      <p
        className={`${SatoshiFont.className} text-black text-[2vw] font-bold text-center`}
      >
        Make a reservation
      </p>
      <div className="mt-[1vw]">
        <div className="rounded-full my-[1vw] border border-[#DDDDDD] bg-white flex items-center p-[1vw] ">
          <Image
          draggable={false}
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
        <div className="rounded-full my-[1vw] border border-[#DDDDDD] bg-white flex items-center justify-between p-[1vw]">
          <div className="flex">
            <Image
            draggable={false}
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
          </div>
          <ChevronDownIcon className="w-4 ml-[1vw]" />
        </div>
        <div className="rounded-full my-[1vw] border border-[#DDDDDD] bg-white flex justify-between items-center p-[1vw]">
          <div className="flex">
            <Image
            draggable={false}
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
          </div>
          <ChevronDownIcon className="w-4 ml-[1vw]" />
        </div>
        <button
          className={`${SatoshiFont.className} text-white rounded-[1vw] bg-[#01B7E6] p-[1.5vw] text-[1.2vw] w-full`}
        >
          Book
        </button>
      </div>
    </div>
  );
}
