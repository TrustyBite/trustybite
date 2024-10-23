import React from "react";
import Logo from "@/app/assets/Logo.svg";
import Image from "next/image";
import { SatoshiFont } from "../fonts/SatoshiFont";
import { ArrowTurnDownRightIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const header = ["About Us", "EMSculpt NEO", "EMFace", "EMSella", "Contact"];
  return (
    <div className="mx-8 flex justify-between items-center">
      <div className="m-2 flex items-center">
        <Image className="w-32" src={Logo} width={0} height={0} alt="Logo" />
      </div>
      {/* <div className="flex">
        {header.map((val, idx) => {
          return (
            <p
              key={val}
              className={`${SatoshiFont.className} font-[500] px-5 py-3 text-white text-md`}
            >
              {val}
            </p>
          );
        })}
      </div> */}
      <div>
        <button
          className={` ${SatoshiFont.className} text-[#4C4C4C] font-bold flex items-center gap-2 bg-[#6BE1FF] py-1 pl-1 pr-2 rounded-xl shadow-inner`}
          style={{
            boxShadow:
              "inset 0 0px 2px white, inset 0 0px 0px white, inset 0 -0.5px 1px #003542, inset 0 0px 0px white",
          }}
        >
          <span
            className="bg-white flex justify-center items-center p-1 rounded-lg"
            style={{
              boxShadow:
                "inset 0 0.3px 2px white, inset 0 0px 0px white, inset 0 -0.5px 1px #003542, inset 0 0px 0px white",
            }}
          >
            <ArrowTurnDownRightIcon className="w-6" color="#4C4C4C" />
          </span>
          Book Now
        </button>
      </div>
    </div>
  );
}
