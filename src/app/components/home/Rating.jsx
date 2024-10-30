import React from "react";
import freshnesssvg from "@/app/assets/freshnesssvg.svg";
import cleanlinesssvg from "@/app/assets/cleanlinesssvg.svg";
import ratingsvg from "@/app/assets/ratingsvg.svg";
import { SatoshiFont } from "@/app/fonts/SatoshiFont";
import nearSmall from "@/app/assets/nearSmall.svg";
import Image from "next/image";

export default function Rating() {
  return (
    <div className="bg-white drop-shadow-xl border border-[#DDDDDD] px-[2.5vw] py-[2vw] rounded-[1vw]">
      <p
        className={`${SatoshiFont.className} text-black text-[2vw] font-bold text-center`}
      >
        Ratings & Health Data
      </p>
      <div className="flex justify-between my-[1vw]">
        <div className="p-[1vw] border border-[#DDDDDD] rounded-[1vw]">
          <p
            className={`${SatoshiFont.className} text-center text-black font-bold text-[2.5vw]`}
          >
            9.3
          </p>
          <div className="flex items-center justify-center">
            <Image
              className="w-[1.5vw] mr-[0.2vw]"
              src={freshnesssvg}
              width={0}
              height={0}
              alt="freshness svg"
            />
            <span
              className={`${SatoshiFont.className} text-black font-medium text-[1vw]`}
            >
              Freshness
            </span>
          </div>
        </div>
        <div className="p-[1vw] border border-[#DDDDDD] rounded-[1vw]">
          <p
            className={`${SatoshiFont.className} text-center text-black font-bold text-[2.5vw]`}
          >
            9.1
          </p>
          <div className="flex items-center justify-center">
            <Image
              className="w-[1.5vw] mr-[0.2vw]"
              src={cleanlinesssvg}
              width={0}
              height={0}
              alt="freshness svg"
            />
            <span
              className={`${SatoshiFont.className} text-black font-medium text-[1vw]`}
            >
              Cleanliness
            </span>
          </div>
        </div>
        <div className="p-[1vw] border border-[#DDDDDD] rounded-[1vw]">
          <p
            className={`${SatoshiFont.className} text-center text-black font-bold text-[2.5vw]`}
          >
            4.7/5
          </p>
          <div className="flex items-center justify-center">
            <Image
              className="w-[1.5vw] mr-[0.2vw]"
              src={ratingsvg}
              width={0}
              height={0}
              alt="freshness svg"
            />
            <span
              className={`${SatoshiFont.className} text-black font-medium text-[1vw]`}
            >
              Rating
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <p
          className={`${SatoshiFont.className} text-black font-medium flex text-[1vw]`}
        >
          All data verified and stored on the{" "}
          <Image
            className="w-[3vw] mx-[0.2vw]"
            src={nearSmall}
            width={0}
            height={0}
            alt="near small"
          />
          Blockchain
        </p>
      </div>
    </div>
  );
}
