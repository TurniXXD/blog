/* eslint-disable prettier/prettier */
import { useState, useEffect, useMemo } from "react";
import type {
  MetaFunction,
  LoaderFunction,
  LinksFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useTransition,
  useOutletContext,
} from "@remix-run/react";
import Navigation from "@components/navigation";
import Terminal from "@components/terminal/terminal";
import Stats from "@components/stats";
import { Matrix } from "@components/matrix";
import { Loader } from "@components/svg";
import remixImageStyles from "remix-image/remix-image.css";
import tailwindcss from "./styles/tailwind.css";
import globalcss from "./styles/global.css";
import sendgrid from "@sendgrid/mail";
import { en, cz } from "@locales/common";
import { Langs } from "@locales/config";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: remixImageStyles },
    { rel: "stylesheet", href: tailwindcss },
    { rel: "stylesheet", href: globalcss },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Jakub Vantuch",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async () => {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");
  return null;
};

interface IContext {
  locale: Langs;
}

export function useLocale() {
  return useOutletContext<IContext>();
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const [mobileTerminalOpen, setMobileTerminalOpen] = useState(false);
  const [locale, setLocale] = useState(Langs.en);
  const transition = useTransition();

  useEffect(() => {
    document
      .getElementById("terminal-container")
      ?.addEventListener("click", () =>
        document.getElementById("terminal-input")?.focus()
      );
  }, []);

  const t = useMemo(() => {
    const t = locale === Langs.en ? en : cz;
    return t;
  }, [locale]);

  return (
    <html lang={locale}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-screen">
        <div className="t-01 r-01 border-b-sky-400 bg-main absolute hidden h-8 w-8 rotate-45 border-b-2 sm:block"></div>
        <div className="b-01 l-01 border-t-sky-400 bg-main absolute hidden h-8 w-8 rotate-45 border-t-2 sm:block"></div>
        <div className="b-01 r-01 border-l-sky-400 bg-main absolute hidden h-8 w-8 rotate-45 border-l-2 sm:block"></div>
        <div className="grid h-screen grid-cols-4 grid-rows-4 gap-4 p-8 sm:p-4 2xl:grid-cols-5">
          <div className="col-span-4 row-span-4 gap-4 overflow-y-scroll mb-40 scrollbar-hide sm:col-span-3 sm:row-span-3 sm:mb-0 2xl:col-span-4">
            {transition.state === "loading" ? (
              <div className="grid h-full place-items-center">
                <Loader />
              </div>
            ) : (
              <Outlet context={{ locale }} />
            )}
          </div>
          <div className="border-sky-400 row-span-4 hidden border-2 sm:grid sm:grid-cols-1 sm:grid-rows-4">
            <div className="row-span-4 sm:grid lg:row-span-3">
              <div className="relative grid-rows-2 sm:grid">
                <div className="row-span-1 grid h-full">
                  <Navigation t={t} locale={locale} setLocale={setLocale} />
                </div>
                <div className="border-t-sky-400 row-span-1 grid h-full place-items-center border-t-2 p-6 lg:place-items-stretch 2xl:px-3 2xl:py-8 3xl:p-8">
                  <Stats t={t} />
                </div>
              </div>
            </div>
            <div className="row-span-1 hidden w-full px-8 pt-4 lg:grid">
              <Matrix />
            </div>
          </div>
          <div
            id="terminal-container"
            className="border-sky-400 col-span-3 hidden overflow-y-scroll border-2 p-4 scrollbar-hide sm:grid 2xl:col-span-4"
          >
            <Terminal t={t} />
          </div>
        </div>
        <div className="absolute bottom-0 block w-full p-4 sm:hidden">
          {mobileMenuOpen && (
            <>
              <div
                className={`mobile-menu-corner-tl border-r-sky-400 bg-main top-26 absolute border-r-2`}
              ></div>
              <div
                className={`mobile-menu-corner-tr border-r-sky-400 bg-main top-26 absolute border-r-2`}
              ></div>
            </>
          )}
          <div
            className={`mobile-menu-corner-br border-r-sky-400 bg-main absolute border-r-2`}
          ></div>
          <div
            className={`mobile-menu-corner-bl border-r-sky-400 bg-main absolute border-r-2`}
          ></div>
          <div className={`p-4 ${mobileMenuOpen && "pt-24"}`}>
            {/* //Need to fix this to h-full somehow */}
            <div
              className={`border-sky-400 bg-main grid content-end border-2 ${
                mobileMenuOpen && "h-mobile-menu"
              }`}
            >
              <div className="flex-row">
                {mobileMenuOpen && mobileNavigationOpen && (
                  <Navigation t={t} locale={locale} setLocale={setLocale} setMobileMenuOpen={setMobileMenuOpen} />
                )}
                {mobileMenuOpen && mobileTerminalOpen && <Terminal t={t} />}
              </div>
              <div className="grid">
                <div className="flex-row justify-between">
                  <div
                    className="h-20 w-3/12 flex-col items-center justify-center pr-1 bg-blue"
                    onClick={() => {
                      setMobileMenuOpen(true);
                      mobileNavigationOpen && setMobileNavigationOpen(false);
                      setMobileTerminalOpen(true);
                    }}
                  >
                    <img
                      src="/svg/nav-terminal.svg"
                      className="scale-75"
                      alt="icon-terminal"
                    />
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
                      <img
                        src="/svg/nav-cross.svg"
                        className="scale-75"
                        alt="icon-cross"
                      />
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
                    <img
                      src="/svg/nav-menu.svg"
                      className="scale-75"
                      alt="icon-menu"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
