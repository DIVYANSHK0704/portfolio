import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiNextdotjs, SiGoogle } from "react-icons/si";

import "./ToolBox.css";

const tools = [
  { id: 1, name: "React.js", icon: <FaReact />, category: "frontend" },
  { id: 2, name: "Tailwind", icon: <SiTailwindcss />, category: "frontend" },
  { id: 3, name: "Next.js", icon: <SiNextdotjs />, category: "frontend" },

  { id: 4, name: "MongoDB", icon: <SiMongodb />, category: "backend" },
  { id: 5, name: "Node.js", icon: <FaNodeJs />, category: "backend" },

  { id: 6, name: "Figma", icon: <FaFigma />, category: "design" },
  { id: 7, name: "Google Stich", icon: <SiGoogle />, category: "design" }
];

export default function Toolbox() {

  const [filter, setFilter] = useState("frontend");

  const filteredTools = tools.filter(
    (tool) => tool.category === filter
  );

  return (
    <section className="toolbox">

      <div className="toolbox-header">

        <div>
          <h2>My Toolbox</h2>
          <p>The modern technologies I use to bring ideas to life.</p>
        </div>

        <div className="toolbox-tabs">

          <span
            className={filter === "frontend" ? "active" : ""}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </span>

          <span
            className={filter === "backend" ? "active" : ""}
            onClick={() => setFilter("backend")}
          >
            Backend
          </span>

          <span
            className={filter === "design" ? "active" : ""}
            onClick={() => setFilter("design")}
          >
            Design
          </span>

        </div>

      </div>

      <motion.div
        layout
        className="toolbox-grid"
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
      >

        <AnimatePresence mode="popLayout">

          {filteredTools.map((tool) => (

            <motion.div
              key={tool.id}
              className="tool-card"

              layout

              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}

              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14
              }}

              whileHover={{
                y: -8,
                scale: 1.05
              }}

            >

              <div className="tool-icon">
                {tool.icon}
              </div>

              <h4>{tool.name}</h4>

            </motion.div>

          ))}

        </AnimatePresence>

      </motion.div>

    </section>
  );
}