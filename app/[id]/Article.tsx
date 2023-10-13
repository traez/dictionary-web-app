/*
the Article component is fundamental for providing in-depth word meanings, part of speech information, and synonyms. It demonstrates effective state management, dynamic content generation, and user interaction features. It's a crucial part of your dictionary web application, helping users understand and explore the meanings and usage of words. imported to and part of Search() Dynamic page component.
*/
"use client";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateProvider";
import { useRouter } from "next/navigation";

export default function Article() {
  const { searchData } = useContext(StateContext)!;
  const router = useRouter();

  interface Meaning {
    partOfSpeech: string;
    definitions: { definition: string }[];
    synonyms: string[];
  }

  function extractMeaningsData(meanings: Meaning[]) {
    return meanings.map((meaning) => {
      const partOfSpeech = meaning.partOfSpeech;
      const definitions = meaning.definitions.map(
        (definition) => definition.definition
      );
      const synonyms = meaning.synonyms;

      return {
        partOfSpeech,
        definitions,
        synonyms,
      };
    });
  }

  const meaningsData = extractMeaningsData(searchData[0].meanings);

  const handleSynonymClick = (synonym: string) => {
    router.push(`/${synonym}`);
  };

  return (
    <div className="flex flex-col justify-center items-start gap-1 w-full">
      {meaningsData.map((meaning, index) => (
        <article
          key={index}
          className="w-full flex flex-col justify-center items-start gap-4"
        >
          <div className="flex flex-row justify-center items-center gap-2 w-full">
            <h2 className="font-bold">{meaning.partOfSpeech}</h2>
            <hr className="w-full" />
          </div>
          <h3 className=" text-gray-500">Meaning</h3>
          <ul className="list-disc text-darkpurple">
            {meaning.definitions.map((definition, definitionIndex) => (
              <li key={definitionIndex} className="ml-5">
                <span className="ml-5 text-black dark:text-white">
                  {definition}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-row justify-start items-center gap-4">
            <h4 className="text-gray-500">Synonyms</h4>
            <ul className="flex flex-row justify-start items-center gap-1 flex-wrap">
              {meaning.synonyms.map((synonym, synonymIndex) => (
                <li
                  key={synonymIndex}
                  className="text-darkpurple font-bold cursor-pointer hover:underline 
                  hover:text-darkblue"
                  onClick={() => handleSynonymClick(synonym)}
                >
                  {synonym}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
