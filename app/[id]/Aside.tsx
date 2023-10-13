/*
the Aside component enhances the user experience by providing critical word information and audio pronunciation. It demonstrates effective state management and error handling for audio playback. The addition of audio pronunciation is particularly valuable for a dictionary web application, as it aids in language learning and understanding word pronunciation. imported to and part of Search() Dynamic page component.
*/
"use client";
import Image from "next/image";
import { useState, useEffect, useContext, useRef } from "react";
import { StateContext } from "../StateProvider";

export default function Aside() {
  const { searchData } = useContext(StateContext)!;
  const audioUrl = searchData[0]?.phonetics[0]?.audio;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playbackError, setPlaybackError] = useState("");

  const playAudio = () => {
    if (audioUrl) {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          setPlaybackError("Audio playback failed.");
          console.error("Audio playback error:", error);
        });
      }
    } else {
      setPlaybackError("Audio URL is not available.");
    }
  }

  return (
    <aside className="flex flex-row justify-between items-center">
      <div>
        <h1 className="text-[2rem]">{searchData[0].word}</h1>
        <div className="italic text-base text-darkpurple">
          {searchData[0].phonetic}
        </div>
      </div>
      {playbackError && <div className="text-red-500">{playbackError}</div>}
      <div
        className="relative h-[48px] w-[48px] border-transparent hover:border-blue-500"
        onClick={playAudio}
      >
        <Image
          src="/images/icon-play.png"
          alt=""
          fill
          sizes="(min-width: 400px) 100vw"
          className="cursor-pointer border-transparent hover:border-blue-500 hover:border-[1px]"
        />
      </div>
      <audio ref={audioRef} src={audioUrl} />
    </aside>
  );
}
