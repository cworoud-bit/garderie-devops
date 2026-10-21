const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const garderie = {
  nom: 'Ma Garderie',
  slogan: 'Un endroit où grandir en jouant',
  description:
    "Ma Garderie accueille les enfants de 1 à 5 ans dans un cadre chaleureux et sécurisé, avec une équipe attentive à l'éveil et au bien-être de chacun.",
  adresse: '12 rue des Jasmins, Tunis',
  telephone: '+216 71 000 000',
  horaires: 'Du lundi au vendredi, de 7h30 à 18h00',
};

const services = [
  { id: 1, titre: 'Accueil à la journée', description: "Des journées complètes ou des demi-journées, selon vos besoins." },
  { id: 2, titre: 'Repas équilibrés', description: 'Déjeuner et goûter préparés chaque jour, adaptés aux allergies.' },
  { id: 3, titre: 'Éveil et jeux', description: 'Des ateliers pour apprendre en s’amusant, adaptés à chaque âge.' },
  { id: 4, titre: 'Sieste surveillée', description: 'Un espace calme avec un adulte présent pendant tout le repos.' },
];

const activites = [
  { id: 1, nom: 'Peinture et dessin', jour: 'Lundi' },
  { id: 2, nom: 'Éveil musical', jour: 'Mardi' },
  { id: 3, nom: 'Jardinage', jour: 'Mercredi' },
  { id: 4, nom: 'Contes et histoires', jour: 'Jeudi' },
  { id: 5, nom: 'Jeux d’extérieur', jour: 'Vendredi' },
];

app.get('/api/garderie', (req, res) => res.json(garderie));
app.get('/api/services', (req, res) => res.json(services));
app.get('/api/activites', (req, res) => res.json(activites));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, '0.0.0.0', () => console.log(`Backend démarré sur le port ${PORT}`));
