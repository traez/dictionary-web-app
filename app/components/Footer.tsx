/*
the Footer component plays an important role in providing essential information about your application, such as copyright and attribution. It also offers a link to your GitHub repository for further exploration. Additionally, it contributes to the visual consistency of your application by applying the selected font style. Overall, it adds professionalism and completeness to your web application's user interface. Also visible across all pages of app at bottom, as its positioned in layout component.
*/
"use client";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateProvider";

export default function Footer() {
  const { selectedFont } = useContext(StateContext)!;

  return (
    <footer className={`${selectedFont} text-[14px] flex flex-row justify-center items-center gap-2 text-sm`}>
      <a
        href="https://github.com/traez/dictionary-web-app"
        target="_blank"
        className=" hover:underline text-darkblue hover:text-darkpurple font-bold"
      >
        Dictionary Web App
      </a>
      <b>©2023 Trae Zeeofor</b>
    </footer>
  );
}
