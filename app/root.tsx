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
import { StatusBar, Matrix } from "./components/svg"

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

  useEffect(() => {
    const cpuStatusBar = document.getElementsByClassName("cpu")
    const memStatusBar = document.getElementsByClassName("mem")
    const netStatusBar = document.getElementsByClassName("net")
    const diskStatusBar = document.getElementsByClassName("disk")

    let cpuStatusBarIndex = 0,
      memStatusBarIndex = 0,
      netStatusBarIndex = 0,
      cpuStatusBarOffset = 7,
      diskStatusBarIndex = 0,
      memStatusBarOffset = 15,
      netStatusBarOffset = 10,
      diskStatusBarOffset = 20;

    // const cpuInterval = setInterval(increment(cpuStatusBar, cpuStatusBarIndex, cpuInterval), 250);

    // const cpuIntervalStart = setInterval(() => {
    //   setStartingStatusBarPosition(cpuStatusBar, cpuStatusBarIndex, 7)

    // }, 25);

    // const setStartingStatusBarPosition = (statusBar: HTMLCollectionOf<Element>, i: number, statusEnd: number) => {
    //   statusBar[i].classList.remove("hidden")
    //   statusBar[i].classList.add("block")
    //   i++
    //   if (i === statusBar.length - statusEnd) {
    //     clearInterval(cpuIntervalStart)
    //     i = 0

    //   };
    // }

    const cpuIntervalStart = setInterval(() => {
      cpuStatusBar[cpuStatusBarIndex].classList.remove("hidden")
      cpuStatusBar[cpuStatusBarIndex].classList.add("block")
      cpuStatusBarIndex++
      if (cpuStatusBarIndex === cpuStatusBar.length - cpuStatusBarOffset) {
        clearInterval(cpuIntervalStart);
        cpuStatusBarIndex = cpuStatusBar.length - cpuStatusBarOffset - 1
        cpuStatusBarOffset = 1
      }
    }, 25);

    const memIntervalStart = setInterval(() => {
      memStatusBar[memStatusBarIndex].classList.remove("hidden")
      memStatusBar[memStatusBarIndex].classList.add("block")
      memStatusBarIndex++
      if (memStatusBarIndex === memStatusBar.length - memStatusBarOffset) {
        clearInterval(memIntervalStart);
        memStatusBarIndex = memStatusBar.length - memStatusBarOffset - 1
        memStatusBarOffset = 1
      }
    }, 50);

    const netIntervalStart = setInterval(() => {
      netStatusBar[netStatusBarIndex].classList.remove("hidden")
      netStatusBar[netStatusBarIndex].classList.add("block")
      netStatusBarIndex++
      if (netStatusBarIndex === netStatusBar.length - netStatusBarOffset) {
        clearInterval(netIntervalStart);
        netStatusBarIndex = netStatusBar.length - netStatusBarOffset - 1
        netStatusBarOffset = 1
      }
    }, 25);

    const diskIntervalStart = setInterval(() => {
      diskStatusBar[diskStatusBarIndex].classList.remove("hidden")
      diskStatusBar[diskStatusBarIndex].classList.add("block")
      diskStatusBarIndex++
      if (diskStatusBarIndex === diskStatusBar.length - diskStatusBarOffset) {
        clearInterval(diskIntervalStart);
        diskStatusBarIndex = diskStatusBar.length - diskStatusBarOffset - 1
        diskStatusBarOffset = 1
      }
    }, 75);

    //   setInterval(() => {
    //     let y = Math.random()
    //     if (cpuStatusBarOffset === 1) {
    //       y = 1
    //       cpuStatusBarOffset = 0
    //     } y < 0.5 ? (y = 0) : (y = 1)

    //     if (y === 0) {
    //       cpuStatusBarIndex !== 0 && cpuStatusBarIndex--
    //       console.log("remove chuj" + cpuStatusBarIndex)
    //       for (let i = cpuStatusBarIndex; i < cpuStatusBar.length; i++) {
    //         cpuStatusBar[i]?.classList.remove("block")
    //         cpuStatusBar[i]?.classList.add("hidden")
    //       }
    //     } else if (y === 1) {
    //       cpuStatusBarIndex !== cpuStatusBar.length && cpuStatusBarIndex++
    //       console.log("add chuj" + cpuStatusBarIndex)
    //       for (let i = cpuStatusBarIndex; i > 0; i--) {
    //         //console.log(i)
    //         cpuStatusBar[i]?.classList.remove("hidden")
    //         cpuStatusBar[i]?.classList.add("block")
    //       }
    //     }

    //     console.log(y)
    //     console.log(cpuStatusBarIndex)
    //   }, 1000);
    // }, [])

    setInterval(() => {
      let y = Math.random()
      if (cpuStatusBarOffset === 1) {
        y = 1
        cpuStatusBarOffset = 0
      } y < 0.5 ? (y = 0) : (y = 1)

      if (y === 0) {
        cpuStatusBarIndex !== 0 && cpuStatusBarIndex--
        for (let i = cpuStatusBarIndex; i < cpuStatusBar.length; i++) {
          cpuStatusBar[i]?.classList.remove("block")
          cpuStatusBar[i]?.classList.add("hidden")
        }
      } else if (y === 1) {
        cpuStatusBarIndex !== cpuStatusBar.length && cpuStatusBarIndex++
        for (let i = cpuStatusBarIndex; i > 0; i--) {
          cpuStatusBar[i]?.classList.remove("hidden")
          cpuStatusBar[i]?.classList.add("block")
        }
      }
    }, 1000);

    setInterval(() => {
      let y = Math.random()
      if (memStatusBarOffset === 1) {
        y = 1
        memStatusBarOffset = 0
      } y < 0.5 ? (y = 0) : (y = 1)

      if (y === 0) {
        memStatusBarIndex !== 0 && memStatusBarIndex--
        for (let i = memStatusBarIndex; i < memStatusBar.length; i++) {
          memStatusBar[i]?.classList.remove("block")
          memStatusBar[i]?.classList.add("hidden")
        }
      } else if (y === 1) {
        memStatusBarIndex !== memStatusBar.length && memStatusBarIndex++
        for (let i = memStatusBarIndex; i > 0; i--) {
          memStatusBar[i]?.classList.remove("hidden")
          memStatusBar[i]?.classList.add("block")
        }
      }
    }, 1000);

    setInterval(() => {
      let y = Math.random()
      if (netStatusBarOffset === 1) {
        y = 1
        netStatusBarOffset = 0
      } y < 0.5 ? (y = 0) : (y = 1)

      if (y === 0) {
        netStatusBarIndex !== 0 && netStatusBarIndex--
        for (let i = netStatusBarIndex; i < netStatusBar.length; i++) {
          netStatusBar[i]?.classList.remove("block")
          netStatusBar[i]?.classList.add("hidden")
        }
      } else if (y === 1) {
        netStatusBarIndex !== netStatusBar.length && netStatusBarIndex++
        for (let i = netStatusBarIndex; i > 0; i--) {
          netStatusBar[i]?.classList.remove("hidden")
          netStatusBar[i]?.classList.add("block")
        }
      }
    }, 1000);

    setInterval(() => {
      let y = Math.random()
      if (diskStatusBarOffset === 1) {
        y = 1
        diskStatusBarOffset = 0
      } y < 0.5 ? (y = 0) : (y = 1)

      if (y === 0) {
        diskStatusBarIndex !== 0 && diskStatusBarIndex--
        for (let i = diskStatusBarIndex; i < diskStatusBar.length; i++) {
          diskStatusBar[i]?.classList.remove("block")
          diskStatusBar[i]?.classList.add("hidden")
        }
      } else if (y === 1) {
        diskStatusBarIndex !== diskStatusBar.length && diskStatusBarIndex++
        for (let i = diskStatusBarIndex; i > 0; i--) {
          diskStatusBar[i]?.classList.remove("hidden")
          diskStatusBar[i]?.classList.add("block")
        }
      }
    }, 1000);
  }, [])



  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-screen">
        <div className="hidden sm:block t-01 r-01 absolute h-8 w-8 rotate-45 border-b-2 border-b-sky-400 bg-gray-900"></div>
        <div className="hidden sm:block b-01 l-01 absolute h-8 w-8 rotate-45 border-t-2 border-t-sky-400 bg-gray-900"></div>
        <div className="hidden sm:block b-01 r-01 absolute h-8 w-8 rotate-45 border-l-2 border-l-sky-400 bg-gray-900"></div>
        <div className="grid h-screen grid-cols-4 2xl:grid-cols-5 grid-rows-4 gap-4 p-8 sm:p-4">
          <div className="row-span-4 gap-4 overflow-y-scroll scrollbar-hide col-span-3 2xl:col-span-4 sm:row-span-3">
            <Outlet />
          </div>
          <div className="row-span-4 grid-cols-1 grid-rows-5 hidden border-2 border-sky-400 sm:grid">
            <div className="h-full grid row-span-2">
              <Navigation />
            </div>
            <div className="h-full grid row-span-3 border-t-2 border-t-sky-400 p-8">
              <div className="flex-row justify-between">
                <span className="text-lg">CPU</span>
                <div className="pt-01"><StatusBar id="cpu" /></div>
              </div>
              <div className="flex-row justify-between">
                <span className="text-lg">MEM</span>
                <div className="pt-01"><StatusBar id="mem" /></div>
              </div>
              <div className="flex-row justify-between">
                <span className="text-lg">NET</span>
                <div className="pt-01"><StatusBar id="net" /></div>
              </div>
              <div className="flex-row justify-between">
                <span className="text-lg">DISK</span>
                <div className="pt-01"><StatusBar id="disk" /></div>
              </div>
              <div className="w-full"><Matrix /></div>
            </div>
          </div>
          <div
            className="col-span-3 2xl:col-span-4 hidden overflow-y-scroll border-2 border-sky-400 p-4 scrollbar-hide sm:grid"
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
              className={`grid content-end border-2 border-sky-400 bg-gray-900 ${mobileMenuOpen && "h-more"
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
