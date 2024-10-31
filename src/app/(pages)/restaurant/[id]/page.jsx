"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import restoSvg from "@/app/assets/restoSvg.svg";
import reviewIcon1 from "@/app/assets/reviewIcon1.svg";
import profile1 from "@/app/assets/profile-1.svg";


import nearSmall from "@/app/assets/nearSmall.svg";

import anotherCertified from "@/app/assets/anotherCertified.png";
import { SatoshiFont } from "@/app/fonts/SatoshiFont";
import ReviewsSection from "@/app/components/home/ReviewsSection";
import Rating from "@/app/components/home/Rating";
import MakeReservation from "@/app/components/home/MakeReservation";
import { createAccount } from "@near-relay/client";
import { StarIcon } from "@heroicons/react/24/solid";
import { handleLeaveReview } from "@/app/utils/accountActions";
import { NearContext } from "@/app/context";
import { CounterContract } from "@/app/config";
import { toast, Toaster } from "sonner";

export default function RestaurantId() {
  const [leaveReview, setLeaveReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [submited, setSubmited] = useState(false);

  const handleRating = (value) => setRating(value);
  const { wallet } = useContext(NearContext);

  const CONTRACT_ADDRESS = "trustybite.testnet";
  const RELAY_URL = "/api/relayer";
  const CREATE_ACCOUNT_URL = "/api/relayer/create-account";
  const NETWORK = "testnet";
  async function handleReview() {
    try {
      const load = toast.loading("Submitting...");
      const receipt = await createAccount(
        CREATE_ACCOUNT_URL,
        `trustybite-demo-${Math.round(
          Math.random() * (9999999 - 1) + 1
        )}.testnet`,
        { password: "lfg" }
      );
      console.log(JSON.stringify(receipt.transaction));

      const response = await handleLeaveReview("veggiehaven", comment);
      console.log("here", response);
      toast.success("Saved successfully");
      toast.dismiss(load);
      setHoverRating(0);
      setRating(0);
      setComment("");
      setSubmited(!submited);
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to submit review. Please try again.");
    }
  }

  useEffect(() => {
    if (1) {
      wallet
        .viewMethod({
          contractId: CounterContract,
          method: "get_reviews",
          args: {
            restaurant_id: "veggiehaven",
          },
        })
        .then((res) => {
          console.log("responseView", res);
          const array = [...res];
          const ext = { ...array.pop(), rating: rating };
          array.push(ext);
          setReviews(array.reverse());
        });
    }
  }, [submited]);
  return (
    <div className="bg-[#FAFAFA]">
      <Toaster richColors position="top-right" />
      <div className="mx-[6.5%] pt-[5vw]">
        <div className="grid grid-cols-8 gap-[2vw]">
          <div className="col-span-5">
            <Image
            draggable={false}
              className="w-full h-full object-cover rounded-[1vw] drop-shadow-xl"
              src={restoSvg}
              width={0}
              height={0}
              alt="restoSvg"
            />
          </div>
          <div className=" col-span-3 flex flex-col">
            <Rating />
            <MakeReservation />
          </div>
        </div>
        <div className="mt-[1.5vw] grid grid-cols-8 gap-[2vw]">
          <div className="col-span-5">
            <p
              className={`${SatoshiFont.className} text-black text-[1.5vw] font-bold`}
            >
              Veggie Haven, San Francisco, CA
            </p>
            <p
              className={`${SatoshiFont.className} text-black text-[1.2vw] mt-[1vw]`}
            >
              Veggie Haven, a beacon of plant-based dining in San Francisco,
              offers an eco-conscious menu that celebrates fresh, local
              ingredients. With dishes that range from globally-inspired to
              purely inventive, this restaurant proves that vegan food can be
              both delicious and diverse. Experience a meal where every bite
              supports sustainability, health, and the vibrant spirit of the
              city's food scene.
            </p>
          </div>
          <div className="col-span-3 bg-white border border-[#DDDDDD] px-[2.5vw] py-[2vw] rounded-[1vw]">
            <div className="flex items-center">
              <Image
              draggable={false}
                className="drop-shadow-xl w-[8vw] mr-[1vw]"
                src={anotherCertified}
                width={0}
                height={0}
                alt="another certified"
              />
              <div>
                <p
                  className={`${SatoshiFont.className} text-black text-[1.2vw] font-bold`}
                >
                  This place has been marked as TrustyBite Certified
                </p>
                <p className={`${SatoshiFont.className} text-black text-[1vw]`}>
                  TrustyBite Certified Restaurants show high level of hygiene
                  and Cleanless
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-[2.5vw] flex justify-between items-center">
          <div className="flex items-center">
            <p
              className={`${SatoshiFont.className} text-black font-bold text-[4vw] mr-[1vw]`}
            >
              4.7
            </p>
            <div>
              <p className={`${SatoshiFont.className} text-black font-bold`}>
                Very good
              </p>
              <p className={`${SatoshiFont.className} text-black `}>
                371 verified reviews
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <p
              className={`${SatoshiFont.className} text-black font-medium flex text-[1vw]`}
            >
              All data verified and stored on the{" "}
              <Image
              draggable={false}
                className="w-[3vw] mx-[0.2vw]"
                src={nearSmall}
                width={0}
                height={0}
                alt="near small"
              />
              Blockchain
            </p>
          </div>
          <button
            onClick={() => setLeaveReview(true)}
            className={`${SatoshiFont.className} text-white rounded-[0.3vw] bg-[#01B7E6] p-[0.5vw] text-[1.2vw] w-[12vw]`}
          >
            Leave a review
          </button>
        </div>
        {leaveReview && (
          <>
            <div className="my-[1vw] p-[1vw] flex gap-[1vw] items-center rounded-[1vw] borde-b border-[#AAAAAA] bg-[#F2F2F2]">
              <div className="self-start mt-[0.5vw]">
                <Image
                draggable={false}
                  className="w-[3vw]"
                  src={profile1}
                  width={0}
                  height={0}
                  alt="leav review"
                />
              </div>
              <div className="flex-grow">
                <textarea
                  rows={1}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  value={comment}
                  className="bg-[#F2F2F2] mx-[0.3vw] w-full resize-none overflow-hidden border-b border-gray-400 focus:outline-none focus:ring-0"
                  placeholder="Add a comment..."
                  onInput={(e) => {
                    e.target.style.height = "auto"; // Reset height to auto to allow shrinking
                    e.target.style.height = `${e.target.scrollHeight}px`; // Set height to scrollHeight
                  }}
                />
              </div>
              <div className="flex self-start mt-[0.5vw]">
                {[1, 2, 3, 4, 5].map((value) => (
                  <StarIcon
                    key={value}
                    className={`w-[1.3vw] cursor-pointer ${
                      value <= (hoverRating || rating)
                        ? "text-[#FDD836]"
                        : "text-[#AAAAAA]"
                    }`}
                    onClick={() => handleRating(value)}
                    onMouseEnter={() => setHoverRating(value)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-end my-[1vw]">
              <button
                onClick={() => {
                  setHoverRating(0);
                  setRating(0);
                  setComment("");
                }}
                className={`${SatoshiFont.className} text-black font-bold text-[1.2vw] underline mr-[1vw]`}
              >
                Cancel
              </button>
              <button
                onClick={handleReview}
                className={`${SatoshiFont.className} text-white rounded-[0.3vw] bg-[#01B7E6] p-[0.5vw] text-[1.2vw] w-[8vw]`}
              >
                Submit
              </button>
            </div>
          </>
        )}
        <ReviewsSection reviews={reviews} rating={rating} />
      </div>
    </div>
  );
}
