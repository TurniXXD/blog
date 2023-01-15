import type { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";
import { Link } from "@remix-run/react";
import type ICommon from "@locales/common/types";
import Flag from "@components/flag";
import type { Langs } from "@locales/config";

export default function Navigation({
  t,
  locale,
  setLocale,
  setMobileMenuOpen
}: {
  t: ICommon;
  locale: Langs;
  setLocale: Dispatch<SetStateAction<Langs>>;
  setMobileMenuOpen?: Dispatch<SetStateAction<boolean>>
}) {
  useEffect(() => {
    const navLinks = document.getElementsByClassName("nav-link");
    const navLinkContainers =
      document.getElementsByClassName("nav-link-container");
    for (let i = 0; i < navLinkContainers.length; i++) {
      navLinkContainers[i].addEventListener("mouseover", () =>
        navLinks[i].classList.add("nav-link-hover")
      );
      navLinkContainers[i].addEventListener("mouseout", () =>
        navLinks[i].classList.remove("nav-link-hover")
      );
    }
  }, []);

  return (
    <nav className="relative w-full flex-col justify-evenly gap-8 sm:items-end sm:gap-0">
      <div className="mx-auto flex-row px-4 sm:w-full lg:px-8">
        <span className="nav-link text-3xl sm:text-xl md:text-2xl">
          {t.menu.about}
        </span>
      </div>
      <div className="mx-auto flex-row px-4 sm:w-full lg:px-8">
        <span className="nav-link text-3xl sm:text-xl md:text-2xl">
          {t.menu.work}
        </span>
      </div>
      <div className="mx-auto flex-row px-4 sm:w-full lg:px-8">
        <span className="nav-link text-3xl sm:text-xl md:text-2xl">
          {t.menu.skills}
        </span>
      </div>
      <div className="mx-auto flex-row px-4 pb-8 sm:w-full sm:pb-0 lg:px-8">
        <span className="nav-link text-3xl sm:text-xl md:text-2xl">
          {t.menu.contact}
        </span>
      </div>
      <div className="absolute h-full w-full flex-col justify-evenly">
        <Link
          className="nav-link-container h-full w-full flex-row sm:px-4 lg:px-8"
          to="/"
          onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
        >
          {" "}
        </Link>
        <Link
          className="nav-link-container h-full w-full flex-row px-4 lg:px-8"
          to="/work"
          onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
        >
          {" "}
        </Link>
        <Link
          className="nav-link-container h-full w-full flex-row px-4 lg:px-8"
          to="/skills"
          onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
        >
          {" "}
        </Link>
        <Link
          className="nav-link-container h-full w-full flex-row px-4 lg:px-8"
          to="/contact"
          onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
        >
          {" "}
        </Link>
      </div>
      <div className="hidden sm:block">
        <Flag locale={locale} setLocale={setLocale} />
      </div>
    </nav>
  );
}
