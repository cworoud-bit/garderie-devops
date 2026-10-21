export default function Hero({ garderie }) {
  return (
    <section id="accueil" className="hero">
      <div className="hero-text">
        <h1>{garderie ? garderie.slogan : 'Bienvenue'}</h1>
        <p>{garderie ? garderie.description : 'Chargement des informations…'}</p>
        <a className="button" href="#contact">Nous contacter</a>
      </div>
      <img className="hero-img" src="/hero.svg" alt="Enfants qui jouent avec des blocs de couleur" />
    </section>
  );
}
