import Theme from "config/styled";
import { Footer, Nav } from "components/layout";

function MyApp({ Component, pageProps }: any) {
  return (
    <Theme>
      <Nav />
      <div>
        <Component {...pageProps} />
        <Footer />
      </div>
    </Theme>
  );
}

export default MyApp;
