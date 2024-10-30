import Image from "next/image";
import React from "react";
import restoSvg from "@/app/assets/restoSvg.svg";
import freshnesssvg from "@/app/assets/freshnesssvg.svg";
import cleanlinesssvg from "@/app/assets/cleanlinesssvg.svg";
import ratingsvg from "@/app/assets/ratingsvg.svg";
import nearSmall from "@/app/assets/nearSmall.svg";
import calendar from "@/app/assets/calendar.svg";
import clock from "@/app/assets/clock.svg";
import usersvg from "@/app/assets/usersvg.svg";
import anotherCertified from "@/app/assets/anotherCertified.png";
import { SatoshiFont } from "@/app/fonts/SatoshiFont";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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
            <div className="bg-white mt-[2vw] drop-shadow-xl border border-[#DDDDDD] px-[2.5vw] py-[2vw] rounded-[1vw]">
              <p
                className={`${SatoshiFont.className} text-black text-[2vw] font-bold text-center`}
              >
                Make a reservation
              </p>
              <div className="mt-[1vw]">
                <div className="rounded-full my-[1vw] border border-[#DDDDDD] bg-white flex items-center p-[1vw] ">
                  <Image
                    className="mr-[1vw] w-[1.5vw]"
                    src={calendar}
                    height={0}
                    width={0}
                    alt="calendar"
                  />
                  <p
                    className={`${SatoshiFont.className} text-[1.2vw] text-black font-medium`}
                  >
                    03 Nov 24
                  </p>
                </div>
                <div className="rounded-full my-[1vw] border border-[#DDDDDD] bg-white flex items-center justify-between p-[1vw]">
                  <div className="flex">
                    <Image
                      className="mr-[1vw] w-[1.5vw]"
                      src={clock}
                      height={0}
                      width={0}
                      alt="clock"
                    />
                    <p
                      className={`${SatoshiFont.className} text-[1.2vw] text-black font-medium`}
                    >
                      10 pm
                    </p>
                  </div>
                  <ChevronDownIcon className="w-4 ml-[1vw]" />
                </div>
                <div className="rounded-full my-[1vw] border border-[#DDDDDD] bg-white flex justify-between items-center p-[1vw]">
                  <div className="flex">
                    <Image
                      className="mr-[1vw] w-[1.5vw]"
                      src={usersvg}
                      height={0}
                      width={0}
                      alt="usersvg"
                    />
                    <p
                      className={`${SatoshiFont.className} text-[1.2vw] text-black font-medium`}
                    >
                      2 People
                    </p>
                  </div>
                  <ChevronDownIcon className="w-4 ml-[1vw]" />
                </div>
                <button
                  className={`${SatoshiFont.className} text-white rounded-[1vw] bg-[#01B7E6] p-[1.5vw] text-[1.2vw] w-full`}
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[1.5vw] grid grid-cols-8 gap-[2vw]">
          <div className="col-span-5">
            <p
              className={`${SatoshiFont.className} text-black text-[1.5vw] font-bold`}
            >
              Veggie Haven, San Francisco, CA
            </p>
            <p className={`${SatoshiFont.className} text-black text-[1.2vw]`}>
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
      </div>
    </div>
  );
}
