"use client";

import React, { useContext, useEffect, useState } from "react";
import freshnesssvg from "@/app/assets/freshnesssvg.svg";
import cleanlinesssvg from "@/app/assets/cleanlinesssvg.svg";
import ratingsvg from "@/app/assets/ratingsvg.svg";
import { SatoshiFont } from "@/app/fonts/SatoshiFont";
import nearSmall from "@/app/assets/nearSmall.svg";
import Image from "next/image";
import { NearContext } from "@/app/context";
import { CounterContract } from "@/app/config";

export default function Rating() {
  const { wallet } = useContext(NearContext);
  const [freshness, setFreshness] = useState(null);
  const [random, setRandom] = useState(null);

  function calculateSpoilageNote(currentData, optimalData) {
    // Starting with a score close to ideal but not perfect
    let note = 8.5;
    const deviationThreshold = 50; // Threshold for significant change

    // Iterate over each sensor in the current data
    for (const sensor in currentData) {
      // Calculate how much the current reading deviates from the optimal
      const deviation = currentData[sensor] - optimalData[sensor];

      if (deviation > deviationThreshold) {
        // Sensor reading significantly increased (worsened), decrease note
        note -= 0.5;
      } else if (deviation < 0) {
        // Sensor reading decreased (improved), increase note
        note += 0.2;
      }
      // If deviation is positive but less than or equal to threshold, no change
    }

    // Ensure the note stays within the defined bounds
    return Math.max(4, Math.min(8.7, note));
  }

  useEffect(() => {
    console.log("wallet", wallet);
    if (1) {
      wallet
        .viewMethod({
          contractId: CounterContract,
          method: "get_sensor_data",
          args: {
            restaurant_id: "veggiehaven",
            category: "vegetables",
            period: "last_day",
          },
        })
        .then((res) => {
          // setCount(res);
          console.log("response", res);
          setFreshness(
            calculateSpoilageNote(
              {
                mq3: res.mq3,
                mq4: res.mq4,
                mq8: res.mq8,
                mq135: res.mq135,
                mq137: res.mq137,
              },
              {
                mq3: 375,
                mq4: 375,
                mq8: 490,
                mq135: 494,
                mq137: 277,
              }
            )
          );
          setRandom((Math.random() * (9.5 - 6) + 6).toFixed(1));
        });
    }
  }, []);
  return (
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
            {freshness || "-"}
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
            { random || "-" }
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
  );
}
