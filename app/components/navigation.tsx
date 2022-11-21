import { useEffect } from "react";
import { Link } from "@remix-run/react";

export default function Navigation() {
  useEffect(() => {
    const navLinks = document.getElementsByClassName("nav-link")
    const navLinkContainers = document.getElementsByClassName("nav-link-container")
    for (let i = 0; i < navLinkContainers.length; i++) {
      navLinkContainers[i].addEventListener("mouseover", () => navLinks[i].classList.add("nav-link-hover"));
      navLinkContainers[i].addEventListener("mouseout", () => navLinks[i].classList.remove("nav-link-hover"));
    }
  }, [])

  return (
    <nav className="flex-col relative items-end justify-evenly w-full">
      <div className="flex-row w-full px-8">
        <span className="nav-link text-2xl">About</span>
      </div>
      <div className="flex-row w-full px-8">
        <span className="nav-link text-2xl">Work</span>
      </div>
      <div className="flex-row w-full px-8">
        <span className="nav-link text-2xl">Skills</span>
      </div>
      <div className="flex-row w-full px-8">
        <span className="nav-link text-2xl">Contact</span>
      </div>
      <div className="absolute flex-col justify-evenly h-full w-full">
        <Link className="nav-link-container flex-row h-full w-full px-8" to="/" />
        <Link className="nav-link-container flex-row h-full w-full px-8" to="/work" />
        <Link className="nav-link-container flex-row h-full w-full px-8" to="/skills" />
        <Link className="nav-link-container flex-row h-full w-full px-8" to="/contact" />
      </div>
    </nav>
  );
}
