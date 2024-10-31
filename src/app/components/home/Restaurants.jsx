import Image from "next/image";
import React from "react";
import image1 from "@/app/assets/image-1.svg";
import image2 from "@/app/assets/image2.svg";
import image3 from "@/app/assets/image3.svg";
import image4 from "@/app/assets/image4.svg";
import image5 from "@/app/assets/image5.svg";
import image6 from "@/app/assets/image6.svg";
import image7 from "@/app/assets/image7.svg";
import image8 from "@/app/assets/image8.svg";
import image9 from "@/app/assets/image9.svg";
import image10 from "@/app/assets/image10.svg";
import image11 from "@/app/assets/image11.svg";
import image12 from "@/app/assets/image12.svg";
import star1 from "@/app/assets/star1.svg";
import { SatoshiFont } from "@/app/fonts/SatoshiFont";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Restaurants() {
  const restaurants = [
    {
      src: image1,
      name: "Veggie Haven",
      city: "San Francisco, CA",
      rate: "4.8",
    },
    { src: image2, name: "Seafood Delight", city: "Seattle, WA", rate: "4.5" },
    { src: image3, name: "Taco Tidal", city: "Austin, TX", rate: "4.7" },
    {
      src: image4,
      name: "Gourmet Burgers & Brews",
      city: "Austin, TX",
      rate: "4.6",
    },
    { src: image5, name: "Sushi Zen", city: "New York, NY", rate: "4.9" },
    {
      src: image6,
      name: "Mama Mia's Pizzeria",
      city: "Boston, MA",
      rate: "4.4",
    },
    {
      src: image7,
      name: "Spice House Indian Cuisine",
      city: "Los Angeles, CA",
      rate: "4.5",
    },
    {
      src: image8,
      name: "Sweet Dream Bakery",
      city: "Portland, OR",
      rate: "4.7",
    },
    {
      src: image9,
      name: "Café au Lait",
      city: "Montreal, QC, Canada",
      rate: "4.6",
    },
    {
      src: image10,
      name: "Global Fusion Kitchen",
      city: "Miami, FL",
      rate: "4.5",
    },
    { src: image11, name: "Spice & Sizzle", city: "New York, NY", rate: "4.9" },
    {
      src: image12,
      name: "Harvest Hoppers",
      city: "Portland, OR",
      rate: "4.6",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-4 gap-[2vw] py-[2vw]">
        {restaurants.map((value) => {
          return (
            <Link href="/restaurant/1">
              <div
                key={value.name}
                className="bg-white border cursor-pointer border-[#DDDDDD] drop-shadow-xl h-[24vw] w-[fit-content] p-[0.5vw] rounded-[1vw]"
              >
                <div className="relative">
                  <Image
                  draggable={false}
                    className="w-[20vw] mb-[1vw]"
                    src={value.src}
                    width={0}
                    height={0}
                    alt={value.name}
                  />
                  <div className="flex justify-between items-center w-full absolute top-0 p-[1vw]">
                    <p
                      className={`${SatoshiFont.className} text-white text-[1vw] bg-[#01B7E6] px-[0.3vw] w-[fit-content] font-bold rounded-[0.2vw]`}
                    >
                      Featured
                    </p>
                    <HeartIcon className="w-[2vw]" color="white" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className={`${SatoshiFont.className} text-[1.2vw] text-black font-bold`}
                    >
                      {value.name}
                    </p>
                    <p
                      className={`${SatoshiFont.className} text-[1.2vw] text-[#5E5E5E]`}
                    >
                      {value.city}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Image
                    draggable={false}
                      className="w-[1.5vw] mr-[0.2vw]"
                      src={star1}
                      width={0}
                      height={0}
                      alt="star1"
                    />
                    <span
                      className={`${SatoshiFont.className} text-[#222222] font-bold text-[1.2vw]`}
                    >
                      {value.rate}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
