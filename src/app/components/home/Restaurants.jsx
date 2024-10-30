import Image from "next/image";
import React from "react";
import image1 from "@/app/assets/image-1.svg";
import star1 from "@/app/assets/star1.svg";
import { SatoshiFont } from "@/app/fonts/SatoshiFont";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function Restaurants() {
  return (
    <>
      <div className="grid grid-cols-4 gap-[2vw] py-[2vw]">
        {[...Array(12)].map(() => {
          return (
            <div
              key={Math.random()}
              className="bg-white border cursor-pointer border-[#DDDDDD] drop-shadow-xl h-[24vw] w-[fit-content] p-[0.5vw] rounded-[1vw]"
            >
              <div className="relative">
                <Image
                  className="w-[20vw] mb-[1vw]"
                  src={image1}
                  width={0}
                  height={0}
                  alt="image-1"
                />
                <div className="flex justify-between items-center w-full absolute top-0 p-[1vw]">
                  <p
                    className={`${SatoshiFont.className} text-white text-[1vw] bg-[#01B7E6] px-[0.3vw] w-[fit-content] font-bold rounded-[0.2vw]`}
                  >
                    Featured
                  </p>
                  <HeartIcon className="w-[2vw]" color="white" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className={`${SatoshiFont.className} text-[1.2vw] text-black font-bold`}
                  >
                    Veggie Haven
                  </p>
                  <p
                    className={`${SatoshiFont.className} text-[1.2vw] text-[#5E5E5E]`}
                  >
                    San Francisco, CA
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    className="w-[1.5vw] mr-[0.2vw]"
                    src={star1}
                    width={0}
                    height={0}
                    alt="star1"
                  />
                  <span
                    className={`${SatoshiFont.className} text-[#222222] font-bold text-[1.2vw]`}
                  >
                    4.8
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
