import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = true;

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
