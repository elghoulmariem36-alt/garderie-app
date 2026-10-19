import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata = {
  title: "Les Petits Anges - Garderie d'enfants",
  description: "Garderie d'enfants : un lieu sûr, joyeux et éducatif.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}