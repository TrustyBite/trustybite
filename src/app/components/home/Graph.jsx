"use client";

import React, { useState } from "react";
import graph from "@/app/assets/graph.svg";
import markIcon from "@/app/assets/markIcon.svg";
import Image from "next/image";
import image1 from "@/app/assets/image-1.svg";
import star1 from "@/app/assets/star1.svg";
import { SatoshiFont } from "@/app/fonts/SatoshiFont";
import { HeartIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Graph() {
  const [selected, setSelected] = useState(true);
  return (
    <div className="flex justify-center relative py-[2vw]">
      <div className="overflow-hidden  w-full">
        <div className="rounded-2xl">
          <Image
            onClick={() => setSelected(true)}
            className=" w-full h-full"
            src={graph}
            width={0}
            height={0}
            alt="test"
          />
        </div>
      </div>
      <Image
        onClick={() => setSelected(false)}
        className="absolute w-[3vw] cursor-pointer top-[20%] right-[40%]"
        src={markIcon}
        width={0}
        height={0}
        alt="Mark Icon"
      />
      <div
        className={`absolute top-[22%] right-[45%] ${
          selected ? "hidden" : "block"
        }`}
      >
        <Link href={"restaurant/1"}>
          <div className="bg-white border cursor-pointer border-[#DDDDDD] drop-shadow-xl h-[18vw] w-[fit-content] p-[0.5vw] rounded-[1vw]">
            <div className="relative">
              <Image
                className="w-[14vw] mb-[1vw]"
                src={image1}
                width={0}
                height={0}
                alt="image-1"
              />
              <div className="flex justify-end items-center w-full absolute top-0 p-[1vw]">
                <HeartIcon className="w-[1.5vw]" color="white" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`${SatoshiFont.className} text-[1vw] text-black font-bold`}
                >
                  Veggie Haven
                </p>
                <p
                  className={`${SatoshiFont.className} text-[0.8vw] text-[#5E5E5E]`}
                >
                  San Francisco, CA
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  className="w-[1.2vw] mr-[0.2vw]"
                  src={star1}
                  width={0}
                  height={0}
                  alt="star1"
                />
                <span
                  className={`${SatoshiFont.className} text-[#222222] font-bold text-[1.3vw]`}
                >
                  4.8
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
