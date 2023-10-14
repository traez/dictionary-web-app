/*
the Header component plays a central role as it provides essential navigation and user interface elements. It ensures that your application is user-friendly, interactive, and visually appealing. Effective state management and integration with themes, fonts, and the search feature make this code critical for the overall functionality of your dictionary web application. All content at page Header declared here. Also visible across all pages of app as its positioned in layout component.
*/
"use client";
import { useState, useEffect, useContext } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { StateContext } from "../StateProvider";
import { useRouter } from "next/navigation";

export default function Header() {
  const {
    mounted,
    isChecked,
    setMounted,
    setIsChecked,
    selectedFont,
    setSelectedFont,
    searchTerm,
    setSearchTerm,
    checkKey,
    pushSearchTerm,
  } = useContext(StateContext)!;
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function handleCheckboxChange() {
    const newTheme = !isChecked ? "dark" : "light";
    setIsChecked((prevChecked) => !prevChecked);
    setTheme(newTheme);
  }

  function handleFontChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedFont(event.target.value);
  }

  return (
    <header
      className={`${selectedFont} text-[14px] grid grid-rows-[1fr,1fr] grid-cols-[auto] gap-2`}
    >
      <div className="flex flex-row justify-between items-center w-full px-2">
        <div className="cursor-pointer relative h-[2.5rem] w-[2rem]">
          <Image
            src="/images/icon-dictionary.png"
            alt=""
            fill
            sizes="(min-width: 400px) 100vw"
            onClick={() => router.push("/")}
          />
        </div>
        <menu className="grid grid-cols-[1fr,1fr] grid-rows-[auto] gap-[0.1rem] h-10">
          <select
            className="cursor-pointer"
            value={selectedFont}
            onChange={handleFontChange}
          >
            <option value="font-trebuchetMs">Trebuchet MS</option>
            <option value="font-autourOne">Autour One</option>
            <option value="font-monospace">Monospace</option>
          </select>
          <div className="grid grid-cols-[1fr,1fr] grid-rows-[auto] gap-1 border-l-gray-500 border-l-[1px]">
            <label
              htmlFor="Toggle1"
              className="inline-flex justify-end items-center cursor-pointer "
            >
              <span className="relative">
                <input
                  id="Toggle1"
                  type="checkbox"
                  className="hidden peer"
                  onChange={handleCheckboxChange}
                  checked={isChecked}
                />
                <div className="w-11 h-7 rounded-full shadow-inner bg-gray-300 peer-checked:bg-gray-500"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white"></div>
              </span>
            </label>
            <div className="flex flex-row justify-start items-center">
              <div className="relative h-7 w-7">
                <Image
                  src="/images/icon-sun-moon.png"
                  alt=""
                  fill
                  sizes="(min-width: 400px) 100vw"
                />
              </div>
            </div>
          </div>
        </menu>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className=" w-[90%] h-10 grid grid-cols-[6fr,1fr] grid-rows-[auto] gap-[0.1rem] px-2 py-1 bg-gray-300 rounded-md">
          <input
            placeholder="Search for any word..."
            className=" px-1 bg-gray-300 dark:text-blue-950"
            type="search"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
              checkKey(event);
            }}
          />
          <div className="flex flex-row justify-center items-center">
            <div
              onClick={pushSearchTerm}
              className="cursor-pointer hover:border-blue-500 hover:border-[1px] relative h-8 w-8"
            >
              <Image
                src="/images/icon-search.png"
                alt=""
                fill
                sizes="(min-width: 400px) 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
