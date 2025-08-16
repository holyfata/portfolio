import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import linkJSONData from "@/store/links.json";
import barJSONData from "@/store/bar.json";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "animate.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HolyFata's Portfolio",
  description: "A showcase of my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <div className="font-sans w-4xl mx-auto flex flex-col text-xl h-full">
          <header className="flex h-16 justify-center items-center border-b border-gray-200 px-4 shrink-0">
            <h1
              className="text-2xl font-semibold mr-10 cursor-pointer"
              style={{ fontFamily: "Stardom-Regular" }}
            >
              <Link href="/">HolyFata</Link>
            </h1>
            <div className="flex-1 flex items-center flex-row-reverse pr-4">
              <ul className="grid grid-cols-4 justify-items-center">
                {barJSONData.map((item, index) => {
                  const { name, path } = item;
                  return (
                    <li key={index} className="cursor-pointer px-4">
                      <Link href={path} className="hover:underline">
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <ul className="flex items-center gap-2">
                {linkJSONData.map((link, index) => {
                  const { name, iconUrl, jumpUrl } = link;
                  return (
                    <li
                      key={index}
                      className="cursor-pointer flex items-center justify-center"
                    >
                      <Link href={jumpUrl} target="_blank">
                        <Image
                          aria-hidden
                          src={iconUrl}
                          alt={name}
                          width={20}
                          height={20}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </header>
          <main className="flex flex-col pt-10 flex-1 px-4">{children}</main>
          <footer className="flex h-16 justify-center items-center border-t border-gray-200 px-4 py-4">
            <p className="text-sm text-gray-500">
              Made with ❤️ using Next.js and Tailwind CSS.
            </p>
          </footer>
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
