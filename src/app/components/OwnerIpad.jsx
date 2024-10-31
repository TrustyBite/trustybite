"use client";

import React from "react";
import mark from "../assets/mark.svg";
import Image from "next/image";
import ownerIpad from "@/app/assets/ownerIpad.svg";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { SatoshiFont } from "../fonts/SatoshiFont";

export default function OwnerIpad() {
  return (
    <div className="mx-[6.5%] flex justify-between">
      <motion.div
        initial={{ x: -600 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0 }}
        className="flex-1"
      >
        <p
          className={`${SatoshiFont.className} text-black font-bold text-[3.8vw]`}
        >
          TrustyBite helps you:
        </p>
        <div className="my-[1vw]">
          <div className="flex items-center">
            <Image
              className="mr-[.5vw] w-[2vw]"
              src={mark}
              width={0}
              height={0}
              alt="Mark"
            />
            <p
              className={`${SatoshiFont.className} text-black font-bold text-[3.8vw]`}
            >
              Boost <span className="text-[#01B7E6]">Trust</span>
            </p>
          </div>
          <div className="flex items-center">
            <Image
              className="mr-[.5vw] w-[2vw]"
              src={mark}
              width={0}
              height={0}
              alt="Mark"
            />
            <p
              className={`${SatoshiFont.className} text-black font-bold text-[3.8vw]`}
            >
              Gain <span className="text-[#01B7E6]">Visibility</span>
            </p>
          </div>
          <div className="flex items-center">
            <Image
              className="mr-[.5vw] w-[2vw]"
              src={mark}
              width={0}
              height={0}
              alt="Mark"
            />
            <p
              className={`${SatoshiFont.className} text-black font-bold text-[3.8vw]`}
            >
              Get More <span className="text-[#01B7E6]">Customers</span>
            </p>
          </div>
        </div>
        <p
          className={`${SatoshiFont.className} leading-[130%] text-[#626262] text-[2vw]`}
        >
          Show your commitment to fresh food
          <br /> and hygiene with SafeBite certification.
        </p>
      </motion.div>
      <div className="overflow-hidden">
        <motion.div
          initial={{ x: 400 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0 }}
          className="[clip-path:inset(0px_0px_0px_0px)]"
        >
          <Image
            className="w-[40vw]"
            src={ownerIpad}
            width={0}
            height={0}
            alt="ownerIpad"
          />
        </motion.div>
      </div>
    </div>
  );
}
