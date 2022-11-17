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
  const [focusOnInput, setFocusOnInput] = useState(false);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-screen">
        <div className="t-01 r-01 absolute h-8 w-8 rotate-45 border-b-2 border-b-sky-400 bg-gray-900"></div>
        <div className="b-01 l-01 absolute h-8 w-8 rotate-45 border-t-2 border-t-sky-400 bg-gray-900"></div>
        <div className="b-01 r-01 absolute h-8 w-8 rotate-45 border-l-2 border-l-sky-400 bg-gray-900"></div>
        <div className="grid h-screen grid-cols-4 grid-rows-4 gap-4 p-4">
          <div className="col-span-4 row-span-4 gap-4 overflow-y-scroll scrollbar-hide sm:col-span-3 sm:row-span-3">
            <Outlet />
          </div>
          <div className="row-span-4 hidden border-2 border-sky-400 sm:grid">
            <div className="h-full flex-row">
              <Navigation />
            </div>
            <div className="h-full flex-row justify-around"></div>
          </div>
          <div
            className="col-span-3 hidden overflow-y-scroll border-2 border-sky-400 p-4 scrollbar-hide sm:grid"
            onClick={() => setFocusOnInput(true)}
          >
            <Terminal focusOnInput={focusOnInput} />
          </div>
        </div>
        <div className={`kek absolute bottom-0 block w-full p-4 sm:hidden`}>
          <div className="mobile-menu-corner-tl absolute border-r-2 border-r-sky-400 bg-gray-900"></div>
          <div className="mobile-menu-corner-tr absolute border-r-2 border-r-sky-400 bg-gray-900"></div>
          <div className="mobile-menu-corner-br absolute border-r-2 border-r-sky-400 bg-gray-900"></div>
          <div className="mobile-menu-corner-bl absolute border-r-2 border-r-sky-400 bg-gray-900"></div>
          <div className="p-4">
            {/* //Need to fix this to h-full somehow */}
            <div
              className={`grid content-end border-2 border-sky-400 bg-gray-900 ${
                mobileMenuOpen && "h-more"
              }`}
            >
              <div className="grid">
                {mobileNavigationOpen && <Navigation />}
                {mobileTerminalOpen && <Terminal focusOnInput={focusOnInput} />}
              </div>
              <div className="grid">
                <div className="flex-row justify-between">
                  <div
                    className="h-20 w-3/12 flex-col items-center justify-center bg-sky-400 pr-1"
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
                      className="h-20 w-6/12 flex-col items-center justify-center bg-sky-400"
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
                    className="h-20 w-3/12 flex-col items-center justify-center bg-sky-400 pl-1"
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
