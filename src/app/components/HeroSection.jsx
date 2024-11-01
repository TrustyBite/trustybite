"use client";

import { SatoshiFont } from "../fonts/SatoshiFont";
import Header from "./Header";
import Image from "next/image";
import { ArrowTurnDownRightIcon } from "@heroicons/react/24/outline";
import happyfamily1 from "@/app/assets/Happy-family-faces-1.png";
import nearLogo from "@/app/assets/nearLogo.svg";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="w-full">
      <Image
      draggable={false}
        className="bg-no-repeat w-full bg-contain -z-10"
        src={happyfamily1}
        width={0}
        height={0}
        alt="happy"
      />
      <div className="w-full absolute top-0 ">
        <Header />
        <div className=" flex justify-between ml-[6.5%] mt-[9%]">
          <div>
            <p
              className={`${SatoshiFont.className} flex text-[1vw] mb-[3%] items-center p-[0.4vw] w-[fit-content] font-medium rounded-full text-white border border-[#C6FFE9] bg-[#49FFB9]/30`}
            >
              <Image
              draggable={false}
                className="mr-[0.4vw] w-[2vw]"
                src={nearLogo}
                width={0}
                height={0}
                alt="near logo"
              />
              <span>Now live on NEAR Testnet!</span>
            </p>
            <p
              className={`${SatoshiFont.className} leading-[100%] font-bold text-[5.5vw] text-white`}
            >
              Trusty Bite:
              <br />
              Where{" "}
              <span className="text-[#6BE1FF]">
                Freshness
                <br /> Meets Hygiene.
              </span>
            </p>
            <p
              className={`${SatoshiFont.className} mt-[6%] leading-[130%] text-white font-[400] text-[2vw]`}
            >
              Find and book clean, safe restaurant <br /> swith real-time
              freshness and hygiene scores.
            </p>
            <Link href={"/home"}>
              <div className="mt-[6%]">
                <button
                  className={`w-[13vw] h-[4vw] text-[1.5vw] p-[0.3vw] text-[#4C4C4C] ${SatoshiFont.className} font-bold flex items-center gap-2 bg-[#6BE1FF] rounded-[1vw] shadow-inner`}
                  style={{
                    boxShadow:
                      "inset 0 0px 2px white, inset 0 0px 0px white, inset 0 -1px 1.5px #003542, inset 0 0px 0px white",
                  }}
                >
                  <span
                    className="bg-white flex justify-center items-center w-[3.5vw] h-[3.5vw] p-1 rounded-[1vw]"
                    style={{
                      boxShadow:
                        "inset 0 0.3px 2px white, inset 0 0px 0px white, inset 0 -1px 1.5px #003542, inset 0 0px 0px white",
                    }}
                  >
                    <ArrowTurnDownRightIcon
                      className="w-[3vw]"
                      color="#4C4C4C"
                    />
                  </span>
                  Book Now
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
