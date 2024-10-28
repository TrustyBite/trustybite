"use client";

import React, { useState } from "react";
import { SatoshiFont } from "../fonts/SatoshiFont";
import Image from "next/image";
import ElisaGrant from "@/app/assets/Elisa-Grant.svg";
import MichaelBennett from "@/app/assets/Michael-Bennett.svg";
import DorothyReynolds from "@/app/assets/Dorothy-Reynolds.svg";
import TheAndersons from "@/app/assets/The-Andersons.svg";
import SteveCarson from "@/app/assets/Steve-Carson.svg";
import EmmaRichardson from "@/app/assets/Emma-Richardson.svg";
import ThePatels from "@/app/assets/The-Patels.svg";
import stars from "@/app/assets/stars.svg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      src: ElisaGrant,
      name: "Elisa Grant",
      text: "Since discovering TrustyBite, dining out has become a stress-free experience. Knowing the freshness and hygiene scores before we go has made family dinners at 'The Green Fork' not just delicious but worry-free. My kids love it, and I love the peace of mind!",
    },
    {
      src: MichaelBennett,
      name: "Michael Bennett",
      text: "As a foodie, I was skeptical, but TrustyBite's insights convinced me. 'Urban Tasty' scored high on both freshness and hygiene, and the meal was impeccable. It's like having a chef's certification for every restaurant I explore!",
    },
    {
      src: DorothyReynolds,
      name: "Dorothy Reynolds",
      text: "Retirement means trying new places, but with my health in mind. TrustyBite's data on 'Cafe Harmony' was spot on - clean, fresh, and heartwarming. It's like bringing comfort food to another level with assurance.",
    },
    {
      src: TheAndersons,
      name: "The Andersons",
      text: "New parents, always on the lookout for a safe dining experience. TrustyBite's ratings at 'Fusion Delight' gave us the confidence to enjoy a date night out. The meal was fantastic, and little Emma loved it too!",
    },
    {
      src: SteveCarson,
      name: "Steve Carson",
      text: "Fitness is my life, and diet plays a big part. TrustyBite's insights into 'FitFoods' gave me the confidence that my post-workout meals are as clean as my training regimen. It's all about clean eating and clean living!",
    },
    {
      src: EmmaRichardson,
      name: "Emma Richardson",
      text: "TrustyBite rocks! Found 'The Vegan Hangout' and it was legit. The food's fresh, the vibe's cool, and knowing it's all clean? It's like, the best way to hang with friends without worrying about the rest.",
    },
    {
      src: ThePatels,
      name: "The Patels",
      text: "We're old school, but TrustyBite brought us into the digital age of dining. 'Old Town Eatery' not only tastes like home but feels like it too, thanks to the platform's transparency on hygiene and freshness.",
    },
  ];
  const [FlowDirection, setFlowDirection] = useState(true);
  const [CenterId, setCenterId] = useState(0);
  const [LeftId, setLeftId] = useState(testimonials.length - 1);
  const [RightId, setRightId] = useState(1);

  function handleRight() {
    const length = testimonials.length;
    setLeftId((prev) => (prev === length - 1 ? 0 : prev + 1));
    setCenterId((prev) => (prev === length - 1 ? 0 : prev + 1));
    setRightId((prev) => (prev === length - 1 ? 0 : prev + 1));
    setFlowDirection(true);
  }

  function handleLeft() {
    const length = testimonials.length;
    setFlowDirection(false);
    setLeftId((prev) => (prev === 0 ? length - 1 : prev - 1));
    setCenterId((prev) => (prev === 0 ? length - 1 : prev - 1));
    setRightId((prev) => (prev === 0 ? length - 1 : prev - 1));
  }

  const variants = {
    center: {
      x: "35%",
      opacity: 1,
      scale: 1.1,
      zIndex: "5",
      filter: "brightness(100%)",
      //   backgroundImage:  `url(${testimonials[CenterId].src.src})`,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    left: {
      x: "-30%",
      opacity: 0.6,
      filter: "blur(2px)",
      scale: 0.7,
      //   backgroundImage: `url(${testimonials[LeftId].src.src})`,
      zIndex: "4",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    right: {
      //   backgroundImage: `url(${testimonials[RightId].src.src})`,
      x: "85%",
      opacity: 0.6,
      filter: "blur(2px)",
      scale: 0.7,
      zIndex: "3",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    rightHidden: {
      x: "8rem",
      scale: 0,
      opacity: 0,
    },
    leftHidden: {
      x: "-8rem",
      scale: 0,
      opacity: 0,
    },
  };
  return (
    <div className="mx-[6.5%] my-[8vw]">
      <div>
        <p
          className={`${SatoshiFont.className} text-center text-black text-[4vw] font-bold`}
        >
          What people say <span className="text-[#01B7E6]">about us</span>
        </p>
        <p
          className={`${SatoshiFont.className} text-[2vw] text-center text-black`}
        >
          Trusted by Diners and Restaurants Alike
        </p>
      </div>
      <div className="flex relative h-[20vw] mt-[5vw] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={LeftId}
            variants={variants}
            initial={FlowDirection ? "center" : "leftHidden"}
            animate="left"
            exit={"leftHidden"}
            className="absolute w-[69vw]"
          >
            <div
              key={testimonials[LeftId].name}
              className="bg-white p-[2vw] rounded-[2vw] drop-shadow-xl flex items-center w-[45vw] h-[20vw] "
            >
              <div>
                <Image
                  className="w-[45vw] h-[17vw]"
                  src={testimonials[LeftId].src}
                  width={0}
                  height={0}
                  alt="Elisa Grant"
                />
              </div>
              <div className="ml-[2vw] w-[90vw] flex flex-col gap-2">
                <div>
                  <p
                    className={`${SatoshiFont.className} text-[1.8vw] text-black font-bold`}
                  >
                    {testimonials[LeftId].name}
                  </p>
                </div>
                <div>
                  <p
                    className={`${SatoshiFont.className} text-black text-[1.2vw] font-medium`}
                  >
                    {testimonials[LeftId].text}
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    className="mr-[1vw] w-[6vw]"
                    src={stars}
                    width={0}
                    height={0}
                    alt="stars"
                  />
                  <span
                    className={`${SatoshiFont.className} text-black text-[1vw]`}
                  >
                    5.0 rating
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            key={CenterId}
            initial={FlowDirection ? "right" : "left"}
            animate="center"
            className="absolute w-[69vw]"
          >
            <div
              key={testimonials[CenterId].name}
              className="bg-white p-[2vw] rounded-[2vw] drop-shadow-xl flex items-center w-[45vw] h-[20vw] "
            >
              <div>
                <Image
                  className="w-[45vw] h-[17vw]"
                  src={testimonials[CenterId].src}
                  width={0}
                  height={0}
                  alt="Elisa Grant"
                />
              </div>
              <div className="ml-[2vw] w-[90vw] flex flex-col gap-2">
                <div>
                  <p
                    className={`${SatoshiFont.className} text-[1.8vw] text-black font-bold`}
                  >
                    {testimonials[CenterId].name}
                  </p>
                </div>
                <div>
                  <p
                    className={`${SatoshiFont.className} text-black text-[1.2vw] font-medium`}
                  >
                    {testimonials[CenterId].text}
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    className="mr-[1vw] w-[6vw]"
                    src={stars}
                    width={0}
                    height={0}
                    alt="stars"
                  />
                  <span
                    className={`${SatoshiFont.className} text-black text-[1vw]`}
                  >
                    5.0 rating
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            key={RightId}
            variants={variants}
            initial={FlowDirection ? "rightHidden" : "center"}
            animate="right"
            exit={"rightHidden"}
            className="absolute w-[69vw]"
          >
            <div
              key={testimonials[RightId].name}
              className="bg-white p-[2vw] rounded-[2vw] drop-shadow-xl flex items-center w-[45vw] h-[20vw] "
            >
              <div>
                <Image
                  className="w-[45vw] h-[17vw]"
                  src={testimonials[RightId].src}
                  width={0}
                  height={0}
                  alt="Elisa Grant"
                />
              </div>
              <div className="ml-[2vw] w-[90vw] flex flex-col gap-2">
                <div>
                  <p
                    className={`${SatoshiFont.className} text-[1.8vw] text-black font-bold`}
                  >
                    {testimonials[RightId].name}
                  </p>
                </div>
                <div>
                  <p
                    className={`${SatoshiFont.className} text-black text-[1.2vw] font-medium`}
                  >
                    {testimonials[RightId].text}
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    className="mr-[1vw] w-[6vw]"
                    src={stars}
                    width={0}
                    height={0}
                    alt="stars"
                  />
                  <span
                    className={`${SatoshiFont.className} text-black text-[1vw]`}
                  >
                    5.0 rating
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div>
          <button
            onClick={handleRight}
            className="absolute z-10 top-1/2 -translate-y-1/2 right-0 text-[5vw]"
          >
            <ChevronRightIcon className="w-[3vw]" />
          </button>
          <button
            onClick={handleLeft}
            className="absolute z-10 top-1/2 -translate-y-1/2 text-[5vw]"
          >
            <ChevronLeftIcon className="w-[3vw]" />
          </button>
        </div>
      </div>
    </div>
  );
}
