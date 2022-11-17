import { Link } from "@remix-run/react";

export default function Navigation() {
  return (
    <nav className="flex-col items-end justify-around p-4">
      <div className="flex-row">
        <Link to="/">About</Link>
      </div>
      <div className="flex-row">
        <Link to="/work">Work</Link>
      </div>
      <div className="flex-row">
        <Link to="/skills">Skills</Link>
      </div>
      <div className="flex-row">
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
