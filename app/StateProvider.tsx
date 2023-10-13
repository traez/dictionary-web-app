/*
 code is significant for your entire code base because it centralizes state management, data fetching, error handling, and routing. It ensures that these functionalities are well-organized and can be accessed by various components in your project. This organization and separation of concerns contribute to a more maintainable and scalable codebase, which is important for the long-term development and success of your project.
*/
"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

export const StateContext = createContext<StateContextType | undefined>(
  undefined
);

interface StateContextType {
  mounted: boolean;
  isChecked: boolean;
  selectedFont: string;
  searchTerm: string;
  searchData: any[]; 
  isLoading: boolean;
  error: any;
  setMounted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedFont: React.Dispatch<React.SetStateAction<string>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSearchData: React.Dispatch<React.SetStateAction<any[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<any>>;
  checkKey: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  fetchSearchData: (term: string) => Promise<void>;
}

interface StateProviderProps {
  children: ReactNode;
}

export default function StateProvider({ children }: StateProviderProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectedFont, setSelectedFont] = useState<string>("font-trebuchetMs");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchData, setSearchData] = useState<any[]>([]); 
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null); 

  const checkKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/${searchTerm}`);
    }
  };

  const fetchSearchData = async (term: string) => {
    
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`
      );
      if (response.ok) {
        const data = await response.json();
        setSearchData(data);
      } else {
        setError('Request failed with status: ' + response.status);
      }
    } catch (error) {
      setError(error);
      console.error('API request failed', error);
    } finally {
      setIsLoading(false);
      setSearchTerm("");
    }
  };
  

  return (
    <StateContext.Provider
      value={{
        mounted,
        isChecked,
        selectedFont,
        searchTerm,
        searchData,
        isLoading,
        error,
        setMounted,
        setIsChecked,
        setSelectedFont,
        setSearchTerm,
        setSearchData,
        setIsLoading,
        setError,
        checkKey,
        fetchSearchData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
