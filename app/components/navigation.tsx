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
}: {
  t: ICommon;
  locale: Langs;
  setLocale: Dispatch<SetStateAction<Langs>>;
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
    <nav className="relative w-full flex-col items-end justify-evenly">
      <div className="w-full flex-row px-8">
        <span className="nav-link text-2xl sm:text-xl md:text-2xl">
          {t.menu.about}
        </span>
      </div>
      <div className="w-full flex-row px-8">
        <span className="nav-link text-2xl sm:text-xl md:text-2xl">
          {t.menu.work}
        </span>
      </div>
      <div className="w-full flex-row px-8">
        <span className="nav-link text-2xl sm:text-xl md:text-2xl">
          {t.menu.skills}
        </span>
      </div>
      <div className="w-full flex-row px-8">
        <span className="nav-link text-2xl sm:text-xl md:text-2xl">
          {t.menu.contact}
        </span>
      </div>
      <div className="absolute h-full w-full flex-col justify-evenly">
        <Link className="nav-link-container h-full w-full flex-row px-8" to="/">
          {" "}
        </Link>
        <Link
          className="nav-link-container h-full w-full flex-row px-8"
          to="/work"
        >
          {" "}
        </Link>
        <Link
          className="nav-link-container h-full w-full flex-row px-8"
          to="/skills"
        >
          {" "}
        </Link>
        <Link
          className="nav-link-container h-full w-full flex-row px-8"
          to="/contact"
        >
          {" "}
        </Link>
      </div>
      <Flag locale={locale} setLocale={setLocale} />
    </nav>
  );
}
