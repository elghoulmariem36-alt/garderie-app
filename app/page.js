"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center fw-bold" href="#accueil">
            <span className="fs-3 me-2">🧸</span>
            Les Petits Anges
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
                <a className="nav-link" href="mailto:contact@petitsanges.tn">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header id="accueil" className="hero py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-4 fw-bold">Un lieu sûr et joyeux pour vos enfants</h1>
              <p className="lead my-4">
                Chez Les Petits Anges, une équipe bienveillante accompagne chaque enfant
                dans son éveil, ses jeux et ses premiers apprentissages, dans un cadre
                chaleureux et sécurisé.
              </p>
              <a href="#services" className="btn btn-warning btn-lg px-4">
                Découvrir nos services
              </a>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80"
                alt="Enfants qui jouent à la garderie"
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Nos services</h2>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="service-icon mb-3">🍼</div>
                  <h5 className="card-title">Garde de jour</h5>
                  <p className="card-text">
                    Accueil des enfants de 3 mois à 5 ans, du lundi au vendredi,
                    avec repas et siestes encadrés.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="service-icon mb-3">🎨</div>
                  <h5 className="card-title">Ateliers d'éveil</h5>
                  <p className="card-text">
                    Dessin, musique, jeux éducatifs et activités manuelles pour
                    développer la créativité des enfants.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="service-icon mb-3">🥗</div>
                  <h5 className="card-title">Repas équilibrés</h5>
                  <p className="card-text">
                    Des repas sains et variés, préparés chaque jour, en tenant
                    compte des allergies de chaque enfant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
