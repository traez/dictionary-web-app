/*
the theme management code is significant because it enhances the user experience by providing a flexible and consistent theming system. Users can select their preferred theme, and it allows you to maintain a clean and organized codebase, improving your code's readability and maintainability.
*/
"use client";
import { ThemeProvider } from "next-themes";

type Props = {};

export const NextThemeProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider attribute="class">
			{children}
		</ThemeProvider>
	);
};