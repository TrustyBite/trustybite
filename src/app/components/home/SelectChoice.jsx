"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { SatoshiFont } from "@/app/fonts/SatoshiFont";
import squaresvg from "@/app/assets/squaresvg.svg";
import mapIcon from "@/app/assets/mapIcon.svg";
import Restaurants from "@/app/components/home/Restaurants";
import Graph from "@/app/components/home/Graph";
import { NearContext } from "@/app/context";

export default function SelectChoice() {
  const { signedAccountId, wallet } = useContext(NearContext);

  const [activeTab, setActiveTab] = useState("Cards");
  const handleSwitchTab = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    console.log("wallet", wallet);
    
    // if (1) {
    //   wallet
    //     .viewMethod({
    //       contractId: CounterContract,
    //       method: "get_sensor_data",
    //       args: {
    //         restaurant_id: "veggiehaven",
    //         category: "vegetables",
    //         period: "last_day",
    //       },
    //     })
    //     .then((res) => {
    //       // setCount(res);
    //       console.log("response", res, signedAccountId);
    //       // calculateSpoilageNote(res)
    //     });
    // }
  }, []);
  return (
    <>
      <div className="px-[10vw] drop-shadow-xl flex justify-center">
        <div className="relative w-[15vw] h-[3vw] m-2 left-2 bg-[#EBEBEB] border border-[#DDDDDD] rounded-full flex justify-between">
          <div
            className={`absolute top-0 bottom-0 w-1/2 bg-white m-[0.2vw] rounded-full transition-all duration-300 ${
              activeTab === "Map" ? "left-[47%]" : "-left-[1px]"
            }`}
          ></div>
          <button
            onClick={() => handleSwitchTab("Cards")}
            className={`w-1/2 relative flex items-center justify-center z-10 py-[1vw] text-center text-[1vw] font-bold rounded-full text-black ${SatoshiFont.className}`}
          >
            <Image
              className="mr-[0.6vw] w-[1.5vw]"
              src={squaresvg}
              width={0}
              height={0}
              alt="squaresvg"
            />
            Cards
          </button>
          <button
            onClick={() => handleSwitchTab("Map")}
            className={`w-1/2 relative z-10 flex items-center justify-center py-[1vw] text-center text-[1vw] font-bold rounded-full text-black ${SatoshiFont.className}`}
          >
            <Image
              className="mr-[0.6vw] w-[1.5vw]"
              src={mapIcon}
              width={0}
              height={0}
              alt="mapIcon"
            />
            Map
          </button>
        </div>
      </div>
      {activeTab === "Cards" && <Restaurants />}
      {activeTab === "Map" && <Graph />}
    </>
  );
}
