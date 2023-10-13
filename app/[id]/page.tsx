/*
the Search component is pivotal for enabling users to search for word definitions and view relevant content. It demonstrates effective state management, loading feedback, and error handling, all of which are essential for a dictionary web application. Additionally, the responsive design ensures a user-friendly experience on various devices. Search result feedback, good or bad are displayed here.
*/
"use client";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateProvider";
import Aside from "./Aside";
import Article from "./Article";
import Nav from "./Nav";
import Fail from "./Fail";
import { useParams } from "next/navigation";

export default function Search() {
  const params = useParams();
  const id = params.id;
  const {
    selectedFont,
    searchData,
    isLoading,
    error,
    fetchSearchData,
  } = useContext(StateContext)!;

  useEffect(() => {
    fetchSearchData(String(id));
  }, [id]);

  return (
    <section
      className={`${selectedFont} text-[14px] grid grid-rows-[6rem,auto,3rem] grid-cols-[auto] p-4 gap-1 w-full`}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <>
          <div></div>
          <Fail />
          <div></div>
        </>
      ) : searchData ? (
        <>
          <Aside />
          <Article />
          <Nav />
        </>
      ) : null}
    </section>
  );
}

/* 
<p>Error: {error.message}</p>
*/
