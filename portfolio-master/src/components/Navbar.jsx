import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home",    type: "section", id: "home" },
  { label: "About",   type: "route",   to: "/about" },
  { label: "Work",    type: "route", to: "/work" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState("home");

  // Auto-highlight active section while scrolling (only on home page)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const ids = NAV_LINKS.filter((l) => l.type === "section").map((l) => l.id);
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((o) => o && o.disconnect());
  }, [location]);

  // Smooth scroll — navigates home first if on another page
  const scrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (link) => {
    if (link.type === "route") return location.pathname === link.to;
    return location.pathname === "/" && activeId === link.id;
  };

  return (
    <nav className="nav">
      <div className="nav-links">
        {NAV_LINKS.map((link) =>
          link.type === "route" ? (
            <Link
              key={link.to}
              to={link.to}
              className={isActive(link) ? "active" : ""}
            >
              {link.label}
            </Link>
          ) : (
            <button
              key={link.id}
              className={isActive(link) ? "active" : ""}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          )
        )}
      </div>
    </nav>
  );
}