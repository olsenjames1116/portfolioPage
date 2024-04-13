import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import styles from './Main.module.css';

// Represents the main content of the page.
const Main = () => {
  return (
    <main className={styles.main}>
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Main;
