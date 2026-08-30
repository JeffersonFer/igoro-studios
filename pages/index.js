import styles from "../styles/Home.module.css";
import { LinkBar } from "../components/LinkBar";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img
          src="/igoroHome.jpg"
          alt="Logo IgoroStudios"
          className={styles.logo}
        />
      </div>

      <h1 className={styles.title}>IgoroStudios</h1>

      <h2 className={styles.subtitle}>COMING SOON</h2>

      <LinkBar />
    </div>
  );
}

export default Home;
