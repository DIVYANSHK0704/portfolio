import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    let x = 0;
    const speed = 1;
    const totalWidth = el.scrollWidth / 2;
    let raf;
    const animate = () => {
      x -= speed;
      if (Math.abs(x) >= totalWidth) x = 0;
      el.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const skills = ["JS", "HTML", "REACT", "CSS", "NODE.JS", "FIGMA", "TAILWIND", "FIREBASE"];

  const hobbies = [
    { icon: "🎮", label: "Valorant" },
    { icon: "♟", label: "Chess" },
    { icon: "🎵", label: "90s–2010s Music" },
    { icon: "📱", label: "BGMI" },
    { icon: "📚", label: "Learning" },
  ];

  const bars = [
    { label: "Frontend Mastery", pct: 85 },
    { label: "Backend Logic", pct: 70 },
    { label: "UI / Design", pct: 78 },
  ];

  return (
    <div className="page">

      <Navbar />

      {/* ── HERO TITLE ── */}
      <section className="hero-title">
        <h1 className="pixel-title">ABOUT ME</h1>
      </section>

      {/* ── CARDS GRID ── */}
      <section className="cards-grid">

        {/* ABOUT ME — full width */}
        <div className="card card-wide">
          <div className="card-accent" />
          <div className="card-accent2" />
          <div className="chip" style={{fontSize:13}}><span className="chip-dot" />About me</div>
          <h3 className="card-heading" style={{fontSize:25}}>Full-Stack Developer</h3>
          <p style={{fontSize:20}}>
            I'm focused on building scalable, high-performance web applications.
            I specialize in React, Node.js, and modern web technologies, creating
            clean user interfaces backed by reliable systems.
          </p>
          <p style={{fontSize:20}}>
            I enjoy solving complex problems, optimizing performance, and
            transforming ideas into real products that deliver value. My goal is
            to build software that is functional, intuitive, and impactful.
          </p>
          <div className="stat-row">
            <div className="stat">
              <div className="stat-val">2+</div>
              <div className="stat-lbl">Years coding</div>
            </div>
            <div className="stat">
              <div className="stat-val">1</div>
              <div className="stat-lbl">Projects built</div>
            </div>
          </div>
        </div>

        {/* HOBBIES */}
        <div className="card">
          <div className="card-accent" />
          <div className="card-accent2" />
          <div className="chip" style={{fontSize:13}}><span className="chip-dot" />Hobbies</div>
          <h3 className="card-heading" style={{fontSize:25}}>Outside the IDE</h3>
          <p style={{fontSize:20}}>I stay creative and recharged through gaming, music, and learning every day.</p>
          <hr className="divider" />
          <div className="hobby-pills">
            {hobbies.map((h) => (
              <span key={h.label} className="hobby-pill">
                <span className="hobby-icon">{h.icon}</span>
                {h.label}
              </span>
            ))}
          </div>
        </div>

        {/* EDUCATION */}
        <div className="card">
          <div className="card-accent" />
          <div className="card-accent2" />
          <div className="chip" style={{fontSize:13}}><span className="chip-dot" />Education</div>
          <h3 className="card-heading" style={{fontSize:25}}>Academic Path</h3>
          <hr className="divider" />
          <div className="edu-item">
            <span className="edu-year">2024 – 2028</span>
            <span className="edu-title-text">Bachelor of Technology in CS</span>
            <span className="edu-sub">OM PRAKASH JINDAL UNIVERSITY</span>
          </div>
          <div className="edu-item">
            <span className="edu-year">2021 – 2022</span>
            <span className="edu-title-text">10th – Delhi Public School</span>
            <span className="edu-sub">Panvel, Mumbai</span>
          </div>
        </div>

        {/* SKILLS — full width */}
        <div className="card card-wide">
          <div className="card-accent" />
          <div className="card-accent2" />
          <div className="chip"><span className="chip-dot" />My skills</div>
          <h3 className="card-heading">Tech Stack</h3>
          <div className="tags">
            {skills.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
          <hr className="divider" />
          {bars.map((b) => (
            <div className="bar-row" key={b.label}>
              <div className="bar-label">
                <span>{b.label}</span>
                <span>{b.pct}%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${b.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-wrapper">
        <div className="marquee-track" ref={marqueeRef}>
          {[...Array(2)].map((_, i) => (
            <span key={i} className="marquee-inner">
              CREATIVITY <span className="dot">•</span> EXECUTION{" "}
              <span className="dot">•</span> SCALABILITY{" "}
              <span className="dot">•</span> INNOVATION{" "}
              <span className="dot">•</span> CREATIVITY{" "}
              <span className="dot">•</span> EXECUTION{" "}
              <span className="dot">•</span> SCALABILITY{" "}
              <span className="dot">•</span> INNOVATION{" "}
              <span className="dot">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-dots">
            <span /><span /><span />
          </div>
          <h2 className="cta-title">
            LET'S BUILD <span className="orange">SOMETHING</span> EPIC.
          </h2>
          <button className="cta-btn">GET IN TOUCH</button>
        </div>
      </section>

      <Footer />

    </div>
  );
}