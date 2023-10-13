/*
the Fail component plays a crucial role in providing user feedback when a search doesn't yield any results. It ensures that users are not left in confusion and gives them clear directions on what to do next. This user-friendly approach is important for the overall user experience of your dictionary web application. renders on Search() Dynamic page component when word not in dictionary.
*/
import Image from "next/image";

export default function Fail() {

  return (
    <div className="flex flex-col justify-start items-center w-full h-full p-4 gap-4">
        <div className="relative h-[10rem] w-[10rem]">
          <Image
            src="/images/icon-fail.png"
            alt=""
            fill
            sizes="(min-width: 400px) 100vw"
          />
        </div>
      <h1 className="text-black text-2xl">No Definitions Found</h1>
      <h2 className="text-base text-gray-500 text-center">Sorry pal, we couldn&apos;t find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</h2>
    </div>
  );
}
