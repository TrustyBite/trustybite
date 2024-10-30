import Image from "next/image";
import React from "react";
import homelogo from "@/app/assets/homelogo.svg";
import profile from "@/app/assets/profile.svg";
import { HeartIcon } from "@heroicons/react/24/solid";
import { SatoshiFont } from "@/app/fonts/SatoshiFont";

export default function HomePageHeader() {
  return (
    <div className="h-[5vw] bg-white border-b border-[#DDDDDD]">
      <div className="mx-[6.5%] py-[0.8vw] flex items-center justify-between">
        <div>
          <Image
            className="w-[10vw]"
            src={homelogo}
            width={0}
            height={0}
            alt="home logo"
          />
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <HeartIcon className="w-[2vw]" color="#112211" />
            <p
              className={`${SatoshiFont.className} text-[#11221] text-[1.8vw] font-semibold`}
            >
              Favourites<span className="mx-[1.2vw]">|</span>
            </p>
          </div>
          <div>
            <Image
              className="w-[3vw]"
              src={profile}
              width={0}
              height={0}
              alt="profile logo"
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
