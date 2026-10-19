import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Activites from "./components/Activites";
import { getData } from "./lib/api";

export default async function Home() {
  const [garderie, services, activites] = await Promise.all([
    getData("/api/garderie", null),
    getData("/api/services", []),
    getData("/api/activites", []),
  ]);

  return (
    <>
      <Navbar nom={garderie?.nom} />
      <Hero garderie={garderie} />
      <Services services={services} />
      <Activites activites={activites} />
    </>
  );
}
