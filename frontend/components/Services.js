export default function Services({ services = [], activites = [], garderie }) {
  return (
    <>
      <section id="services" className="section">
        <h2>Nos services</h2>
        <ul className="grid">
          {services.map((s) => (
            <li key={s.id} className="card">
              <h3>{s.titre}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="activites" className="section alt">
        <h2>Activités de la semaine</h2>
        <ul className="activites">
          {activites.map((a) => (
            <li key={a.id}>
              <strong>{a.jour}</strong> {a.nom}
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Nous trouver</h2>
        {garderie ? (
          <p>
            {garderie.adresse}<br />
            {garderie.telephone}<br />
            {garderie.horaires}
          </p>
        ) : (
          <p>Chargement…</p>
        )}
      </section>
    </>
  );
}
