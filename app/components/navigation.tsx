import { Link } from "@remix-run/react";

export default function Navigation() {
  return (
    <nav className="flex-col items-end justify-around w-full">
      <Link className="flex-row h-full w-full px-8 items-center" to="/">
        <span className="text-2xl">About</span>
      </Link>
      <Link className="flex-row h-full w-full px-8 items-center" to="/work">
        <span className="text-2xl">Work</span>
      </Link>
      <Link className="flex-row h-full w-full px-8 items-center" to="/skills">
        <span className="text-2xl">Skills</span>
      </Link>
      <Link className="flex-row h-full w-full px-8 items-center" to="/contact">
        <span className="text-2xl">Contact</span>
      </Link>
    </nav>
  );
}
