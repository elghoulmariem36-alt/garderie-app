# garderie-app

Application web pour une garderie d'enfants : une landing page responsive (Next.js + Bootstrap 5) qui affiche dynamiquement les données fournies par une API REST (Node.js + Express).

## Présentation

Le projet est composé de deux parties :

- **Frontend** : site vitrine de la garderie « Les Petits Anges » avec une barre de navigation, une section d'accueil, la liste des services et la liste des activités.
- **Backend** : API REST qui expose les informations de la garderie, ses services et ses activités.

Le développement a été réalisé avec un workflow Git par branches : chaque étape a sa propre branche, un commit, puis une fusion dans `main`.

## Technologies utilisées

- Next.js (App Router, JavaScript)
- React
- Bootstrap 5
- Node.js
- Express
- CORS
- Git et GitHub

## Structure des dossiers

```
garderie-app/
├── app/                    # Frontend Next.js
│   ├── components/
│   │   ├── Navbar.js       # Barre de navigation
│   │   ├── Hero.js         # Section d'accueil
│   │   ├── Services.js     # Cartes des services
│   │   └── Activites.js    # Cartes des activités
│   ├── lib/
│   │   └── api.js          # Fonction d'appel à l'API Express
│   ├── globals.css
│   ├── layout.js
│   └── page.js             # Page principale
├── backend/                # API Express
│   ├── server.js           # Serveur et routes
│   └── package.json
├── public/
├── package.json
└── README.md
```

## Installation

Prérequis : Node.js (version 18 ou supérieure) et Git.

```bash
git clone https://github.com/elghoulmariem36-alt/garderie-app.git
cd garderie-app
```

Installer les dépendances du frontend :

```bash
npm install
```

Installer les dépendances du backend :

```bash
cd backend
npm install
cd ..
```

## Exécution

Il faut lancer le backend et le frontend dans deux terminaux séparés.

**Terminal 1 : backend (port 5000)**

```bash
cd backend
npm start
```

**Terminal 2 : frontend (port 3000)**

```bash
npm run dev
```

Ouvrir ensuite http://localhost:3000 dans le navigateur.

Si le backend est arrêté, le site reste accessible mais affiche des messages d'avertissement à la place des données.

L'adresse de l'API peut être modifiée avec la variable d'environnement `NEXT_PUBLIC_API_URL` (valeur par défaut : `http://localhost:5000`).

## Documentation des API

URL de base : `http://localhost:5000`

Toutes les routes utilisent la méthode `GET` et renvoient du JSON.

### GET /api/garderie

Informations générales de la garderie.

```json
{
  "nom": "Les Petits Anges",
  "slogan": "Un lieu sûr et joyeux pour vos enfants",
  "description": "Une équipe bienveillante accompagne chaque enfant...",
  "adresse": "12 rue des Jasmins, Tunis",
  "telephone": "+216 71 000 000",
  "email": "contact@petitsanges.tn",
  "horaires": "Du lundi au vendredi, de 7h30 à 18h00",
  "ageAccueilli": "De 3 mois à 5 ans"
}
```

### GET /api/services

Liste des services proposés.

```json
[
  {
    "id": 1,
    "icone": "🍼",
    "titre": "Garde de jour",
    "description": "Accueil des enfants de 3 mois à 5 ans..."
  }
]
```

### GET /api/activites

Liste des activités destinées aux enfants.

```json
[
  {
    "id": 1,
    "nom": "Peinture et dessin",
    "ageMin": 2,
    "ageMax": 5,
    "horaire": "Lundi 10h00",
    "description": "Découverte des couleurs et des formes."
  }
]
```

## Historique des branches

| Branche | Contenu |
|---|---|
| `feature/landing-page` | Landing page complète dans un seul fichier |
| `feature/components` | Extraction de Navbar, Hero et Services en composants |
| `feature/backend` | API Express (garderie, services, activités) |
| `feature/api-integration` | Connexion du frontend aux API |
| `docs/readme` | Rédaction du README |

Chaque branche a été fusionnée dans `main` avec un commit de fusion.