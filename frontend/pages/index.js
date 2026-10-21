import Head from 'next/head';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';

async function load(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Erreur ${res.status}`);
  return res.json();
}

export default function Home() {
  const [garderie, setGarderie] = useState(null);
  const [services, setServices] = useState([]);
  const [activites, setActivites] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([load('/api/garderie'), load('/api/services'), load('/api/activites')])
      .then(([g, s, a]) => {
        setGarderie(g);
        setServices(s);
        setActivites(a);
      })
      .catch(() => setError('Impossible de charger les informations pour le moment.'));
  }, []);

  return (
    <>
      <Head>
        <title>Ma Garderie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar nom={garderie?.nom} />
      <main>
        {error && <p className="error" role="alert">{error}</p>}
        <Hero garderie={garderie} />
        <Services services={services} activites={activites} garderie={garderie} />
      </main>
    </>
  );
}
