import React from "react";
import HomePageHeader from "../components/home/HomePageHeader";

export default function HomeLayout({ children }) {
  return (
    <>
      <div className="bg-[#FAFAFA] h-screen">
        <HomePageHeader />
        {children}
      </div>
    </>
  );
}
