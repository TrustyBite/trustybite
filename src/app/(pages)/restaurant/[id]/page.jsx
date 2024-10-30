import Image from "next/image";
import React from "react";
import restoSvg from "@/app/assets/restoSvg.svg";

import nearSmall from "@/app/assets/nearSmall.svg";

import anotherCertified from "@/app/assets/anotherCertified.png";
import { SatoshiFont } from "@/app/fonts/SatoshiFont";
import ReviewsSection from "@/app/components/home/ReviewsSection";
import Rating from "@/app/components/home/Rating";
import MakeReservation from "@/app/components/home/MakeReservation";

export default function RestaurantId() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="mx-[6.5%] pt-[5vw]">
        <div className="grid grid-cols-8 gap-[2vw]">
          <div className="col-span-5">
            <Image
              className="w-full h-full object-cover rounded-[1vw] drop-shadow-xl"
              src={restoSvg}
              width={0}
              height={0}
              alt="restoSvg"
            />
          </div>
          <div className=" col-span-3 flex flex-col">
            <Rating />
            <MakeReservation />
          </div>
        </div>
        <div className="mt-[1.5vw] grid grid-cols-8 gap-[2vw]">
          <div className="col-span-5">
            <p
              className={`${SatoshiFont.className} text-black text-[1.5vw] font-bold`}
            >
              Veggie Haven, San Francisco, CA
            </p>
            <p
              className={`${SatoshiFont.className} text-black text-[1.2vw] mt-[1vw]`}
            >
              Veggie Haven, a beacon of plant-based dining in San Francisco,
              offers an eco-conscious menu that celebrates fresh, local
              ingredients. With dishes that range from globally-inspired to
              purely inventive, this restaurant proves that vegan food can be
              both delicious and diverse. Experience a meal where every bite
              supports sustainability, health, and the vibrant spirit of the
              city's food scene.
            </p>
          </div>
          <div className="col-span-3 bg-white border border-[#DDDDDD] px-[2.5vw] py-[2vw] rounded-[1vw]">
            <div className="flex items-center">
              <Image
                className="drop-shadow-xl w-[8vw] mr-[1vw]"
                src={anotherCertified}
                width={0}
                height={0}
                alt="another certified"
              />
              <div>
                <p
                  className={`${SatoshiFont.className} text-black text-[1.2vw] font-bold`}
                >
                  This place has been marked as TrustyBite Certified
                </p>
                <p className={`${SatoshiFont.className} text-black text-[1vw]`}>
                  TrustyBite Certified Restaurants show high level of hygiene
                  and Cleanless
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-[2.5vw] flex justify-between items-center">
          <div className="flex items-center">
            <p
              className={`${SatoshiFont.className} text-black font-bold text-[4vw] mr-[1vw]`}
            >
              4.7
            </p>
            <div>
              <p className={`${SatoshiFont.className} text-black font-bold`}>
                Very good
              </p>
              <p className={`${SatoshiFont.className} text-black `}>
                371 verified reviews
              </p>
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
          <button
            className={`${SatoshiFont.className} text-white rounded-[0.3vw] bg-[#01B7E6] p-[0.5vw] text-[1.2vw] w-[12vw]`}
          >
            Leave a review
          </button>
        </div>
        <ReviewsSection />
      </div>
    </div>
  );
}
