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

    link: "https://portfolio-neon-nine-80.vercel.app/",

    color: "#2563eb",

    highlights: [
      "Parallax hero with Framer Motion scroll transforms",
      "Glassmorphism nav with active section detection",
      "Animated About page with skill bars and hobby pills",
      "Responsive Work page with filter tabs and detail routing",
    ],
  },

  {
    id: 3,
    title: "SecureAuth",
    category: "Full Stack",
    year: "2025",

    description:
      "A production-ready MERN stack authentication platform featuring JWT-based authentication, role-based authorization, secure user management, and modern security best practices.",

    longDescription:
      "SecureAuth is a full-stack authentication and user management application built with MongoDB, Express.js, React, and Node.js. The platform implements secure JWT authentication with role-based access control, allowing separate user and admin experiences. It includes password hashing with bcrypt, route protection, profile management, login activity tracking, and an admin dashboard for user monitoring. Security is strengthened through rate limiting, Helmet security headers, input validation, CORS protection, and centralized error handling. On the frontend, React Context manages authentication state, Axios interceptors handle token injection and session expiry, and features such as password strength indicators, toast notifications, and responsive design provide a polished user experience.",

    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "bcrypt",
      "Axios",
      "React Router",
      "Context API",
    ],

    link: "https://github.com/DIVYANSHK0704/PRODIGY_FS_01",

    color: "#16a34a",

    highlights: [
      "JWT authentication with 7-day secure session management",
      "Role-based access control with dedicated admin dashboard",
      "bcrypt password hashing with secure salting",
      "Rate limiting, Helmet, validation, and CORS protection",
      "Axios interceptors for automatic token handling and session recovery",
      "Password strength meter, profile editing, and login activity tracking",
    ],
  },

   {
    id: 4,
    title: "QuickEMS",
    category: "Full Stack",
    year: "2025",

    description:
      "A production-grade MERN Employee Management System featuring secure JWT authentication, role-based access control, attendance tracking, leave management, automated workflows, and payroll generation.",

    longDescription: `QuickEMS is a scalable Employee Management System built with MongoDB, Express.js, React, and Node.js to streamline workforce operations. The platform provides dedicated ADMIN and EMPLOYEE portals secured with JWT-based authentication, bcrypt password hashing, and role-based authorization. Employees can manage attendance, submit leave requests, and access payslips, while administrators can oversee employee records, approve leave requests, track attendance, and generate payroll reports.The system leverages Inngest for event-driven background processing, enabling automated attendance monitoring, auto-checkout reminders after work-hour thresholds, leave notification workflows, and daily absentee detection with scheduled email alerts. The frontend is built with React 19, React Context API, and Tailwind CSS v4, delivering a responsive and role-aware dashboard experience. Additional features include profile image uploads using Multer, soft-delete employee management, printable payslips, and robust REST APIs for seamless client-server communication.`,

    tags: [
      "MongoDB",
      "Express.js",
      "React 19",
      "Node.js",
      "JWT",
      "bcrypt",
      "Inngest",
      "Axios",
      "Tailwind CSS",
      "React Context API",
      "Multer",
      "Nodemailer",
      "REST API",
      "Role-Based Access Control",
    ],

    link: "https://github.com/DIVYANSHK0704/PRODIGY_FS_02",

    color: "#2563eb",

    highlights: [
      "Secure JWT authentication with role-based access control for Admin and Employee portals",
      "Automated Inngest workflows for attendance monitoring, leave notifications, and absentee reminders",
      "Complete attendance management with clock-in/out tracking and working-hours calculation",
      "Leave management system with approval, rejection, and status tracking workflows",
      "Payroll module with dynamic salary calculations and printable payslip generation",
      "Employee profile management with Multer-powered file uploads and soft-delete functionality",
      "Responsive React dashboard with protected routes and role-aware navigation",
      "RESTful API architecture with validation, middleware-based authorization, and secure data handling",
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