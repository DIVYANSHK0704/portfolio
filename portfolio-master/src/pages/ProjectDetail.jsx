import { useParams, Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./ProjectDetail.css";

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
      "My personal developer portfolio built with React and Vite. Features a parallax hero, animated marquee, About page with skill bars, and a Work showcase.",

    longDescription:
      "This portfolio is built from scratch using React, Vite, and Framer Motion. It features a parallax scrolling hero section with an animated title switcher, a smooth marquee strip, and a glassmorphism navigation bar. The About page showcases skills, education, hobbies, and animated progress bars. The Work page displays projects in a responsive card grid with category filtering and individual detail pages.",

    tags: ["React", "Vite", "Framer Motion", "CSS", "React Router"],

    link: "https://github.com/DIVYANSHK0704",

    color: "#2563eb",

    highlights: [
      "Parallax hero with Framer Motion scroll transforms",
      "Glassmorphism nav with active section detection",
      "Animated About page with skill bars and hobby pills",
      "Responsive Work page with filter tabs and detail routing",
    ],
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = PROJECTS.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="detail-page">
        <Navbar />

        <div className="not-found">
          <h2>Project not found.</h2>

          <Link to="/work" className="back-btn">
            ← Back to Work
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Navbar />

      <div className="detail-breadcrumb">
        <button
          className="back-pill"
          onClick={() => navigate("/work")}
        >
          ← Back to Work
        </button>
      </div>

      <section className="detail-header">
        <div className="detail-meta">
          <span
            className="detail-category"
            style={{ color: project.color }}
          >
            <span
              className="chip-dot"
              style={{ background: project.color }}
            />

            {project.category}
          </span>

          <span className="detail-year">
            {project.year}
          </span>
        </div>

        <h1 className="detail-title">
          {project.title}
        </h1>

        <p className="detail-tagline">
          {project.description}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="detail-link-btn"
          style={{ background: project.color }}
        >
          View Project →
        </a>
      </section>

      <div className="detail-divider" />

      <section className="detail-grid">
        <div className="detail-card detail-card-wide">
          <div className="card-accent" />
          <div className="card-accent2" />

          <div className="detail-chip">
            <span className="chip-dot" />
            About the Project
          </div>

          <h3 className="detail-card-heading">
            Overview
          </h3>

          <p className="detail-card-text">
            {project.longDescription}
          </p>
        </div>

        <div className="detail-card">
          <div className="card-accent" />
          <div className="card-accent2" />

          <div className="detail-chip">
            <span className="chip-dot" />
            Key Features
          </div>

          <h3 className="detail-card-heading">
            Highlights
          </h3>

          <ul className="detail-highlights">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="highlight-item"
              >
                <span
                  className="highlight-num"
                  style={{ color: project.color }}
                >
                  0{i + 1}
                </span>

                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-card">
          <div className="card-accent" />
          <div className="card-accent2" />

          <div className="detail-chip">
            <span className="chip-dot" />
            Tech Stack
          </div>

          <h3 className="detail-card-heading">
            Technologies Used
          </h3>

          <div className="detail-tags">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="detail-tag"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="detail-card detail-card-wide detail-cta-card">
          <div className="cta-dots">
            <span />
            <span />
            <span />
          </div>

          <h2 className="cta-big-title">
            LIKE THIS{" "}
            <span className="orange">
              PROJECT?
            </span>
          </h2>

          <div className="cta-actions">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              View on GitHub
            </a>

            <button
              className="cta-secondary"
              onClick={() => navigate("/work")}
            >
              See All Work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}