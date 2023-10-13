/*
code is significant because it sets up the foundational structure and design principles for your entire web application. It encapsulates global styles, metadata, layout structure, theme management, and state management, promoting a cohesive and well-organized codebase. It helps ensure a positive user experience and facilitates the development and maintenance of your project.
*/
import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StateProvider from "./StateProvider";
import { NextThemeProviders } from "./NextThemeProviders";

export const metadata: Metadata = {
  title: "Dictionary Web App",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StateProvider>
      <html
        lang="en"
        className="w-full min-h-[750px]"
        suppressHydrationWarning
      >
        <body className="w-full min-h-[750px] flex flex-col justify-center items-center dark:bg-slate-700 dark:text-white">
          <NextThemeProviders>
            <main className="min-h-[750px] w-[375px] sm:w-[475px] md:w-[570px] lg:w-[665px] xl:w-[760px] 2xl:w-[950px] grid grid-rows-[2fr,minmax(545px,auto),1fr] grid-cols-[auto] gap-1 p-1">
              <Header />
              {children}
              <Footer />
            </main>
          </NextThemeProviders>
        </body>
      </html>
    </StateProvider>
  );
}
