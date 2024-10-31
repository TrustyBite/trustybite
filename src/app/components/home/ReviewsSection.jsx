"use client";

import { useState } from "react";
import reviewIcon1 from "@/app/assets/reviewIcon1.svg";
import profile1 from "@/app/assets/profile-1.svg";
import { FlagIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { SatoshiFont } from "@/app/fonts/SatoshiFont";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function ReviewsSection({ reviews, rating }) {
  const [visibleReviews, setVisibleReviews] = useState(5);

  const showMoreReviews = () => {
    setVisibleReviews((prevVisible) =>
      Math.min(prevVisible + 5, reviews.length)
    );
  };

  return (
    <div>
      {reviews.slice(0, visibleReviews).map((review, index) => (
        <div
          key={index}
          className="border-t border-[#112211]/25 flex justify-between py-[1vw]"
        >
          <div className="flex items-center">
            <Image className="w-[3vw]" src={profile1} width={0} height={0} alt="reviewIcon1" />
            <div className="px-[1.5vw]">
              <p className={`${SatoshiFont.className} text-[#112211]`}>
                {review.reviewer} |{" "}
                <span className="font-bold">{ rating === 0 ? `${Math.round(
                  Math.random() * (5 - 4) + 4
                )}.0`: `${rating}.0`}</span>
              </p>
              <p className={`${SatoshiFont.className} text-[#112211]`}>
                {review.content}
              </p>
            </div>
          </div>
          <FlagIcon className="w-[2vw]" color="#112211" />
        </div>
      ))}
      {visibleReviews < reviews.length && (
        <div className="flex justify-center pb-[1.5vw]">
          <button
            onClick={showMoreReviews}
            className={`${SatoshiFont.className} mt-[1vw] flex items-center text-[#112211] font-medium`}
          >
            See More
            <ChevronDownIcon className="w-[1.5vw]" />
          </button>
        </div>
      )}
    </div>
  );
}
