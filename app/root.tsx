import { useState, useEffect } from "react";
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
import Stats from "./components/stats"
import { Matrix } from "./components/matrix"
import Glow from './components/glow'

import remixImageStyles from "remix-image/remix-image.css";
import tailwindcss from "./styles/tailwind.css";
import globalcss from "./styles/global.css";

export function links() {
  return [
    { rel: "stylesheet", href: remixImageStyles },
    { rel: "stylesheet", href: tailwindcss },
    { rel: "stylesheet", href: globalcss },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Jakub Vantuch",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const [mobileTerminalOpen, setMobileTerminalOpen] = useState(false);

  useEffect(() => document.getElementById("terminal-container")?.addEventListener("click", () => document.getElementById("terminal-input")?.focus()), [])

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-screen">
        <div className="hidden sm:block t-01 r-01 absolute h-8 w-8 rotate-45 border-b-2 border-b-sky-400 bg-grey"></div>
        <div className="hidden sm:block b-01 l-01 absolute h-8 w-8 rotate-45 border-t-2 border-t-sky-400 bg-grey"></div>
        <div className="hidden sm:block b-01 r-01 absolute h-8 w-8 rotate-45 border-l-2 border-l-sky-400 bg-grey"></div>
        <div className="grid h-screen grid-cols-4 2xl:grid-cols-5 grid-rows-4 gap-4 p-8 sm:p-4">
          <div className="row-span-4 gap-4 overflow-y-scroll scrollbar-hide col-span-3 2xl:col-span-4 sm:row-span-3">
            <Outlet />
          </div>
          <div className="row-span-4 grid-cols-1 grid-rows-4 hidden border-2 border-sky-400 sm:grid">
            <div className="sm:grid row-span-3">
              <div className="sm:grid grid-rows-2">
                <div className="h-full grid row-span-1">
                  <Navigation />
                </div>
                <div className="h-full grid row-span-1 border-t-2 border-t-sky-400 p-8">
                  <Stats />
                </div>
              </div>
            </div>
            <div className="sm:grid row-span-1 w-full px-8 pt-4">
              <Matrix />
            </div>
          </div>
          <div id="terminal-container" className="col-span-3 2xl:col-span-4 hidden overflow-y-scroll border-2 border-sky-400 p-4 scrollbar-hide sm:grid">
            <Terminal />
          </div>
        </div>
        <div className={`kek absolute bottom-0 block w-full p-4 sm:hidden`}>
          <div className="mobile-menu-corner-tl absolute border-r-2 border-r-sky-400 bg-grey"></div>
          <div className="mobile-menu-corner-tr absolute border-r-2 border-r-sky-400 bg-grey"></div>
          <div className="mobile-menu-corner-br absolute border-r-2 border-r-sky-400 bg-grey"></div>
          <div className="mobile-menu-corner-bl absolute border-r-2 border-r-sky-400 bg-grey"></div>
          <div className="p-4">
            {/* //Need to fix this to h-full somehow */}
            <div
              className={`grid content-end border-2 border-sky-400 bg-grey ${mobileMenuOpen && "h-more"
                }`}
            >
              <div className="grid">
                {mobileNavigationOpen && <Navigation />}
                {mobileTerminalOpen && <Terminal />}
              </div>
              <div className="grid">
                <div className="flex-row justify-between">
                  <div
                    className="h-20 w-3/12 flex-col items-center justify-center bg-blue pr-1"
                    onClick={() => {
                      setMobileMenuOpen(true);
                      mobileNavigationOpen && setMobileNavigationOpen(false);
                      setMobileTerminalOpen(true);
                    }}
                  >
                    <img src="/svg/nav-terminal.svg" className="scale-75" />
                  </div>
                  {mobileMenuOpen && (
                    <div
                      className="h-20 w-6/12 flex-col items-center justify-center bg-blue"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        mobileNavigationOpen && setMobileNavigationOpen(false);
                        mobileTerminalOpen && setMobileTerminalOpen(false);
                      }}
                    >
                      <img src="/svg/nav-cross.svg" className="scale-75" />
                    </div>
                  )}
                  <div
                    className="h-20 w-3/12 flex-col items-center justify-center bg-blue pl-1"
                    onClick={() => {
                      setMobileMenuOpen(true);
                      mobileTerminalOpen && setMobileTerminalOpen(false);
                      setMobileNavigationOpen(true);
                    }}
                  >
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
