"use client";

import React from "react";
import tablette from "@/app/assets/tablette.png";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { SatoshiFont } from "../fonts/SatoshiFont";
import Image from "next/image";

export default function Tablette() {

  return (
    <div className="bg-[#F8F8F8] mt-10">
      <div className="mx-[6.5%]">
        <div className="flex justify-center">
          <p
            className={`${SatoshiFont.className} my-[3vw] leading-[110%] font-bold text-center text-[5vw] text-black`}
          >
            Dine with <span className="text-[#01B7E6]">Confidence</span>
          </p>
        </div>
        <motion.div
          initial={{ scale: .3 }}
          whileInView={{ scale: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
        >
          <Image
            className="w-full"
            src={tablette}
            width={0}
            height={0}
            alt="tablette"
          />
        </motion.div>
        <p
          className={`${SatoshiFont.className} text-[#626262] py-[1.3vw] text-center text-[1.5vw]`}
        >
          Check cleanliness and freshness scores before booking your table
        </p>
      </div>
    </div>
  );
}
