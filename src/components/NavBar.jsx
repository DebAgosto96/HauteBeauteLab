import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    ["Home", "/"],
    ["Lashes", "/lashes"],
    ["Hair", "/hair-extensions"],
    ["Academy", "/academy"],
    ["Gallery", "/gallery"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* BRAND */}
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-haute">HAUTÉ</span>
          <span className="brand-beaute">BEAUTÉ</span>
          <span className="brand-lab">LAB</span>
        </Link>

        {/* DESKTOP / MOBILE NAVIGATION */}
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {links.map(([name, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {name}
            </NavLink>
          ))}

          <a
            className="mobile-book"
            href="YOUR_BOOKING_LINK"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Book Now
          </a>
        </nav>

        {/* RIGHT SIDE */}
        <div className="nav-actions">
          <a
            className="book-button"
            href="YOUR_BOOKING_LINK"
            target="_blank"
            rel="noreferrer"
          >
            Book Now
          </a>

          <button
            className={`menu-button ${menuOpen ? "menu-active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;