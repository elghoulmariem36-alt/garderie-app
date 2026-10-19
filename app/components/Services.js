export default function Services({ services = [] }) {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Nos services</h2>
        {services.length === 0 ? (
          <div className="alert alert-warning text-center">
            Aucun service disponible pour le moment.
          </div>
        ) : (
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 text-center shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="service-icon mb-3">{service.icone}</div>
                    <h5 className="card-title">{service.titre}</h5>
                    <p className="card-text">{service.description}</p>
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