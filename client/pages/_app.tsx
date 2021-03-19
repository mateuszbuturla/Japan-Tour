import Theme from "config/styled";
import { Footer, Nav } from "components/layout";

function MyApp({ Component, pageProps }: any) {
  return (
    <Theme>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </Theme>
  );
}

export default MyApp;
