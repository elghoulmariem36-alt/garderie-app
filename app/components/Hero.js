export default function Hero() {
  return (
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
  );
}