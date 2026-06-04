function About() {
  return (
    <main className="about-page">
      <section className="about-card">
        <div className="about-content">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#about-icon"></use>
          </svg>

          <h1 className="text-4xl font-bold text-blue-400">THIS IS About page</h1>
          <h2>About Us</h2>
          <p>Learn more about our mission and values</p>

          <ul>
            <li>Our Story</li>
            <li>Our Team</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default About;
