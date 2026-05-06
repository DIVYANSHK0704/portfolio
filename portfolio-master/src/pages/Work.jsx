import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Work.css";

const PROJECTS = [
  {
    id: 1,
    title: "Task Manager",
    category: "Full Stack",
    year: "2024",

    description:
      "A full-stack task management app built with the MERN stack. Create, update, delete and organise tasks with a clean UI, user authentication, and real-time state updates.",

    longDescription:
      "Task Manager is a full-stack productivity application built on the MERN stack (MongoDB, Express, React, Node.js). It features secure JWT-based user authentication, allowing each user to manage their own personal task board. Tasks can be created, edited, marked complete, and deleted. The frontend is built with React and uses Context API for global state, while the Express/Node backend exposes a RESTful API connected to a MongoDB Atlas database. The UI is clean, responsive, and focused on speed.",

    tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],

    link: "https://github.com/DIVYANSHK0704",

    color: "#e85d20",

    featured: true,

    highlights: [
      "JWT-based secure authentication with protected routes",
      "Full CRUD operations — create, edit, complete, delete tasks",
      "RESTful API with Express and MongoDB Atlas backend",
      "Responsive React UI with Context API for state management",
    ],
  },

  {
    id: 2,
    title: "Portfolio Website",
    category: "Frontend",
    year: "2024",

    description:
      "My personal developer portfolio built with React and Vite. Features a parallax hero, animated marquee, About page with skill bars, and a Work showcase — the site you're looking at right now.",

    longDescription:
      "This portfolio is built from scratch using React, Vite, and Framer Motion. It features a parallax scrolling hero section with an animated title switcher, a smooth marquee strip, and a glassmorphism navigation bar. The About page showcases skills, education, hobbies, and animated progress bars. The Work page displays projects in a responsive card grid with category filtering and individual detail pages. The design uses a warm beige gradient background with a dark navy card system and orange accents throughout.",

    tags: ["React", "Vite", "Framer Motion", "CSS", "React Router"],

    link: "https://github.com/DIVYANSHK0704",

    color: "#2563eb",

    featured: true,

    highlights: [
      "Parallax hero with Framer Motion scroll transforms",
      "Glassmorphism nav with active section detection",
      "Animated About page with skill bars and hobby pills",
      "Responsive Work page with filter tabs and detail routing",
    ],
  },
];

const CATEGORIES = [
  "All",
  "Full Stack",
  "Frontend",
];

export default function Work() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const navigate = useNavigate();

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter(
          (p) => p.category === activeCategory
        );

  return (
    <div className="work-page">
      <Navbar />

      {/* ── HERO TITLE ── */}
      <section className="work-hero">
        <div className="work-hero-label">
          <span className="chip-dot" />
          MY PORTFOLIO
        </div>

        <h1 className="work-title">
          SELECTED
          <br />
          <span className="orange">
            WORKS
          </span>
        </h1>

        <p className="work-subtitle">
          A collection of projects built with
          passion, purpose, and precision.
        </p>
      </section>

      {/* ── FILTER TABS ── */}
      <div className="filter-bar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${
              activeCategory === cat
                ? "filter-active"
                : ""
            }`}
            onClick={() =>
              setActiveCategory(cat)
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── PROJECT GRID ── */}
      <section className="projects-grid">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() =>
              navigate(`/work/${project.id}`)
            }
          >
            <div
              className="card-top-bar"
              style={{
                background: project.color,
              }}
            />

            <div className="card-circle-1" />
            <div className="card-circle-2" />

            <div className="project-meta">
              <span
                className="project-category"
                style={{
                  color: project.color,
                }}
              >
                <span
                  className="chip-dot"
                  style={{
                    background:
                      project.color,
                  }}
                />

                {project.category}
              </span>

              <span className="project-year">
                {project.year}
              </span>
            </div>

            <h2 className="project-title">
              {project.title}
            </h2>

            <p className="project-desc">
              {project.description}
            </p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="project-tag"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="card-cta">
              <span className="view-label">
                View Details
              </span>

              <span className="view-arrow">
                →
              </span>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}