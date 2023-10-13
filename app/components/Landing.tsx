/*
the Landing component plays a central role in creating a strong first impression on your users. It effectively communicates the purpose of your dictionary web application and uses font styling to add a touch of personalization. It's an essential part of the overall user experience and sets the tone for the rest of your application. Shows beginning content when app loads. imported to Home Pages component.
*/
"use client";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateProvider";

export default function Landing() {
  const { selectedFont } = useContext(StateContext)!;

  return (
    <div className={`${selectedFont} text-[14px] flex flex-col justify-start items-center w-full h-full p-4 gap-4`}>
        <div className=" relative h-[10rem] w-[10rem]">
          <Image
            src="/images/icon-searchboy.png"
            alt=""
            fill
            sizes="(min-width: 400px) 100vw"
          />
        </div>
      <h1 className="text-black text-2xl">Search for a word</h1>
      <h2 className="text-base text-gray-500 text-center">Enter a word in the search box above to get its definition, synonyms and more.</h2>
    </div>
  );
}
