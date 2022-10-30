import { useState, useEffect } from 'react'
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Navigation from "./components/navigation";
import Terminal from "./components/terminal/terminal";

import tailwindcss from "~/styles/tailwind.css"

export function links() {
  return [
    { rel: "stylesheet", href: tailwindcss },
  ]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Jakub Vantuch",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false)
  const [mobileTerminalOpen, setMobileTerminalOpen] = useState(false)
  const [focusOnInput, setFocusOnInput] = useState(false)

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script src="xterm.js"></script>
      </head>
      <body className="h-screen">
        <div className="absolute t-01 l-01 bg-gray-900 border-r-2 border-r-sky-400 h-8 w-8 rotate-45"></div>
        <div className="absolute t-01 r-01 bg-gray-900 border-b-2 border-b-sky-400 h-8 w-8 rotate-45"></div>
        <div className="absolute b-01 l-01 bg-gray-900 border-t-2 border-t-sky-400 h-8 w-8 rotate-45"></div>
        <div className="absolute b-01 r-01 bg-gray-900 border-l-2 border-l-sky-400 h-8 w-8 rotate-45"></div>
        <div className="grid grid-cols-4 grid-rows-4 gap-4 h-screen p-4">
          <div className="col-span-4 row-span-4 sm:col-span-3 sm:row-span-3 border-2 border-sky-400">
            <Outlet />
          </div>
          <div className="hidden sm:grid row-span-4 border-2 border-sky-400 p-4">
            <div className="flex-row h-full">
              <Navigation />
            </div>
            <div className="flex-row justify-around h-full">
              kek
            </div>
          </div>
          <div className="hidden sm:grid col-span-3 border-2 border-sky-400 p-4 overflow-y-scroll" onClick={() => setFocusOnInput(true)}>
            <Terminal focusOnInput={focusOnInput}/>
          </div>
        </div>
        <div className={`kek block absolute bottom-0 sm:hidden w-full p-4`}>
          <div className="absolute mobile-menu-corner-tl bg-gray-900 border-r-2 border-r-sky-400"></div>
          <div className="absolute mobile-menu-corner-tr bg-gray-900 border-r-2 border-r-sky-400"></div>
          <div className="absolute mobile-menu-corner-br bg-gray-900 border-r-2 border-r-sky-400"></div>
          <div className="absolute mobile-menu-corner-bl bg-gray-900 border-r-2 border-r-sky-400"></div>
          <div className="p-4">
            {/* //Need to fix this to h-full somehow */}
            <div className={`grid content-end bg-gray-900 border-2 border-sky-400 ${mobileMenuOpen && 'h-more'}`}>
              <div className="grid">
                {mobileNavigationOpen && <Navigation />}
                {mobileTerminalOpen && <Terminal focusOnInput={focusOnInput}/>}
              </div>
              <div className="grid">
                <div className="flex-row justify-between">
                  <div className="flex-col w-3/12 h-20 bg-sky-400 justify-center items-center pr-1" onClick={() => {
                    setMobileMenuOpen(true)
                    mobileNavigationOpen && setMobileNavigationOpen(false)
                    setMobileTerminalOpen(true)
                  }}>
                    <img src="/svg/nav-terminal.svg" className="scale-75" />
                  </div>
                  {mobileMenuOpen && (
                    <div className="flex-col w-6/12 h-20 bg-sky-400 justify-center items-center" onClick={() => {
                      setMobileMenuOpen(false)
                      mobileNavigationOpen && setMobileNavigationOpen(false)
                      mobileTerminalOpen && setMobileTerminalOpen(false)
                    }}>
                      <img src="/svg/nav-cross.svg" className="scale-75" />
                    </div>
                  )}
                  <div className="flex-col w-3/12 h-20 bg-sky-400 justify-center items-center pl-1" onClick={() => {
                    setMobileMenuOpen(true)
                    mobileTerminalOpen && setMobileTerminalOpen(false)
                    setMobileNavigationOpen(true)
                  }}>
                    <img src="/svg/nav-menu.svg" className="scale-75" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
