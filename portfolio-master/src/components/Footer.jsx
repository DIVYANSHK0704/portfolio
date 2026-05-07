import React, { useState } from "react";
import "./Footer.css";
import selflogo from "../assets/companylogo.png";
import { Link } from "react-router-dom";

import { FaAt, FaShareAlt, FaTimes } from "react-icons/fa";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-brand">

          <div className="logo">
            <img src={selflogo} alt="logo" />
            <h2>Divyansh.dev</h2>
          </div>

          <p>
            Dedicated to building digital products that combine stunning
            design with powerful technology.
          </p>

          <div className="socials">

            <a href="mailto:divyanshk324@gmail.com">
              <FaAt />
            </a>

            <button
              className="share-btn"
              onClick={() => {
                navigator.share({
                  title: "Divyansh Portfolio",
                  text: "Check out my developer portfolio",
                  url: window.location.href,
                });
              }}
            >
              <FaShareAlt />
            </button>

          </div>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/about">About Me</Link>
            </li>

            <li>
              <Link to="/work">Latest Works</Link>
            </li>
          </ul>

        </div>

        {/* CONTACT CTA */}
        <div className="footer-contact">

          <h3>Start a Conversation</h3>

          <p>
            Have a project in mind? Let's talk about how I can help you.
          </p>

          <button
            className="contact-btn"
            onClick={() => setShowPopup(true)}
          >
            Get In Touch
          </button>

        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2024 Divyansh Developer Portfolio. All rights reserved.
        </p>

      </div>

      {/* MODAL */}
      {showPopup && (
        <div className="contact-modal">

          <div className="contact-modal-content">

            {/* TOP */}
            <div className="modal-header">

              <h2>Connect With Me</h2>

              <button
                className="close-modal"
                onClick={() => setShowPopup(false)}
              >
                <FaTimes />
              </button>

            </div>

            {/* BODY */}
            <div className="modal-body">

              {/* EMAIL */}
              <a
                href="mailto:divyanshk324@gmail.com"
                className="contact-option"
              >
                <div className="contact-left">

                  <div className="contact-icon">
                    <FaAt />
                  </div>

                  <div>
                    <h3>Email</h3>
                    <p>divyanshk324@gmail.com</p>
                  </div>

                </div>

              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/divyansh-kumar-248a62332/"
                target="_blank"
                rel="noreferrer"
                className="contact-option"
              >
                <div className="contact-left">

                  <div className="contact-icon">
                    in
                  </div>

                  <div>
                    <h3>LinkedIn</h3>
                    <p>Connect professionally</p>
                  </div>

                </div>

              </a>

            </div>

            {/* FOOTER */}
            <div className="modal-footer">

              <button
                className="cancel-btn"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </footer>
  );
}