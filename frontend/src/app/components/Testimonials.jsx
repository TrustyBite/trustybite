import React from "react";
import { SatoshiFont } from "../fonts/SatoshiFont";
import Image from "next/image";
import ElisaGrant from "@/app/assets/Elisa-Grant.svg";
import MichaelBennett from "@/app/assets/Michael-Bennett.svg";
import DorothyReynolds from "@/app/assets/Dorothy-Reynolds.svg";
import TheAndersons from "@/app/assets/The-Andersons.svg";
import SteveCarson from "@/app/assets/Steve-Carson.svg";
import EmmaRichardson from "@/app/assets/Emma-Richardson.svg";
import ThePatels from "@/app/assets/The-Patels.svg";
import stars from "@/app/assets/stars.svg";

export default function Testimonials() {
  const testimonials = [
    {
      src: ElisaGrant,
      name: "Elisa Grant",
      text: "Since discovering TrustyBite, dining out has become a stress-free experience. Knowing the freshness and hygiene scores before we go has made family dinners at 'The Green Fork' not just delicious but worry-free. My kids love it, and I love the peace of mind!",
    },
    {
      src: MichaelBennett,
      name: "Michael Bennett",
      text: "As a foodie, I was skeptical, but TrustyBite's insights convinced me. 'Urban Tasty' scored high on both freshness and hygiene, and the meal was impeccable. It's like having a chef's certification for every restaurant I explore!",
    },
    {
      src: DorothyReynolds,
      name: "Dorothy Reynolds",
      text: "Retirement means trying new places, but with my health in mind. TrustyBite's data on 'Cafe Harmony' was spot on - clean, fresh, and heartwarming. It's like bringing comfort food to another level with assurance.",
    },
    {
      src: TheAndersons,
      name: "The Andersons",
      text: "New parents, always on the lookout for a safe dining experience. TrustyBite's ratings at 'Fusion Delight' gave us the confidence to enjoy a date night out. The meal was fantastic, and little Emma loved it too!",
    },
    {
      src: SteveCarson,
      name: "Steve Carson",
      text: "Fitness is my life, and diet plays a big part. TrustyBite's insights into 'FitFoods' gave me the confidence that my post-workout meals are as clean as my training regimen. It's all about clean eating and clean living!",
    },
    {
      src: EmmaRichardson,
      name: "Emma Richardson",
      text: "TrustyBite rocks! Found 'The Vegan Hangout' and it was legit. The food's fresh, the vibe's cool, and knowing it's all clean? It's like, the best way to hang with friends without worrying about the rest.",
    },
    {
      src: ThePatels,
      name: "The Patels",
      text: "We're old school, but TrustyBite brought us into the digital age of dining. 'Old Town Eatery' not only tastes like home but feels like it too, thanks to the platform's transparency on hygiene and freshness.",
    },
  ];
  return (
    <div className="mx-[6.5%] my-[8vw]">
      <div>
        <p
          className={`${SatoshiFont.className} text-center text-black text-[4vw] font-bold`}
        >
          What people say <span className="text-[#01B7E6]">about us</span>
        </p>
        <p
          className={`${SatoshiFont.className} text-[2vw] text-center text-black`}
        >
          Trusted by Diners and Restaurants Alike
        </p>
      </div>
      {testimonials.map((value, idx) => {
        return (
          <div key={value.name} className="bg-white p-[2vw] rounded-[2vw] drop-shadow-xl flex w-[45vw] h-[20vw] ">
            <div>
              <Image
                className="w-[50vw]"
                src={value.src}
                width={0}
                height={0}
                alt="Elisa Grant"
              />
            </div>
            <div className="ml-[2vw]  flex flex-col gap-2">
              <div>
                <p
                  className={`${SatoshiFont.className} text-[1.8vw] text-black font-bold`}
                >
                  {value.name}
                </p>
              </div>
              <div>
                <p
                  className={`${SatoshiFont.className} text-black text-[1.2vw] font-medium`}
                >
                  {value.text}
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  className="mr-[1vw] w-[6vw]"
                  src={stars}
                  width={0}
                  height={0}
                  alt="stars"
                />
                <span
                  className={`${SatoshiFont.className} text-black text-[1vw]`}
                >
                  5.0 rating
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
