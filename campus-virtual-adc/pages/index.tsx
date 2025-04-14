import React from 'react';

export default function Home() {
  return (
    <div>
      <header style={styles.header}>
        <h1>Campus Virtual ADC</h1>
        <nav>
          <ul style={styles.navList}>
            <li><a href="#about">Acerca de</a></li>
            <li><a href="#courses">Cursos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main style={styles.main}>
        <section id="about">
          <h2>Acerca de</h2>
          <p>Bienvenido al Campus Virtual ADC, tu plataforma para aprender y crecer profesionalmente.</p>
        </section>
        <section id="courses">
          <h2>Cursos</h2>
          <p>Explora nuestra amplia gama de cursos diseñados para todos los niveles.</p>
        </section>
        <section id="contact">
          <h2>Contacto</h2>
          <p>¿Tienes preguntas? Contáctanos en <a href="mailto:info@campusvirtualadc.com">info@campusvirtualadc.com</a>.</p>
        </section>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2025 Campus Virtual ADC. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  main: {
    padding: '2rem',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    marginTop: '2rem',
  },
};