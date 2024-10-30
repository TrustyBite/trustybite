import React from "react";
import Search from "@/app/components/home/Search";
import SelectChoice from "@/app/components/home/SelectChoice";


export default function HomePageContent() {
  
  return (
    <div className=" bg-[#FAFAFA]">
      <div className="mx-[6.5%]">
        <Search />
        <SelectChoice/>
      </div>
    </div>
  );
}
