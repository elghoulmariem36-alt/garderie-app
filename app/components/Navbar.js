"use client";

import { useState } from "react";

export default function Navbar({ nom = "Les Petits Anges" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center fw-bold" href="#accueil">
          <span className="fs-3 me-2">🧸</span>
                 <span className="fs-3 me-2">🧸</span>
        {nom}
      </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            </li>
                        <li className="nav-item">
              <a className="nav-link" href="#activites" onClick={() => setMenuOpen(false)}>Activités</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto:contact@petitsanges.tn">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}