export default function Activites({ activites = [] }) {
  return (
    <section id="activites" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Activités pour les enfants</h2>
        {activites.length === 0 ? (
          <div className="alert alert-warning text-center">
            Aucune activité disponible pour le moment.
          </div>
        ) : (
          <div className="row g-4">
            {activites.map((activite) => (
              <div key={activite.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="card-title">{activite.nom}</h5>
                    <p className="card-text">{activite.description}</p>
                    <span className="badge text-bg-warning me-2">
                      {activite.ageMin}-{activite.ageMax} ans
                    </span>
                    <span className="badge text-bg-secondary">{activite.horaire}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}