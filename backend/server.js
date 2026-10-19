const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const garderie = {
  nom: "Les Petits Anges",
  slogan: "Un lieu sûr et joyeux pour vos enfants",
  description:
    "Une équipe bienveillante accompagne chaque enfant dans son éveil, ses jeux et ses premiers apprentissages, dans un cadre chaleureux et sécurisé.",
  adresse: "12 rue des Jasmins, Tunis",
  telephone: "+216 71 000 000",
  email: "contact@petitsanges.tn",
  horaires: "Du lundi au vendredi, de 7h30 à 18h00",
  ageAccueilli: "De 3 mois à 5 ans",
};

const services = [
  {
    id: 1,
    icone: "🍼",
    titre: "Garde de jour",
    description:
      "Accueil des enfants de 3 mois à 5 ans, du lundi au vendredi, avec repas et siestes encadrés.",
  },
  {
    id: 2,
    icone: "🎨",
    titre: "Ateliers d'éveil",
    description:
      "Dessin, musique, jeux éducatifs et activités manuelles pour développer la créativité des enfants.",
  },
  {
    id: 3,
    icone: "🥗",
    titre: "Repas équilibrés",
    description:
      "Des repas sains et variés, préparés chaque jour, en tenant compte des allergies de chaque enfant.",
  },
];

const activites = [
  { id: 1, nom: "Peinture et dessin", ageMin: 2, ageMax: 5, horaire: "Lundi 10h00", description: "Découverte des couleurs et des formes." },
  { id: 2, nom: "Éveil musical", ageMin: 1, ageMax: 4, horaire: "Mardi 9h30", description: "Chansons, rythmes et petits instruments." },
  { id: 3, nom: "Contes et lecture", ageMin: 2, ageMax: 5, horaire: "Mercredi 15h00", description: "Histoires animées pour développer le langage." },
  { id: 4, nom: "Jeux d'extérieur", ageMin: 3, ageMax: 5, horaire: "Jeudi 16h00", description: "Jeux de ballon et parcours dans le jardin." },
  { id: 5, nom: "Pâte à modeler", ageMin: 2, ageMax: 5, horaire: "Vendredi 10h30", description: "Activité manuelle pour la motricité fine." },
];

app.get("/api/garderie", (req, res) => {
  res.json(garderie);
});

app.get("/api/services", (req, res) => {
  res.json(services);
});

app.get("/api/activites", (req, res) => {
  res.json(activites);
});

app.listen(PORT, () => {
  console.log(`API garderie démarrée sur http://localhost:${PORT}`);
});