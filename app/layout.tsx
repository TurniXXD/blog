"use client"

import MobileControls from "./mobileControls"
import Link from "next/link"
import '../styles/globals.css';

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html>
      <head>
        <title>Blog</title>
      </head>
      <body className="h-screen">
        <div className="grid grid-cols-4 grid-rows-4 gap-4 h-screen p-4">
          <div className="col-span-4 row-span-4 sm:col-span-3 sm:row-span-3 border-2 border-sky-400">
            {children}
          </div>
          <div className="hidden sm:grid row-span-4 border-2 border-sky-400 p-4">
            <nav className="flex-col justify-around w-full">
              <div className="flex-row">
                <Link href="/">About</Link>
              </div>
              <div className="flex-row">
                <Link href="/work">Work</Link>
              </div>
              <div className="flex-row">
                <Link href="/skills">Skills</Link>
              </div>
              <div className="flex-row">
                <Link href="/contact">Contact</Link>
              </div>
            </nav>
          </div>
          <div className="hidden sm:grid col-span-3 border-2 border-sky-400 p-4">
            kek
          </div>
        </div>
        <MobileControls />
      </body>
    </html>
  );
}
