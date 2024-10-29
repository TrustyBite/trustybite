"use client";

import React, { useRef } from "react";
import freshness from "@/app/assets/freshness.svg";
import hygiene from "@/app/assets/hygiene.svg";
import secure from "@/app/assets/secure.svg";
import inApp from "@/app/assets/inApp.svg";
import { SatoshiFont } from "../fonts/SatoshiFont";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Cards() {
  const cards = [
    { src: freshness, title: "Freshness Monitoring" },
    { src: hygiene, title: "Hygiene Scoring" },
    { src: secure, title: "Secure Data Storage" },
    { src: inApp, title: "In App Booking" },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <div ref={containerRef} className="my-[3vw] h-full grid grid-cols-2">
      <div className="">
        <p
          className={`${SatoshiFont.className} sticky top-1/3 font-bold text-black text-[4vw]`}
        >
          How <span className="text-[#01B7E6]">TrustyBite</span>
          <br /> Solves It:
        </p>
      </div>
      <div>
        {cards.map((card, idx) => {
          // Transformations for opacity, scale, and y-position for smooth transition effect
          const opacity = useTransform(
            scrollYProgress,
            [
              (idx - 0.3) / cards.length, // Start fading in a bit before
              (idx + 0.5) / cards.length,
              (idx + 0.7) / cards.length,
              (idx + 1.2) / cards.length, // Fade out later
            ],
            [0, 1, 1, 0]
          );

          const scale = useTransform(
            scrollYProgress,
            [
              (idx - 0.2) / cards.length, // Start scaling a bit before
              (idx + 0.4) / cards.length,
              (idx + 0.7) / cards.length,
              (idx + 1.2) / cards.length, // Scale down later
            ],
            [0.9, 1, 1, 0.9]
          );

          return (
            <motion.div
              key={idx}
              style={{ opacity, scale }}
              className="p-[2vw] mt-[8vw] w-[40vw] sticky top-0 bg-gradient-to-b drop-shadow-2xl from-white to-[#DCEEFF] rounded-2xl"
            >
              <div className="flex items-center gap-[3vw] my-2">
                <Image
                  className="w-[6vw]"
                  src={card.src}
                  width={0}
                  height={0}
                  alt={card.title}
                />
                <p
                  className={`${SatoshiFont.className} text-black font-bold text-[2.5vw]`}
                >
                  {card.title}
                </p>
              </div>
              <div
                className={`${SatoshiFont.className} text-[1.2vw] font-bold`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati exercitationem ut delectus accusantium voluptates
                nesciunt molestiae expedita! Fuga, placeat incidunt corrupti hic
                cupiditate mollitia a magni laborum sed nihil dignissimos?
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
