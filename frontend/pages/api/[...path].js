// Relaie /api/* vers le backend Express.
// BACKEND_URL est lue à l'exécution (docker-compose : http://backend:5000).
export default async function handler(req, res) {
  const target = process.env.BACKEND_URL || 'http://localhost:5000';
  const path = [].concat(req.query.path).join('/');
  try {
    const response = await fetch(`${target}/api/${path}`);
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(502).json({ error: 'Backend injoignable' });
  }
}
