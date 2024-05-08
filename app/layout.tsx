'use client'
import { ThemeProvider } from "styled-components";
import { Inter } from "next/font/google";
import GlobalStyles from "./global"
import { darkTheme } from "@/styles/themes/dark";
import AppTemplate from "@/src/components/AppTemplate";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <html lang="en">
          <body className={inter.className}>
            <AppTemplate>
            {children}
            </AppTemplate>  
          </body>
        </html>
    </ThemeProvider>
  );
}
