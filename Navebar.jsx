export default function Navbar({ setPage }) {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>🌱 AutoPlant</div>
      <div style={styles.menu}>
        <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }} style={styles.link}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setPage('features'); }} style={styles.link}>Features</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setPage('dashboard'); }} style={styles.link}>Dashboard</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setPage('history'); }}style={styles.link}>History</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setPage('about'); }}style={styles.link}>About</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setPage('contact'); }}style={styles.link}>Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#166534',
    width: '100%',
    height: '55px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '60px 40px',
    position: 'fixed',

    top: 0,
    left: 0,
  },
  logo: { color: 'white', fontWeight: 'bold', fontSize: '50px' },
  menu: { display: 'flex', gap: '50px' },
  link: { color: 'white', textDecoration: 'none', fontSize: '35px', fontWeight: '500' },
};