export default function Navbar({ nom }) {
  return (
    <header className="navbar">
      <a className="brand" href="#accueil">
        <img src="/logo.svg" alt="" width="36" height="36" />
        <span>{nom || 'Ma Garderie'}</span>
      </a>
      <nav aria-label="Navigation principale">
        <a href="#accueil">Accueil</a>
        <a href="#services">Services</a>
        <a href="#activites">Activités</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
