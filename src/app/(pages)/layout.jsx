"use client";

import React from "react";
import HomePageHeader from "../components/home/HomePageHeader";
import { Wallet } from "../Wallets/near";
import { CounterContract, NetworkId } from "../config";
import { NearContext } from "../context";

const wallet = new Wallet({
  createAccessKeyFor: CounterContract,
  networkId: NetworkId,
});

export default function HomeLayout({ children }) {
  return (
    <>
      <NearContext.Provider value={{ wallet }}>
        <div className="bg-[#FAFAFA] min-h-screen overflow-auto">
          <HomePageHeader />
          {children}
        </div>
      </NearContext.Provider>
    </>
  );
}
