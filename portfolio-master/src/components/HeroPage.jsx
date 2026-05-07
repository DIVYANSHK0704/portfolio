import React, { useState, useEffect } from "react";
import "./HeroPage.css";
import profile from "../assets/corporate_headshot.png";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const TITLES = [
  "CREATIVE WEB DEVELOPER",
];

export default function HeroPage() {
  const [titleIndex, setTitleIndex] = useState(0);

  // Rotate title every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { scrollY } = useScroll();
  const imageY   = useTransform(scrollY, [0, 1000], [0, 200]);
  const textY    = useTransform(scrollY, [0, 1000], [0, -120]);
  const marqueeY = useTransform(scrollY, [0, 1000], [0, -60]);

  return (
    <section className="hero">

      {/* ── NAV INSIDE HERO ── */}
      <Navbar />

      {/* ── HERO CONTENT ── */}
      <div className="container hero-content">

        <motion.div
          className="hero-left"
          style={{ y: textY }}
        >
          <span className="tag">● AVAILABLE FOR FREELANCE</span>

          <h1>
            HEY I AM <br />
            <span>DIVYANSH</span>
          </h1>

          <p className="subtitle-label">I AM A</p>
          <div className="subtitle-switcher">
            <AnimatePresence mode="wait">
              <motion.p
                key={titleIndex}
                className="subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {TITLES[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="description">
            I help businesses build powerful web applications and AI-driven solutions. 
            From responsive websites to machine learning models, 
            I deliver scalable and efficient digital products.
          </p>
        </motion.div>

        <motion.div
          className="hero-right"
          style={{ y: imageY }}
        >
          <img src={profile} alt="profile" className="hero-image" />
        </motion.div>

      </div>

      {/* ── MARQUEE WITH PARALLAX ── */}
      <motion.div
        className="marquee-section"
        style={{ y: marqueeY }}
      >
        <div className="container marquee-container">
          <div className="marquee-track">

            <span className="outline-text">BEAT </span>
            <span>THE <b>ALGORITHM</b> • TRUST <b>YOURSELF</b> •</span>

            <span className="outline-text">BEAT </span>
            <span>THE <b>ALGORITHM</b> • TRUST <b>YOURSELF</b> •</span>

            <span className="outline-text">BEAT </span>
            <span>THE <b>ALGORITHM</b> • TRUST <b>YOURSELF</b> •</span>

          </div>
        </div>
      </motion.div>

    </section>
  );
}