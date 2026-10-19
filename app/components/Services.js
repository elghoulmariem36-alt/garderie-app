export default function Services() {
  return (
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
  );
}