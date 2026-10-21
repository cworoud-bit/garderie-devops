import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

const reponses = {
  '/api/garderie': {
    nom: 'Ma Garderie',
    slogan: 'Un endroit où grandir en jouant',
    description: 'Description de test',
    adresse: 'Tunis',
    telephone: '000',
    horaires: '7h30 - 18h',
  },
  '/api/services': [{ id: 1, titre: 'Repas équilibrés', description: 'Test' }],
  '/api/activites': [{ id: 1, nom: 'Jardinage', jour: 'Mercredi' }],
};

beforeEach(() => {
  global.fetch = jest.fn((url) =>
    Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve(reponses[url]) })
  );
});

test('affiche le titre « Ma Garderie »', async () => {
  render(<Home />);
  expect(await screen.findByText('Ma Garderie')).toBeInTheDocument();
});

test('affiche les services venant du backend', async () => {
  render(<Home />);
  expect(await screen.findByText('Repas équilibrés')).toBeInTheDocument();
});
