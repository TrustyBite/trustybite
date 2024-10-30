"use client";

import React, { useContext, useEffect, useState } from "react";
import Logo from "@/app/assets/Logo.svg";
import Image from "next/image";
import { SatoshiFont } from "../fonts/SatoshiFont";
import { ArrowTurnDownRightIcon } from "@heroicons/react/24/outline";
import { NearContext } from "../context";
import { CounterContract } from "../config";

export default function Header() {
  const { signedAccountId, wallet } = useContext(NearContext);
  const [isSignedIn, setIsSignedIn] = useState(false);

  function handleLogin() {
    if (!isSignedIn) {
      wallet.signIn();
    } else {
      wallet.signOut();
    }
  }

  useEffect(() => {
    if (signedAccountId) {
      wallet
        .viewMethod({
          contractId: CounterContract,
          method: "get_sensor_data",
          args: { restaurant_id: "veggiehaven", category: "vegetables", period: "last_4_hours" },
        })
        .then((res) => {
          // setCount(res);
          console.log("response", res);
        });
    }
    setIsSignedIn(!!signedAccountId);
  }, [signedAccountId]);
  return (
    <div className="mx-[6.5%] flex justify-between items-center">
      <div className="m-2 flex items-center">
        <Image
          className="w-[12vw]"
          src={Logo}
          width={0}
          height={0}
          alt="Logo"
        />
      </div>
      <div className="" onClick={handleLogin}>
        <button
          className={`w-[11vw] h-[3.5vw] text-[1.25vw] p-[0.3vw] text-[#4C4C4C] ${SatoshiFont.className} font-bold flex items-center gap-2 bg-[#6BE1FF] rounded-[1vw] shadow-inner`}
          style={{
            boxShadow:
              "inset 0 0px 2px white, inset 0 0px 0px white, inset 0 -1px 1.5px #003542, inset 0 0px 0px white",
          }}
        >
          <span
            className="bg-white flex justify-center items-center w-[3vw] h-[3vw] p-1 rounded-[1vw]"
            style={{
              boxShadow:
                "inset 0 0.3px 2px white, inset 0 0px 0px white, inset 0 -1px 1.5px #003542, inset 0 0px 0px white",
            }}
          >
            <ArrowTurnDownRightIcon className="w-[2vw]" color="#4C4C4C" />
          </span>
          Book Now
        </button>
      </div>
    </div>
  );
}
