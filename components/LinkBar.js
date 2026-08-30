import styles from "./LinkBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export function LinkBar() {
  return (
    <div className={styles.linkBar}>
      <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />

      <a
        href="https://www.instagram.com/vencyslao/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
      </a>

      <a
        href="https://www.youtube.com/@vencyslao"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
      </a>
    </div>
  );
}
