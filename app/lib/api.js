const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function getData(path, fallback) {
  try {
    const res = await fetch(`${API_URL}${path}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`Erreur ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(`Impossible de charger ${path} :`, error.message);
    return fallback;
  }
}