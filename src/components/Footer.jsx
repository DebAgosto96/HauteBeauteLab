import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">
          <p className="footer-eyebrow">
            HAUTÉ BEAUTÉ LAB
          </p>

          <h2>
            Beauty, made
            <br />
            <em>personal.</em>
          </h2>

          <p className="footer-brand-description">
            Personalized beauty guidance, curated resources,
            and elevated digital services — all from wherever
            you are.
          </p>
        </div>


        {/* EXPLORE */}
        <div className="footer-column">
          <h4>Explore</h4>

          <Link to="/consultations">
            Consultations
          </Link>

          <Link to="/personalized-plans">
            Beauty Plans
          </Link>

          <Link to="/guides">
            Beauté Library
          </Link>

          <Link to="/professionals">
            For Professionals
          </Link>

          <Link to="/about">
            About
          </Link>
        </div>


        {/* CONNECT */}
        <div className="footer-column">
          <h4>Connect</h4>

          <Link to="/contact">
            Contact Us
          </Link>

          <a href="tel:+10000000000">
            YOUR PHONE
          </a>

          <div className="footer-location">
            <span className="footer-status-dot"></span>

            <p>
              100% Virtual
              <small>
                Serving clients remotely
              </small>
            </p>
          </div>
        </div>


        {/* FOLLOW */}
        <div className="footer-column">
          <h4>Follow</h4>

          <a
            href="https://www.instagram.com/hautebeautelab?stkn=MWk1ajhieHY4bTJueQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            Instagram
            <span>↗</span>
          </a>

          <a
            href="https://www.facebook.com/share/1EnXZkx4z8/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            Facebook
            <span>↗</span>
          </a>

          <p className="footer-social-message">
            Follow the lab for beauty inspiration,
            resources, updates, and more.
          </p>
        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} HautéBeautéLab.
          All rights reserved.
        </p>

        <div className="footer-bottom-links">

          <Link to="/privacy">
            Privacy
          </Link>

          <Link to="/terms">
            Terms
          </Link>

          <Link to="/policies">
            Policies
          </Link>

          <Link to="/faq">
            FAQ
          </Link>

        </div>

      </div>
    </footer>
  );
}

export default Footer;