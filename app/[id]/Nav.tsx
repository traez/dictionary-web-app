/*
 the Nav component plays a crucial role in providing transparency about the source of word definitions. It demonstrates effective state management and allows users to explore the source of the word definitions when needed. Proper attribution and source information are important aspects of a dictionary application, ensuring credibility and trustworthiness. imported to and part of Search() Dynamic page component.
*/
"use client";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateProvider";

export default function Nav() {
  const { searchData } = useContext(StateContext)!;

  const openExternalLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <nav className="flex flex-col justify-center items-start">
      <h5 className=" text-sm">Source</h5>
      <div
        className="flex flex-row justify-start items-end gap-1 cursor-pointer hover:text-darkblue"
        onClick={() => openExternalLink(searchData[0].sourceUrls[0])}
      >
        <h6 className="underline text-xs">{searchData[0].sourceUrls[0]}</h6>
        <div className="relative h-[24px] w-[24px]">
          <Image
            src="/images/icon-new-window.png"
            alt=""
            fill
            sizes="(min-width: 400px) 100vw"
          />
        </div>
      </div>
    </nav>
  );
}
