"use client";

import React from "react";
import botBG from "@/app/assets/botBG.svg";
import botConv from "@/app/assets/botConv.svg";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { SatoshiFont } from "../fonts/SatoshiFont";

export default function BotConversation() {
  //   const { scrollYProgress } = useScroll();
  //   useMotionValueEvent(scrollYProgress, "change", () => {});
  //   const scale = useTransform(scrollYProgress, [0.78, 1], [0.5, 1]);
  //   const valueY = useTransform(scrollYProgress, [0.78, 1], [600, 0]);
  return (
    <div className="mx-[6.5%]">
      <div className="my-[8vw] relative">
        <Image
        draggable={false}
          className="w-full"
          src={botBG}
          width={0}
          height={0}
          alt="botBG"
        />
        <div className="absolute top-0">
          <motion.div
            initial={{ scale: 0.3, transition: { duration: 1 } }}
            className="mx-[8vw] my-[10vw]"
            whileInView={{ scale: 1}}
          >
            <p
              className={`${SatoshiFont.className} leading-[100%] text-[5vw] font-bold text-white`}
            >
              Find the{" "}
              <span className="text-[#01B7E6]">
                Best
                <br />
              </span>{" "}
              Restaurants <br />
              <span className="text-[#01B7E6]">Quickly</span>
            </p>
            <p
              className={`${SatoshiFont.className} text-white mt-[2vw] text-[1.8vw] leading-[130%]`}
            >
              Let our AI assistant help you find and
              <br /> book safe, clean restaurants near you.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 400 }}
          whileInView={{ y: 0, transition: { duration: 1 } }}
          className="absolute mr-[2vw] bottom-0 right-[1.5%]"
          viewport={{ once: true }}
        >
          <Image
          draggable={false}
            className="w-[35vw]"
            src={botConv}
            width={0}
            height={0}
            alt="bot conversation"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
